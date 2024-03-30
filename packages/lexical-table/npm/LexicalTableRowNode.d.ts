/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { Spread } from 'lexical';
import { DOMConversionMap, DOMConversionOutput, EditorConfig, ElementNode, LexicalNode, NodeKey, SerializedElementNode } from 'lexical';
export type SerializedTableRowNode = Spread<{
    height?: number;
}, SerializedElementNode>;
/** @noInheritDoc */
export declare class TableRowNode extends ElementNode {
    /** @internal */
    __height?: number;
    static getType(): string;
    static clone(node: TableRowNode): TableRowNode;
    static importDOM(): DOMConversionMap | null;
    static importJSON(serializedNode: SerializedTableRowNode): TableRowNode;
    constructor(height?: number, key?: NodeKey);
    exportJSON(): SerializedTableRowNode;
    createDOM(config: EditorConfig): HTMLElement;
    isShadowRoot(): boolean;
    setHeight(height: number): number | null | undefined;
    getHeight(): number | undefined;
    updateDOM(prevNode: TableRowNode): boolean;
    canBeEmpty(): false;
    canIndent(): false;
}
export declare function convertTableRowElement(domNode: Node): DOMConversionOutput;
export declare function $createTableRowNode(height?: number): TableRowNode;
export declare function $isTableRowNode(node: LexicalNode | null | undefined): node is TableRowNode;
