function a0_0x5ec7(_0x4ba744,_0x579047){const _0xdf29e7=a0_0xdf29();return a0_0x5ec7=function(_0x5ec7d9,_0x4647e8){_0x5ec7d9=_0x5ec7d9-0x152;let _0x59e5eb=_0xdf29e7[_0x5ec7d9];return _0x59e5eb;},a0_0x5ec7(_0x4ba744,_0x579047);}const a0_0x2c9288=a0_0x5ec7;(function(_0xbfa989,_0x3fd4c6){const _0x3fd3e4=a0_0x5ec7,_0x1cf916=_0xbfa989();while(!![]){try{const _0x56e3b6=parseInt(_0x3fd3e4(0x1a3))/0x1+-parseInt(_0x3fd3e4(0x153))/0x2*(-parseInt(_0x3fd3e4(0x183))/0x3)+-parseInt(_0x3fd3e4(0x192))/0x4*(parseInt(_0x3fd3e4(0x1c7))/0x5)+parseInt(_0x3fd3e4(0x15d))/0x6*(parseInt(_0x3fd3e4(0x15e))/0x7)+parseInt(_0x3fd3e4(0x161))/0x8+-parseInt(_0x3fd3e4(0x1a7))/0x9+-parseInt(_0x3fd3e4(0x1aa))/0xa;if(_0x56e3b6===_0x3fd4c6)break;else _0x1cf916['push'](_0x1cf916['shift']());}catch(_0x1d196b){_0x1cf916['push'](_0x1cf916['shift']());}}}(a0_0xdf29,0xa5b1c));window['innerHeight']>0x1f4&&window===window['top']&&(document[a0_0x2c9288(0x1cc)]['style'][a0_0x2c9288(0x1b4)]=a0_0x2c9288(0x16f));window[a0_0x2c9288(0x17e)][a0_0x2c9288(0x15f)][a0_0x2c9288(0x16e)](a0_0x2c9288(0x168))&&document[a0_0x2c9288(0x175)](a0_0x2c9288(0x19e))[a0_0x2c9288(0x15a)]();const canvas=document[a0_0x2c9288(0x175)](a0_0x2c9288(0x1b3));window[a0_0x2c9288(0x186)]=()=>{const _0x3d4f0d=a0_0x2c9288;Object['assign'](canvas[_0x3d4f0d(0x1c9)],{...window[_0x3d4f0d(0x1cb)]*0x309/0x556>window[_0x3d4f0d(0x1be)]?{'height':'100vh','width':_0x3d4f0d(0x181)}:{'width':_0x3d4f0d(0x17b),'height':_0x3d4f0d(0x181)}});},window['onresize']();const score=document[a0_0x2c9288(0x175)]('score');let CURRENT_MODE=a0_0x2c9288(0x178),game=new CombineGame(canvas);game[a0_0x2c9288(0x19b)](0x1),updateNextDropIndicator();function loadFromStorage(){const _0x4441ab=a0_0x2c9288;let _0x41dace=localStorage[_0x4441ab(0x1b9)](_0x4441ab(0x1c0));_0x41dace&&(_0x41dace=JSON['parse'](_0x41dace),CURRENT_MODE=_0x41dace[_0x4441ab(0x16a)]?_0x4441ab(0x178):_0x4441ab(0x1b8),rankedToggle[_0x4441ab(0x189)]=CURRENT_MODE==='ranked',game[_0x4441ab(0x16d)](_0x41dace));}function writeToStorage(){const _0x43a8a0=a0_0x2c9288,_0x2fe9b5=game['getFullState']();console[_0x43a8a0(0x1c8)](_0x2fe9b5[_0x43a8a0(0x16a)]),localStorage[_0x43a8a0(0x179)](_0x43a8a0(0x1c0),JSON['stringify'](_0x2fe9b5));}const options={'onDrop':()=>{logFruitAdded(),writeToStorage(),updateNextDropIndicator();},'onMerge':_0x4daf5=>{writeToStorage();},'onScoreChange':_0x11cefa=>{const _0x4388cf=a0_0x2c9288;score[_0x4388cf(0x15b)]=_0x11cefa;},'onGameOver':_0x362753=>{const _0x3849aa=a0_0x2c9288;sendLeaderboardScore(_0x362753,canvas[_0x3849aa(0x180)]()),localStorage[_0x3849aa(0x169)]('state'),score[_0x3849aa(0x15b)]='0',updateNextDropIndicator();},'onSyncFromState':()=>{updateNextDropIndicator();}};game['loadExtraOptions'](options),loadFromStorage(),game[a0_0x2c9288(0x1a9)](),document['onclick']=_0x5b0f5e=>{const _0x7baf5=a0_0x2c9288;if(!_0x5b0f5e[_0x7baf5(0x185)])return;if(_0x5b0f5e[_0x7baf5(0x1a5)][_0x7baf5(0x172)][_0x7baf5(0x164)](_0x7baf5(0x184)))return;game[_0x7baf5(0x1c4)](_0x5b0f5e);},document[a0_0x2c9288(0x1ac)]=game[a0_0x2c9288(0x1bd)],document[a0_0x2c9288(0x1a4)]('visibilitychange',()=>{const _0x1d3421=a0_0x2c9288;!document[_0x1d3421(0x199)]&&loadFromStorage();}),score['onclick']=()=>{const _0xe4f2b4=a0_0x2c9288;confirm(_0xe4f2b4(0x1ba))&&(game[_0xe4f2b4(0x166)](),score['innerText']='0',writeToStorage(),loadFromStorage());};function updateNextDropIndicator(){const _0x57b89b=a0_0x2c9288;score[_0x57b89b(0x1c9)][_0x57b89b(0x1b6)]=_0x57b89b(0x18f)+game[_0x57b89b(0x18b)]();}function a0_0xdf29(){const _0x3d9244=['includes','unset','Ball\x20order\x20in\x20ranked\x20is\x20always\x20the\x20same.\x20\x0a\x0a\x20Switching\x20modes\x20mid\x20round\x20will\x20clear\x20all\x20balls,\x20continue?','link','classList','WPiUb','append','getElementById','stringify','block','casual','setItem','scrollTop','100vw','SBCGj','length','location','clicks','toDataURL','auto','.\x20\x20','6672roxzQP','nodrop','isTrusted','onresize','createElement','Enter\x20your\x20name\x20if\x20you\x20would\x20like\x20to\x20submit\x20your\x20score\x20to\x20leaderboard.\x20Use\x20your\x20real\x20name\x20and\x20don\x27t\x20put\x20anything\x20bad\x20pls\x20🙏','checked','BjTaM','getNextDropColor','image/png','image','Balls\x20drop\x20in\x20a\x20random\x20order\x20in\x20casual\x20mode.','5px\x20solid\x20','innerHTML','100px','420252eHqOxe','cas','open','<div\x20style=\x22\x0a\x20\x20\x20\x20thisisxssablelolbutidontcarecuzitwouldbekindafunnyifsomebodydidit:true;\x0a\x20\x20\x20\x20background-image:\x20url(','div','add','then','hidden','?data=','setSeed','src','leaderboardImage','warn','reverse','json','parse','?mode=','1153454Tdgimd','addEventListener','target','charCodeAt','1186929CfiZhY','Balls\x20always\x20drop\x20in\x20the\x20same\x20order\x20in\x20ranked\x20mode.','loop','24156780QUfBMY','img','onmousemove','Casual\x20Leaderboard','push','write','\x20-\x20','hRFhE','appendChild','gameCanvas','display','split','borderRight','color','ranked','getItem','Are\x20you\x20sure\x20you\x20want\x20to\x20restart?\x20Manually\x20restarting\x20means\x20your\x20score\x20won\x27t\x20have\x20a\x20chance\x20to\x20go\x20on\x20the\x20leaderboard','onclick','file','handleMove','innerHeight','leaderboardPopup','state','leaderContainer','Casual','getElementsByClassName','handleClick','setMinimalDuplicates','POST','10TRIQdZ','log','style','?clicks=','innerWidth','body','result','562nWGZjT','border','forEach','none','leaderboardButton','sort',');\x0a\x20\x20\x20\x20width:\x20100vw;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20background-size:\x20contain;\x0a\x20\x20\x20\x20background-repeat:\x20no-repeat;\x0a\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200px;\x0a\x20\x20\x20\x20left:\x200px;\x0a\x22>\x0a\x20\x20\x20\x20\x0a</div>','remove','innerText','CLulA','2159928wzMIch','14CqbEdk','hash','https://script.google.com/macros/s/AKfycbw6iTqt_fyO5OtTZ9de3pZUEglgvTH9tlVxkiPmlpkjaRpoqz0vn8IK_CddqT3F3OLsTw/exec','7503960vwinjc','Ranked\x20Leaderboard','offsetTop','contains','document','resetToDefaultValues','leaderboardEntries','noembed','removeItem','minimizeDuplicates','5px\x20solid\x20black','Ranked','loadFromState'];a0_0xdf29=function(){return _0x3d9244;};return a0_0xdf29();}rankedToggle['oninput']=_0x89596=>{const _0x12f9ee=a0_0x2c9288;if(CURRENT_MODE===_0x12f9ee(0x1b8)){if(_0x12f9ee(0x18a)==='BjTaM'){let _0x5c413f=confirm('Ball\x20order\x20in\x20casual\x20is\x20completely\x20random.\x20\x0a\x0a\x20Switching\x20modes\x20mid\x20round\x20will\x20clear\x20all\x20balls,\x20continue?');_0x5c413f?_0x12f9ee(0x173)===_0x12f9ee(0x1b1)?_0x9a5fcd[_0x25730e][_0x12f9ee(0x1c9)][_0x12f9ee(0x154)]='none':(game[_0x12f9ee(0x1c5)](!![]),game[_0x12f9ee(0x19b)](Math['random']()*0x989680),game[_0x12f9ee(0x166)](),writeToStorage(),loadFromStorage(),rankedToggle['checked']=![]):rankedToggle[_0x12f9ee(0x189)]=!![];}else _0x2ec7a8(_0x2fd6ea[0x2]);}else{let _0x40eb1c=confirm(_0x12f9ee(0x170));if(_0x40eb1c)game[_0x12f9ee(0x1c5)](![]),game[_0x12f9ee(0x19b)](0x1),game[_0x12f9ee(0x166)](),writeToStorage(),loadFromStorage(),rankedToggle[_0x12f9ee(0x189)]=!![];else{if('CLulA'===_0x12f9ee(0x15c))rankedToggle[_0x12f9ee(0x189)]=![];else{let _0x38ea92=_0x1ee88c[_0x12f9ee(0x1b9)](_0x12f9ee(0x1c0));_0x38ea92&&(_0x38ea92=_0x1a8c8e[_0x12f9ee(0x1a1)](_0x38ea92),_0x139639=_0x38ea92[_0x12f9ee(0x16a)]?_0x12f9ee(0x178):_0x12f9ee(0x1b8),_0x52c968['checked']=_0x5cecb5===_0x12f9ee(0x1b8),_0x425670[_0x12f9ee(0x16d)](_0x38ea92));}}}};const LEADERBOARD_URL=a0_0x2c9288(0x160);document[a0_0x2c9288(0x175)](a0_0x2c9288(0x157))[a0_0x2c9288(0x1bb)]=()=>{const _0x4b073b=a0_0x2c9288;leaderboardPopup[_0x4b073b(0x1c9)][_0x4b073b(0x1b4)]=_0x4b073b(0x177);},document['getElementById'](a0_0x2c9288(0x1bf))[a0_0x2c9288(0x1bb)]=_0x17aa11=>{const _0x5ac133=a0_0x2c9288;if(_0x17aa11[_0x5ac133(0x1a5)]['id']!=_0x5ac133(0x1bf))return;leaderboardPopup[_0x5ac133(0x1c9)][_0x5ac133(0x1b4)]=_0x5ac133(0x156);};let CASUAL_LEADERBOARD=[],RANKED_LEADERBOARD=[],leaderboardCasFocused=!![];leaderboardModeToggle[a0_0x2c9288(0x1bb)]=()=>{leaderboardCasFocused=!leaderboardCasFocused,updateLeaderboardStrings(),getLeaderboard();};function updateLeaderboardStrings(){const _0x11b709=a0_0x2c9288;leaderboardModeToggle[_0x11b709(0x15b)]=leaderboardCasFocused?_0x11b709(0x16c):_0x11b709(0x1c2),leaderboardHeader['innerText']=leaderboardCasFocused?_0x11b709(0x1ad):_0x11b709(0x162),leaderboardSubtitle[_0x11b709(0x15b)]=leaderboardCasFocused?_0x11b709(0x18e):_0x11b709(0x1a8);}function dataURLtoBlob(_0x435772){const _0x19e4e8=a0_0x2c9288;let _0x42654f,_0x3c7ad9,_0x163522,_0x39c0b2;_0x3c7ad9=atob(_0x435772[_0x19e4e8(0x1b5)](',')[0x1]),_0x42654f=[],_0x163522=0x0,_0x39c0b2=_0x3c7ad9[_0x19e4e8(0x17d)];while(_0x163522<_0x39c0b2){_0x42654f[_0x19e4e8(0x1ae)](_0x3c7ad9[_0x19e4e8(0x1a6)](_0x163522)),_0x163522++;}return new Blob([new Uint8Array(_0x42654f)],{'type':'image/png'});};async function sendLeaderboardScore(_0x5e17c2,_0x2eb3ad){const _0x3bcb07=a0_0x2c9288;let _0xcf32a4=prompt(_0x3bcb07(0x188));if(_0xcf32a4){let _0x167f3f=await fetch('https://www.purgomalum.com/service/json?text='+_0xcf32a4),_0x1282a3=await _0x167f3f[_0x3bcb07(0x1a0)]();_0xcf32a4=_0x1282a3[_0x3bcb07(0x152)];}else return;let _0x2376b9=dataURLtoBlob(_0x2eb3ad),_0x17483b=new FormData();_0x17483b[_0x3bcb07(0x174)](_0x3bcb07(0x18d),_0x2376b9);let _0xd12daf=await fetch('https://api.imgur.com/3/image',{'method':_0x3bcb07(0x1c6),'headers':{'Authorization':'Client-ID\x20a23332bdafb3fb9'},'body':_0x17483b}),_0x2b1296=await _0xd12daf[_0x3bcb07(0x1a0)](),_0x722af7=_0x2b1296['data'][_0x3bcb07(0x171)],_0x868037={'name':_0xcf32a4,'score':_0x5e17c2,'canvasString':_0x722af7,'mode':CURRENT_MODE},_0x3d6224=btoa(JSON[_0x3bcb07(0x176)](_0x868037));_0x3d6224=_0x3d6224[_0x3bcb07(0x1b5)]('')[_0x3bcb07(0x19f)]()['join']('');let _0x5e4a64=await fetch(LEADERBOARD_URL+_0x3bcb07(0x19a)+encodeURIComponent(_0x3d6224)),_0x2c31c0=await _0x5e4a64[_0x3bcb07(0x1a0)]();leaderboardCasFocused=CURRENT_MODE===_0x3bcb07(0x193),updateLeaderboardStrings(),renderLeaderboard(_0x2c31c0),leaderboardPopup[_0x3bcb07(0x1c9)][_0x3bcb07(0x1b4)]=_0x3bcb07(0x177);let _0x431f5d=document[_0x3bcb07(0x175)](_0x3bcb07(0x167)),_0x2fa13c=_0x431f5d[_0x3bcb07(0x1c3)](_0x3bcb07(0x19d));for(let _0x33c49f=0x0;_0x33c49f<_0x2fa13c[_0x3bcb07(0x17d)];_0x33c49f++){if(_0x2fa13c[_0x33c49f][_0x3bcb07(0x19c)]==_0x722af7){_0x431f5d[_0x3bcb07(0x17a)]=_0x2fa13c[_0x33c49f][_0x3bcb07(0x163)],_0x2fa13c[_0x33c49f][_0x3bcb07(0x1c9)][_0x3bcb07(0x154)]=_0x3bcb07(0x16b),setTimeout(()=>{_0x2fa13c[_0x33c49f]['style']['border']='none';},0x1388);break;}}}function getLeaderboard(){const _0x5e2226=a0_0x2c9288;if(leaderboardCasFocused&&CASUAL_LEADERBOARD['length']>0x0||!leaderboardCasFocused&&RANKED_LEADERBOARD[_0x5e2226(0x17d)]>0x0){renderLeaderboard(leaderboardCasFocused?CASUAL_LEADERBOARD:RANKED_LEADERBOARD);return;};let _0x20ef84=document[_0x5e2226(0x175)](_0x5e2226(0x167));_0x20ef84[_0x5e2226(0x190)]='',fetch(LEADERBOARD_URL+(_0x5e2226(0x1a2)+(leaderboardCasFocused?_0x5e2226(0x193):_0x5e2226(0x1b8))))[_0x5e2226(0x198)](_0x3002b4=>_0x3002b4[_0x5e2226(0x1a0)]())['then'](_0x543677=>{leaderboardCasFocused?CASUAL_LEADERBOARD=_0x543677:RANKED_LEADERBOARD=_0x543677,renderLeaderboard(_0x543677);});};function renderLeaderboard(_0x4b5441){const _0x1f9441=a0_0x2c9288;_0x4b5441=_0x4b5441[_0x1f9441(0x158)]((_0x19d5d,_0x4ecd92)=>_0x4ecd92[0x1]-_0x19d5d[0x1]);let _0xf27dc2=document[_0x1f9441(0x175)]('leaderboardEntries');_0xf27dc2[_0x1f9441(0x190)]='',_0x4b5441[_0x1f9441(0x155)]((_0x5f4a3c,_0x3ec44b)=>{const _0x120854=_0x1f9441;let _0x1eed7f=document[_0x120854(0x187)](_0x120854(0x196));_0x1eed7f['classList'][_0x120854(0x197)]('leaderboardEntry'),_0x1eed7f[_0x120854(0x172)]['add']('nodrop'),_0x1eed7f[_0x120854(0x15b)]=_0x3ec44b+0x1+_0x120854(0x182)+_0x5f4a3c[0x0]+_0x120854(0x1b0)+_0x5f4a3c[0x1],_0xf27dc2[_0x120854(0x1b2)](_0x1eed7f);let _0x59318a=document['createElement'](_0x120854(0x196));_0x1eed7f[_0x120854(0x1b2)](_0x59318a);let _0x3d7e7c=document['createElement'](_0x120854(0x1ab));_0x3d7e7c[_0x120854(0x172)][_0x120854(0x197)](_0x120854(0x19d)),_0x3d7e7c[_0x120854(0x172)][_0x120854(0x197)]('nodrop'),_0x3d7e7c[_0x120854(0x19c)]=_0x5f4a3c[0x2],_0x3d7e7c[_0x120854(0x1c9)]['width']=_0x120854(0x191),_0x3d7e7c[_0x120854(0x1c9)]['objectFit']='cover',_0x3d7e7c[_0x120854(0x1bb)]=_0x3818e0=>{const _0x480425=_0x120854;if('nZhGi'!=='Onnoj')openImage(_0x5f4a3c[0x2]);else{let _0x4a4f68=_0x40a404[_0x480425(0x194)]();_0x4a4f68[_0x480425(0x165)][_0x480425(0x1af)](_0x480425(0x195)+_0x1ede95+_0x480425(0x159)),_0x315e33(()=>{_0x3f33bb=[],_0x300b70=[];},0x3c*0x3e8);}},_0x59318a[_0x120854(0x1b2)](_0x3d7e7c),_0x3ec44b==0x0&&(_0x1eed7f[_0x120854(0x1c9)][_0x120854(0x1b7)]='gold',_0x59318a[_0x120854(0x172)]['add'](_0x120854(0x1c1)));});}getLeaderboard();function openImage(_0x39ed74){const _0x4866ca=a0_0x2c9288;let _0x3095ed=window[_0x4866ca(0x194)]();_0x3095ed['document']['write'](_0x4866ca(0x195)+_0x39ed74+_0x4866ca(0x159)),setInterval(()=>{const _0x373a25=_0x4866ca;if(_0x373a25(0x17c)===_0x373a25(0x17c))CASUAL_LEADERBOARD=[],RANKED_LEADERBOARD=[];else{let _0x5c786a,_0x132634,_0x4963e6,_0x6d4f9f;_0x132634=_0x54f9f0(_0x207db1[_0x373a25(0x1b5)](',')[0x1]),_0x5c786a=[],_0x4963e6=0x0,_0x6d4f9f=_0x132634[_0x373a25(0x17d)];while(_0x4963e6<_0x6d4f9f){_0x5c786a['push'](_0x132634['charCodeAt'](_0x4963e6)),_0x4963e6++;}return new _0x36c7de([new _0x3269f4(_0x5c786a)],{'type':_0x373a25(0x18c)});}},0x3c*0x3e8);}function logFruitAdded(){const _0xb567fb=a0_0x2c9288;if(location['href'][_0xb567fb(0x16e)](_0xb567fb(0x1bc)))return;let _0x116edd=Number(localStorage[_0xb567fb(0x1b9)](_0xb567fb(0x17f))||0x0);_0x116edd++,localStorage['setItem'](_0xb567fb(0x17f),_0x116edd),_0x116edd==0xa&&(fetch(LEADERBOARD_URL+_0xb567fb(0x1ca)+_0x116edd),localStorage[_0xb567fb(0x179)](_0xb567fb(0x17f),0x0));}