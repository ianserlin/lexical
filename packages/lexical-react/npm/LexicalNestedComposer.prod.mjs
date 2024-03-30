/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{useCollaborationContext as e}from"@lexical/react/LexicalCollaborationContext";import{LexicalComposerContext as t,createLexicalComposerContext as r}from"@lexical/react/LexicalComposerContext";import*as o from"react";import{useRef as n,useContext as i,useMemo as l,useEffect as a}from"react";var s=function(e){const t=new URLSearchParams;t.append("code",e);for(let e=1;e<arguments.length;e++)t.append("v",arguments[e]);throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)};function c({initialEditor:c,children:p,initialNodes:d,initialTheme:f,skipCollabChecks:m}){const h=n(!1),u=i(t);null==u&&s(9);const[x,{getTheme:g}]=u,v=l((()=>{const e=f||g()||void 0,t=r(u,e);if(void 0!==e&&(c._config.theme=e),c._parentEditor=x,d)for(let e of d){let t=null,r=null;if("function"!=typeof e){const o=e;e=o.replace,t=o.with,r=o.withKlass||null}const o=c._nodes.get(e.getType());c._nodes.set(e.getType(),{exportDOM:o?o.exportDOM:void 0,klass:e,replace:t,replaceWithKlass:r,transforms:new Set})}else{const e=c._nodes=new Map(x._nodes);for(const[t,r]of e)c._nodes.set(t,{exportDOM:r.exportDOM,klass:r.klass,replace:r.replace,replaceWithKlass:r.replaceWithKlass,transforms:new Set})}return c._config.namespace=x._config.namespace,c._editable=x._editable,[c,t]}),[]),{isCollabActive:_,yjsDocMap:w}=e(),b=m||h.current||w.has(c.getKey());return a((()=>{b&&(h.current=!0)}),[b]),a((()=>x.registerEditableListener((e=>{c.setEditable(e)}))),[c,x]),o.createElement(t.Provider,{value:v},!_||b?p:null)}export{c as LexicalNestedComposer};