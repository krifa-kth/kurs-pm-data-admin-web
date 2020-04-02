/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Editor } from '@tinymce/tinymce-react'
import i18n from '../../../../i18n'
import { Collapse } from '@kth/kth-kip-style-react-components'
import ContentHead from './ContentHead'
import VisibilityInfo from './VisibilityInfo'
import { context } from '../util/fieldsByType'

@inject(['routerStore'])
@observer
class EditorPerTitle extends Component {
  state = {
    isOpen: false,
    firstLoad: true
  }

  userLangIndex = this.props.routerStore.langIndex

  memoLangIndex = this.props.routerStore.memoLangAbbr === 'sv' ? 1 : 0

  updateMemoContent = editorContent => {
    this.props.onEditorChange(editorContent, this.props.contentId)
  }

  toggleVisibleInMemo = () => {
    this.props.onToggleVisibleInMemo(this.props.contentId)
  }

  onToggleVisibleEditor = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { memoData, defaultValues } = this.props.routerStore
    const { contentId, menuId, visibleInMemo } = this.props
    const { memoHeadings } = i18n.messages[this.memoLangIndex]
    const { sourceInfo } = i18n.messages[this.userLangIndex]
    const { type, openIfContent } = context[contentId]
    const contentForEditor = (memoData && memoData[contentId]) || ''
    if (
      this.state.firstLoad &&
      openIfContent &&
      (contentForEditor !== '' || defaultValues[contentId] !== '')
    )
      this.setState({ isOpen: true, firstLoad: false })

    return (
      <span id={menuId}>
        <ContentHead contentId={contentId} memoLangIndex={this.memoLangIndex} />
        <VisibilityInfo
          contentId={contentId}
          visibleInMemo={visibleInMemo}
          onToggleVisibleInMemo={this.toggleVisibleInMemo}
          isEditorOpen={this.state.isOpen}
          onToggleVisibleEditor={this.onToggleVisibleEditor}
        />
        {this.state.isOpen && (
          <span>
            <Collapse
              alt="Expand this"
              uLabel={contentId}
              color="white"
              buttonText="Visa vägledning"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: memoHeadings[contentId].help || '<p>Hjälptext som hjälper</p>'
                }}
              />
            </Collapse>
            <Editor
              id={'editorFor' + contentId}
              initialValue={
                (contentForEditor !== '' && contentForEditor) || defaultValues[contentId] || ''
              }
              init={{
                // min_height: 100,
                menubar: false,
                plugins: [
                  'advlist autolink autoresize autosave lists link image imagetools charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'table paste code help wordcount'
                ],
                language: i18n.isSwedish() ? 'sv_SE' : null,
                toolbar: `code | undo redo | formatselect | bold italic underline subscript superscript charmap |
                  searchreplace | image | link | restoredraft | fullscreen |
                  table | 
                  bullist numlist outdent indent | removeformat | help`,
                imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                autosave_interval: '60s',
                autosave_ask_before_unload: true,
                autosave_restore_when_empty: true,
                autosave_retention: '1m',
                block_formats: 'Paragraph=p; Header 4=h4'
              }}
              onEditorChange={this.updateMemoContent}
              onBlur={this.props.onBlur}
            />
          </span>
        )}

        {!this.state.isOpen &&
          /* isEditable && isRequired && empty */
          ((type && type === '1-edit' && (
            <span>
              <p>
                <i>{sourceInfo.nothingFetched[type]}</i>
              </p>
            </span>
          )) ||
            /* is included in memo, preview text without editor */
            (visibleInMemo && (
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    (contentForEditor !== '' && contentForEditor) ||
                    `<p><i>${sourceInfo.noInfoYet}</i></p>`
                }}
              />
            )) ||
            /* editor has content but is not yet included in pm */
            (contentForEditor !== '' && (
              <span>
                <p>
                  <i>{sourceInfo.notIncludedInMemoYet}</i>
                </p>
              </span>
            )))}
      </span>
    )
  }
}
export default EditorPerTitle
