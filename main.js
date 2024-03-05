(()=>{"use strict";var e,t,r,i,o,a,n={},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return n[e](r,r.exports,s),r.loaded=!0,r.exports}s.m=n,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",i=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(o,a,n)=>{var l;n&&((l=[]).d=-1);var s,d,c,u=new Set,p=o.exports,y=new Promise(((e,t)=>{c=t,d=e}));y[t]=p,y[e]=e=>(l&&e(l),u.forEach(e),y.catch((e=>{}))),o.exports=y,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{n[t]=e,i(a)}),(e=>{n[r]=e,i(a)}));var n={};return n[e]=e=>e(a),n}}var l={};return l[e]=e=>{},l[t]=o,l})))(o);var n=()=>s.map((e=>{if(e[r])throw e[r];return e[t]})),d=new Promise((t=>{(a=()=>t(n)).r=0;var r=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](r)))}));return a.r?d:n()}),(e=>(e?c(y[r]=e):d(p),i(l)))),l&&l.d<0&&(l.d=0)},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+".main.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="watermeloncombine:",s.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var n,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){n=u;break}}n||(l=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",a+r),n.src=e),o[e]=[t];var p=(t,r)=>{n.onerror=n.onload=null,clearTimeout(y);var i=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(r))),t)return t(r)},y=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),l&&document.head.appendChild(n)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.v=(e,t,r,i)=>{var o=fetch(s.p+""+r+".module.wasm"),a=()=>o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,i))).then((t=>Object.assign(e,t.instance.exports)));return o.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,i).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),a();throw e})):a()))},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={792:0};s.f.j=(t,r)=>{var i=s.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((r,o)=>i=e[t]=[r,o]));r.push(i[2]=o);var a=s.p+s.u(t),n=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",n.name="ChunkLoadError",n.type=o,n.request=a,i[1](n)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,[a,n,l]=r,d=0;if(a.some((t=>0!==e[t]))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);l&&l(s)}for(t&&t(r);d<a.length;d++)o=a[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwatermeloncombine=self.webpackChunkwatermeloncombine||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();const d=function(e,t,r){if(!e)throw"gimme rapier yo";const i=window.setTimeout,o=window.setInterval,a=window.clearInterval,n={red:{fillStyle:"#FF0000",radius:12,type:"circle"},blue:{fillStyle:"#0000FF",radius:45,type:"circle"},aqua:{fillStyle:"#00FFFF",radius:75,type:"circle"},green:{fillStyle:"#008000",radius:100,type:"circle"},yellow:{fillStyle:"#FFFF00",radius:130,type:"circle"},purple:{fillStyle:"#800080",radius:155,type:"circle"},orange:{fillStyle:"#FFA500",radius:185,type:"circle"},pink:{fillStyle:"#FFC0CB",radius:200,type:"circle"},brown:{fillStyle:"#A52A2A",radius:215,type:"circle"},black:{fillStyle:"#000000",radius:260,shadowBlur:80,effect:"pulse",type:"circle",hasStroke:!0},r:{fillStyle:"r",radius:50,shadowBlur:200,effect:"dance",type:"circle"},t:{fillStyle:"#ffffff",strokeStyle:"#cccccc",hasStroke:!0,lineWidth:10,radius:80,type:"t"}},l=60;let s=0;const d=1366,c=777;let u,p,y=.5*l,h=683,f=388.5,g=1e7*Math.random(),m=0,b=!0,w=!0;const v=3*l,M=Math.random().toString(36).substring(7);let S=0,B=!1,k=0,T=0,x=[],E=[],C=-1,F=100;const D=.4,R=.3,I=250;let O=[],N=[];function A(e){var t=2**35-31,r=e%t;return function(){return(r=185852*r%t)/t}}this.loadExtraOptions=e=>{r=e};let P=A(g);function j(){return k++,P()}function L(){P=A(g),k=0}this.setSeed=e=>{g=e,L()},this.setMinimalDuplicates=e=>{B=e};const G=new e.EventQueue(!0),_=new e.World({x:0,y:9.81});_.integrationParameters.numSolverIterations=20;const q=t?.getContext("2d"),$=e=>{e.forEach((e=>{const t={};switch(e.position?(t.x=e.position.x,t.y=e.position.y):(t.x=e.rigidBody.translation().x*F,t.y=e.rigidBody.translation().y*F),q.save(),q.beginPath(),function(e){const t=`hsl(${s%360}, 100%, 50%)`;let r=e.render.fillStyle;if("r"===r&&(r=t),q.fillStyle=r,q.strokeStyle=e.render.strokeStyle,q.lineWidth=e.render.lineWidth||0,q.shadowColor=e.render.shadowColor||q.fillStyle,q.shadowBlur=e.render.shadowBlur,q.globalAlpha=e.render.opacity,"pulse"===e.render.effect){let t=e.render.shadowBlur;q.shadowBlur=t?t*(Math.abs(s/50%t-t/2)/t):0}if("dance"===e.render.effect){const e=50,t=Math.cos(s/500)*e,r=Math.sin(s/500)*e;q.shadowOffsetX=t,q.shadowOffsetY=r}}(e),e.type){case"text":q.font="30px Arial",q.fillText(e.text,t.x,t.y);break;case"circle":const r=e.circleRadius||e.colliderDesc.shape.radius*F;q.arc(t.x,t.y,r,0,2*Math.PI),q.fill(),e.render.hasStroke&&q.stroke();break;case"t":q.translate(t.x,t.y),q.rotate(e.rigidBody.rotation());const i=Array.from(e.colliderDesc.shape.vertices);q.beginPath(),q.moveTo(i[0]*F,i[1]*F);for(let e=0;e<i.length;e+=2){let t=i[e]*F,r=i[e+1]*F;q.lineTo(t,r)}q.lineTo(i[0]*F,i[1]*F),e.render.hasStroke&&q.stroke(),q.fill(),q.closePath(),q.rotate(-e.rigidBody.rotation()),q.translate(-t.x,-t.y)}if(e.hasFace){const r=e.circleRadius||e.colliderDesc.shape.radius*F,i=h-t.x,o=f-t.y,a=Math.sqrt(Math.pow(i,2)+Math.pow(o,2));let n,l=i/r*r*.05,s=o/r*r*.05,d=Math.atan2(o,i),c=Math.sqrt(Math.pow(l,2)+Math.pow(s,2));"#000000"===e.render.fillStyle?q.fillStyle="white":q.fillStyle="black",q.globalAlpha*=.5,q.translate(t.x,t.y),e.rigidBody&&(n=e.rigidBody.rotation(),q.rotate(n)),q.beginPath(),e.isSad?q.arc(0,.55*r,.65*r,1*Math.PI,0):q.arc(0,.05*r,.65*r,0,1*Math.PI),d-=n,l=Math.cos(d)*c,s=Math.sin(d)*c,l*=1.1,s*=.7,a>r&&(l=0,s=0),q.fill(),q.beginPath(),q.arc(.3*r+l,.3*-r+s,.16*r,0,2*Math.PI),q.arc(.3*-r+l,.3*-r+s,.16*r,0,2*Math.PI),q.fill(),q.closePath(),q.globalAlpha*=.2,q.beginPath(),q.arc(.3*r,.3*-r,.18*r,0,2*Math.PI),q.arc(.3*-r,.3*-r,.18*r,0,2*Math.PI),q.fill(),q.closePath()}q.closePath(),q.restore()}))};function V(e){x.forEach((t=>{t.rigidBody&&t.rigidBody.setGravityScale(e?1:0)}))}function W(){u="red",p="red",S=0,T=0,m=0,b=!0,w=!0,L(),E.forEach((e=>{J(e)})),E=[],H(),t&&ee(oe,u)}function H(){u=p;let e=4,t=Math.max(Math.round(6-S/100),3);if(B)for(;e>0;){let r=j();p=Object.keys(n)[Math.floor(Math.pow(r,t)*Object.keys(n).length/2)],p===u?e--:e=0,p===Object.keys(n)[0]&&(e=0)}else{let e=j();p=Object.keys(n)[Math.floor(Math.pow(e,t)*Object.keys(n).length/2)]}re()}function z(e,t){let r="0000000000000000".split("");e.forEach((e=>{r[e]="1"})),r=r.reverse().join(""),r=parseInt(r,2).toString(16).toUpperCase(),r="0".repeat(4-r.length)+r;let i="0000000000000000".split("");return t.forEach((e=>{i[e]="1"})),i=i.reverse().join(""),i=parseInt(i,2).toString(16).toUpperCase(),i="0".repeat(4-i.length)+i,"0x"+r+i}function U(e){e||(e=0);var t=-1;V(!1),E.forEach((e=>{e.collider.setCollisionGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber])),e.collider.setSolverGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber]))})),b=!1,w=!1;let r=()=>{let t=!1;E=x.filter((e=>e.fruitType)),E.forEach((e=>{E.filter((t=>t.fruitTypeNumber==e.fruitTypeNumber)).length>1&&(t=!0)})),t&&e<5?U(e+1):(E.forEach((e=>{e.collider.setCollisionGroups(z([1],[1])),e.collider.setSolverGroups(z([1],[1])),e.passGravFilterTraits=!1})),V(!0),b=!0,w=!0)},i=()=>{x.forEach((e=>{e.rigidBody&&(e.rigidBody.setLinvel({x:0,y:0},!0),e.rigidBody.setAngvel(0,!0))}));let e=[];for(;e.length<=1;)if(t++,e=E.filter((e=>e.fruitTypeNumber==t)),t>9)return void r();Q(3*l,(()=>{i()}));for(var o=0;o<e.length-1;o+=2){var a=e[o],n=e[o+1];let t=Math.random();a.specialMergeGroup=t,n.specialMergeGroup=t;let r=a.rigidBody.translation(),i=n.rigidBody.translation();if(r.y>i.y){let e=a;a=n,n=e}r=a.rigidBody.translation(),i=n.rigidBody.translation();var s=5*Math.sqrt(Math.pow(i.x-r.x,2)+Math.pow(i.y-r.y,2))*a.rigidBody.mass();let l=Math.atan2(i.y-r.y,i.x-r.x);var d={x:Math.cos(l)*s,y:Math.sin(l)*s};a.rigidBody.addForce(d,!0);let c=(e,t)=>{(t[0].passGravFilterTraits||t[1].passGravFilterTraits)&&(e.collider.setCollisionGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber])),e.collider.setSolverGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber])),e.rigidBody.setGravityScale(0),e.passGravFilterTraits=!0,e.onMerge=c)};a.passGravFilterTraits=!0,n.passGravFilterTraits=!0,a.onMerge=c,n.onMerge=c}};i()}function Y(t,r,i){let o=e.ColliderDesc.ball(i/F).setRestitution(D),a=e.RigidBodyDesc.dynamic().setTranslation(t/F,r/F).setCcdEnabled(!0),n=_.createRigidBody(a);o.setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),o.setFriction(.5),o.setFrictionCombineRule(e.CoefficientCombineRule.Max),o.setMass(i);let l=_.createCollider(o,n),s={id:Math.random(),type:"circle",renderType:"circle",rigidBody:n,rigidBodyDesc:a,colliderDesc:o,collider:l};return x.push(s),s}function K(t,r,i,o){let a=e.ColliderDesc.cuboid(i/F,o/F),n=e.RigidBodyDesc.fixed().setTranslation(t/F,r/F),l=_.createRigidBody(n);a.setFriction(1);let s=_.createCollider(a,l);s.setCollisionGroups(z([1],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),s.setSolverGroups(z([1],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));let d={type:"rectangle",rigidBody:l,rigidBodyDesc:n,colliderDesc:a,render:{fillStyle:"black"},collider:s};return x.push(d),d}function J(e){_.removeRigidBody(e.rigidBody),x=x.filter((t=>t.id!=e.id)),E=E.filter((t=>t.id!=e.id)),function(e){O.forEach((t=>{t.bodyHandles.includes(e.rigidBody.handle)&&t.clear(!0,!1)}))}(e)}function X(e,r,i){if(!t)return;const o=n[i].fillStyle;let a=n[i].radius;for(let t=0;t<15;t++){const t=Math.random()*Math.PI*2,i=2*Math.random()+1,n=Y(e+Math.cos(t)*a,r+Math.sin(t)*a,5);n.render={fillStyle:o},n.rigidBody.setLinvel({x:Math.cos(t)*i,y:Math.sin(t)*i},!0),n.collider.setCollisionGroups(z([15],[15])),n.collider.setSolverGroups(z([15],[15])),Q((2+1*Math.random())*l,(()=>{J(n)}),[n])}}function Z(e,t,r){t>=3||(r||(r=[]),e.othersImpacted=e.othersImpacted||0,E=x.filter((e=>e.fruitType)),E.forEach((i=>{r.includes(i.id)||i.id!=e.id&&Math.sqrt(Math.pow(i.rigidBody.translation().x-e.rigidBody.translation().x,2)+Math.pow(i.rigidBody.translation().y-e.rigidBody.translation().y,2))<i.colliderDesc.shape.radius+e.colliderDesc.shape.radius&&(i.impactedByNew=w&&!0,r.push(i.id),e.othersImpacted++,Q(R*l,(()=>{i.impactedByNew=!1}),[i]),Z(i,t?t+1:1,r))})))}function Q(e,t,r,i){let o=Math.random(),a=[];r&&(a=r.map((e=>e.rigidBody.handle)));const n=(e,t)=>{O=O.filter((e=>e.id!=o)),e&&i&&i(t)};return O.push({ticks:e,callback:t,bodyHandles:a,id:o,clear:n}),{clear:n}}function ee(e,t){e.render={...e.render,...n[t]},t&&"circle"==n[t].type&&(e.circleRadius=n[t].radius)}function te(t,r,i,o){let a;return"circle"===n[t].type?a=Y(r,i,n[t].radius):"t"===n[t].type&&(a=function(t,r,i){i/=F;const o=new Float32Array([0,-i,i*Math.sqrt(3)/2,i/2,-i*Math.sqrt(3)/2,i/2]);let a=e.ColliderDesc.convexHull(o),n=e.RigidBodyDesc.dynamic().setTranslation(t/F,r/F),l=_.createRigidBody(n);a.setRestitution(D),a.setFriction(1),a.setFrictionCombineRule(e.CoefficientCombineRule.Max),a.setMass(i*F),a.shape.radius=.5*i,l.setLinearDamping(I);let s=_.createCollider(a,l);s.setRestitution(0);let d={id:Math.random(),type:"t",renderType:"t",rigidBody:l,colliderDesc:a,collider:s,rigidBodyDesc:n};return x.push(d),d}(r,i,n[t].radius)),a.rigidBodyDesc.setCanSleep(!1),a.collider.setCollisionGroups(z([1],[1])),a.collider.setSolverGroups(z([1],[1])),o&&(o.forceRadius&&(J(a),a=Y(r,i,o.forceRadius)),o.velocity&&a.rigidBody.setLinvel(o.velocity,!0),Object.assign(a,o)),n[t].spawnSpin&&a.rigidBody.setAngvel(n[t].spawnSpin),ee(a,t),o&&o.forceRadius&&(a.circleRadius=o.forceRadius),a.fruitType=t,a.fruitTypeNumber=Object.keys(n).indexOf(t),a.hitYet=!1,a.hasFace=!0,1e3*Math.random()==1?a.isSad=!0:a.isSad=!1,E.push(a),Z(a),a}function re(e){let r=n[u].radius;h-r<0?h=r:h+r>t.width&&(h=t.width-r),e<t.getBoundingClientRect().left?h=r:e>t.getBoundingClientRect().width+t.getBoundingClientRect().left&&(h=t.width-r),oe.position.x=h}this.tick=()=>{s++,O.forEach((e=>{e.ticks--,e.ticks<=0&&(e.callback&&e.callback(),e.clear(!0,!0))})),E=x.filter((e=>e.fruitType)),E.forEach((e=>{const t=e.rigidBody.translation().y;if(t*F>877&&(e.rigidBody.setTranslation({x:d/F/2,y:c/F/2}),e.rigidBody.setLinvel({x:0,y:0},!0)),e.hitYet){const r=e.rigidBody.linvel(),i=Math.sqrt(Math.pow(r.x,2)+Math.pow(r.y,2));let o=5;const a=e.colliderDesc.shape.radius;if((Math.abs(t-ie.y)<a||t>ie.y)&&(o*=.5),i>o){e.velocityCapped=!0;let t=Math.atan2(r.y,r.x);e.rigidBody.setLinvel({x:Math.cos(t)*o,y:Math.sin(t)*o},!0)}else e.velocityCapped=!1}if(e.impactedByNew){e.collider.setRestitution(0),e.rigidBody.setLinearDamping(25);const t=e.rigidBody.linvel();if(t.y<0&&e.rigidBody.setLinearDamping(25),e.lastVelocity){let r={x:Math.abs(e.lastVelocity.x-t.x),y:Math.abs(e.lastVelocity.y-t.y)};Math.sqrt(Math.pow(r.x,2)+Math.pow(r.y,2))>1&&(e.accelLimited=!0,e.rigidBody.setLinearDamping(I),Q(R*l,(()=>{e.merged||(e.accelLimited=!1,e.rigidBody.setLinearDamping(0))}),[e]))}e.lastVelocity=t}else e.rigidBody.setLinearDamping(0),e.collider.setRestitution(D)})),_.step(G),N=[],G.drainCollisionEvents(((e,i,s)=>{let d,c;N.push([e,i,s]),x.filter((t=>{t.rigidBody&&(t.rigidBody.handle==e?d=t:t.rigidBody.handle==i&&(c=t))})),function(e,i,s){if(e.fruitType&&i.fruitType&&(e.hitYet=!0,i.hitYet=!0),s&&e.fruitType&&i.fruitType&&e.fruitType===i.fruitType){if(e.merged||i.merged)return;e.merged=!0,i.merged=!0;const s=e.rigidBody.translation(),d=i.rigidBody.translation(),c=(s.x+d.x)/2*F,u=(s.y+d.y)/2*F,p=(e.rigidBody.rotation()+i.rigidBody.rotation())/2,y=function(e){const t=Object.keys(n),r=t.indexOf(e);return t[r+1]}(e.fruitType),h=Math.pow(Object.keys(n).indexOf(e.fruitType)+1,2);T+=h,r?.onScoreChange?.(T),r?.onMerge?.({bodies:[e,i],newType:y,score:T});let f=te(y,c+1,u);if(f.impactedByNew=w&&!0,f.rigidBody.setRotation(p),(e.isSad||i.isSad)&&(f.isSad=!0),Q((f.othersImpacted>1?1:.1)*R*l,(()=>{f.impactedByNew=!1}),[f]),e.onMerge&&e.onMerge(f,[e,i]),i.onMerge&&i.onMerge(f,[e,i]),J(e),J(i),t){if("r"==y){let e=o((()=>{X(Math.random()*window.innerWidth,Math.random()*window.innerHeight,"r")}),80);Q(5*l,(()=>{a(e)}))}"t"==y&&(f.rigidBody.setAngvel(10,!0),f.rigidBody.setAngularDamping(.7),function(e,r,i){if(!t)return;const n={id:Math.random(),type:"circle",position:{x:e,y:r},circleRadius:5,renderFirst:!0,render:{strokeStyle:"black",lineWidth:4,opacity:1}};x.push(n);let l=1,s=o((()=>{l<0&&(a(s),x=x.filter((e=>e.id!=n.id))),n.circleRadius+=l,l+=-.002,n.render.opacity=l/1+1e-4}),1)}(c,u),E.forEach((e=>{e.collider.setCollisionGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber])),e.collider.setSolverGroups(z([e.fruitTypeNumber],[1,e.fruitTypeNumber]))})),V(!1),Q(5*l,(()=>{console.log("MERGING"),U()}))),function(e,r,i){if(!t)return;const o=Math.random();Q(2*l,(()=>{x=x.filter((e=>e.id!=o))}))}(),X(c,u,y)}}}(d,c,s)})),b&&0==E.filter((e=>{if(!e.hitYet)return!1;const i=e.rigidBody.linvel().y,n=e.rigidBody.linvel().x,l=e.colliderDesc.shape.radius,d=e.rigidBody.translation();if(Math.sqrt(Math.pow(i,2)+Math.pow(n),2)>3)return!1;if(Math.abs(i)+Math.abs(n)>3)return!1;let c=(d.y+l)*F<ie.y;if(c)if(-1!=C){let e=s-C;if(t&&(ie.fill=`rgb(${e/v*255},0,0)`),e>v&&b)return r?.onGameOver?.(T),void function(e){V(!1),C=Number.MAX_VALUE,b=!1;let t=o((()=>{if(0==E.length)V(!0),C=-1,b=!0,a(t),e&&e();else{let e=Math.floor(Math.random()*E.length);J(E[e])}}),15)}((()=>{W()}))}else C=s;return c})).length&&(C=-1,ie.fill="rgb(0,0,0)")},this.loop=()=>{this.tick(),t&&(()=>{q.clearRect(0,0,d,c),q.save(),q.fillStyle=ie.fill,q.fillRect(0,ie.y,d,10),q.restore();const e=x.filter((e=>e.renderFirst)),t=x.filter((e=>!e.renderFirst));$(e),$(t)})(),i(this.loop,1e3/l)},this.resetToDefaultValues=W,this.mergeAllFruitsEffect=U,this.addFruit=te,this.loadFromState=e=>{u=e.currentType,p=e.nextType,t&&(ee(oe,u),r?.onSyncFromState?.()),B=e.minimizeDuplicates,S=e.drops,k=e.randsGenerated,T=e.score,r?.onScoreChange?.(T),E.forEach((e=>{J(e)})),e.fruits.forEach((function(e){null==e.sad&&(localStorage.clear(),Q(1*l,(()=>{window.location.reload()})));let t=te(e.fruitType,e.position.x*F,e.position.y*F,{velocity:e.velocity});t.rigidBody.setRotation(e.angle),t.isSad=e.sad})),P=A(g);for(let e=0;e<k;e++)P()},this.getFullState=()=>({fruits:E.map((e=>{const t=e.rigidBody.translation(),r=e.rigidBody.linvel(),i=e.rigidBody.rotation();return{position:t,velocity:r,fruitType:e.fruitType,angle:i,sad:e.isSad}})),currentType:u,nextType:p,drops:S,randsGenerated:k,score:T,minimizeDuplicates:B}),this.getNextDropColor=()=>n[p].fillStyle,this.handleClick=e=>{t&&b&&(s-m<y||(m=s,localStorage.setItem("lastInteract",M),S++,te(u,h,30),H(),ee(oe,u),x.forEach((e=>{e.id==oe.id&&(e.position.y=-9999)})),Q(y,(()=>{x.forEach((e=>{e.id==oe.id&&(e.position.y=30)}))})),r?.onDrop?.()))},this.handleMove=e=>{if(!t)return;const r=e.clientX,i=e.clientY;h=(r-t.getBoundingClientRect().left)/t.getBoundingClientRect().width*t.width,f=(i-t.getBoundingClientRect().top)/t.getBoundingClientRect().height*t.height,re(r)},K(0,787,d,10),K(1376,388.5,10,c),K(-10,388.5,10,c);const ie={fill:"#000",y:60};let oe={renderType:"circle",type:"circle",renderFirst:!0,position:{x:683,y:30},render:{fillStyle:"red"},circleRadius:5,hasFace:!0,id:"displayFruit"};t&&(x.push(oe),ee(oe,u)),this.resetToDefaultValues()};document.addEventListener("keydown",(e=>{e.ctrlKey&&e.altKey&&e.shiftKey&&"G"===e.key&&(console.log("close ball"),parent.postMessage("closeBall","*"))})),s.e(727).then(s.bind(s,727)).then((e=>{(window.innerHeight>500||window===window.top)&&(document.body.style.display="unset");const t=new Audio("pop.mp3"),r=document.getElementById("gameCanvas");window.onresize=()=>{Object.assign(r.style,{...777*window.innerWidth/1366>window.innerHeight?{height:"100vh",width:"auto"}:{width:"100vw",height:"auto"}})},window.onresize();const i=document.getElementById("score");let o="casual",a=new d(e,r);function n(){let e=localStorage.getItem("state");e&&(e=JSON.parse(e),o=e.minimizeDuplicates?"casual":"ranked",rankedToggle.checked="ranked"===o,a.loadFromState(e))}function l(){const e=a.getFullState();localStorage.setItem("state",JSON.stringify(e))}a.setSeed(1),c();const s={onDrop:()=>{!function(){if(location.href.includes("file"))return;if(location.href.includes("localhost"))return;let e=Number(localStorage.getItem("clicks")||0);e++,localStorage.setItem("clicks",e),10==e&&(fetch(u+"?clicks="+e),localStorage.setItem("clicks",0))}(),l(),c()},onMerge:e=>{t.cloneNode().play(),l()},onScoreChange:e=>{i.innerText=e},onGameOver:e=>{!async function(e,t){let r=prompt("Enter your name if you would like to submit your score to leaderboard. Use your real name and don't put anything bad pls 🙏");if(!r)return;{let e=await fetch(`https://www.purgomalum.com/service/json?text=${r}`);r=(await e.json()).result}let i=function(e){let t,r,i,o;for(r=atob(e.split(",")[1]),t=[],i=0,o=r.length;i<o;)t.push(r.charCodeAt(i)),i++;return new Blob([new Uint8Array(t)],{type:"image/png"})}(t),a=new FormData;a.append("image",i);let n=await fetch("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID a23332bdafb3fb9"},body:a}),l=(await n.json()).data.link,s={name:r,score:e,canvasString:l,mode:o},d=btoa(JSON.stringify(s));d=d.split("").reverse().join("");let c=await fetch(`${u}?data=${encodeURIComponent(d)}`),p=await c.json();h="casual"===o,f(),m(p),leaderboardPopup.style.display="block";let y=document.getElementById("leaderboardEntries"),g=y.getElementsByClassName("leaderboardImage");for(let e=0;e<g.length;e++)if(g[e].src==l){y.scrollTop=g[e].offsetTop,g[e].style.border="5px solid black",setTimeout((()=>{g[e].style.border="none"}),5e3);break}}(e,r.toDataURL()),localStorage.removeItem("state"),i.innerText="0",c()},onSyncFromState:()=>{c()}};function c(){i.style.borderRight=`5px solid ${a.getNextDropColor()}`}a.loadExtraOptions(s),n(),a.loop(),document.onclick=e=>{e.isTrusted&&(e.target.classList.contains("nodrop")||a.handleClick(e))},document.onmousemove=a.handleMove,document.addEventListener("visibilitychange",(()=>{document.hidden||n()})),i.onclick=()=>{confirm("Are you sure you want to restart? Manually restarting means your score won't have a chance to go on the leaderboard")&&(a.resetToDefaultValues(),i.innerText="0",l(),n())},rankedToggle.oninput=e=>{"ranked"===o?confirm("Ball order in casual is completely random. \n\n Switching modes mid round will clear all balls, continue?")?(a.setMinimalDuplicates(!0),a.setSeed(1e7*Math.random()),a.resetToDefaultValues(),l(),n(),rankedToggle.checked=!1):rankedToggle.checked=!0:confirm("Ball order in ranked is always the same. \n\n Switching modes mid round will clear all balls, continue?")?(a.setMinimalDuplicates(!1),a.setSeed(1),a.resetToDefaultValues(),l(),n(),rankedToggle.checked=!0):rankedToggle.checked=!1};const u="https://script.google.com/macros/s/AKfycbw6iTqt_fyO5OtTZ9de3pZUEglgvTH9tlVxkiPmlpkjaRpoqz0vn8IK_CddqT3F3OLsTw/exec";document.getElementById("leaderboardButton").onclick=()=>{leaderboardPopup.style.display="block"},document.getElementById("leaderboardPopup").onclick=e=>{"leaderboardPopup"==e.target.id&&(leaderboardPopup.style.display="none")};let p=[],y=[],h=!0;function f(){leaderboardModeToggle.innerText=h?"Ranked":"Casual",leaderboardHeader.innerText=h?"Casual Leaderboard":"Ranked Leaderboard",leaderboardSubtitle.innerText=h?"Balls drop in a random order in casual mode.":"Balls always drop in the same order in ranked mode."}function g(){h&&p.length>0||!h&&y.length>0?m(h?p:y):(document.getElementById("leaderboardEntries").innerHTML="",fetch(u+"?mode="+(h?"casual":"ranked")).then((e=>e.json())).then((e=>{h?p=e:y=e,m(e)})))}function m(e){e=e.sort(((e,t)=>t[1]-e[1]));let t=document.getElementById("leaderboardEntries");t.innerHTML="",e.forEach(((e,r)=>{let i=document.createElement("div");i.classList.add("leaderboardEntry"),i.classList.add("nodrop"),i.innerText=`${r+1}.  ${e[0]} - ${e[1]}`,t.appendChild(i);let o=document.createElement("div");i.appendChild(o);let a=document.createElement("img");a.classList.add("leaderboardImage"),a.classList.add("nodrop"),a.src=e[2],a.style.width="100px",a.style.objectFit="cover",a.onclick=t=>{var r;r=e[2],window.open().document.write(`<div style="\n    thisisxssablelolbutidontcarecuzitwouldbekindafunnyifsomebodydidit:true;\n    background-image: url(${r});\n    width: 100vw;\n    height: 100vh;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n">\n    \n</div>`),setInterval((()=>{p=[],y=[]}),6e4)},o.appendChild(a),0==r&&(i.style.color="gold",o.classList.add("leaderContainer"))}))}leaderboardModeToggle.onclick=()=>{h=!h,f(),g()},g()}))})();