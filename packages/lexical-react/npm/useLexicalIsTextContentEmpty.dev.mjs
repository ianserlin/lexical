/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { $isRootTextContentEmptyCurry } from '@lexical/text';
import { useLayoutEffect as useLayoutEffect$1, useEffect, useState } from 'react';

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
function useLexicalIsTextContentEmpty(editor, trim) {
  const [isEmpty, setIsEmpty] = useState(editor.getEditorState().read($isRootTextContentEmptyCurry(editor.isComposing(), trim)));
  useLayoutEffect(() => {
    return editor.registerUpdateListener(({
      editorState
    }) => {
      const isComposing = editor.isComposing();
      const currentIsEmpty = editorState.read($isRootTextContentEmptyCurry(isComposing, trim));
      setIsEmpty(currentIsEmpty);
    });
  }, [editor, trim]);
  return isEmpty;
}

export { useLexicalIsTextContentEmpty };
