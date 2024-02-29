(()=>{"use strict";var e,t,i,r,o,n,a={},l={};function d(e){var t=l[e];if(void 0!==t)return t.exports;var i=l[e]={id:e,loaded:!1,exports:{}};return a[e](i,i.exports,d),i.loaded=!0,i.exports}d.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},d.a=(o,n,a)=>{var l;a&&((l=[]).d=-1);var d,s,c,u=new Set,p=o.exports,y=new Promise(((e,t)=>{c=t,s=e}));y[t]=p,y[e]=e=>(l&&e(l),u.forEach(e),y.catch((e=>{}))),o.exports=y,n((o=>{var n;d=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var n=[];n.d=0,o.then((e=>{a[t]=e,r(n)}),(e=>{a[i]=e,r(n)}));var a={};return a[e]=e=>e(n),a}}var l={};return l[e]=e=>{},l[t]=o,l})))(o);var a=()=>d.map((e=>{if(e[i])throw e[i];return e[t]})),s=new Promise((t=>{(n=()=>t(a)).r=0;var i=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(n.r++,e.push(n)));d.map((t=>t[e](i)))}));return n.r?s:a()}),(e=>(e?c(y[i]=e):s(p),r(l)))),l&&l.d<0&&(l.d=0)},d.d=(e,t)=>{for(var i in t)d.o(t,i)&&!d.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,i)=>(d.f[i](e,t),t)),[])),d.u=e=>e+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="watermeloncombine:",d.l=(e,t,i,r)=>{if(o[e])o[e].push(t);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+i){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",n+i),a.src=e),o[e]=[t];var p=(t,i)=>{a.onerror=a.onload=null,clearTimeout(y);var r=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(i))),t)return t(i)},y=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.v=(e,t,i,r)=>{var o=fetch(d.p+""+i+".module.wasm"),n=()=>o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)));return o.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,r).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),n();throw e})):n()))},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e={792:0};d.f.j=(t,i)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise(((i,o)=>r=e[t]=[i,o]));i.push(r[2]=o);var n=d.p+d.u(t),a=new Error;d.l(n,(i=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",a.name="ChunkLoadError",a.type=o,a.request=n,r[1](a)}}),"chunk-"+t,t)}};var t=(t,i)=>{var r,o,[n,a,l]=i,s=0;if(n.some((t=>0!==e[t]))){for(r in a)d.o(a,r)&&(d.m[r]=a[r]);l&&l(d)}for(t&&t(i);s<n.length;s++)o=n[s],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},i=self.webpackChunkwatermeloncombine=self.webpackChunkwatermeloncombine||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();const s=function(e,t,i){if(!e)throw"gimme rapier yo";const r=window.setTimeout,o=window.setInterval,n=window.clearInterval,a={red:{fillStyle:"#FF0000",radius:12,type:"circle"},blue:{fillStyle:"#0000FF",radius:45,type:"circle"},aqua:{fillStyle:"#00FFFF",radius:75,type:"circle"},green:{fillStyle:"#008000",radius:100,type:"circle"},yellow:{fillStyle:"#FFFF00",radius:130,type:"circle"},purple:{fillStyle:"#800080",radius:155,type:"circle"},orange:{fillStyle:"#FFA500",radius:185,type:"circle"},pink:{fillStyle:"#FFC0CB",radius:200,type:"circle"},brown:{fillStyle:"#A52A2A",radius:215,type:"circle"},black:{fillStyle:"#000000",radius:260,shadowBlur:80,effect:"pulse",type:"circle",hasStroke:!0},r:{fillStyle:"r",radius:50,shadowBlur:200,effect:"dance",type:"circle"},t:{fillStyle:"#FF0000",strokeStyle:"#cccccc",hasStroke:!0,lineWidth:5,radius:80,type:"triangle",spawnSpin:.1}},l={group:1},d=1366;let s,c,u=683,p=1e7*Math.random(),y=0,h=!0;const f=Math.random().toString(36).substring(7);let g=0,m=!1,b=0,w=0,v=[],S=[],k=-1,M=100;const B=.2,x=500,T=60;let E=[],C=[];function D(e){var t=2**35-31,i=e%t;return function(){return(i=185852*i%t)/t}}this.loadExtraOptions=e=>{i=e};let F=D(p);function O(){return b++,F()}function I(){F=D(p),b=0}this.setSeed=e=>{p=e,I()},this.setMinimalDuplicates=e=>{m=e};const R=new e.EventQueue(!0),j=new e.World({x:0,y:9.81}),A=t?.getContext("2d"),P=e=>{e.forEach((e=>{const t={};switch(e.position?(t.x=e.position.x,t.y=e.position.y):(t.x=e.rigidBody.translation().x*M,t.y=e.rigidBody.translation().y*M),A.save(),A.beginPath(),function(e){const t=`hsl(${Date.now()/5%360}, 100%, 50%)`;let i=e.render.fillStyle;if("r"===i&&(i=t),A.fillStyle=i,A.strokeStyle=e.render.strokeStyle,A.lineWidth=e.render.lineWidth||0,A.shadowColor=e.render.shadowColor||A.fillStyle,A.shadowBlur=e.render.shadowBlur,A.globalAlpha=e.render.opacity,"pulse"===e.render.effect){let t=e.render.shadowBlur;A.shadowBlur=t?t*(Math.abs(Date.now()/50%t-t/2)/t):0}if("dance"===e.render.effect){const e=50,t=Math.cos(Date.now()/500)*e,i=Math.sin(Date.now()/500)*e;A.shadowOffsetX=t,A.shadowOffsetY=i}}(e),e.type){case"text":A.font="30px Arial",A.fillText(e.text,t.x,t.y);break;case"circle":const i=e.circleRadius||e.colliderDesc.shape.radius*M;A.arc(t.x,t.y,i,0,2*Math.PI),A.fill(),e.noFace||("#000000"===e.render.fillStyle?A.fillStyle="white":A.fillStyle="black",A.globalAlpha*=.5,A.translate(t.x,t.y),e.rigidBody&&A.rotate(e.rigidBody.rotation()),A.beginPath(),e.isSad?A.arc(0,.25*i,.5*i,1*Math.PI,0):A.arc(0,.05*i,.5*i,0,1*Math.PI),A.fill(),A.beginPath(),A.arc(.2*i,.2*-i,.15*i,0,2*Math.PI),A.arc(.2*-i,.2*-i,.15*i,0,2*Math.PI),A.fill(),A.closePath())}A.closePath(),e.render.hasStroke&&A.stroke(),A.restore()}))};function L(e){e?j.setGravity({x:0,y:9.81}):j.setGravity({x:0,y:0})}function N(){s="red",c="red",g=0,w=0,y=0,h=!0,I(),S.forEach((e=>{q(e)})),S=[],_(),t&&H(J,s)}function _(){s=c;let e=4,t=Math.max(Math.round(6-g/100),3);if(m)for(;e>0;){let i=O();c=Object.keys(a)[Math.floor(Math.pow(i,t)*Object.keys(a).length/2)],c===s?e--:e=0,c===Object.keys(a)[0]&&(e=0)}else{let e=O();c=Object.keys(a)[Math.floor(Math.pow(e,t)*Object.keys(a).length/2)]}G()}function $(t,i,r){let o=e.ColliderDesc.ball(r/M).setRestitution(B),n=e.RigidBodyDesc.dynamic().setTranslation(t/M,i/M).setCcdEnabled(!0),a=j.createRigidBody(n);o.setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),o.setFriction(.1),o.setFrictionCombineRule(e.CoefficientCombineRule.Max),o.setMass(r);let l=j.createCollider(o,a),d={id:Math.random(),type:"circle",renderType:"circle",rigidBody:a,colliderDesc:o,collider:l};return v.push(d),d}function W(t,i,r,o){let n=e.ColliderDesc.cuboid(r/M,o/M),a=e.RigidBodyDesc.fixed().setTranslation(t/M,i/M),l=j.createRigidBody(a);n.setFriction(1),j.createCollider(n,l);let d={type:"rectangle",rigidBody:l,colliderDesc:n,render:{fillStyle:"black"}};return v.push(d),d}function q(e){j.removeRigidBody(e.rigidBody),v=v.filter((t=>t.id!=e.id)),S=S.filter((t=>t.id!=e.id))}function z(e,t){t>=3||S.forEach((i=>{if(i.id==e.id)return;let r=Math.sqrt(Math.pow(i.rigidBody.translation().x-e.rigidBody.translation().x,2)+Math.pow(i.rigidBody.translation().y-e.rigidBody.translation().y,2)),o=i.colliderDesc.shape.radius+e.colliderDesc.shape.radius;console.log(r,o),r<o&&(i.impactedByNew=!0,V(x/T,(()=>{i.impactedByNew=!1})),z(i,t?t+1:1))}))}function V(e,t){E.push({ticks:e,callback:t})}function H(e,t){e.render={...e.render,...a[t]},t&&"circle"==a[t].type&&(e.circleRadius=a[t].radius)}function U(e,t,i,r){let o;return"circle"===a[e].type?o=$(t,i,a[e].radius):a[e].type,r&&(r.forceRadius&&(q(o),o=$(t,i,r.forceRadius)),r.velocity&&o.rigidBody.setLinvel(r.velocity,!0),Object.assign(o,r)),a[e].spawnSpin&&o.rigidBody.setAngvel(a[e].spawnSpin),H(o,e),r&&r.forceRadius&&(o.circleRadius=r.forceRadius),o.fruitType=e,o.fruitTypeNumber=Object.keys(a).indexOf(e),o.hitYet=!1,1e4*Math.random()==1&&(o.isSad=!0),S.push(o),z(o),o}function G(e){let i=a[s].radius;u-i<0?u=i:u+i>t.width&&(u=t.width-i),e<t.getBoundingClientRect().left?u=i:e>t.getBoundingClientRect().width+t.getBoundingClientRect().left&&(u=t.width-i),J.position.x=u}this.tick=()=>{E=E.filter((e=>(e.ticks--,!(e.ticks<=0&&(e.callback(),1))))),S=v.filter((e=>e.fruitType)),S.forEach((e=>{const t=e.rigidBody.translation().y;if(t>877&&(e.rigidBody.setTranslation({x:683,y:388.5}),e.rigidBody.setLinvel({x:0,y:0},!0)),e.hitYet){const i=e.rigidBody.linvel(),r=Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2));let o=5;const n=e.colliderDesc.shape.radius;if((Math.abs(t-Y.y)<n||t>Y.y)&&(o*=.5),r>o){e.velocityCapped=!0;let t=Math.atan2(i.y,i.x);e.rigidBody.setLinvel({x:Math.cos(t)*o,y:Math.sin(t)*o},!0)}else e.velocityCapped=!1}e.impactedByNew?(e.rigidBody.setAngularDamping(200),e.rigidBody.setLinearDamping(200),e.rigidBody.linvel().y<0&&e.rigidBody.setLinearDamping(100)):(e.rigidBody.setAngularDamping(0),e.rigidBody.setLinearDamping(0))})),j.step(R),C=[],R.drainCollisionEvents(((e,r,d)=>{let s,c;C.push([e,r,d]),v.filter((t=>{t.rigidBody&&(t.rigidBody.handle==e?s=t:t.rigidBody.handle==r&&(c=t))})),function(e,r,d){if(e.fruitType&&r.fruitType&&(e.hitYet=!0,r.hitYet=!0),d&&e.fruitType&&r.fruitType&&e.fruitType===r.fruitType){if(e.merged||r.merged)return;e.merged=!0,r.merged=!0,e.onMerge&&e.onMerge(),r.onMerge&&r.onMerge();const d=e.rigidBody.translation(),s=r.rigidBody.translation(),c=(d.x+s.x)/2*M,u=(d.y+s.y)/2*M,p=(e.rigidBody.rotation()+r.rigidBody.rotation())/2,y=function(e){const t=Object.keys(a),i=t.indexOf(e);return t[i+1]}(e.fruitType);if(t){if("r"==y){let e=o((()=>{!function(e,i,r){if(!t)return;const o=a.r.fillStyle;let n=a.r.radius;for(let t=0;t<15;t++){const t=Math.random()*Math.PI*2,r=.002*Math.random(),a=$(e+Math.cos(t)*n,i+Math.sin(t)*n,5);a.render={fillStyle:o,shadowBlur:20,effect:"pulse",opacity:1},a.noFace=!0,a.rigidBody.setLinvel({x:Math.cos(t)*r,y:Math.sin(t)*r},!0),V((2e3+1e3*Math.random())/T,(()=>{q(a)}))}}(Math.random()*window.innerWidth,Math.random()*window.innerHeight)}),80);V(5e3/T,(()=>{n(e)}))}"triangle"==y&&(function(e,i,r){if(!t)return;const a={id:Math.random(),type:"circle",position:{x:e,y:i},circleRadius:5,renderFirst:!0,render:{strokeStyle:"black",lineWidth:4,opactiy:1}};v.push(a);let l=1,d=o((()=>{l<0&&(n(d),v=v.filter((e=>e.id!=a.id))),a.circleRadius+=l,l+=-.002,a.render.opacity=l/1+1e-4}),1)}(c,u),function(){var e=-1;L(!1),h=!1;let t=()=>{engine.world.bodies.forEach((e=>{e.velocity.x=0,e.velocity.y=0}));let i=[];for(;i.length<=1;)if(e++,i=S.filter((t=>t.fruitTypeNumber==e)),e>10)return engine.world.bodies.forEach((e=>{e.collisionFilter=l})),engine.world.gravity.y=1,void(h=!0);let r=Math.floor(i.length/2),o=0;for(var n=0;n<i.length-1;n+=2){var a=i[n],d=i[n+1];if(a.position.y>d.position.y){let e=a;a=d,d=e}var s={group:1e5*Math.random()};a.collisionFilter=s,d.collisionFilter=s;var c=a.position,u=d.position;let e=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));var p=5e-5*a.mass*e;let l=Math.atan2(u.y-c.y,u.x-c.x);var y={x:Math.cos(l)*p,y:Math.sin(l)*p};Body.applyForce(a,a.position,y);let h=V(3e3/T,(()=>{a.merged||Composite.remove(engine.world,a),d.merged||Composite.remove(engine.world,d),o++,o==r&&t()}));a.onMerge=()=>{o++,clearTimeout(h),o==r&&V(1e3/T,(()=>{t()}))}}};V(5e3/T,t)}())}const f=Math.pow(Object.keys(a).indexOf(e.fruitType)+1,2);w+=f,i?.onScoreChange?.(w),i?.onMerge?.({bodies:[e,r],newType:y,score:w});let g=U(y,c,u);g.impactedByNew=!0,g.rigidBody.setRotation(p),(e.isSad||r.isSad)&&(g.isSad=!0),V(x/T,(()=>{g.impactedByNew=!1})),q(e),q(r),t&&function(e,i,r){if(!t)return;const o=Math.random();V(2e3/T,(()=>{v=v.filter((e=>e.id!=o))}))}()}}(s,c,d)})),h&&0==S.filter((e=>{if(!e.hitYet)return!1;const r=e.rigidBody.linvel().y,a=e.rigidBody.linvel().x,l=e.colliderDesc.shape.radius,d=e.rigidBody.translation();if(Math.sqrt(Math.pow(r,2)+Math.pow(a),2)>3)return!1;if(Math.abs(r)+Math.abs(a)>3)return!1;let s=(d.y+l)*M<Y.y;if(s)if(-1!=k){let e=3e3,r=Date.now()-k;if(t&&(Y.fill=`rgb(${r/e*255},0,0)`),r>e&&h)return i?.onGameOver?.(w),void function(e){L(!1),k=Number.MAX_VALUE,h=!1;let t=o((()=>{if(0==S.length)L(!0),k=-1,h=!0,n(t),e&&e();else{let e=Math.floor(Math.random()*S.length);q(S[e])}}),15)}((()=>{N()}))}else k=Date.now();return s})).length&&(k=-1,Y.fill="rgb(0,0,0)")},this.loop=()=>{this.tick(),t&&(()=>{A.clearRect(0,0,d,777),A.save(),A.fillStyle=Y.fill,A.fillRect(0,Y.y,d,10),A.restore();const e=v.filter((e=>e.renderFirst)),t=v.filter((e=>!e.renderFirst));P(e),P(t)})(),r(this.loop,1e3/T)},this.resetToDefaultValues=N,this.addFruit=U,this.loadFromState=e=>{s=e.currentType,c=e.nextType,t&&(H(J,s),i?.onSyncFromState?.()),m=e.minimizeDuplicates,g=e.drops,b=e.randsGenerated,w=e.score,i?.onScoreChange?.(w),y=e.lastDropTime,S.forEach((e=>{q(e)})),e.fruits.forEach((function(e){let t=U(e.fruitType,e.position.x*M,e.position.y*M,{velocity:e.velocity});t.rigidBody.setRotation(e.angle),t.isSad=e.sad})),F=D(p);for(let e=0;e<b;e++)F()},this.getFullState=()=>({fruits:S.map((e=>{const t=e.rigidBody.translation(),i=e.rigidBody.linvel(),r=e.rigidBody.rotation();return{position:t,velocity:i,fruitType:e.fruitType,angle:r,sad:e.isSad}})),currentType:s,nextType:c,drops:g,randsGenerated:b,score:w,lastDropTime:y,minimizeDuplicates:m}),this.getNextDropColor=()=>a[c].fillStyle,this.handleClick=e=>{t&&h&&(Date.now()-y<500||(y=Date.now(),localStorage.setItem("lastInteract",f),g++,U(s,u,30),_(),H(J,s),J.position.y=-9999,V(500/T,(()=>{J.position.y=30})),i?.onDrop?.()))},this.handleMove=e=>{if(!t)return;const i=e.clientX;u=(i-t.getBoundingClientRect().left)/t.getBoundingClientRect().width*t.width,G(i)},W(0,787,d,10),W(1376,388.5,10,777),W(-10,388.5,10,777);const Y={fill:"#000",y:60};let J={renderType:"circle",type:"circle",renderFirst:!0,position:{x:683,y:30},render:{fillStyle:"red"},circleRadius:5};t&&(v.push(J),H(J,s)),this.resetToDefaultValues()};d.e(727).then(d.bind(d,727)).then((e=>{(window.innerHeight>500||window===window.top)&&(document.body.style.display="unset"),window.location.hash.includes("noembed")&&document.getElementById("warn").remove();const t=new Audio("pop.mp3"),i=document.getElementById("gameCanvas");window.onresize=()=>{Object.assign(i.style,{...777*window.innerWidth/1366>window.innerHeight?{height:"100vh",width:"auto"}:{width:"100vw",height:"auto"}})},window.onresize();const r=document.getElementById("score");let o="casual",n=new s(e,i);function a(){let e=localStorage.getItem("state");e&&(e=JSON.parse(e),o=e.minimizeDuplicates?"casual":"ranked",rankedToggle.checked="ranked"===o,n.loadFromState(e))}function l(){const e=n.getFullState();localStorage.setItem("state",JSON.stringify(e))}n.setSeed(1),c();const d={onDrop:()=>{!function(){if(location.href.includes("file"))return;if(location.href.includes("localhost"))return;let e=Number(localStorage.getItem("clicks")||0);e++,localStorage.setItem("clicks",e),10==e&&(fetch(u+"?clicks="+e),localStorage.setItem("clicks",0))}(),l(),c()},onMerge:e=>{t.cloneNode().play(),l()},onScoreChange:e=>{r.innerText=e},onGameOver:e=>{!async function(e,t){let i=prompt("Enter your name if you would like to submit your score to leaderboard. Use your real name and don't put anything bad pls 🙏");if(!i)return;{let e=await fetch(`https://www.purgomalum.com/service/json?text=${i}`);i=(await e.json()).result}let r=function(e){let t,i,r,o;for(i=atob(e.split(",")[1]),t=[],r=0,o=i.length;r<o;)t.push(i.charCodeAt(r)),r++;return new Blob([new Uint8Array(t)],{type:"image/png"})}(t),n=new FormData;n.append("image",r);let a=await fetch("https://api.imgur.com/3/image",{method:"POST",headers:{Authorization:"Client-ID a23332bdafb3fb9"},body:n}),l=(await a.json()).data.link,d={name:i,score:e,canvasString:l,mode:o},s=btoa(JSON.stringify(d));s=s.split("").reverse().join("");let c=await fetch(`${u}?data=${encodeURIComponent(s)}`),p=await c.json();h="cas"===o,f(),m(p),leaderboardPopup.style.display="block";let y=document.getElementById("leaderboardEntries"),g=y.getElementsByClassName("leaderboardImage");for(let e=0;e<g.length;e++)if(g[e].src==l){y.scrollTop=g[e].offsetTop,g[e].style.border="5px solid black",setTimeout((()=>{g[e].style.border="none"}),5e3);break}}(e,i.toDataURL()),localStorage.removeItem("state"),r.innerText="0",c()},onSyncFromState:()=>{c()}};function c(){r.style.borderRight=`5px solid ${n.getNextDropColor()}`}n.loadExtraOptions(d),a(),n.loop(),document.onclick=e=>{e.isTrusted&&(e.target.classList.contains("nodrop")||n.handleClick(e))},document.onmousemove=n.handleMove,document.addEventListener("visibilitychange",(()=>{document.hidden||a()})),r.onclick=()=>{confirm("Are you sure you want to restart? Manually restarting means your score won't have a chance to go on the leaderboard")&&(n.resetToDefaultValues(),r.innerText="0",l(),a())},rankedToggle.oninput=e=>{"ranked"===o?confirm("Ball order in casual is completely random. \n\n Switching modes mid round will clear all balls, continue?")?(n.setMinimalDuplicates(!0),n.setSeed(1e7*Math.random()),n.resetToDefaultValues(),l(),a(),rankedToggle.checked=!1):rankedToggle.checked=!0:confirm("Ball order in ranked is always the same. \n\n Switching modes mid round will clear all balls, continue?")?(n.setMinimalDuplicates(!1),n.setSeed(1),n.resetToDefaultValues(),l(),a(),rankedToggle.checked=!0):rankedToggle.checked=!1};const u="https://script.google.com/macros/s/AKfycbw6iTqt_fyO5OtTZ9de3pZUEglgvTH9tlVxkiPmlpkjaRpoqz0vn8IK_CddqT3F3OLsTw/exec";document.getElementById("leaderboardButton").onclick=()=>{leaderboardPopup.style.display="block"},document.getElementById("leaderboardPopup").onclick=e=>{"leaderboardPopup"==e.target.id&&(leaderboardPopup.style.display="none")};let p=[],y=[],h=!0;function f(){leaderboardModeToggle.innerText=h?"Ranked":"Casual",leaderboardHeader.innerText=h?"Casual Leaderboard":"Ranked Leaderboard",leaderboardSubtitle.innerText=h?"Balls drop in a random order in casual mode.":"Balls always drop in the same order in ranked mode."}function g(){h&&p.length>0||!h&&y.length>0?m(h?p:y):(document.getElementById("leaderboardEntries").innerHTML="",fetch(u+"?mode="+(h?"cas":"ranked")).then((e=>e.json())).then((e=>{h?p=e:y=e,m(e)})))}function m(e){e=e.sort(((e,t)=>t[1]-e[1]));let t=document.getElementById("leaderboardEntries");t.innerHTML="",e.forEach(((e,i)=>{let r=document.createElement("div");r.classList.add("leaderboardEntry"),r.classList.add("nodrop"),r.innerText=`${i+1}.  ${e[0]} - ${e[1]}`,t.appendChild(r);let o=document.createElement("div");r.appendChild(o);let n=document.createElement("img");n.classList.add("leaderboardImage"),n.classList.add("nodrop"),n.src=e[2],n.style.width="100px",n.style.objectFit="cover",n.onclick=t=>{var i;i=e[2],window.open().document.write(`<div style="\n    thisisxssablelolbutidontcarecuzitwouldbekindafunnyifsomebodydidit:true;\n    background-image: url(${i});\n    width: 100vw;\n    height: 100vh;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n">\n    \n</div>`),setInterval((()=>{p=[],y=[]}),6e4)},o.appendChild(n),0==i&&(r.style.color="gold",o.classList.add("leaderContainer"))}))}leaderboardModeToggle.onclick=()=>{h=!h,f(),g()},g()}))})();