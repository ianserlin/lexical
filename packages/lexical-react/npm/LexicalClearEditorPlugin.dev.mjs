/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CLEAR_EDITOR_COMMAND, $getRoot, $getSelection, $createParagraphNode, COMMAND_PRIORITY_EDITOR } from 'lexical';
import { useLayoutEffect as useLayoutEffect$1, useEffect } from 'react';

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const useLayoutEffectImpl = CAN_USE_DOM ? useLayoutEffect$1 : useEffect;
var useLayoutEffect = useLayoutEffectImpl;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function ClearEditorPlugin({
  onClear
}) {
  const [editor] = useLexicalComposerContext();
  useLayoutEffect(() => {
    return editor.registerCommand(CLEAR_EDITOR_COMMAND, payload => {
      editor.update(() => {
        if (onClear == null) {
          const root = $getRoot();
          const selection = $getSelection();
          const paragraph = $createParagraphNode();
          root.clear();
          root.append(paragraph);
          if (selection !== null) {
            paragraph.select();
          }
        } else {
          onClear();
        }
      });
      return true;
    }, COMMAND_PRIORITY_EDITOR);
  }, [editor, onClear]);
  return null;
}

export { ClearEditorPlugin };