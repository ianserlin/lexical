/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{useLexicalComposerContext as e}from"@lexical/react/LexicalComposerContext";import{useLexicalNodeSelection as t}from"@lexical/react/useLexicalNodeSelection";import{mergeRegister as r}from"@lexical/utils";import{createCommand as n,DecoratorNode as o,$applyNodeReplacement as i,$isNodeSelection as c,$getSelection as a,$getNodeByKey as l,CLICK_COMMAND as u,COMMAND_PRIORITY_LOW as m,KEY_DELETE_COMMAND as s,KEY_BACKSPACE_COMMAND as p}from"lexical";import*as f from"react";import{useCallback as d,useEffect as x}from"react";const y=n("INSERT_HORIZONTAL_RULE_COMMAND");function O({nodeKey:n}){const[o]=e(),[i,f,y]=t(n),O=d((e=>{if(i&&c(a())){e.preventDefault();const t=l(n);if(E(t))return t.remove(),!0}return!1}),[i,n]);return x((()=>r(o.registerCommand(u,(e=>{const t=o.getElementByKey(n);return e.target===t&&(e.shiftKey||y(),f(!i),!0)}),m),o.registerCommand(s,O,m),o.registerCommand(p,O,m))),[y,o,i,n,O,f]),x((()=>{const e=o.getElementByKey(n);null!==e&&(e.className=i?"selected":"")}),[o,i,n]),null}class g extends o{static getType(){return"horizontalrule"}static clone(e){return new g(e.__key)}static importJSON(e){return C()}static importDOM(){return{hr:()=>({conversion:h,priority:0})}}exportJSON(){return{type:"horizontalrule",version:1}}exportDOM(){return{element:document.createElement("hr")}}createDOM(){return document.createElement("hr")}getTextContent(){return"\n"}isInline(){return!1}updateDOM(){return!1}decorate(){return f.createElement(O,{nodeKey:this.__key})}}function h(){return{node:C()}}function C(){return i(new g)}function E(e){return e instanceof g}export{C as $createHorizontalRuleNode,E as $isHorizontalRuleNode,g as HorizontalRuleNode,y as INSERT_HORIZONTAL_RULE_COMMAND};