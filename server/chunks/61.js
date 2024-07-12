exports.id=61,exports.ids=[61],exports.modules={953:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return i}});let n=r(475),o=r(8364);function i(e,t){return(0,o.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1443:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8364);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6691:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return l},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return f}});let o="refresh",i="navigate",a="restore",u="server-patch",l="prefetch",s="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9142:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(8106);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(167),o=r(8760),i=r(997),a=o._(r(6689)),u=n._(r(6405)),l=n._(r(7828)),s=r(7367),c=r(7903),f=r(6218);r(1997);let d=r(5469),p=n._(r(6663)),_={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,o,i,a){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let m=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:l,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:_,unoptimized:m,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:E,setShowAltText:P,sizesInput:R,onLoad:O,onError:S,...A}=e;return(0,i.jsx)("img",{...A,...h(d),loading:_,width:l,height:u,decoding:s,"data-nimg":y?"fill":"1",className:c,style:f,sizes:o,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,b,v,E,m,R))},[r,p,b,v,E,S,m,R,t]),onLoad:e=>{g(e.currentTarget,p,b,v,E,m,R)},onError:e=>{P(!0),"empty"!==p&&E(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(f.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=_||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:l}=e,g=(0,a.useRef)(u);(0,a.useEffect)(()=>{g.current=u},[u]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,a.useState)(!1),[E,P]=(0,a.useState)(!1),{props:R,meta:O}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:b,showAltText:E});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{...R,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:P,sizesInput:e.sizes,ref:t}),O.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:R}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(167),o=r(997),i=n._(r(6689)),a=r(1401),u=r(2045),l=r(7420),s=r(7201),c=r(1443),f=r(5469),d=r(7443),p=r(2905),_=r(4318),g=r(953),h=r(6691);function m(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:l,as:y,children:b,prefetch:v=null,passHref:E,replace:P,shallow:R,scroll:O,locale:S,onClick:A,onMouseEnter:j,onTouchStart:x,legacyBehavior:T=!1,...I}=e;r=b,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let C=i.default.useContext(f.RouterContext),M=i.default.useContext(d.AppRouterContext),w=null!=C?C:M,N=!C,L=!1!==v,D=null===v?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:U,as:k}=i.default.useMemo(()=>{if(!C){let e=m(l);return{href:e,as:y?m(y):e}}let[e,t]=(0,a.resolveHref)(C,l,!0);return{href:e,as:y?(0,a.resolveHref)(C,y):t||e}},[C,l,y]),F=i.default.useRef(U),z=i.default.useRef(k);T&&(n=i.default.Children.only(r));let G=T?n&&"object"==typeof n&&n.ref:t,[X,H,W]=(0,p.useIntersection)({rootMargin:"200px"}),B=i.default.useCallback(e=>{(z.current!==k||F.current!==U)&&(W(),z.current=k,F.current=U),X(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[k,G,U,W,X]);i.default.useEffect(()=>{},[k,U,H,S,L,null==C?void 0:C.locale,w,N,D]);let V={ref:B,onClick(e){T||"function"!=typeof A||A(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,r,n,o,a,l,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(d):d()}(e,w,U,k,P,R,O,S,N)},onMouseEnter(e){T||"function"!=typeof j||j(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart:function(e){T||"function"!=typeof x||x(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,s.isAbsoluteUrl)(k))V.href=k;else if(!T||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==C?void 0:C.locale,t=(null==C?void 0:C.isLocaleDomain)&&(0,_.getDomainLocale)(k,e,null==C?void 0:C.locales,null==C?void 0:C.domainLocales);V.href=t||(0,g.addBasePath)((0,c.addLocale)(k,e,null==C?void 0:C.defaultLocale))}return T?i.default.cloneElement(n,V):(0,o.jsx)("a",{...I,...V,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return i}});let n=r(9362),o=r(2107),i=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:i}=(0,o.parsePath)(e);return/\.[^/]+\/?$/.test(t)?""+(0,n.removeTrailingSlash)(t)+r+i:t.endsWith("/")?""+t+r+i:t+"/"+r+i};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1401:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(8260),o=r(7420),i=r(3061),a=r(7201),u=r(8364),l=r(2045),s=r(5722),c=r(4321);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),_=p?d.slice(p[0].length):d;if((_.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(_);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(r,u)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(6689),o=r(3815),i="function"==typeof IntersectionObserver,a=new Map,u=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,s=l||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1885:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},7367:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(1997);let n=r(9919),o=r(7903);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,l,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:_,className:g,quality:h,width:m,height:y,fill:b=!1,style:v,overrideSrc:E,onLoad:P,onLoadingComplete:R,placeholder:O="empty",blurDataURL:S,fetchPriority:A,layout:j,objectFit:x,objectPosition:T,lazyBoundary:I,lazyRoot:C,...M}=e,{imgConf:w,showAltText:N,blurComplete:L,defaultLoader:D}=t,U=w||o.imageConfigDefault;if("allSizes"in U)u=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);u={...U,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let k=M.loader||D;delete M.loader,delete M.srcSet;let F="__next_img_default"in k;if(F){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=k;k=t=>{let{config:r,...n}=t;return e(n)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!f&&(f=t)}let z="",G=a(m),X=a(y);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,S=S||e.blurDataURL,z=e.src,!b){if(G||X){if(G&&!X){let t=G/e.width;X=Math.round(e.height*t)}else if(!G&&X){let t=X/e.height;G=Math.round(e.width*t)}}else G=e.width,X=e.height}}let H=!p&&("lazy"===_||void 0===_);(!(c="string"==typeof c?c:z)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,H=!1),u.unoptimized&&(d=!0),F&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(A="high");let W=a(h),B=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:T}:{},N?{}:{color:"transparent"},v),V=L||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:X,blurWidth:l,blurHeight:s,blurDataURL:S||"",objectFit:B.objectFit})+'")':'url("'+O+'")',K=V?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),c=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:l[c]})}}({config:u,src:c,unoptimized:d,width:G,quality:W,sizes:f,loader:k});return{props:{...M,loading:H?"lazy":_,fetchPriority:A,width:G,height:X,decoding:"async",className:g,style:{...B,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:E||Y.src},meta:{unoptimized:d,priority:p,placeholder:O,fill:b}}}},7828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let n=r(167),o=r(8760),i=r(997),a=o._(r(6689)),u=n._(r(7215)),l=r(8039),s=r(1988),c=r(5495);function f(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let p=["name","httpEquiv","charSet","itemProp"];function _(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(s.HeadManagerContext);return(0,i.jsx)(u.default,{reduceComponentsToState:_,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9919:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n?40*n:t,l=o?40*o:r,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7903:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",remotePatterns:[],unoptimized:!1}},5666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return u}});let n=r(167),o=r(7367),i=r(6541),a=n._(r(6663));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},6663:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},475:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let n=r(2107);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:i}=(0,n.parsePath)(e);return""+t+r+o+i}},7420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});let n=r(8760)._(r(8260)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},4321:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(122),o=r(2437);function i(e,t,r){let i="",a=(0,o.getRouteRegex)(e),u=a.groups,l=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;i=e;let s=Object.keys(u);return s.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=u[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},2045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(7201),o=r(9142);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},3061:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},2107:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},8106:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(2107);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},8260:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9362:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},122:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(7201);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),a}}},2437:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return g},getNamedRouteRegex:function(){return _},getRouteRegex:function(){return f},parseParameter:function(){return l}});let n=r(2350),o=r(2407),i=r(1885),a=r(9362),u=/\[((?:\[.*\])|.+)\]/;function l(e){let t=e.match(u);return t?s(t[1]):s(e)}function s(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=o.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(u);if(t&&a){let{key:e,optional:o,repeat:u}=s(a[1]);return r[e]={pos:n++,repeat:u,optional:o},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:o}=s(a[1]);return r[e]={pos:n++,repeat:t,optional:o},t?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function d(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:a}=e,{key:u,optional:l,repeat:c}=s(n),f=u.replace(/\W/g,"");a&&(f=""+a+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),a?o[f]=""+a+u:o[f]=u;let p=t?(0,i.escapeStringRegexp)(t):"";return c?l?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function p(e,t){let r;let u=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),s={};return{namedParameterizedRoute:u.map(e=>{let r=o.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return d({getSafeRouteKey:l,interceptionMarker:r,segment:a[1],routeKeys:s,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return a?d({getSafeRouteKey:l,segment:a[1],routeKeys:s,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function _(e,t){let r=p(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function g(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=p(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(6689),o=()=>{},i=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function u(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),u(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=u),()=>{r&&(r._pendingUpdate=u)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},2350:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_SUFFIX:function(){return l},APP_DIR_ALIAS:function(){return j},CACHE_ONE_YEAR:function(){return v},DOT_NEXT_ALIAS:function(){return S},ESLINT_DEFAULT_DIRS:function(){return B},ESLINT_PROMPT_VALUES:function(){return V},GSP_NO_RETURNED_VALUE:function(){return F},GSSP_COMPONENT_MEMBER_ERROR:function(){return X},GSSP_NO_RETURNED_VALUE:function(){return z},INSTRUMENTATION_HOOK_FILENAME:function(){return R},MIDDLEWARE_FILENAME:function(){return E},MIDDLEWARE_LOCATION_REGEXP:function(){return P},NEXT_BODY_SUFFIX:function(){return f},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return b},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return _},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return g},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return p},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return y},NEXT_CACHE_TAGS_HEADER:function(){return d},NEXT_CACHE_TAG_MAX_ITEMS:function(){return h},NEXT_CACHE_TAG_MAX_LENGTH:function(){return m},NEXT_DATA_SUFFIX:function(){return s},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return n},NEXT_META_SUFFIX:function(){return c},NEXT_QUERY_PARAM_PREFIX:function(){return r},NON_STANDARD_NODE_ENV:function(){return H},PAGES_DIR_ALIAS:function(){return O},PRERENDER_REVALIDATE_HEADER:function(){return o},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return i},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return w},ROOT_DIR_ALIAS:function(){return A},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return M},RSC_ACTION_ENCRYPTION_ALIAS:function(){return C},RSC_ACTION_PROXY_ALIAS:function(){return I},RSC_ACTION_VALIDATE_ALIAS:function(){return T},RSC_MOD_REF_PROXY_ALIAS:function(){return x},RSC_PREFETCH_SUFFIX:function(){return a},RSC_SUFFIX:function(){return u},SERVER_PROPS_EXPORT_ERROR:function(){return k},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return L},SERVER_PROPS_SSG_CONFLICT:function(){return D},SERVER_RUNTIME:function(){return K},SSG_FALLBACK_EXPORT_ERROR:function(){return W},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return N},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return U},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return G},WEBPACK_LAYERS:function(){return q},WEBPACK_RESOURCE_QUERIES:function(){return $}});let r="nxtP",n="nxtI",o="x-prerender-revalidate",i="x-prerender-revalidate-if-generated",a=".prefetch.rsc",u=".rsc",l=".action",s=".json",c=".meta",f=".body",d="x-next-cache-tags",p="x-next-cache-soft-tags",_="x-next-revalidated-tags",g="x-next-revalidate-tag-token",h=64,m=256,y=1024,b="_N_T_",v=31536e3,E="middleware",P=`(?:src/)?${E}`,R="instrumentation",O="private-next-pages",S="private-dot-next",A="private-next-root-dir",j="private-next-app-dir",x="private-next-rsc-mod-ref-proxy",T="private-next-rsc-action-validate",I="private-next-rsc-server-reference",C="private-next-rsc-action-encryption",M="private-next-rsc-action-client-wrapper",w="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",N="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",L="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",D="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",U="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",k="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",F="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",z="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",G="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",X="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",H='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',W="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",B=["app","pages","components","lib","src"],V=[{title:"Strict",recommended:!0,config:{extends:"next/core-web-vitals"}},{title:"Base",config:{extends:"next"}},{title:"Cancel",config:null}],K={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},Y={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route"},q={...Y,GROUP:{serverOnly:[Y.reactServerComponents,Y.actionBrowser,Y.appMetadataRoute,Y.instrument,Y.middleware],neutralTarget:[Y.api],clientOnly:[Y.serverSideRendering,Y.appPagesBrowser],app:[Y.reactServerComponents,Y.actionBrowser,Y.appMetadataRoute,Y.serverSideRendering,Y.appPagesBrowser,Y.shared,Y.instrument]}},$={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5469:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.RouterContext},5675:(e,t,r)=>{e.exports=r(5666)},1664:(e,t,r)=>{e.exports=r(9577)},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}}};