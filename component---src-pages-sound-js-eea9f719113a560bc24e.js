(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6bh+":function(e,t,o){},"8jAD":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var n,r=(n=o("q1tI"))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=0,u=/(-?[0-9.]*[0-9]+[0-9.]*)/g,l=/^-?[0-9.]*[0-9]+[0-9.]*$/g,c=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],d={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,o,n;return t=e,n=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(o){t[-1===c.indexOf(o)?"node":"icon"][o]=e[o]})),t}},{key:"calculateDimension",value:function(e,t,o){if(1===t)return e;if(o=void 0===o?100:o,"number"==typeof e)return Math.ceil(e*t*o)/o;var n=e.split(u);if(null===n||!n.length)return null;for(var r,a=[],i=n.shift(),s=l.test(i);;){if(s?(r=parseFloat(i),isNaN(r)?a.push(i):a.push(Math.ceil(r*t*o)/o)):a.push(i),void 0===(i=n.shift()))return a.join("");s=!s}}},{key:"replaceIDs",value:function(e){var t,o,n=/\sid="(\S+)"/g,r=[];function a(e,t,o){for(var n=0;-1!==(n=o.indexOf(e,n));)o=o.slice(0,n)+t+o.slice(n+e.length),n+=t.length;return o}for(;t=n.exec(e);)r.push(t[1]);return r.length?(o="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",r.forEach((function(t){var n=o+s;s++,e=a('="'+t+'"','="'+n+'"',e),e=a('="#'+t+'"','="#'+n+'"',e),e=a("(#"+t+")","(#"+n+")",e)})),e):e}}],(o=[{key:"getAttributes",value:function(t){var o=this._item;"object"!==a(t)&&(t=Object.create(null));var n={horizontal:"center",vertical:"middle",slice:!1},r={rotate:o.rotate,hFlip:o.hFlip,vFlip:o.vFlip},i=Object.create(null),s=Object.create(null),u=!0===t.inline||"true"===t.inline||"1"===t.inline,l={left:o.left,top:u?o.inlineTop:o.top,width:o.width,height:u?o.inlineHeight:o.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(r[e]=!r[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":r.hFlip=!r.hFlip;break;case"vertical":r.vFlip=!r.vFlip}})),void 0!==t.rotate){var c=t.rotate;if("number"==typeof c)r.rotate+=c;else if("string"==typeof c){var d=c.replace(/^-?[0-9.]*/,"");if(""===d)c=parseInt(c),isNaN(c)||(r.rotate+=c);else if(d!==c){var h=!1;switch(d){case"%":h=25;break;case"deg":h=90}h&&(c=parseInt(c.slice(0,c.length-d.length)),isNaN(c)||(r.rotate+=Math.round(c/h)))}}}var p,m=[];switch(r.hFlip?r.vFlip?r.rotate+=2:(m.push("translate("+(l.width+l.left)+" "+(0-l.top)+")"),m.push("scale(-1 1)"),l.top=l.left=0):r.vFlip&&(m.push("translate("+(0-l.left)+" "+(l.height+l.top)+")"),m.push("scale(1 -1)"),l.top=l.left=0),r.rotate%4){case 1:p=l.height/2+l.top,m.unshift("rotate(90 "+p+" "+p+")"),0===l.left&&0===l.top||(p=l.left,l.left=l.top,l.top=p),l.width!==l.height&&(p=l.width,l.width=l.height,l.height=p);break;case 2:m.unshift("rotate(180 "+(l.width/2+l.left)+" "+(l.height/2+l.top)+")");break;case 3:p=l.width/2+l.left,m.unshift("rotate(-90 "+p+" "+p+")"),0===l.left&&0===l.top||(p=l.left,l.left=l.top,l.top=p),l.width!==l.height&&(p=l.width,l.width=l.height,l.height=p)}var v,f,g=t.width?t.width:null,w=t.height?t.height:null;null===g&&null===w&&(w="1em"),null!==g&&null!==w?(v=g,f=w):null!==g?(v=g,f=e.calculateDimension(v,l.height/l.width)):(f=w,v=e.calculateDimension(f,l.width/l.height)),!1!==v&&(s.width="auto"===v?l.width:v),!1!==f&&(s.height="auto"===f?l.height:f),u&&0!==o.verticalAlign&&(i["vertical-align"]=o.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":n.horizontal=e;break;case"top":case"bottom":case"middle":n.vertical=e;break;case"crop":n.slice=!0;break;case"meet":n.slice=!1}})),s.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}(n),s.viewBox=l.left+" "+l.top+" "+l.width+" "+l.height;var b=e.replaceIDs(o.body);return void 0!==t.color&&(b=b.replace(/currentColor/g,t.color)),m.length&&(b='<g transform="'+m.join(" ")+'">'+b+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(b+='<rect x="'+l.left+'" y="'+l.top+'" width="'+l.width+'" height="'+l.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:s,body:b,style:i}}},{key:"getSVG",value:function(t,o){var n=e.splitAttributes(t),r=this.getAttributes(n.icon),a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return o&&Object.keys(n.node).forEach((function(e){a+=" "+e+'="'+n.node[e]+'"'})),Object.keys(r.attributes).forEach((function(e){a+=" "+e+'="'+r.attributes[e]+'"'})),a+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(r.style).forEach((function(e){a+=" "+e+": "+r.style[e]+";"})),t&&void 0!==t.style&&(a+=t.style),a+='">',a+=r.body+"</svg>"}}])&&i(t.prototype,o),n&&i(t,n),e}();function p(e,t){if("object"!==a(e.icon))return null;var o=h.splitAttributes(e),n=o.icon,i=o.node;delete i.icon,void 0===n.inline&&(n.inline=t);var s=new h(function(e){var t,o=Object.create(null);for(t in d)o[t]=d[t];for(t in e)o[t]=e[t];return void 0===o.inlineTop&&(o.inlineTop=o.top),void 0===o.inlineHeight&&(o.inlineHeight=o.height),void 0===o.verticalAlign&&(o.verticalAlign=o.height%7==0&&o.height%8!=0?-.143:-.125),o}(e.icon)).getAttributes(n),u={transform:"rotate(360deg)"};if(void 0!==s.style["vertical-align"]&&(u.verticalAlign=s.style["vertical-align"]),void 0!==e.style)for(var l in e.style)u[l]=e.style[l];var c,p={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:u};for(c in i)p[c]=i[c];for(c in s.attributes)p[c]=s.attributes[c];return p.dangerouslySetInnerHTML={__html:s.body},r.default.createElement("svg",p,null)}var m=function(e){return p(e,!1)};t.Icon=m;t.InlineIcon=function(e){return p(e,!0)};var v=m;t.default=v},"8k0H":function(e,t,o){"use strict";o("q1tI");var n=o("dCk4"),r=o("2QYI"),a=(o("EgAo"),o("AeFk"));t.a=function(e){var t=e.children;return Object(a.a)(n.a,{theme:r.a},t)}},"9mE6":function(e,t){t.__esModule=!0,t.default={body:'<path d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',width:24,height:24}},CNZd:function(e,t,o){},EBAg:function(e,t,o){},EgAo:function(e,t,o){},GtMS:function(e,t){t.__esModule=!0,t.default={body:'<path d="M11.5 12l8.5 6V6m-9 12V6l-8.5 6l8.5 6z" fill="currentColor"/>',width:24,height:24}},LbRr:function(e,t,o){"use strict";o("q1tI");var n=o("VdAu"),r=o("AeFk");t.a=function(e){var t=e.children,o=e.c,a=e.fontSize;return Object(r.a)(n.c,{fontSize:a,py:4,sx:{color:""+o,fontFamily:"Rozha One",fontWeight:"normal",textShadow:"1px 1px #4c4c4c47"}},t)}},OHh6:function(e,t){t.__esModule=!0,t.default={body:'<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z" fill="currentColor"/>',width:24,height:24}},P9E3:function(e,t,o){e.exports=o.p+"static/audio-752cef99fab52c793fd26ff93faa22f5.mp3"},WEVi:function(e,t){t.__esModule=!0,t.default={body:'<path d="M3 9h4l5-5v16l-5-5H3V9m13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59L16.59 12z" fill="currentColor"/>',width:24,height:24}},fItr:function(e,t,o){"use strict";o("q1tI"),o("6bh+");var n=o("AeFk");t.a=function(){return Object(n.a)("div",{id:"footerContainer"},Object(n.a)("hr",{id:"footerBorder"}),Object(n.a)("footer",null,"© Lauren Cochran | Design by her awesome brother"))}},gfl7:function(e,t){t.__esModule=!0,t.default={body:'<path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27l-3-3M17 13h2v4.18l-2-2V13m0-8V2l4 4l-4 4V7H8.82l-2-2H17z" fill="currentColor"/>',width:24,height:24}},oJqr:function(e,t){t.__esModule=!0,t.default={body:'<path d="M13 6v12l8.5-6M4 18l8.5-6L4 6v12z" fill="currentColor"/>',width:24,height:24}},qJpP:function(e,t){t.__esModule=!0,t.default={body:'<path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z" fill="currentColor"/>',width:24,height:24}},sCTh:function(e,t){t.__esModule=!0,t.default={body:'<path d="M6 18V6h2v12H6m3.5-6L18 6v12l-8.5-6z" fill="currentColor"/>',width:24,height:24}},sRb4:function(e,t){t.__esModule=!0,t.default={body:'<path d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2V7z" fill="currentColor"/>',width:24,height:24}},uikH:function(e,t,o){"use strict";o("q1tI");var n=o("VdAu"),r=o("Wbzz"),a=(o("CNZd"),o("AeFk"));t.a=function(e){var t=e.bg;return Object(a.a)(n.b,{className:"nav",px:2,bg:t},Object(a.a)(n.e,{p:3,color:"white"},"YARR"),Object(a.a)(n.a,{mx:"auto"}),Object(a.a)(n.e,{p:3},Object(a.a)(r.a,{variant:"nav",p:3,to:"/",className:"nav-link"},"Home")," ",Object(a.a)(r.a,{variant:"nav",p:3,to:"/work",className:"nav-link"},"Work")))}},y7wA:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),a=o("VdAu"),i=o("fItr"),s=o("LbRr"),u=o("8k0H"),l=o("uikH"),c=o("PJYZ"),d=o.n(c),h=o("VbXa"),p=o.n(h),m=o("lSNA"),v=o.n(m),f=o("8jAD"),g=o("9mE6"),w=o.n(g),b=o("zqQw"),y=o.n(b),E=o("sCTh"),A=o.n(E),T=o("qJpP"),O=o.n(T),M=o("oJqr"),C=o.n(M),L=o("GtMS"),k=o.n(L),P=o("OHh6"),_=o.n(P),D=o("WEVi"),S=o.n(D),V=o("sRb4"),N=o.n(V),I=o("gfl7"),x=o.n(I),F=o("pVnL"),R=o.n(F),U=function(e){switch(e){case"stacked":return"rhap_stacked";case"stacked-reverse":return"rhap_stacked-reverse";case"horizontal":return"rhap_horizontal";case"horizontal-reverse":return"rhap_horizontal-reverse";default:return"rhap_stacked"}},j=function(e){return e instanceof MouseEvent?e.clientX:e.touches[0].clientX},B=function(e){return e>9?e.toString():"0"+e},z=function(e,t,o){if(!isFinite(e))return null;var n=Math.floor(e/60),r=B(n),a=B(Math.floor(e%60)),i=B(Math.floor(n%60)),s=r+":"+a,u=Math.floor(n/60)+":"+i+":"+a;return"auto"===o?t>=3600?u:s:"mm:ss"===o?s:"hh:mm:ss"===o?u:void 0};function W(e,t){var o=!1;return function(n){o||(e(n),o=!0,setTimeout((function(){return o=!1}),t))}}var J,H=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,v()(d()(t),"audio",void 0),v()(d()(t),"timeOnMouseMove",0),v()(d()(t),"hasAddedAudioEventListener",!1),v()(d()(t),"downloadProgressAnimationTimer",void 0),v()(d()(t),"state",{isDraggingProgress:!1,currentTimePos:"0%",hasDownloadProgressAnimation:!1,downloadProgressArr:[],waitingForSeekCallback:!1}),v()(d()(t),"getCurrentProgress",(function(e){var o=t.props,n=o.audio,r=o.progressBar;if(0!==n.src.indexOf("blob:")&&void 0===t.props.srcDuration&&(!n.src||!isFinite(n.currentTime)||!r.current))return{currentTime:0,currentTimePos:"0%"};var a=r.current.getBoundingClientRect(),i=a.width,s=j(e)-a.left;return s<0?s=0:s>i&&(s=i),{currentTime:t.getDuration()*s/i,currentTimePos:(s/i*100).toFixed(2)+"%"}})),v()(d()(t),"handleContextMenu",(function(e){e.preventDefault()})),v()(d()(t),"handleMouseDownOrTouchStartProgressBar",(function(e){e.stopPropagation();var o=t.getCurrentProgress(e.nativeEvent),n=o.currentTime,r=o.currentTimePos;isFinite(n)&&(t.timeOnMouseMove=n,t.setState({isDraggingProgress:!0,currentTimePos:r}),e.nativeEvent instanceof MouseEvent?(window.addEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.addEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.addEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.addEventListener("touchend",t.handleWindowMouseOrTouchUp)))})),v()(d()(t),"handleWindowMouseOrTouchMove",(function(e){e.preventDefault(),e.stopPropagation();var o=window.getSelection();if(o&&"Range"===o.type&&o.empty(),t.state.isDraggingProgress){var n=t.getCurrentProgress(e),r=n.currentTime,a=n.currentTimePos;t.timeOnMouseMove=r,t.setState({currentTimePos:a})}})),v()(d()(t),"handleWindowMouseOrTouchUp",(function(e){e.stopPropagation();var o=t.timeOnMouseMove,n=t.props.onSeek;n?t.setState({isDraggingProgress:!1,waitingForSeekCallback:!0},(function(){n(t.props.audio,o).then((function(){return t.setState({waitingForSeekCallback:!1})}))})):(isFinite(o)&&(t.props.audio.currentTime=o),t.setState({isDraggingProgress:!1})),e instanceof MouseEvent?(window.removeEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.removeEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.removeEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.removeEventListener("touchend",t.handleWindowMouseOrTouchUp))})),v()(d()(t),"handleAudioTimeUpdate",W((function(e){var o=t.state.isDraggingProgress,n=e.target;if(!o&&!0!==t.state.waitingForSeekCallback){var r=n.currentTime,a=t.getDuration();t.setState({currentTimePos:(r/a*100||0).toFixed(2)+"%"})}}),t.props.progressUpdateInterval)),v()(d()(t),"handleAudioDownloadProgressUpdate",(function(e){for(var o=e.target,n=t.getDuration(),r=[],a=0;a<o.buffered.length;a++){var i=o.buffered.start(a),s=o.buffered.end(a);r.push({left:(Math.round(100/n*i)||0)+"%",width:(Math.round(100/n*(s-i))||0)+"%"})}clearTimeout(t.downloadProgressAnimationTimer),t.setState({downloadProgressArr:r,hasDownloadProgressAnimation:!0}),t.downloadProgressAnimationTimer=setTimeout((function(){t.setState({hasDownloadProgressAnimation:!1})}),200)})),t}p()(t,e);var o=t.prototype;return o.getDuration=function(){var e=this.props,t=e.audio,o=e.srcDuration;return void 0===o?t.duration:o},o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("timeupdate",this.handleAudioTimeUpdate),e.addEventListener("progress",this.handleAudioDownloadProgressUpdate))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("timeupdate",this.handleAudioTimeUpdate),this.audio.removeEventListener("progress",this.handleAudioDownloadProgressUpdate)),clearTimeout(this.downloadProgressAnimationTimer)},o.render=function(){var e=this.props,t=e.showDownloadProgress,o=e.showFilledProgress,n=e.progressBar,a=this.state,i=a.currentTimePos,s=a.downloadProgressArr,u=a.hasDownloadProgressAnimation;return r.a.createElement("div",{className:"rhap_progress-container",ref:n,"aria-label":"Audio Progress Control",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Number(i.split("%")[0]),tabIndex:0,onMouseDown:this.handleMouseDownOrTouchStartProgressBar,onTouchStart:this.handleMouseDownOrTouchStartProgressBar,onContextMenu:this.handleContextMenu},r.a.createElement("div",{className:"rhap_progress-bar "+(t?"rhap_progress-bar-show-download":"")},r.a.createElement("div",{className:"rhap_progress-indicator",style:{left:i}}),o&&r.a.createElement("div",{className:"rhap_progress-filled",style:{width:i}}),t&&s.map((function(e,t){var o=e.left,n=e.width;return r.a.createElement("div",{key:t,className:"rhap_download-progress",style:{left:o,width:n,transitionDuration:u?".2s":"0s"}})}))))},t}(n.Component),q=Object(n.forwardRef)((function(e,t){return r.a.createElement(H,R()({},e,{progressBar:t}))})),G=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,v()(d()(t),"audio",void 0),v()(d()(t),"hasAddedAudioEventListener",!1),v()(d()(t),"state",{currentTime:t.props.defaultCurrentTime}),v()(d()(t),"handleAudioCurrentTimeChange",(function(e){var o=e.target,n=t.props,r=n.isLeftTime,a=n.timeFormat,i=n.defaultCurrentTime;t.setState({currentTime:z(r?o.duration-o.currentTime:o.currentTime,o.duration,a)||i})})),t}p()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("timeupdate",this.handleAudioCurrentTimeChange),e.addEventListener("loadedmetadata",this.handleAudioCurrentTimeChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("timeupdate",this.handleAudioCurrentTimeChange),this.audio.removeEventListener("loadedmetadata",this.handleAudioCurrentTimeChange))},o.render=function(){return this.state.currentTime},t}(n.PureComponent),Y=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,v()(d()(t),"audio",void 0),v()(d()(t),"hasAddedAudioEventListener",!1),v()(d()(t),"state",{duration:t.props.defaultDuration}),v()(d()(t),"handleAudioDurationChange",(function(e){var o=e.target,n=t.props,r=n.timeFormat,a=n.defaultDuration;t.setState({duration:z(o.duration,o.duration,r)||a})})),t}p()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("durationchange",this.handleAudioDurationChange),e.addEventListener("abort",this.handleAudioDurationChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&(this.audio.removeEventListener("durationchange",this.handleAudioDurationChange),this.audio.removeEventListener("abort",this.handleAudioDurationChange))},o.render=function(){return this.state.duration},t}(n.PureComponent),K=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,v()(d()(t),"audio",void 0),v()(d()(t),"hasAddedAudioEventListener",!1),v()(d()(t),"volumeBar",Object(n.createRef)()),v()(d()(t),"volumeAnimationTimer",0),v()(d()(t),"lastVolume",t.props.volume),v()(d()(t),"state",{currentVolumePos:(t.lastVolume/1*100||0).toFixed(2)+"%",hasVolumeAnimation:!1,isDraggingVolume:!1}),v()(d()(t),"getCurrentVolume",(function(e){var o=t.props.audio;if(!t.volumeBar.current)return{currentVolume:o.volume,currentVolumePos:t.state.currentVolumePos};var n,r,a=t.volumeBar.current.getBoundingClientRect(),i=a.width,s=j(e)-a.left;return s<0?(n=0,r="0%"):s>a.width?(n=1,r="100%"):(n=s/i,r=s/i*100+"%"),{currentVolume:n,currentVolumePos:r}})),v()(d()(t),"handleContextMenu",(function(e){e.preventDefault()})),v()(d()(t),"handleClickVolumeButton",(function(){var e=t.props.audio;e.volume>0?(t.lastVolume=e.volume,e.volume=0):e.volume=t.lastVolume})),v()(d()(t),"handleVolumnControlMouseOrTouchDown",(function(e){e.stopPropagation();var o=t.props.audio,n=t.getCurrentVolume(e.nativeEvent),r=n.currentVolume,a=n.currentVolumePos;o.volume=r,t.setState({isDraggingVolume:!0,currentVolumePos:a}),e.nativeEvent instanceof MouseEvent?(window.addEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.addEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.addEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.addEventListener("touchend",t.handleWindowMouseOrTouchUp))})),v()(d()(t),"handleWindowMouseOrTouchMove",(function(e){e.preventDefault(),e.stopPropagation();var o=t.props.audio,n=window.getSelection();if(n&&"Range"===n.type&&n.empty(),t.state.isDraggingVolume){var r=t.getCurrentVolume(e),a=r.currentVolume,i=r.currentVolumePos;o.volume=a,t.setState({currentVolumePos:i})}})),v()(d()(t),"handleWindowMouseOrTouchUp",(function(e){e.stopPropagation(),t.setState({isDraggingVolume:!1}),e instanceof MouseEvent?(window.removeEventListener("mousemove",t.handleWindowMouseOrTouchMove),window.removeEventListener("mouseup",t.handleWindowMouseOrTouchUp)):(window.removeEventListener("touchmove",t.handleWindowMouseOrTouchMove),window.removeEventListener("touchend",t.handleWindowMouseOrTouchUp))})),v()(d()(t),"handleAudioVolumeChange",(function(e){var o=t.state.isDraggingVolume,n=e.target.volume;(t.lastVolume>0&&0===n||0===t.lastVolume&&n>0)&&t.props.onMuteChange(),t.lastVolume=n,o||(t.setState({hasVolumeAnimation:!0,currentVolumePos:(n/1*100||0).toFixed(2)+"%"}),clearTimeout(t.volumeAnimationTimer),t.volumeAnimationTimer=setTimeout((function(){t.setState({hasVolumeAnimation:!1})}),100))})),t}p()(t,e);var o=t.prototype;return o.componentDidUpdate=function(){var e=this.props.audio;e&&!this.hasAddedAudioEventListener&&(this.audio=e,this.hasAddedAudioEventListener=!0,e.addEventListener("volumechange",this.handleAudioVolumeChange))},o.componentWillUnmount=function(){this.audio&&this.hasAddedAudioEventListener&&this.audio.removeEventListener("volumechange",this.handleAudioVolumeChange),clearTimeout(this.volumeAnimationTimer)},o.render=function(){var e=this.props,t=e.audio,o=e.showFilledVolume,n=this.state,a=n.currentVolumePos,i=n.hasVolumeAnimation,s=(t||{}).volume;return r.a.createElement("div",{ref:this.volumeBar,onMouseDown:this.handleVolumnControlMouseOrTouchDown,onTouchStart:this.handleVolumnControlMouseOrTouchDown,onContextMenu:this.handleContextMenu,role:"progressbar","aria-label":"volume Control","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Number((100*s).toFixed(0)),tabIndex:0,className:"rhap_volume-bar-area"},r.a.createElement("div",{className:"rhap_volume-bar"},r.a.createElement("div",{className:"rhap_volume-indicator",style:{left:a,transitionDuration:i?".1s":"0s"}}),o&&r.a.createElement("div",{className:"rhap_volume-filled",style:{width:a}})))},t}(n.Component);!function(e){e.CURRENT_TIME="CURRENT_TIME",e.CURRENT_LEFT_TIME="CURRENT_LEFT_TIME",e.PROGRESS_BAR="PROGRESS_BAR",e.DURATION="DURATION",e.ADDITIONAL_CONTROLS="ADDITIONAL_CONTROLS",e.MAIN_CONTROLS="MAIN_CONTROLS",e.VOLUME_CONTROLS="VOLUME_CONTROLS",e.LOOP="LOOP",e.VOLUME="VOLUME"}(J||(J={}));var Q=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,v()(d()(t),"audio",Object(n.createRef)()),v()(d()(t),"progressBar",Object(n.createRef)()),v()(d()(t),"container",Object(n.createRef)()),v()(d()(t),"lastVolume",t.props.volume),v()(d()(t),"listenTracker",void 0),v()(d()(t),"volumeAnimationTimer",void 0),v()(d()(t),"downloadProgressAnimationTimer",void 0),v()(d()(t),"togglePlay",(function(e){e.stopPropagation();var o=t.audio.current;o.paused&&o.src?t.playAudioPromise():o.paused||o.pause()})),v()(d()(t),"playAudioPromise",(function(){t.audio.current.play().then(null).catch((function(e){var o=t.props.onPlayError;o&&o(new Error(e))}))})),v()(d()(t),"isPlaying",(function(){var e=t.audio.current;return!!e&&(!e.paused&&!e.ended)})),v()(d()(t),"handlePlay",(function(e){t.forceUpdate(),t.props.onPlay&&t.props.onPlay(e)})),v()(d()(t),"handlePause",(function(e){t.audio&&(t.forceUpdate(),t.props.onPause&&t.props.onPause(e))})),v()(d()(t),"handleAbort",(function(e){t.props.onAbort&&t.props.onAbort(e)})),v()(d()(t),"handleClickVolumeButton",(function(){var e=t.audio.current;e.volume>0?(t.lastVolume=e.volume,e.volume=0):e.volume=t.lastVolume})),v()(d()(t),"handleMuteChange",(function(){t.forceUpdate()})),v()(d()(t),"handleClickLoopButton",(function(){t.audio.current.loop=!t.audio.current.loop,t.forceUpdate()})),v()(d()(t),"handleClickRewind",(function(){var e=t.props,o=e.progressJumpSteps,n=e.progressJumpStep,r=o.backward||n;t.setJumpTime(-r)})),v()(d()(t),"handleClickForward",(function(){var e=t.props,o=e.progressJumpSteps,n=e.progressJumpStep,r=o.forward||n;t.setJumpTime(r)})),v()(d()(t),"setJumpTime",(function(e){var o=t.audio.current,n=o.duration,r=o.currentTime;if(isFinite(n)&&isFinite(r)){var a=r+e/1e3;a<0?(o.currentTime=0,a=0):a>n?(o.currentTime=n,a=n):o.currentTime=a}})),v()(d()(t),"setJumpVolume",(function(e){var o=t.audio.current.volume+e;o<0?o=0:o>1&&(o=1),t.audio.current.volume=o})),v()(d()(t),"handleKeyDown",(function(e){switch(e.keyCode){case 32:e.target!==t.container.current&&e.target!==t.progressBar.current||(e.preventDefault(),t.togglePlay(e));break;case 37:t.handleClickRewind();break;case 39:t.handleClickForward();break;case 38:e.preventDefault(),t.setJumpVolume(t.props.volumeJumpStep);break;case 40:e.preventDefault(),t.setJumpVolume(-t.props.volumeJumpStep);break;case 76:t.handleClickLoopButton();break;case 77:t.handleClickVolumeButton()}})),v()(d()(t),"renderUIModules",(function(e){return e.map((function(e,o){return t.renderUIModule(e,o)}))})),v()(d()(t),"renderUIModule",(function(e,o){var a=t.props,i=a.defaultCurrentTime,s=a.progressUpdateInterval,u=a.showDownloadProgress,l=a.showFilledProgress,c=a.showFilledVolume,d=a.defaultDuration,h=a.customIcons,p=a.showSkipControls,m=a.onClickPrevious,v=a.onClickNext,g=a.showJumpControls,b=a.customAdditionalControls,E=a.customVolumeControls,T=a.muted,M=a.timeFormat,L=a.volume,P=a.loop,D=a.mse;switch(e){case J.CURRENT_TIME:return r.a.createElement("div",{key:o,id:"rhap_current-time",className:"rhap_time rhap_current-time"},r.a.createElement(G,{audio:t.audio.current,isLeftTime:!1,defaultCurrentTime:i,timeFormat:M}));case J.CURRENT_LEFT_TIME:return r.a.createElement("div",{key:o,id:"rhap_current-left-time",className:"rhap_time rhap_current-left-time"},r.a.createElement(G,{audio:t.audio.current,isLeftTime:!0,defaultCurrentTime:i,timeFormat:M}));case J.PROGRESS_BAR:return r.a.createElement(q,{key:o,ref:t.progressBar,audio:t.audio.current,progressUpdateInterval:s,showDownloadProgress:u,showFilledProgress:l,onSeek:D&&D.onSeek,srcDuration:D&&D.srcDuration});case J.DURATION:return r.a.createElement("div",{key:o,className:"rhap_time rhap_total-time"},D&&D.srcDuration?z(D.srcDuration,D.srcDuration,t.props.timeFormat):r.a.createElement(Y,{audio:t.audio.current,defaultDuration:d,timeFormat:M}));case J.ADDITIONAL_CONTROLS:return r.a.createElement("div",{key:o,className:"rhap_additional-controls"},t.renderUIModules(b));case J.MAIN_CONTROLS:var V,I=t.isPlaying();return V=I?h.pause?h.pause:r.a.createElement(f.Icon,{icon:y.a}):h.play?h.play:r.a.createElement(f.Icon,{icon:w.a}),r.a.createElement("div",{key:o,className:"rhap_main-controls"},p&&r.a.createElement("button",{"aria-label":"Previous",className:"rhap_button-clear rhap_main-controls-button rhap_skip-button",type:"button",onClick:m},h.previous?h.previous:r.a.createElement(f.Icon,{icon:A.a})),g&&r.a.createElement("button",{"aria-label":"Rewind",className:"rhap_button-clear rhap_main-controls-button rhap_rewind-button",type:"button",onClick:t.handleClickRewind},h.rewind?h.rewind:r.a.createElement(f.Icon,{icon:k.a})),r.a.createElement("button",{"aria-label":I?"Pause":"Play",className:"rhap_button-clear rhap_main-controls-button rhap_play-pause-button",type:"button",onClick:t.togglePlay},V),g&&r.a.createElement("button",{"aria-label":"Forward",className:"rhap_button-clear rhap_main-controls-button rhap_forward-button",type:"button",onClick:t.handleClickForward},h.forward?h.forward:r.a.createElement(f.Icon,{icon:C.a})),p&&r.a.createElement("button",{"aria-label":"Skip",className:"rhap_button-clear rhap_main-controls-button rhap_skip-button",type:"button",onClick:v},h.next?h.next:r.a.createElement(f.Icon,{icon:O.a})));case J.VOLUME_CONTROLS:return r.a.createElement("div",{key:o,className:"rhap_volume-controls"},t.renderUIModules(E));case J.LOOP:var F,R=t.audio.current?t.audio.current.loop:P;return F=R?h.loop?h.loop:r.a.createElement(f.Icon,{icon:N.a}):h.loopOff?h.loopOff:r.a.createElement(f.Icon,{icon:x.a}),r.a.createElement("button",{key:o,"aria-label":R?"Enable Loop":"Disable Loop",className:"rhap_button-clear rhap_repeat-button",type:"button",onClick:t.handleClickLoopButton},F);case J.VOLUME:var U,j=(t.audio.current||{}).volume,B=void 0===j?T?0:L:j;return U=B?h.volume?h.volume:r.a.createElement(f.Icon,{icon:_.a}):h.volume?h.volumeMute:r.a.createElement(f.Icon,{icon:S.a}),r.a.createElement("div",{key:o,className:"rhap_volume-container"},r.a.createElement("button",{"aria-label":B?"Mute":"Unmute",onClick:t.handleClickVolumeButton,type:"button",className:"rhap_button-clear rhap_volume-button"},U),r.a.createElement(K,{audio:t.audio.current,volume:B,onMuteChange:t.handleMuteChange,showFilledVolume:c}));default:return Object(n.isValidElement)(e)?e.key?e:Object(n.cloneElement)(e,{key:o}):null}})),t}p()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;this.forceUpdate();var t=this.audio.current;this.props.muted?t.volume=0:t.volume=this.lastVolume,t.addEventListener("error",(function(t){e.props.onError&&e.props.onError(t)})),t.addEventListener("canplay",(function(t){e.props.onCanPlay&&e.props.onCanPlay(t)})),t.addEventListener("canplaythrough",(function(t){e.props.onCanPlayThrough&&e.props.onCanPlayThrough(t)})),t.addEventListener("play",this.handlePlay),t.addEventListener("abort",this.handleAbort),t.addEventListener("ended",(function(t){e.props.onEnded&&e.props.onEnded(t)})),t.addEventListener("pause",this.handlePause),t.addEventListener("timeupdate",W((function(t){e.props.onListen&&e.props.onListen(t)}),this.props.listenInterval)),t.addEventListener("volumechange",(function(t){e.props.onVolumeChange&&e.props.onVolumeChange(t)})),t.addEventListener("encrypted",(function(t){var o=e.props.mse;o&&o.onEcrypted&&o.onEcrypted(t)}))},o.componentDidUpdate=function(e){var t=this.props,o=t.src,n=t.autoPlayAfterSrcChange;e.src!==o&&(n?this.playAudioPromise():this.forceUpdate())},o.componentWillUnmount=function(){var e=this.audio.current;e&&(e.removeEventListener("play",this.handlePlay),e.removeEventListener("pause",this.handlePause),e.removeEventListener("abort",this.handleAbort),e.removeAttribute("src"),e.load())},o.render=function(){var e=this.props,t=e.className,o=e.src,n=e.loop,a=e.preload,i=e.autoPlay,s=e.crossOrigin,u=e.mediaGroup,l=e.header,c=e.footer,d=e.layout,h=e.customProgressBarSection,p=e.customControlsSection,m=e.children,v=e.style,f=this.audio.current?this.audio.current.loop:n;return r.a.createElement("div",{role:"group",tabIndex:0,"aria-label":"Audio Player",className:"rhap_container "+t,onKeyDown:this.handleKeyDown,ref:this.container,style:v},r.a.createElement("audio",{src:o,controls:!1,loop:f,autoPlay:i,preload:a,crossOrigin:s,mediaGroup:u,ref:this.audio},m),l&&r.a.createElement("div",{className:"rhap_header"},l),r.a.createElement("div",{className:"rhap_main "+U(d)},r.a.createElement("div",{className:"rhap_progress-section"},this.renderUIModules(h)),r.a.createElement("div",{className:"rhap_controls-section"},this.renderUIModules(p))),c&&r.a.createElement("div",{className:"rhap_footer"},c))},t}(n.Component);v()(Q,"defaultProps",{autoPlay:!1,autoPlayAfterSrcChange:!0,listenInterval:1e3,progressJumpStep:5e3,progressJumpSteps:{},volumeJumpStep:.1,loop:!1,muted:!1,preload:"auto",progressUpdateInterval:20,defaultCurrentTime:"--:--",defaultDuration:"--:--",timeFormat:"auto",volume:1,className:"",showJumpControls:!0,showSkipControls:!1,showDownloadProgress:!0,showFilledProgress:!0,showFilledVolume:!1,customIcons:{},customProgressBarSection:[J.CURRENT_TIME,J.PROGRESS_BAR,J.DURATION],customControlsSection:[J.ADDITIONAL_CONTROLS,J.MAIN_CONTROLS,J.VOLUME_CONTROLS],customAdditionalControls:[J.LOOP],customVolumeControls:[J.VOLUME],layout:"stacked"});var X=Q,Z=(o("EBAg"),o("P9E3")),$=o.n(Z),ee=o("AeFk"),te=function(){return Object(ee.a)(X,{autoPlay:!0,src:$.a,onPlay:function(e){return console.log("onPlay")},style:{width:"80%"}})};t.default=function(){return Object(ee.a)(u.a,null,Object(ee.a)(l.a,{bg:"purplePrimary"}),Object(ee.a)(a.a,{sx:{maxWidth:768,mx:"auto",px:3,textAlign:"center"}},Object(ee.a)(s.a,{c:"black",fontSize:[4,5,6]},"Listen, Listen")),Object(ee.a)("div",{style:{textAlign:"-webkit-center"}},Object(ee.a)(te,null)),Object(ee.a)(a.a,{sx:{maxWidth:768,mx:"auto",px:3,py:4}},Object(ee.a)(a.e,{c:"black",fontSize:[2,3,4],className:"textBody"},"The theme that I chose to center my project around was the difference and relationship between linear time and our perception of it. I wanted to create something that would reflect some of my experiences I have had while walking around the city through a short narrative."),Object(ee.a)("br",null),Object(ee.a)(a.e,{c:"black",fontSize:[2,3,4],className:"textBody"},"Throughout my sound design, there is a constant beeping from a pedestrian crossing in the background which beeps every second. This is an indicator of the passage of time that is constant and regular. Although it is not always noticeable and can be easily covered up, it is always there."),Object(ee.a)("br",null),Object(ee.a)(a.e,{c:"black",fontSize:[2,3,4],className:"textBody"},"The new sounds that are later brought in, represent the person’s narrative we are following. As this person is walking throughout Providence, they hear sounds of children playing, doors opening and closing, regular hussle of the city. However, there are slight distortions in the sounds. Some parts are sped up, slowed down, and/or with a variation in pitch. From the point of view of the person whom we are following along with, this manipulation of the sound signifies the change of their perception of time and separation of the normal, linear concept of time. These represent moments when you may be getting lost in thought when 5 minutes seems like it turns into 5 seconds or vice versa. Time is still passing, getting louder, more apparent to this person, but there is a slight disconnection at times."),Object(ee.a)("br",null),Object(ee.a)(a.e,{c:"black",fontSize:[2,3,4],className:"textBody"},"The second part of the narrative after the build up of music and overwhelming white noise, is the person getting in their car. As they begin to drive (indicated by the start of the music and key noises), their disconnection with linear time grows, as sounds begin to distort into unrecognizable tones with different amplifications that can make it feel disorienting. After the person gets out of their car, is the first break of the constant beeps thus far. This person’s view of the concept of time is beginning to collapse to the point where their perception seems to be blending into reality, or so it feels."),Object(ee.a)("br",null),Object(ee.a)(a.e,{c:"black",fontSize:[2,3,4],className:"textBody"},"As the person is now out of their car and walking about again, the sounds they hear are ordinary. There’re busses passing, people talking, people walking, but they don’t sound like that anymore. They’re so broken down that they are unrecognizable. They get louder and louder with the beeping, until it cuts off and time stops again. A few moments pass and we can hear the person breathing heavily. The representation of linear time (beeping) has been stopped, but the person holds this power now. Each inhalation and exhalation marks one second passing, so although the beeping has ended, time refuses to stop and carries itself through this person. The breathing eventually ceases, and time regains its strength to start again.")),Object(ee.a)(i.a,null))}},zqQw:function(e,t){t.__esModule=!0,t.default={body:'<path d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',width:24,height:24}}}]);
//# sourceMappingURL=component---src-pages-sound-js-eea9f719113a560bc24e.js.map