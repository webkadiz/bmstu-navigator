/*! For license information please see 6748.80762a3c.chunk.js.LICENSE.txt */
(self.webpackChunkbmstu_navigator=self.webpackChunkbmstu_navigator||[]).push([[6748],{6748:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});const o="helloworld",s={name:o,async init(e){let{_importLocale:t}=e;const s=this;await async function(e){let t;const s=e.configObj.pref("lang");try{t=await n(9442)("./".concat(s,".js"))}catch(a){console.warn("Missing translation (".concat(s,") for ").concat(o," - using 'en'")),t=await n.e(3322).then(n.bind(n,3322))}e.i18next.addResourceBundle(s,o,t.default)}(s);const{svgCanvas:a}=s,{$id:l,$click:c}=a;return{name:s.i18next.t("".concat(o,":name")),callback(){const e=document.createElement("template"),t="".concat(o,":buttons.0.title");e.innerHTML='\n        <se-button id="hello_world" title="'.concat(t,'" src="hello_world.svg"></se-button>\n        '),l("tools_left").append(e.content.cloneNode(!0)),c(l("hello_world"),(()=>{a.setMode("hello_world")}))},mouseDown(){if("hello_world"===a.getMode())return{started:!0}},mouseUp(e){if("hello_world"===a.getMode()){const t=a.getZoom(),n=e.mouse_x/t,l=e.mouse_y/t,c=s.i18next.t("".concat(o,":text"),{x:n,y:l});alert(c)}}}}}},9442:(e,t,n)=>{var o={"./en.js":[3322,3322],"./fr.js":[8095,8095],"./tr.js":[1540,1540],"./uk.js":[7567,7567],"./zh-CN.js":[6431,6431]};function s(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],s=t[0];return n.e(t[1]).then((()=>n(s)))}s.keys=()=>Object.keys(o),s.id=9442,e.exports=s}}]);
//# sourceMappingURL=6748.80762a3c.chunk.js.map