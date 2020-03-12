/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { SERVICE_URL } from '../util/constants'
import {
  Alert,
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import ControlPanel from '../components/ControlPanel'
import i18n from '../../../../i18n'
import axios from 'axios'
import { PageTitle, ProgressBar, TitleAndInfoModal } from '@kth/kth-kip-style-react-components'

@inject(['routerStore'])
@observer
class ChoiceOptions extends Component {
  state = {
    semester: this.props.routerStore.semester,
    dropdownOpen: false,
    chosen: {
      action: this.props.routerStore.memoEndPoint ? 'copy' : 'create',
      apiMemo: this.props.routerStore.memoEndPoint || '',
      newMemoName: '',
      newRounds: this.props.routerStore.rounds || []
    },
    alert: {
      type: '', // danger, success, warn
      isOpen: false,
      text: ''
    },
    firstLoad: true,
    infoBySemester: {} // this.props.infoBySemester.getUsedRounds(this.props.routerStore.semester)
  }

  courseCode = this.props.routerStore.courseCode

  langIndex = this.props.routerStore.langIndex

  langAbbr = i18n.isSwedish() ? 'sv' : 'en'

  allSemesters = this.props.routerStore.slicedTermsByPrevYear.shortSemesterList

  toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

  _filterOutUsedRounds = usedRounds => {
    const thisSemester =
      (this.allSemesters && this.allSemesters.find(({ term }) => term === this.state.semester)) ||
      {}
    return (
      (thisSemester &&
        thisSemester.rounds &&
        thisSemester.rounds.filter(r => !usedRounds.includes(r.ladokRoundId)).reverse()) ||
      []
    )
  }

  existingMemosForThisSemester = semester => {
    console.log(
      '************>>>>>>>>>>*>>>>>>*>*>*>*>*>*>*><*<*<*<>*>*>******* SERVICE_URL ',
      SERVICE_URL
    )
    return axios
      .get(`${SERVICE_URL.API}used-rounds/${this.courseCode}/${semester}`)
      .then(result => {
        if (result.status >= 400) {
          return 'ERROR-' + result.status
        }
        console.log('---------> api existingMemosForThisSemester', result.data)
        this.setState({
          firstLoad: false,
          infoBySemester: {
            // updates on semester change
            publishedMemos: result.data.publishedMemos,
            draftMemos: result.data.draftMemos,
            usedRounds: result.data.usedRounds,
            availableKoppsRoundsObj: this._filterOutUsedRounds(result.data.usedRounds),
            hasSavedDraft: result.data.usedRounds.length > 0
          }
        })
      })
      .catch(err => {
        if (err.response) {
          throw new Error(err.message)
        }
        throw err
      })
  }

  setAlarm = (type, textIndex, isOpen = true) => {
    const { alerts } = i18n.messages[this.langIndex]
    this.setState({
      alert: {
        type,
        isOpen,
        text: alerts[textIndex]
      }
    })
  }

  _uncheckRadio = () => {
    const { apiMemo } = this.state.chosen
    const memoElem = document.getElementById(apiMemo)
    if (apiMemo && memoElem && memoElem.checked) document.getElementById(apiMemo).checked = false
  }

  _uncheckCheckboxes = () => {
    const { newRounds } = this.state.chosen
    newRounds.map(ladokRoundId => {
      const checkboxId = 'new' + ladokRoundId
      document.getElementById(checkboxId).checked = false
    })
  }

  _sortedRoundsArray = (checked, value) => {
    const tmpRoundsArr = this.state.chosen.newRounds
    if (checked) tmpRoundsArr.push(value)
    else tmpRoundsArr.splice(tmpRoundsArr.indexOf(value), 1)
    return tmpRoundsArr.sort()
  }

  onChoiceActions = event => {
    const { checked, value, type } = event.target
    this.setState({ alert: { isOpen: false } })

    if (type === 'checkbox') {
      this._uncheckRadio()
      const newRounds = this._sortedRoundsArray(checked, value)
      const newMemoName = newRounds
        .map(ladokRoundId =>
          document.getElementById('new' + ladokRoundId).parentElement.textContent.trim()
        )
        .join(', ')
      console.log('newMemoName', newMemoName)
      this.setState({
        chosen: {
          action: 'create',
          apiMemo: '',
          newMemoName,
          newRounds
        }
      })
    } else {
      this._uncheckCheckboxes()
      this.setState(
        {
          chosen: {
            action: 'copy',
            apiMemo: value,
            newMemoName: '',
            newRounds: []
          }
        },
        this.setAlarm('info', 'warnReplacePm')
      )
    }
  }

  getDateFormat = (date, language) => {
    // move to helpers functions
    if (language === 'Svenska' || language === 'Engelska' || language === 1 || language === 'sv') {
      return date
    }
    const splitDate = date.split('-')
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
  }

  updateSearchPath = () => {
    // move to helpers functions
    const semesterParam = (this.state.semester && `semester=${this.state.semester}`) || ''
    const memoEndPoint =
      (this.state.chosen.apiMemo && `&memoEndPoint=${this.state.chosen.apiMemo}`) || ''
    this.props.history.push({
      pathname: this.props.history.location.pathname,
      search: `?${semesterParam}${memoEndPoint}` // &${rounds}
    })
  }

  onSubmitNew = () => {
    const { courseCode } = this
    const { semester, chosen } = this.state
    console.log('on submit chosen ', this.state)
    if (chosen.newRounds.length > 0 || chosen.apiMemo) {
      const body =
        chosen.action === 'create'
          ? {
              courseCode,
              memoName: chosen.newMemoName,
              ladokRoundIds: chosen.newRounds,
              memoEndPoint: courseCode + semester + '-' + chosen.newRounds.join('-'),
              semester
            }
          : { memoEndPoint: this.state.chosen.apiMemo }
      const url = `${SERVICE_URL.API}create-draft/${body.memoEndPoint}`

      axios
        .post(url, body)
        .then(result => {
          console.log('Submitted', result)
          const nextStepUrl = `${SERVICE_URL.courseMemoAdmin}${courseCode}/${semester}/${body.memoEndPoint}`
          window.location = nextStepUrl
        })
        .catch(error => {
          this.setAlarm('danger', 'errWhileSaving')
        })
    } else {
      this.setAlarm('danger', 'errNoChosen')
    }
    //   .then(() => callback())
  }

  render() {
    const { info, extraInfo, pages, pageTitles, buttons } = i18n.messages[this.langIndex]
    const { course } = this.props.routerStore.slicedTermsByPrevYear
    if (this.state.firstLoad && this.state.semester)
      this.existingMemosForThisSemester(this.state.semester)

    const { availableKoppsRoundsObj, hasSavedDraft, draftMemos } = this.state.infoBySemester
    console.log('SERVICE_URL infoBySemester ', SERVICE_URL.API, this.state.infoBySemester)
    return (
      <Container className="kip-container" style={{ marginBottom: '115px' }}>
        <Row>
          <PageTitle id="mainHeading" pageTitle={pageTitles.new}>
            <span>
              {this.courseCode +
                ' ' +
                course.title[this.langAbbr] +
                ' ' +
                course.credits +
                ' ' +
                (this.langAbbr === 'sv' ? course.creditUnitAbbr.sv : 'credits')}
            </span>
          </PageTitle>
        </Row>

        <ProgressBar active={1} pages={pages} />
        <Row className="w-100 my-0 mx-auto">
          <Alert color={this.state.alert.type} isOpen={!!this.state.alert.isOpen}>
            {this.state.alert.text || ''}
          </Alert>
        </Row>

        <Container className="First--Step--Choose--Parameters">
          <Row>
            <Col>
              <span>
                <TitleAndInfoModal
                  modalId="choose-semester"
                  titleAndInfo={info.chooseSemester}
                  btnClose={buttons.btnClose}
                />
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                  className="select-semester"
                >
                  <DropdownToggle caret>
                    {this.state.semester ? 'Vald termin: ' + this.state.semester : 'Välj termin'}
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.allSemesters &&
                      this.allSemesters.map(({ term }) => (
                        <DropdownItem
                          id={`itemFor-${term}`}
                          key={term}
                          onClick={() => {
                            this.setState(
                              { semester: term },
                              this.updateSearchPath,
                              this.existingMemosForThisSemester(term)
                            )
                          }}
                        >
                          {term}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </Dropdown>
              </span>
              <span style={this.state.semester ? { marginTop: '50' } : { display: 'none' }}>
                <TitleAndInfoModal
                  modalId="choose-course-round"
                  titleAndInfo={info.chooseRound}
                  btnClose={buttons.btnClose}
                />
                {hasSavedDraft && (
                  <>
                    <p>
                      <b>{info.chooseRound.existedDrafts}</b>
                    </p>
                    <form className="Existed--Memos--Options">
                      <span role="radiogroup" style={{ display: 'flex', flexDirection: 'column' }}>
                        {draftMemos.map(
                          // removed ...publishedMemos
                          ({ memoName, memoEndPoint }) => (
                            <label htmlFor={memoEndPoint} key={'draft' + memoEndPoint}>
                              <input
                                type="radio"
                                id={memoEndPoint}
                                name="chooseDraft"
                                key={'draft' + memoEndPoint}
                                value={memoEndPoint}
                                onClick={this.onChoiceActions}
                                defaultChecked={
                                  this.state.chosen.action === 'copy' &&
                                  memoEndPoint === this.state.chosen.apiMemo
                                }
                              />
                              {memoName}
                            </label>
                          )
                        )}
                      </span>
                    </form>
                  </>
                )}
                {availableKoppsRoundsObj && (
                  <>
                    <p>
                      <b>{info.chooseRound.availableRounds}</b>
                    </p>
                    <form className="Not--Used--Rounds--Options">
                      <span style={{ display: 'flex', flexDirection: 'column' }}>
                        {availableKoppsRoundsObj.map(
                          ({ firstTuitionDate, ladokRoundId, language, shortName }) => (
                            <label htmlFor={'new' + ladokRoundId} key={'new' + ladokRoundId}>
                              <input
                                type="checkbox"
                                id={'new' + ladokRoundId}
                                name="chooseNew"
                                key={'new' + ladokRoundId}
                                value={ladokRoundId}
                                onClick={this.onChoiceActions}
                                defaultChecked={false}
                              />
                              {/* Namegiving to new rounds which will be saved to api */}
                              {shortName
                                ? shortName + ' '
                                : `${
                                    extraInfo.courseShortSemester[
                                      this.state.semester.toString().match(/.{1,4}/g)[1]
                                    ]
                                  } 
                                ${
                                  this.state.semester.toString().match(/.{1,4}/g)[0]
                                }-${ladokRoundId} `}
                              {`(${extraInfo.labelStartDate} ${this.getDateFormat(
                                firstTuitionDate,
                                language[this.langAbbr]
                              )}, ${language[this.langAbbr]})`}
                            </label>
                          )
                        )}
                      </span>
                    </form>
                  </>
                )}
              </span>
            </Col>
          </Row>
        </Container>
        <ControlPanel hasSavedDraft={hasSavedDraft} onSubmit={this.onSubmitNew} />
      </Container>
    )
  }
}

export default ChoiceOptions
