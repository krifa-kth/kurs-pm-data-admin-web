/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Route } from 'react-router-dom'
import { StickyContainer, Sticky } from 'react-sticky'

import EditorPerTitle from '../components/Editor'
import { context, sections } from '../util/fieldsByType'
import axios from 'axios'
import SideMenu from '../components/SideMenu'
import i18n from '../../../../i18n'
import { PageTitle, ProgressBar } from '@kth/kth-kip-style-react-components'
import TitleAndInfo from '../components/TitleAndInfo'

@inject(['routerStore'])
@observer
class Start extends Component {
  state = this.props.routerStore.memoData

  isApiExisted = !this.props.routerStore.memoData

  koppsFreshData = this.props.routerStore.koppsFreshData

  courseCode = this.props.routerStore.courseCode

  semester = this.props.routerStore.semester

  componentDidMount() {
    this.scrollIntoView()
  }

  handleEditorChange = (editorContent, contentHeader) => {
    this.setState({
      [contentHeader]: editorContent
    })
    console.log('Content was updated:', this.state)
  }

  handleConfirm = () => {
    const { courseCode, semester } = this
    const start = {
      // It will be needed at the stage when we get 'fresh' data from Kopps
      _id: courseCode + semester,
      courseCode,
      semester
    }
    const body = this.isApiExisted
      ? this.state
      : { ...start, ...this.props.routerStore.koppsFreshData, ...this.state }

    console.log('Content is submited, preparing to save changes:', this.state)
    return axios
      .post(
        '/kursinfoadmin/kurs-pm-data/internal-api/' + this.courseCode + '/' + this.semester,
        body
      ) // this.props.routerStore.doUpsertItem(body, 'SF1624', '20191')
      .then(() => console.log('Success handleConfirm'))
      .catch(error => console.log('Error handleConfirm', error))
  }

  toggleViewMode = () => {
    this.setState(state => ({ singleMode: !state.singleMode }), this.scrollIntoView)
  }

  scrollIntoView = () => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  renderSingleView = ({ location }) => {
    const { koppsFreshData } = this.props.routerStore

    const sectionId = location.hash.substr(1)
    const section = context[sectionId]

    if (!section) return null

    if (!section.isFromSyllabus)
      return (
        <>
          <h2>{section.title}</h2>
          <EditorPerTitle id={sectionId} onEditorChange={this.handleEditorChange} />
        </>
      )

    const text = section.kopps ? (
      // eslint-disable-next-line react/no-danger
      <p dangerouslySetInnerHTML={{ __html: koppsFreshData[section.kopps] }} />
    ) : (
      <p />
    )

    return (
      <>
        <h2>{section.title}</h2>

        <p>{text}</p>
      </>
    )
  }

  renderScrollView = () => {
    const { koppsFreshData } = this.props.routerStore
    const { header } = i18n.messages[1]

    return sections.map(section => (
      <span key={section.id}>
        <h2 id={section.id} key={'header-' + section.id}>
          {section.title}
        </h2>
        {section.content.map(apiTitle =>
          context[apiTitle].isFromSyllabus ? (
            <span id={apiTitle} key={apiTitle}>
              <TitleAndInfo shortTitle={apiTitle} title={header[apiTitle]} />
              <span dangerouslySetInnerHTML={{ __html: koppsFreshData[context[apiTitle].kopps] }} />
            </span>
          ) : (
            <EditorPerTitle id={apiTitle} key={apiTitle} onEditorChange={this.handleEditorChange} />
          )
        )}
      </span>
    ))
  }

  render() {
    const { pages } = i18n.messages[1]
    const progress = 2 // TODO: Change progress as a state
    const { title, credits } = this.koppsFreshData

    return (
      <Container>
        <Row>
          <PageTitle
            id="mainHeading"
            className="step-2-title"
            pageTitle={pages[progress - 1].title}
          >
            <span>{this.courseCode + ' ' + title + ' ' + credits + ' hp'}</span>
          </PageTitle>
          <Col lg="2">
            <Button
              onClick={this.toggleViewMode}
              color="info"
              size="sm"
              style={{ marginTop: '1em' }}
            >
              {this.state.singleMode ? 'Switch to Scroll View' : 'Switch to Single View'}
            </Button>
          </Col>
        </Row>
        <ProgressBar active={2} pages={pages} />
        <StickyContainer>
          <Row>
            <Col lg="4">
              <Sticky>
                {({ style }) => (
                  <SideMenu id="mainMenu" style={{ ...style, ...{ paddingTop: '30px' } }} />
                )}
              </Sticky>
            </Col>
            <Col lg="8">
              {this.state.singleMode ? (
                <Route render={this.renderSingleView} />
              ) : (
                this.renderScrollView()
              )}
              <Button onClick={this.handleConfirm} color="success" style={{ float: 'right' }}>
                Spara
              </Button>
            </Col>
          </Row>
        </StickyContainer>
      </Container>
    )
  }
}

export default Start
