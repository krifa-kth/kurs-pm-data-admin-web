'use strict'

/**
 * Declares all of our different controllers and exposes them
 * with some sweet names.
 */

module.exports = {
  System: require('./systemCtrl'),
  MemoContent: require('./memoCtrl'),
  ChangePublished: require('./changePublishedCtrl'),
  ChoiceOptions: require('./choiceOptionsCtrl'),
  PreviewContent: require('./previewCtrl')
}
