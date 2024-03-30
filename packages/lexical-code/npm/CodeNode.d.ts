/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMConversionMap, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, ParagraphNode, RangeSelection, SerializedElementNode, Spread, TabNode } from 'lexical';
import type { CodeHighlightNode } from '@lexical/code';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-objectivec.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-swift.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-cpp.js';
import { ElementNode } from 'lexical';
export type SerializedCodeNode = Spread<{
    language: string | null | undefined;
}, SerializedElementNode>;
/** @noInheritDoc */
export declare class CodeNode extends ElementNode {
    /** @internal */
    __language: string | null | undefined;
    static getType(): string;
    static clone(node: CodeNode): CodeNode;
    constructor(language?: string | null | undefined, key?: NodeKey);
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: CodeNode, dom: HTMLElement, config: EditorConfig): boolean;
    exportDOM(editor: LexicalEditor): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    static importJSON(serializedNode: SerializedCodeNode): CodeNode;
    exportJSON(): SerializedCodeNode;
    insertNewAfter(selection: RangeSelection, restoreSelection?: boolean): null | ParagraphNode | CodeHighlightNode | TabNode;
    canIndent(): false;
    collapseAtStart(): boolean;
    setLanguage(language: string): void;
    getLanguage(): string | null | undefined;
}
export declare function $createCodeNode(language?: string | null | undefined): CodeNode;
export declare function $isCodeNode(node: LexicalNode | null | undefined): node is CodeNode;
