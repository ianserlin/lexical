/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import{$isTextNode as e,$isElementNode as t,$getCharacterOffsets as n,$isRootNode as o,$getNodeByKey as l,$getPreviousSelection as r,$createTextNode as s,$isRangeSelection as i,$getRoot as c,$isRootOrShadowRoot as f,$hasAncestor as u,$isLeafNode as g,$setSelection as a,$getAdjacentNode as d,$isDecoratorNode as p,$isLineBreakNode as h}from"lexical";const m=new Map;function _(e){let t=e;for(;null!=t;){if(t.nodeType===Node.TEXT_NODE)return t;t=t.firstChild}return null}function y(e){const t=e.parentNode;if(null==t)throw new Error("Should never happen");return[t,Array.from(t.childNodes).indexOf(e)]}function T(t,n,o,l,r){const s=n.getKey(),i=l.getKey(),c=document.createRange();let f=t.getElementByKey(s),u=t.getElementByKey(i),g=o,a=r;if(e(n)&&(f=_(f)),e(l)&&(u=_(u)),void 0===n||void 0===l||null===f||null===u)return null;"BR"===f.nodeName&&([f,g]=y(f)),"BR"===u.nodeName&&([u,a]=y(u));const d=f.firstChild;f===u&&null!=d&&"BR"===d.nodeName&&0===g&&0===a&&(a=1);try{c.setStart(f,g),c.setEnd(u,a)}catch(e){return null}return!c.collapsed||g===a&&s===i||(c.setStart(u,a),c.setEnd(f,g)),c}function x(e,t){const n=e.getRootElement();if(null===n)return[];const o=n.getBoundingClientRect(),l=getComputedStyle(n),r=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),s=Array.from(t.getClientRects());let i,c=s.length;s.sort(((e,t)=>{const n=e.top-t.top;return Math.abs(n)<=3?e.left-t.left:n}));for(let e=0;e<c;e++){const t=s[e],n=i&&i.top<=t.top&&i.top+i.height>t.top&&i.left+i.width>t.left,l=t.width+r===o.width;n||l?(s.splice(e--,1),c--):i=t}return s}function S(e){const t={},n=e.split(";");for(const e of n)if(""!==e){const[n,o]=e.split(/:([^]+)/);n&&o&&(t[n.trim()]=o.trim())}return t}function N(e){let t=m.get(e);return void 0===t&&(t=S(e),m.set(e,t)),t}function E(n){const o=n.constructor.clone(n);return o.__parent=n.__parent,o.__next=n.__next,o.__prev=n.__prev,t(n)&&t(o)?(r=n,(l=o).__first=r.__first,l.__last=r.__last,l.__size=r.__size,l.__format=r.__format,l.__indent=r.__indent,l.__dir=r.__dir,l):e(n)&&e(o)?function(e,t){return e.__format=t.__format,e.__style=t.__style,e.__mode=t.__mode,e.__detail=t.__detail,e}(o,n):o;var l,r}function v(e,t){const o=e.getStartEndPoints();if(t.isSelected(e)&&!t.isSegmented()&&!t.isToken()&&null!==o){const[l,r]=o,s=e.isBackward(),i=l.getNode(),c=r.getNode(),f=t.is(i),u=t.is(c);if(f||u){const[o,l]=n(e),r=i.is(c),f=t.is(s?c:i),u=t.is(s?i:c);let g,a=0;if(r)a=o>l?l:o,g=o>l?o:l;else if(f){a=s?l:o,g=void 0}else if(u){a=0,g=s?o:l}return t.__text=t.__text.slice(a,g),t}}return t}function C(e){if("text"===e.type)return e.offset===e.getNode().getTextContentSize();const n=e.getNode();if(!t(n))throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");return e.offset===n.getChildrenSize()}function w(n,c,f){let u=c.getNode(),g=f;if(t(u)){const e=u.getDescendantByIndex(c.offset);null!==e&&(u=e)}for(;g>0&&null!==u;){if(t(u)){const e=u.getLastDescendant();null!==e&&(u=e)}let f=u.getPreviousSibling(),a=0;if(null===f){let e=u.getParentOrThrow(),t=e.getPreviousSibling();for(;null===t;){if(e=e.getParent(),null===e){f=null;break}t=e.getPreviousSibling()}null!==e&&(a=e.isInline()?0:2,f=t)}let d=u.getTextContent();""===d&&t(u)&&!u.isInline()&&(d="\n\n");const p=d.length;if(!e(u)||g>=p){const e=u.getParent();u.remove(),null==e||0!==e.getChildrenSize()||o(e)||e.remove(),g-=p+a,u=f}else{const t=u.getKey(),o=n.getEditorState().read((()=>{const n=l(t);return e(n)&&n.isSimpleText()?n.getTextContent():null})),f=p-g,a=d.slice(0,f);if(null!==o&&o!==d){const e=r();let t=u;if(u.isSimpleText())u.setTextContent(o);else{const e=s(o);u.replace(e),t=e}if(i(e)&&e.isCollapsed()){const n=e.anchor.offset;t.select(n,n)}}else if(u.isSimpleText()){const e=c.key===t;let n=c.offset;n<g&&(n=p);const o=e?n-g:0,l=e?n:f;if(e&&0===o){const[e]=u.splitText(o,l);e.remove()}else{const[,e]=u.splitText(o,l);e.remove()}}else{const e=s(a);u.replace(e)}g=0}}}function P(e){const t=e.getStyle(),n=S(t);m.set(t,n)}function F(e,t){const n=N("getStyle"in e?e.getStyle():e.style),o=Object.entries(t).reduce(((e,[t,o])=>(o instanceof Function?e[t]=o(n[t]):null===o?delete e[t]:e[t]=o,e)),{...n}||{}),l=function(e){let t="";for(const n in e)n&&(t+=`${n}: ${e[n]};`);return t}(o);e.setStyle(l),m.set(l,o)}function I(t,n){const o=t.getNodes(),l=o.length,r=t.getStartEndPoints();if(null===r)return;const[s,c]=r,f=l-1;let u=o[0],g=o[f];if(t.isCollapsed()&&i(t))return void F(t,n);const a=u.getTextContent().length,d=c.offset;let p=s.offset;const h=s.isBefore(c);let m=h?p:d,_=h?d:p;const y=h?s.type:c.type,T=h?c.type:s.type,x=h?c.key:s.key;if(e(u)&&m===a){const t=u.getNextSibling();e(t)&&(p=0,m=0,u=t)}if(1===o.length){if(e(u)&&u.canHaveFormat()){if(m="element"===y?0:p>d?d:p,_="element"===T?a:p>d?p:d,m===_)return;if(0===m&&_===a)F(u,n),u.select(m,_);else{const e=u.splitText(m,_),t=0===m?e[0]:e[1];F(t,n),t.select(0,_-m)}}}else{if(e(u)&&m<u.getTextContentSize()&&u.canHaveFormat()&&(0!==m&&(u=u.splitText(m)[1],m=0,s.set(u.getKey(),m,"text")),F(u,n)),e(g)&&g.canHaveFormat()){const e=g.getTextContent().length;g.__key!==x&&0!==_&&(_=e),_!==e&&([g]=g.splitText(_)),0===_&&"element"!==T||F(g,n)}for(let t=1;t<f;t++){const l=o[t],r=l.getKey();e(l)&&l.canHaveFormat()&&r!==u.getKey()&&r!==g.getKey()&&!l.isToken()&&F(l,n)}}}function K(e,n){if(null===e)return;const o=e.getStartEndPoints(),l=o?o[0]:null;if(null!==l&&"root"===l.key){const e=n(),t=c(),o=t.getFirstChild();return void(o?o.replace(e,!0):t.append(e))}const r=e.getNodes(),s=null!==l&&function(e,t){let n=e;for(;null!==n&&null!==n.getParent()&&!t(n);)n=n.getParentOrThrow();return t(n)?n:null}(l.getNode(),$);s&&-1===r.indexOf(s)&&r.push(s);for(let e=0;e<r.length;e++){const o=r[e];if(!$(o))continue;if(!t(o))throw Error("Expected block node to be an ElementNode");const l=n();l.setFormat(o.getFormatType()),l.setIndent(o.getIndent()),o.replace(l,!0)}}function b(e){return e.getNode().isAttached()}function O(e){let t=e;for(;null!==t&&!f(t);){const e=t.getLatest(),n=t.getParent();0===e.getChildrenSize()&&t.remove(!0),t=n}}function k(e,t,n=null){const o=e.getStartEndPoints(),l=o?o[0]:null,r=e.getNodes(),s=r.length;if(null!==l&&(0===s||1===s&&"element"===l.type&&0===l.getNode().getChildrenSize())){const e="text"===l.type?l.getNode().getParentOrThrow():l.getNode(),o=e.getChildren();let r=t();return r.setFormat(e.getFormatType()),r.setIndent(e.getIndent()),o.forEach((e=>r.append(e))),n&&(r=n.append(r)),void e.replace(r)}let i=null,c=[];for(let o=0;o<s;o++){const l=r[o];f(l)?(B(e,c,c.length,t,n),c=[],i=l):null===i||null!==i&&u(l,i)?c.push(l):(B(e,c,c.length,t,n),c=[l])}B(e,c,c.length,t,n)}function B(e,n,o,l,s=null){if(0===n.length)return;const c=n[0],u=new Map,d=[];let p=t(c)?c:c.getParentOrThrow();p.isInline()&&(p=p.getParentOrThrow());let h=!1;for(;null!==p;){const e=p.getPreviousSibling();if(null!==e){p=e,h=!0;break}if(p=p.getParentOrThrow(),f(p))break}const m=new Set;for(let e=0;e<o;e++){const o=n[e];t(o)&&0===o.getChildrenSize()&&m.add(o.getKey())}const _=new Set;for(let e=0;e<o;e++){const o=n[e];let r=o.getParent();if(null!==r&&r.isInline()&&(r=r.getParent()),null!==r&&g(o)&&!_.has(o.getKey())){const e=r.getKey();if(void 0===u.get(e)){const n=l();n.setFormat(r.getFormatType()),n.setIndent(r.getIndent()),d.push(n),u.set(e,n),r.getChildren().forEach((e=>{n.append(e),_.add(e.getKey()),t(e)&&e.getChildrenKeys().forEach((e=>_.add(e)))})),O(r)}}else if(m.has(o.getKey())){if(!t(o))throw Error("Expected node in emptyElements to be an ElementNode");const e=l();e.setFormat(o.getFormatType()),e.setIndent(o.getIndent()),d.push(e),o.remove(!0)}}if(null!==s)for(let e=0;e<d.length;e++){const t=d[e];s.append(t)}let y=null;if(f(p))if(h)if(null!==s)p.insertAfter(s);else for(let e=d.length-1;e>=0;e--){const t=d[e];p.insertAfter(t)}else{const e=p.getFirstChild();if(t(e)&&(p=e),null===e)if(s)p.append(s);else for(let e=0;e<d.length;e++){const t=d[e];p.append(t),y=t}else if(null!==s)e.insertBefore(s);else for(let t=0;t<d.length;t++){const n=d[t];e.insertBefore(n),y=n}}else if(s)p.insertAfter(s);else for(let e=d.length-1;e>=0;e--){const t=d[e];p.insertAfter(t),y=t}const T=r();i(T)&&b(T.anchor)&&b(T.focus)?a(T.clone()):null!==y?y.selectEnd():e.dirty=!0}function z(e,n){const o=d(e.focus,n);return p(o)&&!o.isIsolated()||t(o)&&!o.isInline()&&!o.canBeEmpty()}function A(e,t,n,o){e.modify(t?"extend":"move",n,o)}function R(e){const t=e.anchor.getNode();return"rtl"===(o(t)?t:t.getParentOrThrow()).getDirection()}function D(e,t,n){const o=R(e);A(e,t,n?!o:o,"character")}function L(n){const o=n.anchor,l=n.focus,r=o.getNode().getTopLevelElementOrThrow().getParentOrThrow();let s=r.getFirstDescendant(),i=r.getLastDescendant(),c="element",f="element",u=0;e(s)?c="text":t(s)||null===s||(s=s.getParentOrThrow()),e(i)?(f="text",u=i.getTextContentSize()):t(i)||null===i||(i=i.getParentOrThrow()),s&&i&&(o.set(s.getKey(),0,c),l.set(i.getKey(),u,f))}function H(e,t,n){const o=N(e.getStyle());return null!==o&&o[t]||n}function M(t,n,o=""){let l=null;const r=t.getNodes(),s=t.anchor,i=t.focus,c=t.isBackward(),f=c?i.offset:s.offset,u=c?i.getNode():s.getNode();if(t.isCollapsed()&&""!==t.style){const e=N(t.style);if(null!==e&&n in e)return e[n]}for(let t=0;t<r.length;t++){const s=r[t];if((0===t||0!==f||!s.is(u))&&e(s)){const e=H(s,n,o);if(null===l)l=e;else if(l!==e){l="";break}}}return null===l?o:l}function $(n){if(p(n))return!1;if(!t(n)||f(n))return!1;const o=n.getFirstChild(),l=null===o||h(o)||e(o)||o.isInline();return!n.isInline()&&!1!==n.canBeEmpty()&&l}export{P as $addNodeStyle,E as $cloneWithProperties,M as $getSelectionStyleValueForProperty,C as $isAtNodeEnd,R as $isParentElementRTL,A as $moveCaretSelection,D as $moveCharacter,I as $patchStyleText,L as $selectAll,K as $setBlocksType,z as $shouldOverrideDefaultCharacterSelection,v as $sliceSelectedTextNodeContent,k as $wrapNodes,T as createDOMRange,x as createRectsFromDOMRange,N as getStyleObjectFromCSS,w as trimTextContentFromAnchor};
