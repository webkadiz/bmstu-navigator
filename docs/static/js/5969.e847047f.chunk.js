/*! For license information please see 5969.e847047f.chunk.js.LICENSE.txt */
(self.webpackChunkbmstu_navigator=self.webpackChunkbmstu_navigator||[]).push([[5969],{5969:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const s="shapes",a={name:s,async init(){const t=this,e=t.svgCanvas,{$id:a,$click:o}=e,r=e.getSvgRoot();let i={};await async function(t){let e;const a=t.configObj.pref("lang");try{e=await n(1551)("./".concat(a,".js"))}catch(o){console.warn("Missing translation (".concat(a,") for ").concat(s," - using 'en'")),e=await n.e(1706).then(n.bind(n,1706))}t.i18next.addResourceBundle(a,s,e.default)}(t);const l="shapelib",c={};let u,h,d;return{callback(){if(null===a("tool_shapelib")){const n=t.configObj.curConfig.extPath,r='\n          <se-explorerbutton id="tool_shapelib" title="'.concat(t.i18next.t("".concat(s,":buttons.0.title")),'" lib="').concat(n,'/ext-shapes/shapelib/"\n          src="shapelib.svg"></se-explorerbutton>\n          ');e.insertChildAtIndex(a("tools_left"),r,9),o(a("tool_shapelib"),(()=>{this.leftPanel.updateLeftPanel("tool_shapelib")&&e.setMode(l)}))}},mouseDown(t){if(e.getMode()!==l)return;const n=document.getElementById("tool_shapelib").dataset.draw;h=t.start_x;const s=h;d=t.start_y;const a=d,o=e.getStyle();return c.x=t.event.clientX,c.y=t.event.clientY,u=e.addSVGElementsFromJson({element:"path",curStyles:!0,attr:{d:n,id:e.getNextId(),opacity:o.opacity/2,style:"pointer-events:none"}}),u.setAttribute("transform","translate("+s+","+a+") scale(0.005) translate("+-s+","+-a+")"),e.recalculateDimensions(u),i=u.getBBox(),{started:!0}},mouseMove(t){if(e.getMode()!==l)return;const n=e.getZoom(),s=t.event,a=t.mouse_x/n,o=t.mouse_y/n,c=u.transform.baseVal,m=u.getBBox(),p=m.x,f=m.y,b=(Math.min(h,a),Math.min(d,o),Math.abs(a-h)),g=Math.abs(o-d);let v=b/i.width||1,x=g/i.height||1,y=0;a<h&&(y=i.width);let M=0;o<d&&(M=i.height);const _=r.createSVGTransform(),w=r.createSVGTransform(),j=r.createSVGTransform();if(_.setTranslate(-(p+y),-(f+M)),!s.shiftKey){const t=Math.min(Math.abs(v),Math.abs(x));v=t*(v<0?-1:1),x=t*(x<0?-1:1)}w.setScale(v,x),j.setTranslate(p+y,f+M),c.appendItem(j),c.appendItem(w),c.appendItem(_),e.recalculateDimensions(u),i=u.getBBox()},mouseUp(t){if(e.getMode()!==l)return;return{keep:t.event.clientX!==c.x&&t.event.clientY!==c.y,element:u,started:!1}}}}}},1551:(t,e,n)=>{var s={"./en.js":[1706,1706],"./fr.js":[1999,1999],"./sv.js":[7272,7272],"./tr.js":[7162,7162],"./uk.js":[6408,6408],"./zh-CN.js":[369,369]};function a(t){if(!n.o(s,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],a=e[0];return n.e(e[1]).then((()=>n(a)))}a.keys=()=>Object.keys(s),a.id=1551,t.exports=a}}]);
//# sourceMappingURL=5969.e847047f.chunk.js.map