/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var k=require("@lexical/react/LexicalComposerContext"),t=require("lexical"),x=require("react"),y=require("@lexical/utils"),z="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?x.useLayoutEffect:x.useEffect;class A{constructor(b){this.key=b;this.ref={current:null};this.setRefElement=this.setRefElement.bind(this)}setRefElement(b){this.ref={current:b}}}
let B=b=>{const a=document.getElementById("typeahead-menu");if(a){var d=a.getBoundingClientRect();d.top+d.height>window.innerHeight&&a.scrollIntoView({block:"center"});0>d.top&&a.scrollIntoView({block:"center"});b.scrollIntoView({block:"nearest"})}};
function C(b){var a=t.$getSelection();if(!t.$isRangeSelection(a)||!a.isCollapsed())return null;var d=a.anchor;if("text"!==d.type)return null;a=d.getNode();if(!a.isSimpleText())return null;d=d.offset;let l=a.getTextContent().slice(0,d);var f=b.matchingString;b=b.replaceableString.length;for(let n=b;n<=f.length;n++)l.substr(-n)===f.substr(0,n)&&(b=n);b=d-b;if(0>b)return null;let p;0===b?[p]=a.splitText(d):[,p]=a.splitText(b,d);return p}
function D(b,a){let d=getComputedStyle(b),l="absolute"===d.position;a=a?/(auto|scroll|hidden)/:/(auto|scroll)/;if("fixed"===d.position)return document.body;for(;b=b.parentElement;)if(d=getComputedStyle(b),(!l||"static"!==d.position)&&a.test(d.overflow+d.overflowY+d.overflowX))return b;return document.body}function E(b,a){b=b.getBoundingClientRect();a=a.getBoundingClientRect();return b.top>a.top&&b.top<a.bottom}
function F(b,a,d,l){let [f]=k.useLexicalComposerContext();x.useEffect(()=>{if(null!=a&&null!=b){let p=f.getRootElement(),n=null!=p?D(p,!1):document.body,w=!1,m=E(a,n),c=function(){w||(window.requestAnimationFrame(function(){d();w=!1}),w=!0);const q=E(a,n);q!==m&&(m=q,null!=l&&l(q))},g=new ResizeObserver(d);window.addEventListener("resize",d);document.addEventListener("scroll",c,{capture:!0,passive:!0});g.observe(a);return()=>{g.unobserve(a);window.removeEventListener("resize",d);document.removeEventListener("scroll",
c,!0)}}},[a,f,l,d,b])}let G=t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function H({close:b,editor:a,anchorElementRef:d,resolution:l,options:f,menuRenderFn:p,onSelectOption:n,shouldSplitNodeWithQuery:w=!1,commandPriority:m=t.COMMAND_PRIORITY_LOW}){let [c,g]=x.useState(null);x.useEffect(()=>{g(0)},[l.match&&l.match.matchingString]);let q=x.useCallback(e=>{a.update(()=>{const h=null!=l.match&&w?C(l.match):null;n(e,h,b,l.match?l.match.matchingString:"")})},[a,w,l.match,n,b]),r=x.useCallback(e=>{const h=a.getRootElement();null!==h&&(h.setAttribute("aria-activedescendant",
"typeahead-item-"+e),g(e))},[a]);x.useEffect(()=>()=>{let e=a.getRootElement();null!==e&&e.removeAttribute("aria-activedescendant")},[a]);z(()=>{null===f?g(null):null===c&&r(0)},[f,c,r]);x.useEffect(()=>y.mergeRegister(a.registerCommand(G,({option:e})=>e.ref&&null!=e.ref.current?(B(e.ref.current),!0):!1,m)),[a,r,m]);x.useEffect(()=>y.mergeRegister(a.registerCommand(t.KEY_ARROW_DOWN_COMMAND,e=>{if(null!==f&&f.length&&null!==c){let h=c!==f.length-1?c+1:0;r(h);let u=f[h];null!=u.ref&&u.ref.current&&
a.dispatchCommand(G,{index:h,option:u});e.preventDefault();e.stopImmediatePropagation()}return!0},m),a.registerCommand(t.KEY_ARROW_UP_COMMAND,e=>{if(null!==f&&f.length&&null!==c){var h=0!==c?c-1:f.length-1;r(h);h=f[h];null!=h.ref&&h.ref.current&&B(h.ref.current);e.preventDefault();e.stopImmediatePropagation()}return!0},m),a.registerCommand(t.KEY_ESCAPE_COMMAND,e=>{e.preventDefault();e.stopImmediatePropagation();b();return!0},m),a.registerCommand(t.KEY_TAB_COMMAND,e=>{if(null===f||null===c||null==
f[c])return!1;e.preventDefault();e.stopImmediatePropagation();q(f[c]);return!0},m),a.registerCommand(t.KEY_ENTER_COMMAND,e=>{if(null===f||null===c||null==f[c])return!1;null!==e&&(e.preventDefault(),e.stopImmediatePropagation());q(f[c]);return!0},m)),[q,b,a,f,c,r,m]);let v=x.useMemo(()=>({options:f,selectOptionAndCleanUp:q,selectedIndex:c,setHighlightedIndex:g}),[q,c,f]);return p(d,v,l.match?l.match.matchingString:"")}
function I(b,a,d,l=document.body){let [f]=k.useLexicalComposerContext(),p=x.useRef(document.createElement("div")),n=x.useCallback(()=>{p.current.style.top=p.current.style.bottom;const m=f.getRootElement(),c=p.current;var g=c.firstChild;if(null!==m&&null!==b){const {left:r,top:v,width:e,height:h}=b.getRect();c.style.top=`${v+window.pageYOffset+p.current.offsetHeight+3}px`;c.style.left=`${r+window.pageXOffset}px`;c.style.height=`${h}px`;c.style.width=`${e}px`;if(null!==g){g.style.top=`${v}`;var q=g.getBoundingClientRect();
g=q.height;q=q.width;const u=m.getBoundingClientRect();r+q>u.right&&(c.style.left=`${u.right-q+window.pageXOffset}px`);(v+g>window.innerHeight||v+g>u.bottom)&&v-u.top>g&&(c.style.top=`${v-g+window.pageYOffset-h}px`)}c.isConnected||(null!=d&&(c.className=d),c.setAttribute("aria-label","Typeahead menu"),c.setAttribute("id","typeahead-menu"),c.setAttribute("role","listbox"),c.style.display="block",c.style.position="absolute",l.append(c));p.current=c;m.setAttribute("aria-controls","typeahead-menu")}},
[f,b,d,l]);x.useEffect(()=>{let m=f.getRootElement();if(null!==b)return n(),()=>{null!==m&&m.removeAttribute("aria-controls");let c=p.current;null!==c&&c.isConnected&&c.remove()}},[f,n,b]);let w=x.useCallback(m=>{null!==b&&(m||a(null))},[b,a]);F(b,p.current,n,w);return p}function J(b){x.startTransition?x.startTransition(b):b()}
exports.LexicalNodeMenuPlugin=function({options:b,nodeKey:a,onClose:d,onOpen:l,onSelectOption:f,menuRenderFn:p,anchorClassName:n,commandPriority:w=t.COMMAND_PRIORITY_LOW,parent:m}){let [c]=k.useLexicalComposerContext(),[g,q]=x.useState(null);n=I(g,q,n,m);let r=x.useCallback(()=>{q(null);null!=d&&null!==g&&d()},[d,g]),v=x.useCallback(h=>{q(h);null!=l&&null===g&&l(h)},[l,g]),e=x.useCallback(()=>{a?c.update(()=>{const h=t.$getNodeByKey(a),u=c.getElementByKey(a);null!=h&&null!=u&&null==g&&J(()=>v({getRect:()=>
u.getBoundingClientRect()}))}):null==a&&null!=g&&r()},[r,c,a,v,g]);x.useEffect(()=>{e()},[e,a]);x.useEffect(()=>{if(null!=a)return c.registerUpdateListener(({dirtyElements:h})=>{h.get(a)&&e()})},[c,e,a]);return null===g||null===c?null:x.createElement(H,{close:r,resolution:g,editor:c,anchorElementRef:n,options:b,menuRenderFn:p,onSelectOption:f,commandPriority:w})};exports.MenuOption=A