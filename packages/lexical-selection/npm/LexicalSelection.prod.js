/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var k=require("lexical");let v=new Map;function w(a){for(;null!=a;){if(a.nodeType===Node.TEXT_NODE)return a;a=a.firstChild}return null}function x(a){let b=a.parentNode;if(null==b)throw Error("Should never happen");return[b,Array.from(b.childNodes).indexOf(a)]}function y(a){let b={};a=a.split(";");for(let c of a)if(""!==c){let [e,d]=c.split(/:([^]+)/);e&&d&&(b[e.trim()]=d.trim())}return b}function z(a){let b=v.get(a);void 0===b&&(b=y(a),v.set(a,b));return b}
function A(a){let b="";for(let c in a)c&&(b+=`${c}: ${a[c]};`);return b}function B(a,b){let c=z("getStyle"in a?a.getStyle():a.style);b=Object.entries(b).reduce((d,[g,h])=>{h instanceof Function?d[g]=h(c[g]):null===h?delete d[g]:d[g]=h;return d},{...c});let e=A(b);a.setStyle(e);v.set(e,b)}function C(a){for(;null!==a&&!k.$isRootOrShadowRoot(a);){let b=a.getLatest(),c=a.getParent();0===b.getChildrenSize()&&a.remove(!0);a=c}}
function D(a,b,c,e,d=null){if(0!==b.length){var g=b[0],h=new Map,f=[];g=k.$isElementNode(g)?g:g.getParentOrThrow();g.isInline()&&(g=g.getParentOrThrow());for(var l=!1;null!==g;){var m=g.getPreviousSibling();if(null!==m){g=m;l=!0;break}g=g.getParentOrThrow();if(k.$isRootOrShadowRoot(g))break}m=new Set;for(var p=0;p<c;p++){var q=b[p];k.$isElementNode(q)&&0===q.getChildrenSize()&&m.add(q.getKey())}var n=new Set;for(p=0;p<c;p++){q=b[p];var r=q.getParent();null!==r&&r.isInline()&&(r=r.getParent());if(null!==
r&&k.$isLeafNode(q)&&!n.has(q.getKey())){if(q=r.getKey(),void 0===h.get(q)){let t=e();t.setFormat(r.getFormatType());t.setIndent(r.getIndent());f.push(t);h.set(q,t);r.getChildren().forEach(u=>{t.append(u);n.add(u.getKey());k.$isElementNode(u)&&u.getChildrenKeys().forEach(H=>n.add(H))});C(r)}}else if(m.has(q.getKey())){if(!k.$isElementNode(q))throw Error("Expected node in emptyElements to be an ElementNode");r=e();r.setFormat(q.getFormatType());r.setIndent(q.getIndent());f.push(r);q.remove(!0)}}if(null!==
d)for(b=0;b<f.length;b++)d.append(f[b]);b=null;if(k.$isRootOrShadowRoot(g))if(l)if(null!==d)g.insertAfter(d);else for(d=f.length-1;0<=d;d--)g.insertAfter(f[d]);else if(l=g.getFirstChild(),k.$isElementNode(l)&&(g=l),null===l)if(d)g.append(d);else for(d=0;d<f.length;d++)l=f[d],g.append(l),b=l;else if(null!==d)l.insertBefore(d);else for(g=0;g<f.length;g++)d=f[g],l.insertBefore(d),b=d;else if(d)g.insertAfter(d);else for(d=f.length-1;0<=d;d--)l=f[d],g.insertAfter(l),b=l;f=k.$getPreviousSelection();k.$isRangeSelection(f)&&
f.anchor.getNode().isAttached()&&f.focus.getNode().isAttached()?k.$setSelection(f.clone()):null!==b?b.selectEnd():a.dirty=!0}}function E(a,b,c,e){a.modify(b?"extend":"move",c,e)}function F(a){a=a.anchor.getNode();return"rtl"===(k.$isRootNode(a)?a:a.getParentOrThrow()).getDirection()}
function G(a){if(k.$isDecoratorNode(a)||!k.$isElementNode(a)||k.$isRootOrShadowRoot(a))return!1;var b=a.getFirstChild();b=null===b||k.$isLineBreakNode(b)||k.$isTextNode(b)||b.isInline();return!a.isInline()&&!1!==a.canBeEmpty()&&b}exports.$addNodeStyle=function(a){a=a.getStyle();let b=y(a);v.set(a,b)};
exports.$cloneWithProperties=function(a){let b=a.constructor.clone(a);b.__parent=a.__parent;b.__next=a.__next;b.__prev=a.__prev;if(k.$isElementNode(a)&&k.$isElementNode(b))return b.__first=a.__first,b.__last=a.__last,b.__size=a.__size,b.__format=a.__format,b.__indent=a.__indent,b.__dir=a.__dir,b;k.$isTextNode(a)&&k.$isTextNode(b)&&(b.__format=a.__format,b.__style=a.__style,b.__mode=a.__mode,b.__detail=a.__detail);return b};
exports.$getSelectionStyleValueForProperty=function(a,b,c=""){let e=null,d=a.getNodes();var g=a.anchor,h=a.focus,f=a.isBackward();let l=f?h.offset:g.offset;g=f?h.getNode():g.getNode();if(a.isCollapsed()&&""!==a.style&&(a=z(a.style),null!==a&&b in a))return a[b];for(a=0;a<d.length;a++){var m=d[a];if((0===a||0!==l||!m.is(g))&&k.$isTextNode(m))if(h=b,f=c,m=m.getStyle(),m=z(m),h=null!==m?m[h]||f:f,null===e)e=h;else if(e!==h){e="";break}}return null===e?c:e};
exports.$isAtNodeEnd=function(a){if("text"===a.type)return a.offset===a.getNode().getTextContentSize();let b=a.getNode();if(!k.$isElementNode(b))throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");return a.offset===b.getChildrenSize()};exports.$isParentElementRTL=F;exports.$moveCaretSelection=E;exports.$moveCharacter=function(a,b,c){let e=F(a);E(a,b,c?!e:e,"character")};
exports.$patchStyleText=function(a,b){var c=a.getNodes(),e=c.length,d=a.getStartEndPoints();if(null!==d){var [g,h]=d;--e;d=c[0];var f=c[e];if(a.isCollapsed()&&k.$isRangeSelection(a))B(a,b);else{var l=d.getTextContent().length,m=h.offset,p=g.offset,q=g.isBefore(h),n=q?p:m;a=q?m:p;var r=q?g.type:h.type,t=q?h.type:g.type;q=q?h.key:g.key;if(k.$isTextNode(d)&&n===l){let u=d.getNextSibling();k.$isTextNode(u)&&(n=p=0,d=u)}if(1===c.length)k.$isTextNode(d)&&d.canHaveFormat()&&(n="element"===r?0:p>m?m:p,a=
"element"===t?l:p>m?p:m,n!==a&&(0===n&&a===l?(B(d,b),d.select(n,a)):(c=d.splitText(n,a),c=0===n?c[0]:c[1],B(c,b),c.select(0,a-n))));else for(k.$isTextNode(d)&&n<d.getTextContentSize()&&d.canHaveFormat()&&(0!==n&&(d=d.splitText(n)[1],n=0,g.set(d.getKey(),n,"text")),B(d,b)),k.$isTextNode(f)&&f.canHaveFormat()&&(n=f.getTextContent().length,f.__key!==q&&0!==a&&(a=n),a!==n&&([f]=f.splitText(a)),0===a&&"element"!==t||B(f,b)),a=1;a<e;a++)n=c[a],t=n.getKey(),k.$isTextNode(n)&&n.canHaveFormat()&&t!==d.getKey()&&
t!==f.getKey()&&!n.isToken()&&B(n,b)}}};exports.$selectAll=function(a){let b=a.anchor;a=a.focus;var c=b.getNode().getTopLevelElementOrThrow().getParentOrThrow();let e=c.getFirstDescendant();c=c.getLastDescendant();let d="element",g="element",h=0;k.$isTextNode(e)?d="text":k.$isElementNode(e)||null===e||(e=e.getParentOrThrow());k.$isTextNode(c)?(g="text",h=c.getTextContentSize()):k.$isElementNode(c)||null===c||(c=c.getParentOrThrow());e&&c&&(b.set(e.getKey(),0,d),a.set(c.getKey(),h,g))};
exports.$setBlocksType=function(a,b){if(null!==a){var c=a.getStartEndPoints();c=c?c[0]:null;if(null!==c&&"root"===c.key)b=b(),a=k.$getRoot(),(c=a.getFirstChild())?c.replace(b,!0):a.append(b);else{a=a.getNodes();if(null!==c){for(c=c.getNode();null!==c&&null!==c.getParent()&&!G(c);)c=c.getParentOrThrow();c=G(c)?c:null}else c=!1;c&&-1===a.indexOf(c)&&a.push(c);for(c=0;c<a.length;c++){let e=a[c];if(!G(e))continue;if(!k.$isElementNode(e))throw Error("Expected block node to be an ElementNode");let d=b();
d.setFormat(e.getFormatType());d.setIndent(e.getIndent());e.replace(d,!0)}}}};exports.$shouldOverrideDefaultCharacterSelection=function(a,b){a=k.$getAdjacentNode(a.focus,b);return k.$isDecoratorNode(a)&&!a.isIsolated()||k.$isElementNode(a)&&!a.isInline()&&!a.canBeEmpty()};
exports.$sliceSelectedTextNodeContent=function(a,b){var c=a.getStartEndPoints();if(b.isSelected(a)&&!b.isSegmented()&&!b.isToken()&&null!==c){let [f,l]=c;c=a.isBackward();var e=f.getNode(),d=l.getNode(),g=b.is(e),h=b.is(d);if(g||h){let [m,p]=k.$getCharacterOffsets(a);a=e.is(d);g=b.is(c?d:e);d=b.is(c?e:d);e=0;h=void 0;a?(e=m>p?p:m,h=m>p?m:p):g?(e=c?p:m,h=void 0):d&&(c=c?m:p,e=0,h=c);b.__text=b.__text.slice(e,h)}}return b};
exports.$wrapNodes=function(a,b,c=null){var e=a.getStartEndPoints(),d=e?e[0]:null;e=a.getNodes();let g=e.length;if(null!==d&&(0===g||1===g&&"element"===d.type&&0===d.getNode().getChildrenSize())){a="text"===d.type?d.getNode().getParentOrThrow():d.getNode();e=a.getChildren();let f=b();f.setFormat(a.getFormatType());f.setIndent(a.getIndent());e.forEach(l=>f.append(l));c&&(f=c.append(f));a.replace(f)}else{d=null;var h=[];for(let f=0;f<g;f++){let l=e[f];k.$isRootOrShadowRoot(l)?(D(a,h,h.length,b,c),h=
[],d=l):null===d||null!==d&&k.$hasAncestor(l,d)?h.push(l):(D(a,h,h.length,b,c),h=[l])}D(a,h,h.length,b,c)}};
exports.createDOMRange=function(a,b,c,e,d){let g=b.getKey(),h=e.getKey(),f=document.createRange(),l=a.getElementByKey(g);a=a.getElementByKey(h);k.$isTextNode(b)&&(l=w(l));k.$isTextNode(e)&&(a=w(a));if(void 0===b||void 0===e||null===l||null===a)return null;"BR"===l.nodeName&&([l,c]=x(l));"BR"===a.nodeName&&([a,d]=x(a));b=l.firstChild;l===a&&null!=b&&"BR"===b.nodeName&&0===c&&0===d&&(d=1);try{f.setStart(l,c),f.setEnd(a,d)}catch(m){return null}!f.collapsed||c===d&&g===h||(f.setStart(a,d),f.setEnd(l,
c));return f};exports.createRectsFromDOMRange=function(a,b){var c=a.getRootElement();if(null===c)return[];a=c.getBoundingClientRect();c=getComputedStyle(c);c=parseFloat(c.paddingLeft)+parseFloat(c.paddingRight);b=Array.from(b.getClientRects());let e=b.length;b.sort((g,h)=>{let f=g.top-h.top;return 3>=Math.abs(f)?g.left-h.left:f});let d;for(let g=0;g<e;g++){let h=b[g],f=h.width+c===a.width;d&&d.top<=h.top&&d.top+d.height>h.top&&d.left+d.width>h.left||f?(b.splice(g--,1),e--):d=h}return b};
exports.getStyleObjectFromCSS=z;
exports.trimTextContentFromAnchor=function(a,b,c){let e=b.getNode();if(k.$isElementNode(e)){var d=e.getDescendantByIndex(b.offset);null!==d&&(e=d)}for(;0<c&&null!==e;){k.$isElementNode(e)&&(d=e.getLastDescendant(),null!==d&&(e=d));var g=e.getPreviousSibling(),h=0;if(null===g){d=e.getParentOrThrow();for(var f=d.getPreviousSibling();null===f;){d=d.getParent();if(null===d){g=null;break}f=d.getPreviousSibling()}null!==d&&(h=d.isInline()?0:2,g=f)}f=e.getTextContent();""===f&&k.$isElementNode(e)&&!e.isInline()&&
(f="\n\n");d=f.length;if(!k.$isTextNode(e)||c>=d)f=e.getParent(),e.remove(),null==f||0!==f.getChildrenSize()||k.$isRootNode(f)||f.remove(),c-=d+h,e=g;else{let l=e.getKey();h=a.getEditorState().read(()=>{const p=k.$getNodeByKey(l);return k.$isTextNode(p)&&p.isSimpleText()?p.getTextContent():null});g=d-c;let m=f.slice(0,g);null!==h&&h!==f?(c=k.$getPreviousSelection(),d=e,e.isSimpleText()?e.setTextContent(h):(d=k.$createTextNode(h),e.replace(d)),k.$isRangeSelection(c)&&c.isCollapsed()&&(c=c.anchor.offset,
d.select(c,c))):e.isSimpleText()?(h=b.key===l,f=b.offset,f<c&&(f=d),c=h?f-c:0,d=h?f:g,h&&0===c?([c]=e.splitText(c,d),c.remove()):([,c]=e.splitText(c,d),c.remove())):(c=k.$createTextNode(m),e.replace(c));c=0}}}
