/*!
 * ol-geocoder - v4.2.1
 * A geocoder extension compatible with OpenLayers v7+ & v8+
 * https://github.com/Dominique92/ol-geocoder
 * Built: Mon Sep 04 2023 10:40:32 GMT+0200 (heure d’été d’Europe centrale)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ol/control/Control"),require("ol/style/Style"),require("ol/style/Icon"),require("ol/layer/Vector"),require("ol/source/Vector"),require("ol/geom/Point"),require("ol/Feature"),require("ol/proj")):"function"==typeof define&&define.amd?define(["ol/control/Control","ol/style/Style","ol/style/Icon","ol/layer/Vector","ol/source/Vector","ol/geom/Point","ol/Feature","ol/proj"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Geocoder=t(e.ol.control.Control,e.ol.style.Style,e.ol.style.Icon,e.ol.layer.Vector,e.ol.source.Vector,e.ol.geom.Point,e.ol.Feature,e.ol.proj)}(this,(function(e,t,s,r,n,o,a,i){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}var d=l(e),u=l(t),p=l(s),h=l(r),m=l(n),g=l(o),y=l(a),f=c(i),b="gcd-container",v="gcd-button-control",w="gcd-input-query",x="gcd-input-reset",k={namespace:"ol-geocoder",spin:"gcd-pseudo-rotate",hidden:"gcd-hidden",address:"gcd-address",country:"gcd-country",city:"gcd-city",road:"gcd-road",olControl:"ol-control",glass:{container:"gcd-gl-container",control:"gcd-gl-control",button:"gcd-gl-btn",input:"gcd-gl-input",expanded:"gcd-gl-expanded",reset:"gcd-gl-reset",result:"gcd-gl-result"},inputText:{container:"gcd-txt-container",control:"gcd-txt-control",input:"gcd-txt-input",reset:"gcd-txt-reset",icon:"gcd-txt-glass",result:"gcd-txt-result"}},$={containerId:b,buttonControlId:v,inputQueryId:w,inputResetId:x,cssClasses:k};const q=Object.freeze({__proto__:null,containerId:b,buttonControlId:v,inputQueryId:w,inputResetId:x,cssClasses:k,default:$}),C="addresschosen",j="nominatim",S="reverse",L="glass-button",E="text-input",T="osm",N="mapquest",P="photon",R="bing",A="opencage",I={provider:T,placeholder:"Search for an address",featureStyle:null,targetType:L,lang:"en-US",limit:5,keepOpen:!1,preventDefault:!1,autoComplete:!1,autoCompleteMinLength:2,autoCompleteTimeout:200,debug:!1};function O(e,t="Assertion failed"){if(!e){if("undefined"!=typeof Error)throw new Error(t);throw t}}function F(e){const t=function(){if("performance"in window==0&&(window.performance={}),"now"in window.performance==0){let e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),window.performance.now=()=>Date.now()-e}return window.performance.now()}().toString(36);return e?e+t:t}function _(e){return/^\d+$/u.test(e)}function M(e,t,s){if(Array.isArray(e))return void e.forEach((e=>M(e,t)));const r=Array.isArray(t)?t:t.split(/\s+/u);let n=r.length;for(;n--;)V(e,r[n])||G(e,r[n],s)}function D(e,t,s){if(Array.isArray(e))return void e.forEach((e=>D(e,t,s)));const r=Array.isArray(t)?t:t.split(/\s+/u);let n=r.length;for(;n--;)V(e,r[n])&&z(e,r[n],s)}function V(e,t){return e.classList?e.classList.contains(t):U(t).test(e.className)}function Q(e,t){return e.replace(/\{\s*([\w-]+)\s*\}/gu,((e,s)=>{const r=void 0===t[s]?"":t[s];return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}))}function B(e,t){let s;if(Array.isArray(e)){if(s=document.createElement(e[0]),e[1].id&&(s.id=e[1].id),e[1].classname&&(s.className=e[1].classname),e[1].attr){const{attr:t}=e[1];if(Array.isArray(t)){let e=-1;for(;++e<t.length;)s.setAttribute(t[e].name,t[e].value)}else s.setAttribute(t.name,t.value)}}else s=document.createElement(e);s.innerHTML=t;const r=document.createDocumentFragment();for(;s.childNodes[0];)r.append(s.childNodes[0]);return s.append(r),s}function U(e){return new RegExp(`(^|\\s+) ${e} (\\s+|$)`,"u")}function G(e,t,s){e.classList?e.classList.add(t):e.className=`${e.className} ${t}`.trim(),s&&_(s)&&window.setTimeout((()=>z(e,t)),s)}function z(e,t,s){e.classList?e.classList.remove(t):e.className=e.className.replace(U(t)," ").trim(),s&&_(s)&&window.setTimeout((()=>G(e,t)),s)}const H=q.cssClasses;class K{constructor(e){this.options=e,this.els=this.createControl()}createControl(){let e,t,s;return this.options.targetType===E?(t=`${H.namespace} ${H.inputText.container}`,e=B(["div",{id:q.containerId,classname:t}],K.input),s={container:e,control:e.querySelector(`.${H.inputText.control}`),input:e.querySelector(`.${H.inputText.input}`),reset:e.querySelector(`.${H.inputText.reset}`),result:e.querySelector(`.${H.inputText.result}`)}):(t=`${H.namespace} ${H.glass.container}`,e=B(["div",{id:q.containerId,classname:t}],K.glass),s={container:e,control:e.querySelector(`.${H.glass.control}`),button:e.querySelector(`.${H.glass.button}`),input:e.querySelector(`.${H.glass.input}`),reset:e.querySelector(`.${H.glass.reset}`),result:e.querySelector(`.${H.glass.result}`)}),s.input.placeholder=this.options.placeholder,s}}K.glass=`\n  <div class="${H.glass.control} ${H.olControl}">\n    <button type="button" id="${q.buttonControlId}" class="${H.glass.button}"></button>\n    <input type="text" id="${q.inputQueryId}" class="${H.glass.input}" autocomplete="off" placeholder="Search ...">\n    <a id="${q.inputResetId}" class="${H.glass.reset} ${H.hidden}"></a>\n  </div>\n  <ul class="${H.glass.result}"></ul>\n`,K.input=`\n  <div class="${H.inputText.control}">\n    <input type="text" id="${q.inputQueryId}" class="${H.inputText.input}" autocomplete="off" placeholder="Search ...">\n    <span class="${H.inputText.icon}"></span>\n    <button type="button" id="${q.inputResetId}" class="${H.inputText.reset} ${H.hidden}"></button>\n  </div>\n  <ul class="${H.inputText.result}"></ul>\n`;class J{constructor(){this.settings={url:"https://photon.komoot.io/api/",params:{q:"",limit:10,lang:"en"},langs:["de","it","fr","en"]}}getParameters(e){return e.lang=e.lang.toLowerCase(),{url:this.settings.url,params:{q:e.query,limit:e.limit||this.settings.params.limit,lang:this.settings.langs.includes(e.lang)?e.lang:this.settings.params.lang}}}handleResponse(e){return 0===e.features.length?[]:e.features.map((e=>({lon:e.geometry.coordinates[0],lat:e.geometry.coordinates[1],address:{name:e.properties.name,postcode:e.properties.postcode,city:e.properties.city,state:e.properties.state,country:e.properties.country},original:{formatted:e.properties.name,details:e.properties}})))}}class W{constructor(e){this.settings={url:"https://nominatim.openstreetmap.org/search",...e,params:{q:"",format:"json",addressdetails:1,limit:10,countrycodes:"",viewbox:"","accept-language":"en-US"}}}getParameters(e){return{url:this.settings.url,params:{q:e.query,format:this.settings.params.format,addressdetails:this.settings.params.addressdetails,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,viewbox:e.viewbox||this.settings.params.viewbox,"accept-language":e.lang||this.settings.params["accept-language"]}}}handleResponse(e){return 0===e.length?[]:e.map((e=>({lon:e.lon,lat:e.lat,bbox:e.boundingbox,address:{name:e.display_name,road:e.address.road||"",houseNumber:e.address.house_number||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}})))}}class X{constructor(){this.settings={url:"https://open.mapquestapi.com/nominatim/v1/search.php",params:{q:"",key:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}}getParameters(e){return{url:this.settings.url,params:{q:e.query,key:e.key,format:"json",addressdetails:1,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,"accept-language":e.lang||this.settings.params["accept-language"]}}}handleResponse(e){return 0===e.length?[]:e.map((e=>({lon:e.lon,lat:e.lat,address:{name:e.address.neighbourhood||"",road:e.address.road||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}})))}}class Y{constructor(){this.settings={url:"https://dev.virtualearth.net/REST/v1/Locations",callbackName:"jsonp",params:{query:"",key:"",includeNeighborhood:0,maxResults:10}}}getParameters(e){return{url:this.settings.url,callbackName:this.settings.callbackName,params:{query:e.query,key:e.key,includeNeighborhood:e.includeNeighborhood||this.settings.params.includeNeighborhood,maxResults:e.maxResults||this.settings.params.maxResults}}}handleResponse(e){const{resources:t}=e.resourceSets[0];return 0===t.length?[]:t.map((e=>({lon:e.point.coordinates[1],lat:e.point.coordinates[0],address:{name:e.name},original:{formatted:e.address.formattedAddress,details:e.address}})))}}class Z{constructor(){this.settings={url:"https://api.opencagedata.com/geocode/v1/json?",params:{q:"",key:"",limit:10,countrycode:"",pretty:1,no_annotations:1}}}getParameters(e){return{url:this.settings.url,params:{q:e.query,key:e.key,limit:e.limit||this.settings.params.limit,countrycode:e.countrycodes||this.settings.params.countrycodes}}}handleResponse(e){return 0===e.results.length?[]:e.results.map((e=>({lon:e.geometry.lng,lat:e.geometry.lat,address:{name:e.components.house_number||"",road:e.components.road||"",postcode:e.components.postcode,city:e.components.city||e.components.town,state:e.components.state,country:e.components.country},original:{formatted:e.formatted,details:e.components}})))}}function ee(e){return new Promise(((t,s)=>{const r=function(e,t){t&&"object"==typeof t&&(e+=(/\?/u.test(e)?"&":"?")+te(t));return e}(e.url,e.data),n={method:"GET",mode:"cors",credentials:"same-origin"};e.jsonp?function(e,t,s){const{head:r}=document,n=document.createElement("script"),o=`f${Math.round(Math.random()*Date.now())}`;n.setAttribute("src",`${e+(e.indexOf("?")>0?"&":"?")+t}=${o}`),window[o]=e=>{window[o]=void 0,setTimeout((()=>r.removeChild(n)),0),s(e)},r.append(n)}(r,e.callbackName,t):fetch(r,n).then((e=>e.json())).then(t).catch(s)}))}function te(e){return Object.keys(e).reduce(((t,s)=>(t.push("object"==typeof e[s]?te(e[s]):`${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`),t)),[]).join("&")}const se=q.cssClasses;class re{constructor(e,t){this.Base=e,this.layerName=F("geocoder-layer-"),this.layer=new h.default({name:this.layerName,source:new m.default,displayInLayerSwitcher:!1}),this.options=e.options,this.options.provider="string"==typeof this.options.provider?this.options.provider.toLowerCase():this.options.provider,this.provider=this.newProvider(),this.els=t,this.lastQuery="",this.container=this.els.container,this.registeredListeners={mapClick:!1},this.setListeners()}setListeners(){let e,t;const s=e=>{e.stopPropagation(),V(this.els.control,se.glass.expanded)?this.collapse():this.expand()};this.els.input.addEventListener("keypress",(e=>{const t=e.target.value.trim();(e.key?"Enter"===e.key:e.which?13===e.which:!!e.keyCode&&13===e.keyCode)&&(e.preventDefault(),this.query(t))}),!1),this.els.input.addEventListener("click",(e=>e.stopPropagation()),!1),this.els.input.addEventListener("input",(s=>{const r=s.target.value.trim();0!==r.length?D(this.els.reset,se.hidden):M(this.els.reset,se.hidden),this.options.autoComplete&&r!==t&&(t=r,e&&clearTimeout(e),e=setTimeout((()=>{r.length>=this.options.autoCompleteMinLength&&this.query(r)}),this.options.autoCompleteTimeout))}),!1),this.els.reset.addEventListener("click",(()=>{this.els.input.focus(),this.els.input.value="",this.lastQuery="",M(this.els.reset,se.hidden),this.clearResults()}),!1),this.options.targetType===L&&this.els.button.addEventListener("click",s,!1)}query(e){this.provider||(this.provider=this.newProvider());const t=this.provider.getParameters({query:e,key:this.options.key,lang:this.options.lang,countrycodes:this.options.countrycodes,viewbox:this.options.viewbox,limit:this.options.limit});if(this.lastQuery===e&&this.els.result.firstChild)return;this.lastQuery=e,this.clearResults(),M(this.els.reset,se.spin);const s={url:t.url,data:t.params};t.callbackName&&(s.jsonp=!0,s.callbackName=t.callbackName),ee(s).then((e=>{this.options.debug&&console.info(e),D(this.els.reset,se.spin);const t=this.provider.handleResponse(e);t&&(this.createList(t),this.listenMapClick())})).catch((()=>{D(this.els.reset,se.spin);const e=B("li","<h5>Error! No internet connection?</h5>");this.els.result.append(e)}))}createList(e){const t=this.els.result;e.forEach((e=>{let s;if(this.options.provider===T)s=`<span class="${se.road}">${e.address.name}</span>`;else s=this.addressTemplate(e.address);const r=B("li",`<a href="#">${s}</a>`);r.addEventListener("click",(t=>{t.preventDefault(),this.chosen(e,s,e.address,e.original)}),!1),t.append(r)}))}chosen(e,t,s,r){const n=this.Base.getMap(),o=[Number.parseFloat(e.lon),Number.parseFloat(e.lat)],a=n.getView().getProjection(),i=f.transform(o,"EPSG:4326",a);let{bbox:l}=e;l&&(l=f.transformExtent([parseFloat(l[2]),parseFloat(l[0]),parseFloat(l[3]),parseFloat(l[1])],"EPSG:4326",a));const c={formatted:t,details:s,original:r};if(!1===this.options.keepOpen&&this.clearResults(!0),!0===this.options.preventDefault||!0===this.options.preventMarker)this.Base.dispatchEvent({type:C,address:c,coordinate:i,bbox:l,place:e});else{const t=this.createFeature(i,c);this.Base.dispatchEvent({type:C,address:c,feature:t,coordinate:i,bbox:l,place:e})}!0!==this.options.preventDefault&&!0!==this.options.preventPanning&&(l?n.getView().fit(l,{duration:500}):n.getView().animate({center:i,resolution:this.options.defaultFlyResolution||10,duration:500}))}createFeature(e){const t=new y.default(new g.default(e));return this.addLayer(),t.setStyle(this.options.featureStyle),t.setId(F("geocoder-ft-")),this.getSource().addFeature(t),t}addressTemplate(e){const t=[];return e.name&&t.push(['<span class="',se.road,'">{name}</span>'].join("")),(e.road||e.building||e.house_number)&&t.push(['<span class="',se.road,'">{building} {road} {house_number}</span>'].join("")),(e.city||e.town||e.village)&&t.push(['<span class="',se.city,'">{postcode} {city} {town} {village}</span>'].join("")),(e.state||e.country)&&t.push(['<span class="',se.country,'">{state} {country}</span>'].join("")),Q(t.join("<br>"),e)}newProvider(){switch(this.options.provider){case T:return new W(this.options);case N:return new X;case P:return new J;case R:return new Y;case A:return new Z;default:return this.options.provider}}expand(){D(this.els.input,se.spin),M(this.els.control,se.glass.expanded),window.setTimeout((()=>this.els.input.focus()),100),this.listenMapClick()}collapse(){this.els.input.value="",this.els.input.blur(),M(this.els.reset,se.hidden),D(this.els.control,se.glass.expanded),this.clearResults()}listenMapClick(){if(this.registeredListeners.mapClick)return;const e=this,t=this.Base.getMap().getTargetElement();this.registeredListeners.mapClick=!0,t.addEventListener("click",{handleEvent(s){e.clearResults(!0),t.removeEventListener(s.type,this,!1),e.registeredListeners.mapClick=!1}},!1)}clearResults(e){e&&this.options.targetType===L?this.collapse():function(e){for(;e.firstChild;)e.firstChild.remove()}(this.els.result)}getSource(){return this.layer.getSource()}addLayer(){let e=!1;const t=this.Base.getMap();t.getLayers().forEach((t=>{t===this.layer&&(e=!0)})),e||t.addLayer(this.layer)}}class ne extends d.default{constructor(e=j,t={}){let s,r;O("string"==typeof e,"@param `type` should be string!"),O(e===j||e===S,`@param 'type' should be '${j}'\n      or '${S}'!`),O("object"==typeof t,"@param `options` should be object!"),I.featureStyle=[new u.default({image:new p.default({scale:.7,src:"//cdn.rawgit.com/jonataswalker/map-utils/master/images/marker.png"})})];const n=new K(t);if(e===j&&(s=n.els.container),super({element:s,...t}),!(this instanceof ne))return new ne;this.options=function(e,t){const s={};return Object.keys(e).forEach((t=>{Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])})),Object.keys(t).forEach((e=>{Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])})),s}(I,t),this.container=s,e===j&&(r=new re(this,n.els),this.layer=r.layer)}getLayer(){return this.layer}getSource(){return this.getLayer().getSource()}setProvider(e){this.options.provider=e}setProviderKey(e){this.options.key=e}}return ne}));
//# sourceMappingURL=ol-geocoder.js.map
