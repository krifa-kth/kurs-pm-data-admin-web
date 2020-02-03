import React from 'react'
import { TitleAndInfoModal } from '@kth/kth-kip-style-react-components'
import { context } from '../util/fieldsByType'
import i18n from '../../../../i18n'

const { memoHeadings, buttons, sourceInfo } = i18n.messages[1]

const ContentHead = ({ contentId }) => {
  const { header, body } = memoHeadings[contentId]
  const { source, isRequired } = context[contentId]
  // ${sourceInfo[source].details}
  const htmlInfo = `<p><i>${sourceInfo.mandatory[isRequired]}</i></p>
    ${sourceInfo[source].from}
    ${body}`
  return (
    <TitleAndInfoModal
      modalId={contentId}
      titleAndInfo={{ header, body: htmlInfo }}
      superscript={' ' + source || ''}
      btnClose={buttons.btnClose}
    />
  )
}

export default ContentHead
