"use strict";exports.id=2002,exports.ids=[2002],exports.modules={39152:(r,e,o)=>{o.d(e,{j:()=>l});var t=o(89814);let n=r=>"boolean"==typeof r?"".concat(r):0===r?"0":r,i=t.W,l=(r,e)=>o=>{var t;if((null==e?void 0:e.variants)==null)return i(r,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:l,defaultVariants:s}=e,a=Object.keys(l).map(r=>{let e=null==o?void 0:o[r],t=null==s?void 0:s[r];if(null===e)return null;let i=n(e)||n(t);return l[r][i]}),c=o&&Object.entries(o).reduce((r,e)=>{let[o,t]=e;return void 0===t||(r[o]=t),r},{}),d=null==e?void 0:null===(t=e.compoundVariants)||void 0===t?void 0:t.reduce((r,e)=>{let{class:o,className:t,...n}=e;return Object.entries(n).every(r=>{let[e,o]=r;return Array.isArray(o)?o.includes({...s,...c}[e]):({...s,...c})[e]===o})?[...r,o,t]:r},[]);return i(r,a,d,null==o?void 0:o.class,null==o?void 0:o.className)}},89814:(r,e,o)=>{o.d(e,{W:()=>t});function t(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){var o,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=r(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o)}return n}(r))&&(t&&(t+=" "),t+=e);return t}},10397:(r,e,o)=>{o.d(e,{m:()=>E});var t=/^\[(.+)\]$/;function n(r,e){var o=r;return e.split("-").forEach(function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}var i=/\s+/;function l(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){if("string"==typeof e)return e;for(var o,t="",n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);return t}(r))&&(t&&(t+=" "),t+=e);return t}function s(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(r){return x(r)||d.has(r)||c.test(r)||m(r)}function m(r){return I(r,"length",M)}function g(r){return I(r,"size",N)}function v(r){return I(r,"position",N)}function h(r){return I(r,"url",P)}function y(r){return I(r,"number",x)}function x(r){return!Number.isNaN(Number(r))}function w(r){return r.endsWith("%")&&x(r.slice(0,-1))}function k(r){return S(r)||I(r,"number",S)}function z(r){return a.test(r)}function j(){return!0}function C(r){return u.test(r)}function G(r){return I(r,"",O)}function I(r,e,o){var t=a.exec(r);return!!t&&(t[1]?t[1]===e:o(t[2]))}function M(r){return p.test(r)}function N(){return!1}function P(r){return r.startsWith("url(")}function S(r){return Number.isInteger(Number(r))}function O(r){return f.test(r)}var E=function(){for(var r,e,o,s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];var d=function(i){var l=a[0];return e=(r=function(r){var e,o,i,l,s,a,c,d,u,p,f;return{cache:function(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++e>r&&(e=0,t=o,o=new Map)}return{get:function(r){var e=o.get(r);return void 0!==e?e:void 0!==(e=t.get(r))?(n(r,e),e):void 0},set:function(r,e){o.has(r)?o.set(r,e):n(r,e)}}}(r.cacheSize),splitModifiers:(o=1===(e=r.separator||":").length,i=e[0],l=e.length,function(r){for(var t,n=[],s=0,a=0,c=0;c<r.length;c++){var d=r[c];if(0===s){if(d===i&&(o||r.slice(c,c+l)===e)){n.push(r.slice(a,c)),a=c+l;continue}if("/"===d){t=c;continue}}"["===d?s++:"]"===d&&s--}var u=0===n.length?r:r.substring(a),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:n,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:t&&t>a?t-a:void 0}}),...(d=r.theme,u=r.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(r.classGroups),u?f.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?u+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){return[u+r[0],r[1]]})):r})]}):f).forEach(function(r){var e=r[0];(function r(e,o,t,i){e.forEach(function(e){if("string"==typeof e){(""===e?o:n(o,e)).classGroupId=t;return}if("function"==typeof e){if(e.isThemeGetter){r(e(i),o,t,i);return}o.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(function(e){var l=e[0];r(e[1],n(o,l),t,i)})})})(r[1],p,e,d)}),s=r.conflictingClassGroups,c=void 0===(a=r.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(r){var e=r.split("-");return""===e[0]&&1!==e.length&&e.shift(),function r(e,o){if(0===e.length)return o.classGroupId;var t=e[0],n=o.nextPart.get(t),i=n?r(e.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var l=e.join("-");return o.validators.find(function(r){return(0,r.validator)(l)})?.classGroupId}}(e,p)||function(r){if(t.test(r)){var e=t.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}(r)},getConflictingClassGroupIds:function(r,e){var o=s[r]||[];return e&&c[r]?[].concat(o,c[r]):o}})}}(a.slice(1).reduce(function(r,e){return e(r)},l()))).cache.get,o=r.cache.set,d=u,u(i)};function u(t){var n,l,s,a,c,d=e(t);if(d)return d;var u=(l=(n=r).splitModifiers,s=n.getClassGroupId,a=n.getConflictingClassGroupIds,c=new Set,t.trim().split(i).map(function(r){var e=l(r),o=e.modifiers,t=e.hasImportantModifier,n=e.baseClassName,i=e.maybePostfixModifierPosition,a=s(i?n.substring(0,i):n),c=!!i;if(!a){if(!i||!(a=s(n)))return{isTailwindClass:!1,originalClassName:r};c=!1}var d=(function(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(r){"["===r[0]?(e.push.apply(e,o.sort().concat([r])),o=[]):o.push(r)}),e.push.apply(e,o.sort()),e})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:a,originalClassName:r,hasPostfixModifier:c}}).reverse().filter(function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,o=r.classGroupId,t=r.hasPostfixModifier,n=e+o;return!c.has(n)&&(c.add(n),a(o,t).forEach(function(r){return c.add(e+r)}),!0)}).reverse().map(function(r){return r.originalClassName}).join(" "));return o(t,u),u}return function(){return d(l.apply(null,arguments))}}(function(){var r=s("colors"),e=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),l=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),I=s("gradientColorStops"),M=s("gradientColorStopPositions"),N=s("inset"),P=s("margin"),S=s("opacity"),O=s("padding"),E=s("saturate"),W=s("scale"),A=s("sepia"),T=s("skew"),$=s("space"),R=s("translate"),q=function(){return["auto","contain","none"]},V=function(){return["auto","hidden","clip","visible","scroll"]},_=function(){return["auto",z,e]},B=function(){return[z,e]},D=function(){return["",b]},F=function(){return["auto",x,z]},H=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},J=function(){return["solid","dashed","dotted","double","none"]},K=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},L=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",z]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},X=function(){return[x,y]},Y=function(){return[x,z]};return{cacheSize:500,theme:{colors:[j],spacing:[b],blur:["none","",C,z],brightness:X(),borderColor:[r],borderRadius:["none","","full",C,z],borderSpacing:B(),borderWidth:D(),contrast:X(),grayscale:Q(),hueRotate:Y(),invert:Q(),gap:B(),gradientColorStops:[r],gradientColorStopPositions:[w,m],inset:_(),margin:_(),opacity:X(),padding:B(),saturate:X(),scale:X(),sepia:Q(),skew:Y(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(H(),[z])}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",k]},z]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[k]},z]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(L())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(L(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(L(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[O]}],px:[{px:[O]}],py:[{py:[O]}],ps:[{ps:[O]}],pe:[{pe:[O]}],pt:[{pt:[O]}],pr:[{pr:[O]}],pb:[{pb:[O]}],pl:[{pl:[O]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",z,e]}],"min-w":[{"min-w":["min","max","fit",z,b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,z]}],h:[{h:[z,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z,b]}],"max-h":[{"max-h":[z,e,"min","max","fit"]}],"font-size":[{text:["base",C,m]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",x,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,b]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(J(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",z,b]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(H(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[I]}],"gradient-via":[{via:[I]}],"gradient-to":[{to:[I]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(J(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:J()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(J())}],"outline-offset":[{"outline-offset":[z,b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",C,G]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[E]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[k,z]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[b,y]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}};