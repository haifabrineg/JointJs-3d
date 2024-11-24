/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-10-18 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).joint=e.joint||{},e.joint.format=e.joint.format||{}))})(this,function(e){let i={decisiveElements:{participant:"participant",task:"task",serviceTask:"serviceTask",sendTask:"sendTask",receiveTask:"receiveTask",userTask:"userTask",manualTask:"manualTask",businessRuleTask:"businessRuleTask",scriptTask:"scriptTask",subProcess:"subProcess",callActivity:"callActivity",startEvent:"startEvent",intermediateThrowEvent:"intermediateThrowEvent",intermediateCatchEvent:"intermediateCatchEvent",boundaryEvent:"boundaryEvent",endEvent:"endEvent",gateway:"gateway",parallelGateway:"parallelGateway",inclusiveGateway:"inclusiveGateway",complexGateway:"complexGateway",eventBasedGateway:"eventBasedGateway",exclusiveGateway:"exclusiveGateway",sequenceFlow:"sequenceFlow",messageFlow:"messageFlow",dataObject:"dataObject",textAnnotation:"textAnnotation",association:"association"},processXML(t){let e=[],a=e=>{e=e.localName;return this.decisiveElements.hasOwnProperty(e)},i=t=>{if(a(t)&&e.push(t),0<t.childElementCount)for(let e=0;e<t.children.length;e++)i(t.children[e])};for(let e=0;e<t.children.length;e++)i(t.children[e]);return e.sort((e,t)=>null!==e.getAttribute("attachedToRef")&&null===t.getAttribute("attachedToRef")?1:null===e.getAttribute("attachedToRef")&&null!==t.getAttribute("attachedToRef")?-1:"participant"===e.localName||"subProcess"===e.localName||"participant"!==t.localName&&"subProcess"!==t.localName?"participant"!==e.localName&&"subProcess"!==e.localName||"participant"===t.localName||"subProcess"===t.localName?0:-1:1),e}};class m extends Error{}let s={events:{start:{"":["none","single","solid"],message:["message1","single","solid"],timer:["timer1","single","solid"],error:["error1","single","solid"],escalation:["escalation1","single","solid"],compensate:["compensation1","single","solid"],conditional:["conditional1","single","solid"],signal:["signal1","single","solid"],multiple:["multiple1","single","solid"],parallelMultiple:["parallel1","single","solid"]},intermediateCatch:{message:["message1","double","solid"],timer:["timer1","double","solid"],error:["error1","double","solid"],escalation:["escalation1","double","solid"],cancel:["cancel1","double","solid"],compensate:["compensation1","double","solid"],conditional:["conditional1","double","solid"],link:["link1","double","solid"],signal:["signal1","double","solid"],multiple:["multiple1","double","solid"],parallelMultiple:["parallel1","double","solid"]},intermediateThrow:{"":["none","double","solid"],message:["message2","double","solid"],escalation:["escalation2","double","solid"],compensate:["compensation2","double","solid"],link:["link2","double","solid"],signal:["signal2","double","solid"],multiple:["multiple2","double","solid"]},boundary:{message:["message1","double",["solid","dashed"]],timer:["timer1","double",["solid","dashed"]],error:["error1","double","solid"],escalation:["escalation1","double",["solid","dashed"]],cancel:["cancel1","double","solid"],compensate:["compensation1","double","solid"],conditional:["conditional1","double",["solid","dashed"]],link:["link1","double","solid"],signal:["signal1","double",["solid","dashed"]],multiple:["multiple1","double",["solid","dashed"]],parallelMultiple:["parallel1","double",["solid","dashed"]]},end:{"":["none","thick","solid"],message:["message2","thick","solid"],error:["error2","thick","solid"],escalation:["escalation2","thick","solid"],cancel:["cancel2","thick","solid"],compensate:["compensation2","thick","solid"],signal:["signal2","thick","solid"],terminate:["termination2","thick","solid"],multiple:["multiple2","thick","solid"]}},activities:{businessRule:"business-rule",manual:"manual",receive:"receive",script:"script",send:"send",service:"service",user:"user"},gateways:{complex:"complex",eventBased:"event",exclusive:"exclusive",inclusive:"inclusive",parallel:"parallel"}};var t={createPool:function(e,l,t){var a=e.getAttribute("id"),i=l.getElementById(e.getAttribute("processRef"));if(null===i)throw new m(`Missing a processRef attribute in the participant with id: ${a}. The import of participants without a referenced process is not supported.`);var r=l.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${a}] Bounds`);if(null===r)throw new m(`Missing a BPMNShape element related to the participant with id: ${a}. The import of participants without a shape is not supported.`);let o=[];a=i.querySelectorAll(":scope > laneSet > lane");if(0<a.length){let r=e=>{let i=[];return e.forEach(e=>{var t=e.getAttribute("id"),a=l.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${t}] Bounds`),t={id:t,label:e.getAttribute("name"),size:parseFloat(a.getAttribute("height")),y:parseFloat(a.getAttribute("y"))},a=e.querySelector("childLaneSet");null!==a&&(e=a.querySelectorAll(":scope > lane"),t.sublanes=r(e)),i.push(t)}),i.sort((e,t)=>e.y<t.y?-1:e.y===t.y?0:1),i};o=r(a)}a={};return null!==e.getAttribute("name")&&(a.headerLabel={text:e.getAttribute("name")}),new t({id:i.getAttribute("id"),position:{x:parseFloat(r.getAttribute("x")),y:parseFloat(r.getAttribute("y"))},size:{width:parseFloat(r.getAttribute("width")),height:parseFloat(r.getAttribute("height"))},attrs:a,lanes:0<o.length?o:null})},createActivity:function(e,t,a){var i,r=e.localName,l=e.getAttribute("id"),t=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${l}]`).querySelector("Bounds"),e={label:{text:e.getAttribute("name")||void 0}};return"task"!==r&&(i=r.substring(0,r.length-4),void 0!==s.activities[i])&&(e.icon={iconType:s.activities[i]}),"callActivity"===r&&(e.border={borderType:"thick"}),new a({id:l,position:{x:parseFloat(t.getAttribute("x")),y:parseFloat(t.getAttribute("y"))},size:{width:parseFloat(t.getAttribute("width")),height:parseFloat(t.getAttribute("height"))},attrs:e})},createEvent:function(t,e,a){var i=t.localName,r=t.getAttribute("id"),e=e.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${r}]`).querySelector("Bounds"),l={label:{text:t.getAttribute("name")||null}};if("event"!==i){var i=i.substring(0,i.length-5),o=t.querySelector(["message","timer","error","escalation","cancel","compensate","conditional","link","signal","terminate","multiple","parallelMultiple"].map(e=>e+"EventDefinition").join(","));let e="";null!==o&&(o=o.localName,e=o.substring(0,o.length-15));o=s.events?.[i]?.[e];void 0!==o&&(l.icon={iconType:o[0]},l.border={borderType:o[1]},"boundary"===i&&Array.isArray(o[2])?l.border.borderStyle="false"!==t.getAttribute("cancelActivity")?o[2][0]:o[2][1]:l.border.borderStyle=o[2])}return new a({id:r,position:{x:parseFloat(e.getAttribute("x")),y:parseFloat(e.getAttribute("y"))},size:{width:parseFloat(e.getAttribute("width")),height:parseFloat(e.getAttribute("height"))},attrs:l})},createGateway:function(t,e,a){var i=t.localName,r=t.getAttribute("id"),e=e.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${r}]`).querySelector("Bounds"),l={label:{text:t.getAttribute("name")||null}};if("gateway"!==i){i=i.substring(0,i.length-7);if(void 0!==s.gateways[i]){let e;e="eventBased"===i&&"true"===t.getAttribute("instantiate")?"exclusive_event":s.gateways[i],l.icon={iconType:e}}}return new a({id:r,position:{x:parseFloat(e.getAttribute("x")),y:parseFloat(e.getAttribute("y"))},size:{width:parseFloat(e.getAttribute("width")),height:parseFloat(e.getAttribute("height"))},attrs:l})},createFlow:function(e,t,a){var i=e.localName,r=e.getAttribute("id"),l=e.getAttribute("sourceRef"),o=e.getAttribute("targetRef");let s=l,n=o;var c={};if("messageFlow"===i){c.line={flowType:"message"};i=t.getElementById(l);if("participant"===i.localName){i=i.getAttribute("processRef");if(null===i)throw new m(`Missing a processRef attribute in the participant with id: ${l}. The import of participants without a referenced process is not supported.`);s=i}i=t.getElementById(o);if("participant"===i.localName){i=i.getAttribute("processRef");if(null===i)throw new m(`Missing a processRef attribute in the participant with id: ${o}. The import of participants without a referenced process is not supported.`);n=i}}let u=[];var d,i={id:s},p={id:n},r=t.querySelector(`BPMNDiagram BPMNEdge[bpmnElement=${r}]`),o=(null!==r&&(l=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${l}] Bounds`),t=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${o}] Bounds`),r=(o=Array.from(r.querySelectorAll("waypoint"))).shift(),d=o.pop(),o.forEach(e=>u.push({x:parseFloat(e.getAttribute("x")),y:parseFloat(e.getAttribute("y"))})),i.anchor={name:"modelCenter",args:{dx:parseFloat(r.getAttribute("x"))-(parseFloat(l.getAttribute("x"))+parseFloat(l.getAttribute("width"))/2),dy:parseFloat(r.getAttribute("y"))-(parseFloat(l.getAttribute("y"))+parseFloat(l.getAttribute("height"))/2)}},p.anchor={name:"modelCenter",args:{dx:d.getAttribute("x")-(parseFloat(t.getAttribute("x"))+parseFloat(t.getAttribute("width"))/2),dy:d.getAttribute("y")-(parseFloat(t.getAttribute("y"))+parseFloat(t.getAttribute("height"))/2)}}),[]);return null!==e.getAttribute("name")&&o.push({attrs:{label:{text:e.getAttribute("name")}}}),new a({vertices:u,source:i,target:p,attrs:c,labels:o})},createDataObject:function(e,t,a){var e=e.getAttribute("id"),i=t.querySelector(`process dataObjectReference[dataObjectRef=${e}]`),r=i.getAttribute("id"),t=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${r}]`).querySelector("Bounds"),r={label:{text:i.getAttribute("name")||void 0}};return new a({id:e,position:{x:parseFloat(t.getAttribute("x")),y:parseFloat(t.getAttribute("y"))},size:{width:parseFloat(t.getAttribute("width")),height:parseFloat(t.getAttribute("height"))},attrs:r})},createAnnotation:function(e,t,a){var i=e.getAttribute("id"),t=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${i}]`).querySelector("Bounds"),e={label:{text:e.querySelector(":scope > text").textContent}};return new a({id:i,position:{x:parseFloat(t.getAttribute("x")),y:parseFloat(t.getAttribute("y"))},size:{width:parseFloat(t.getAttribute("width")),height:parseFloat(t.getAttribute("height"))},attrs:e})},createAnnotationLink:function(e,t,a){var i=e.getAttribute("id"),r=e.getAttribute("sourceRef"),e=e.getAttribute("targetRef"),l=t.getElementById(r),l="participant"===l.localName?l.getAttribute("processRef"):r,o=t.getElementById(e),o="participant"===o.localName?o.getAttribute("processRef"):e,r=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${r}] Bounds`),e=t.querySelector(`BPMNDiagram BPMNShape[bpmnElement=${e}] Bounds`),t=t.querySelector(`BPMNDiagram BPMNEdge[bpmnElement=${i}]`),i=Array.from(t.querySelectorAll("waypoint")),t=i.shift(),s=i.pop();let n=[];return i.forEach(e=>n.push({x:parseFloat(e.getAttribute("x")),y:parseFloat(e.getAttribute("y"))})),new a({vertices:n,source:{id:l,anchor:{name:"modelCenter",args:{dx:parseFloat(t.getAttribute("x"))-(parseFloat(r.getAttribute("x"))+parseFloat(r.getAttribute("width"))/2),dy:parseFloat(t.getAttribute("y"))-(parseFloat(r.getAttribute("y"))+parseFloat(r.getAttribute("height"))/2)}}},target:{id:o,anchor:{name:"modelCenter",args:{dx:s.getAttribute("x")-(parseFloat(e.getAttribute("x"))+parseFloat(e.getAttribute("width"))/2),dy:s.getAttribute("y")-(parseFloat(e.getAttribute("y"))+parseFloat(e.getAttribute("height"))/2)}}}})}};let h=i.decisiveElements,y={[h.participant]:t.createPool,[h.task]:t.createActivity,[h.serviceTask]:t.createActivity,[h.sendTask]:t.createActivity,[h.receiveTask]:t.createActivity,[h.userTask]:t.createActivity,[h.manualTask]:t.createActivity,[h.businessRuleTask]:t.createActivity,[h.scriptTask]:t.createActivity,[h.subProcess]:t.createActivity,[h.callActivity]:t.createActivity,[h.startEvent]:t.createEvent,[h.intermediateThrowEvent]:t.createEvent,[h.intermediateCatchEvent]:t.createEvent,[h.boundaryEvent]:t.createEvent,[h.endEvent]:t.createEvent,[h.gateway]:t.createGateway,[h.parallelGateway]:t.createGateway,[h.inclusiveGateway]:t.createGateway,[h.complexGateway]:t.createGateway,[h.eventBasedGateway]:t.createGateway,[h.exclusiveGateway]:t.createGateway,[h.sequenceFlow]:t.createFlow,[h.messageFlow]:t.createFlow,[h.dataObject]:t.createDataObject,[h.textAnnotation]:t.createAnnotation,[h.association]:t.createAnnotationLink};function o(r,e){var l=n();return(o=function(e,t){var a=l[e-=222];void 0===o.VeVxdA&&(o.TZMFer=function(e,t){var a,i=[],r=0,l="";for(e=(e=>{for(var t,a,i="",r="",l=0,o=0;a=e.charAt(o++);~a&&(t=l%4?64*t+a:a,l++%4)&&(i+=String.fromCharCode(255&t>>(-2*l&6))))a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(a);for(var s=0,n=i.length;s<n;s++)r+="%"+("00"+i.charCodeAt(s).toString(16)).slice(-2);return decodeURIComponent(r)})(e),o=0;o<256;o++)i[o]=o;for(o=0;o<256;o++)r=(r+i[o]+t.charCodeAt(o%t.length))%256,a=i[o],i[o]=i[r],i[r]=a;for(var o=0,r=0,s=0;s<e.length;s++)a=i[o=(o+1)%256],i[o]=i[r=(r+i[o])%256],i[r]=a,l+=String.fromCharCode(e.charCodeAt(s)^i[(i[o]+i[r])%256]);return l},r=arguments,o.VeVxdA=!0);var e=e+l[0],i=r[e];return i?a=i:(void 0===o.Msfhgy&&(o.Msfhgy=!0),a=o.TZMFer(a,t),r[e]=a),a})(r,e)}e.fromBPMN=function(c){let t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=new Set,s=Object.assign({},y,t.cellFactories),u={},n={},a={},d={},p=[],g=(t,e)=>{null!==e&&(d.hasOwnProperty(e)?d[e].embed(t):(a.hasOwnProperty(e)||(a[e]=[]),a[e].push(t))),a.hasOwnProperty(t.id)&&(a[t.id].forEach(e=>{t.embed(e)}),delete a[t.id])},b=e=>{if("function"!=typeof t.bpmn2Shapes[e])throw new m(`Missing type ${e} in the given BPMN 2 shapes set`);return t.bpmn2Shapes[e]};i.processXML(c).forEach(i=>{let r=i.localName;if("function"==typeof s[r]){let a;try{let e=(e=>{switch(e){case h.participant:return b("HeaderedPool");case h.task:case h.serviceTask:case h.sendTask:case h.receiveTask:case h.userTask:case h.manualTask:case h.businessRuleTask:case h.scriptTask:case h.subProcess:case h.callActivity:return b("Activity");case h.startEvent:case h.intermediateThrowEvent:case h.intermediateCatchEvent:case h.boundaryEvent:case h.endEvent:return b("Event");case h.gateway:case h.parallelGateway:case h.inclusiveGateway:case h.complexGateway:case h.eventBasedGateway:case h.exclusiveGateway:return b("Gateway");case h.sequenceFlow:case h.messageFlow:return b("Flow");case h.dataObject:return b("DataObject");case h.textAnnotation:return b("Annotation");case h.association:return b("AnnotationLink");default:throw new m("Missing type for the given XML element: "+e)}})(r);a=s[r](i,c,e,()=>y[r](i,c,e))}catch(e){if(e instanceof m)o.add(e.message);else{var l=i.getAttribute("id");let e="An error occurred during the import of the element "+r;null!==l&&(e+=`(#${l})`),o.add(e)}a=null}if(null!==a){d[a.id]=a,p.push(a);let e=null;var l=i.getAttribute("attachedToRef");null!==l?e=l:void 0===i.parentElement||"process"!==(l=i.parentElement.localName)&&l!==h.subProcess||(e=i.parentElement.getAttribute("id")),g(a,e);let t=i.getAttribute("id");r===h.dataObject&&(l=c.querySelector(`process dataObjectReference[dataObjectRef=${t}]`),u[l.getAttribute("id")]=t);l=i.querySelectorAll("dataInputAssociation, dataOutputAssociation");0<l.length&&(n.hasOwnProperty(t)||(n[t]=[]),l.forEach(e=>n[t].push(e)))}}});for(let t in n)n[t].forEach(e=>{var a=e.localName,i=e.getAttribute("id");let r,l;"dataOutputAssociation"===a?(r=t,l=u[e.querySelector("targetRef").textContent]):"dataInputAssociation"===a&&(r=u[e.querySelector("sourceRef").textContent],l=t);a=d[r],e=d[l];if(void 0!==a&&void 0!==e){var o=c.querySelector(`BPMNDiagram BPMNEdge[bpmnElement=${i}]`),o=Array.from(o.querySelectorAll("waypoint")),s=o.shift(),n=o.pop();let t=[];o.forEach(e=>t.push({x:parseFloat(e.getAttribute("x")),y:parseFloat(e.getAttribute("y"))}));o=new(b("DataAssociation"))({vertices:t,source:{id:r,anchor:{name:"modelCenter",args:{dx:parseFloat(s.getAttribute("x"))-a.getBBox().center().x,dy:parseFloat(s.getAttribute("y"))-a.getBBox().center().y}}},target:{id:l,anchor:{name:"modelCenter",args:{dx:parseFloat(n.getAttribute("x"))-e.getBBox().center().x,dy:parseFloat(n.getAttribute("y"))-e.getBBox().center().y}}}}),s=(d[i]=o,p.push(o),e.getParentCell()),a=null!==s?s.get("id"):null;g(o,a)}});return{cells:p.filter(e=>!e.isLink()||e.source().id in d&&e.target().id in d||(o.add(`Link with id ${e.id} could not be imported, either its destination or source is missing or it was not imported successfully.`),!1)),errors:[...o]}};var a,t=o;function n(){var e=["CuaOyIOTe8o0dXiZ","omkga8kqW5tcTCoBzmo8WRD6","WOu3WQJcINL6WO4","v37cMCkPW6OGhCoKW55Oca","W5pcP8k4W4NcI8oxW7zNmSkezsVcNa","gKq6ACkpc8kkWQjrya","W4JdVxFdR0KEFG","qgFcQqyhWQWkW6BcG8kuW7LUWOK","wKycWO5hrSonWOa","W6lcOYiRW6ddQ8kgoSkdW5S","W4LosSkokNddJmkMvqe5WONdTW","BmoqqCo0WOtcNmog","lSoxWRFcR8k1WOP8WQ3cPSkLm1ldVG","W47cOCk+W4ucmhLQ","lCoxWRhcRSk9WOv6WRhcO8ked3JdJG","x0P+W4aPn8kkWPHJWPddUCoQWRO","lCoHy8khl8kEWOHPW5RcUSotW5vz","aIWIF1CmeCkPWQWp","iCkvWRupwHBcT0eWW4JdM3ldPG","vq4NqI3dMNzwWPBcVIBdOfu","WP3cRtRcIrbdk8kwoCkD","W5BdP8o8kSkNcSktESoueG","WRJdQmkwW47dRSo1W7tcOmkvW4GQ","WPFdTSo7WP0cxqtcTWNcRa","ybLNWRdcLW"];return(n=function(){return e})()}for(var r=o,l=n();;)try{if(905912==-parseInt(r(223,"8Wmv"))+-parseInt(r(234,"EcmT"))/2+-parseInt(r(243,"KHX3"))/3*(-parseInt(r(225,"pCoY"))/4)+-parseInt(r(236,"#iL2"))/5+parseInt(r(224,"c[TY"))/6+parseInt(r(237,"ACi["))/7*(parseInt(r(242,"RUuG"))/8)+parseInt(r(228,"rDb9"))/9*(-parseInt(r(238,"1UZG"))/10))break;l.push(l.shift())}catch(e){l.push(l.shift())}e=new Date(parseInt(t(227,"kO7v"))),t=parseInt(t(240,"FuWW")),a=o,"undefined"!=typeof window&&t&&!isNaN(t)&&e&&!isNaN(e[a(231,"Ib)[")]())&&e[a(226,"FuWW")]()+t-(new Date)[a(222,"Rgln")]()<=0&&window[a(244,"$#co")]("JointJS+ Trial License Expired. Visit http://jointjs.com or email client IO at sales@client.io.")});