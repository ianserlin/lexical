/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { EditorConfig, LexicalNode, LineBreakNode, NodeKey, SerializedTextNode, Spread, TabNode } from 'lexical';
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
import { ElementNode, TextNode } from 'lexical';
export declare const DEFAULT_CODE_LANGUAGE = "javascript";
type SerializedCodeHighlightNode = Spread<{
    highlightType: string | null | undefined;
}, SerializedTextNode>;
export declare const CODE_LANGUAGE_FRIENDLY_NAME_MAP: Record<string, string>;
export declare const CODE_LANGUAGE_MAP: Record<string, string>;
export declare function normalizeCodeLang(lang: string): string;
export declare function getLanguageFriendlyName(lang: string): string;
export declare const getDefaultCodeLanguage: () => string;
export declare const getCodeLanguages: () => Array<string>;
/** @noInheritDoc */
export declare class CodeHighlightNode extends TextNode {
    /** @internal */
    __highlightType: string | null | undefined;
    constructor(text: string, highlightType?: string | null | undefined, key?: NodeKey);
    static getType(): string;
    static clone(node: CodeHighlightNode): CodeHighlightNode;
    getHighlightType(): string | null | undefined;
    canHaveFormat(): boolean;
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: CodeHighlightNode, dom: HTMLElement, config: EditorConfig): boolean;
    static importJSON(serializedNode: SerializedCodeHighlightNode): CodeHighlightNode;
    exportJSON(): SerializedCodeHighlightNode;
    setFormat(format: number): this;
    isParentRequired(): true;
    createParentElementNode(): ElementNode;
}
export declare function $createCodeHighlightNode(text: string, highlightType?: string | null | undefined): CodeHighlightNode;
export declare function $isCodeHighlightNode(node: LexicalNode | CodeHighlightNode | null | undefined): node is CodeHighlightNode;
export declare function getFirstCodeNodeOfLine(anchor: CodeHighlightNode | TabNode | LineBreakNode): null | CodeHighlightNode | TabNode | LineBreakNode;
export declare function getLastCodeNodeOfLine(anchor: CodeHighlightNode | TabNode | LineBreakNode): CodeHighlightNode | TabNode | LineBreakNode;
export {};
