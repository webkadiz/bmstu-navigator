/*! For license information please see 7758.48ffd6d7.chunk.js.LICENSE.txt */
(self.webpackChunkbmstu_navigator=self.webpackChunkbmstu_navigator||[]).push([[7758],{7758:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});const i=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch(i){return!1}return"showOpenFilePicker"in self})(),a=i?Promise.resolve().then((function(){return l})):Promise.resolve().then((function(){return m}));i?Promise.resolve().then((function(){return d})):Promise.resolve().then((function(){return v}));const o=i?Promise.resolve().then((function(){return p})):Promise.resolve().then((function(){return f}));async function s(){return(await o).default(...arguments)}const r=async e=>{const t=await e.getFile();return t.handle=e,t};var l={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];Array.isArray(e)||(e=[e]);const t=[];e.forEach(((e,n)=>{t[n]={description:e.description||"Files",accept:{}},e.mimeTypes?e.mimeTypes.map((i=>{t[n].accept[i]=e.extensions||[]})):t[n].accept["*/*"]=e.extensions||[]}));const n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(n.map(r));return e[0].multiple?i:i[0]}};function c(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return c=function(e){this.s=e,this.n=e.next},c.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new c(e)}const u=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.name,i=arguments.length>3?arguments[3]:void 0;const a=[],o=[];var s,r=!1,l=!1;try{for(var d,p=function(e){var t,n,i,a=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,i=Symbol.iterator);a--;){if(n&&null!=(t=e[n]))return t.call(e);if(i&&null!=(t=e[i]))return new c(t.call(e));n="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());r=!(d=await p.next()).done;r=!1){const s=d.value,r="".concat(n,"/").concat(s.name);"file"===s.kind?o.push(s.getFile().then((t=>(t.directoryHandle=e,t.handle=s,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>r}))))):"directory"!==s.kind||!t||i&&i(s)||a.push(u(s,t,r,i))}}catch(e){l=!0,s=e}finally{try{r&&null!=p.return&&await p.return()}finally{if(l)throw s}}return[...(await Promise.all(a)).flat(),...await Promise.all(o)]};var d={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:u(t,e.recursive,void 0,e.skipDirectory)}},p={__proto__:null,default:async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{}],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const o=[];let s=null;if(e instanceof Blob&&e.type?s=e.type:e.headers&&e.headers.get("content-type")&&(s=e.headers.get("content-type")),t.forEach(((e,t)=>{o[t]={description:e.description||"Files",accept:{}},e.mimeTypes?(0===t&&s&&e.mimeTypes.push(s),e.mimeTypes.map((n=>{o[t].accept[n]=e.extensions||[]}))):s?o[t].accept[s]=e.extensions||[]:o[t].accept["*/*"]=e.extensions||[]})),n)try{await n.getFile()}catch(e){if(n=null,i)throw e}const r=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:o,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&a&&a(r);const l=await r.createWritable();if("stream"in e){const t=e.stream();return await t.pipeTo(l),r}return"body"in e?(await e.body.pipeTo(l),r):(await l.write(await e),await l.close(),r)}},m={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];return Array.isArray(e)||(e=[e]),new Promise(((t,n)=>{const i=document.createElement("input");i.type="file";const a=[...e.map((e=>e.mimeTypes||[])),...e.map((e=>e.extensions||[]))].join();i.multiple=e[0].multiple||!1,i.accept=a||"",i.style.display="none",document.body.append(i);const o=e=>{"function"==typeof s&&s(),t(e)},s=e[0].legacySetup&&e[0].legacySetup(o,(()=>s(n)),i),r=()=>{window.removeEventListener("focus",r),i.remove()};i.addEventListener("click",(()=>{window.addEventListener("focus",r)})),i.addEventListener("change",(()=>{window.removeEventListener("focus",r),i.remove(),o(i.multiple?Array.from(i.files):i.files[0])})),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))}},v={__proto__:null,default:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];return Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((t,n)=>{const i=document.createElement("input");i.type="file",i.webkitdirectory=!0;const a=e=>{"function"==typeof o&&o(),t(e)},o=e[0].legacySetup&&e[0].legacySetup(a,(()=>o(n)),i);i.addEventListener("change",(()=>{let t=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter((t=>t.webkitRelativePath.split("/").every((t=>!e[0].skipDirectory({name:t,kind:"directory"})))))):t=t.filter((e=>2===e.webkitRelativePath.split("/").length)),a(t)})),"showPicker"in HTMLInputElement.prototype?i.showPicker():i.click()}))}},f={__proto__:null,default:async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Array.isArray(t)&&(t=t[0]);const n=document.createElement("a");let i=e;"body"in e&&(i=await async function(e,t){const n=e.getReader(),i=new ReadableStream({start:e=>async function t(){return n.read().then((n=>{let{done:i,value:a}=n;if(!i)return e.enqueue(a),t();e.close()}))}()}),a=new Response(i),o=await a.blob();return n.releaseLock(),new Blob([o],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await i);const a=()=>{"function"==typeof o&&o()},o=t.legacySetup&&t.legacySetup(a,(()=>o()),n);return n.addEventListener("click",(()=>{setTimeout((()=>URL.revokeObjectURL(n.href)),3e4),a()})),n.click(),null}};const g="opensave";let h=null;const y={name:g,async init(e){const t=this,{svgCanvas:i}=t,{$id:o,$click:r}=i;await async function(e){let t;const i=e.configObj.pref("lang");try{t=await n(3659)("./".concat(i,".js"))}catch(a){console.warn("Missing translation (".concat(i,") for ").concat(g," - using 'en'")),t=await n.e(1425).then(n.bind(n,1425))}e.i18next.addResourceBundle(i,"translation",t.default,!0,!0)}(t);const l=e=>{o("se-prompt-dialog").title=this.i18next.t("notification.loadingImage"),o("se-prompt-dialog").setAttribute("close",!1),e.stopPropagation(),e.preventDefault();const t="drop"===e.type?e.dataTransfer.files[0]:e.currentTarget.files[0];if(!t)return void o("se-prompt-dialog").setAttribute("close",!0);if(!t.type.includes("image"))return;let n;t.type.includes("svg")?(n=new FileReader,n.onloadend=e=>{const t=this.svgCanvas.importSvgString(e.target.result,c.shiftKey);this.svgCanvas.alignSelectedElements("m","page"),this.svgCanvas.alignSelectedElements("c","page"),this.svgCanvas.selectOnly([t]),o("se-prompt-dialog").setAttribute("close",!0)},n.readAsText(t)):(n=new FileReader,n.onloadend=e=>{let{target:{result:t}}=e;const n=(e,n)=>{const i=this.svgCanvas.addSVGElementsFromJson({element:"image",attr:{x:0,y:0,width:e,height:n,id:this.svgCanvas.getNextId(),style:"pointer-events:inherit"}});this.svgCanvas.setHref(i,t),this.svgCanvas.selectOnly([i]),this.svgCanvas.alignSelectedElements("m","page"),this.svgCanvas.alignSelectedElements("c","page"),this.topPanel.updateContextPanel(),o("se-prompt-dialog").setAttribute("close",!0)};let i=100,a=100;const s=new Image;s.style.opacity=0,s.addEventListener("load",(()=>{i=s.offsetWidth||s.naturalWidth||s.width,a=s.offsetHeight||s.naturalHeight||s.height,n(i,a)})),s.src=t},n.readAsDataURL(t))},c=document.createElement("input");c.type="file",c.addEventListener("change",l),this.workarea.addEventListener("drop",l);const u=async function(){const[e,n]=t.configObj.curConfig.dimensions;"Cancel"!==await seConfirm(t.i18next.t("notification.QwantToClear"))&&(t.leftPanel.clickSelect(),t.svgCanvas.clear(),t.svgCanvas.setResolution(e,n),t.updateCanvas(!0),t.zoomImage(),t.layersPanel.populateLayers(),t.topPanel.updateContextPanel(),t.topPanel.updateTitle("untitled.svg"))},d=async function(){if("Cancel"!==await t.openPrep()){i.clear();try{const e=await async function(){return(await a).default(...arguments)}({mimeTypes:["image/*"]}),n=await e.text();await t.loadSvgString(n),t.updateCanvas(),h=e.handle,t.topPanel.updateTitle(e.name),t.onOpenDocument&&t.onOpenDocument(),t.svgCanvas.runExtensions("onOpenedDocument",{name:e.name,lastModified:e.lastModified,size:e.size,type:e.type})}catch(e){if("AbortError"!==e.name)return console.error(e)}}},p=async function(e){if("open"===o("se-svg-editor-dialog").getAttribute("dialog"))t.saveSourceEditor();else{const a={images:t.configObj.pref("img_save"),round_digits:2};if(i.clearSelection(),a){const e=i.mergeDeep(i.getSvgOption(),a);for(const[t,n]of Object.entries(e))i.setSvgOption(t,n)}i.setSvgOption("apply",!0);const o='<?xml version="1.0"?>\n'+i.svgCanvasToString(),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512;const i=atob(e),a=[];for(let o=0;o<i.length;o+=n){const e=i.slice(o,o+n),t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);const s=new Uint8Array(t);a.push(s)}return new Blob(a,{type:t})}(i.encode64(o),"image/svg+xml");try{if("save"===e&&null!==h){const e=!1;h=await s(r,{fileName:"untitled.svg",extensions:[".svg"]},h,e)}else h=await s(r,{fileName:t.title,extensions:[".svg"]});t.topPanel.updateTitle(h.name),i.runExtensions("onSavedDocument",{name:h.name,kind:h.kind})}catch(n){if("AbortError"!==n.name)return console.error(n)}}};return{name:t.i18next.t("".concat(g,":name")),callback(){i.insertChildAtIndex(o("main_button"),'\n        <se-menu-item id="tool_clear" label="opensave.new_doc" shortcut="N" src="new.svg"></se-menu-item>',0);i.insertChildAtIndex(o("main_button"),'<se-menu-item id="tool_open" label="opensave.open_image_doc" src="open.svg"></se-menu-item>',1);i.insertChildAtIndex(o("main_button"),'<se-menu-item id="tool_save" label="opensave.save_doc" shortcut="S" src="saveImg.svg"></se-menu-item>',2);i.insertChildAtIndex(o("main_button"),'<se-menu-item id="tool_save_as" label="opensave.save_as_doc" src="saveImg.svg"></se-menu-item>',3);i.insertChildAtIndex(o("main_button"),'<se-menu-item id="tool_import" label="tools.import_doc" src="importImg.svg"></se-menu-item>',4),r(o("tool_clear"),u.bind(this)),r(o("tool_open"),d.bind(this)),r(o("tool_save"),p.bind(this,"save")),r(o("tool_save_as"),p.bind(this,"saveas")),r(o("tool_import"),(e=>{c.shiftKey=e.shiftKey,c.click()}))}}}}},3659:(e,t,n)=>{var i={"./en.js":[1425,1425],"./fr.js":[4477,4477],"./sv.js":[8328,8328],"./tr.js":[6420,6420],"./uk.js":[1359,1359],"./zh-CN.js":[5284,5284]};function a(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return n.e(t[1]).then((()=>n(a)))}a.keys=()=>Object.keys(i),a.id=3659,e.exports=a}}]);
//# sourceMappingURL=7758.48ffd6d7.chunk.js.map