(function(){var b=document.querySelector('.hban');if(!b)return;var im=b.querySelectorAll('img'),c=b.querySelector('.hbc'),i=0;
if(im.length<2||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
addEventListener('load',function(){[].forEach.call(im,function(x){if(!x.getAttribute('src'))x.src=x.getAttribute('data-src')});
setInterval(function(){if(document.hidden)return;im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on');var x=im[i],a=c.querySelectorAll('a');
a[0].textContent=x.getAttribute('data-c');a[0].href=x.getAttribute('data-u');a[1].textContent=x.getAttribute('data-l');a[1].href=x.getAttribute('data-lu')},7000)})})();
(function(){var d=document,j=d.getElementById('tmj');if(!j)return;var P=JSON.parse(j.textContent),pop=d.getElementById('tmpop'),cur=null,coarse=matchMedia('(hover: none)').matches;
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return'&#'+c.charCodeAt(0)+';'})}
function sec(t,a){return a.length?'<p><i>'+t+'</i>'+a.map(esc).join('<br>')+'</p>':''}
function html(p){var h='<b>'+esc(p.n)+'</b><small>'+esc(p.t)+'</small>'+sec('學歷',p.edu)+sec('經歷',p.exp)+sec('事蹟',p.hon);if(!p.edu.length&&!p.exp.length)h+='<p>縣府官網的介紹頁沒有列學經歷。</p>';
h+='<span class=tpf>出處：<a href="'+esc(p.u)+'" target=_blank rel=noopener>宜蘭縣政府官網</a>'+(p.d?'（頁面更新 '+esc(p.d)+'）':'')+'</span>';if(coarse)h+='<span class=tpb><a href="'+esc(p.go)+'">看職掌和電話 ›</a><button type=button class=tpx>關閉</button></span>';return h}
function show(li){var p=P[li.getAttribute('data-p')];if(!p)return;cur=li;pop.innerHTML=html(p);pop.hidden=false;if(coarse){pop.className='tps';pop.setAttribute('role','dialog');var x=pop.querySelector('.tpx');if(x)x.focus();return}
pop.className='';var r=li.getBoundingClientRect(),w=pop.offsetWidth,x2=Math.min(Math.max(8,r.left+r.width/2-w/2),innerWidth-w-8),y=r.bottom+6;if(y+pop.offsetHeight>innerHeight-8)y=Math.max(8,r.top-pop.offsetHeight-6);pop.style.left=x2+'px';pop.style.top=y+'px'}
function hide(){pop.hidden=true;var c=cur;cur=null;if(coarse&&c){var a=c.querySelector('a');if(a)a.focus()}}
[].forEach.call(d.querySelectorAll('.tml li[data-p]'),function(li){var a=li.querySelector('a');if(!P[li.getAttribute('data-p')])return;
if(coarse){a.addEventListener('click',function(ev){ev.preventDefault();show(li)})}
else{li.addEventListener('mouseenter',function(){show(li)});li.addEventListener('mouseleave',function(ev){if(!pop.contains(ev.relatedTarget))hide()});
a.addEventListener('focus',function(){show(li)});a.addEventListener('blur',function(){setTimeout(function(){if(!pop.contains(d.activeElement)&&cur===li)hide()},60)})}});
pop.addEventListener('mouseleave',function(ev){if(!coarse&&!(cur&&cur.contains(ev.relatedTarget)))hide()});
pop.addEventListener('click',function(ev){if(ev.target.classList.contains('tpx'))hide()});
d.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&!pop.hidden)hide()});addEventListener('scroll',function(){if(!coarse&&!pop.hidden)hide()},{passive:true})})();
(function(){var d=document,A="https://yilan.zengzhisui.com/api/",t0=Date.now();if(!A)return;
var b=d.querySelector('.hban');if(b){var O=A.replace(/api\/$/,''),c=b.querySelector('.hbc'),art=c?c.textContent:'';
fetch(A+'photos').then(function(r){return r.json()}).then(function(j){var ps=(j&&j.photos)||[];if(!ps.length)return;ps=ps.slice(0,12);
var ims=ps.map(function(p){var i=d.createElement('img');i.alt='';i.decoding='async';i.src=O+'photo/'+p.id+'.jpg';b.insertBefore(i,b.querySelector('.hbt'));return i});
var k=-1,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function cap(){if(!c)return;if(k<0){c.textContent=art;return}var p=ps[k];c.textContent='攝影：'+p.name+'・'+p.town+(p.caption?'・'+p.caption:'')+' ';var x=d.createElement('button');x.type='button';x.className='hrp';x.textContent='檢舉這張';
x.onclick=function(){fetch(A+'photo_report',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:p.id,ms:Date.now()-t0})}).then(function(r){return r.json()}).then(function(j){c.textContent=j.msg||'已收到。'}).catch(function(){})};c.appendChild(x)}
function go(n){if(k>=0)ims[k].classList.remove('on');k=n;if(k>=0)ims[k].classList.add('on');cap()}
ims[0].addEventListener('load',function(){go(0)});if(rm||ims.length<1)return;setInterval(function(){if(d.hidden)return;go(k+1>=ims.length?-1:k+1)},7000)}).catch(function(){})}
var f=d.querySelector('.upf');if(f){var m=f.querySelector('.upm'),pv=f.querySelector('.upv'),data='';function say(t,ok){m.textContent=t;m.className='upm'+(ok?' ok':'')}
f.f.addEventListener('change',function(){data='';pv.hidden=true;var x=f.f.files[0];if(!x)return;if(!/^image\//.test(x.type)){say('請選照片檔。');return}say('處理照片中…');
(window.createImageBitmap?createImageBitmap(x):Promise.reject()).then(function(bm){var s=Math.min(1,1920/Math.max(bm.width,bm.height)),cv=d.createElement('canvas');cv.width=Math.round(bm.width*s);cv.height=Math.round(bm.height*s);cv.getContext('2d').drawImage(bm,0,0,cv.width,cv.height);
if(Math.min(cv.width,cv.height)<400){say('照片太小了，請選清楚一點的。');return}data=cv.toDataURL('image/jpeg',.88);pv.src=data;pv.hidden=false;say('')}).catch(function(){say('讀不到這張照片，請換一張（建議 JPG）。')})});
f.addEventListener('submit',function(ev){ev.preventDefault();if(!data){say('請先選一張照片。');return}if(!f.town.value){say('請選拍攝的鄉鎮市。');return}if(!f.ok.checked){say('請勾選同意。');return}
var bt=f.querySelector('.upgo');bt.disabled=true;say('上傳中…');
fetch(A+'photo',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({img:data,town:f.town.value,name:f.nm.value,caption:f.cap.value,ok_rights:1,hp:f.hp.value,ms:Date.now()-t0})})
.then(function(r){return r.json()}).then(function(j){bt.disabled=false;if(j.ok&&j.code){say(j.msg+' 查詢碼：'+j.code+'（請截圖保存）',1);try{localStorage.setItem('yl_photo_code',j.code)}catch(x){}var q2=d.querySelector('.uqf');if(q2)q2.code.value=j.code;f.reset();data='';pv.hidden=true}else say(j.msg||'沒有送出，請再試一次。')})
.catch(function(){bt.disabled=false;say('網路連不上，請稍後再試。')})})}
var q=d.querySelector('.uqf');if(q){try{var sc=localStorage.getItem('yl_photo_code');if(sc)q.code.value=sc}catch(x){}
q.addEventListener('submit',function(ev){ev.preventDefault();var k2=(ev.submitter&&ev.submitter.value)||'status',qm=q.querySelector('.uqm');qm.textContent='查詢中…';
fetch(A+(k2==='withdraw'?'photo_withdraw':'photo_status'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:q.code.value,ms:Date.now()-t0})}).then(function(r){return r.json()}).then(function(j){qm.textContent=j.msg||''}).catch(function(){qm.textContent='網路連不上，請稍後再試。'})})}})();
(function(){var d=document,R={"學生": ["school"], "18–29 歲": ["house", "buy", "howbuy", "trends"], "30–44 歲": ["house", "buy", "school"], "45–64 歲": ["impact", "school", "house"], "65 歲以上": ["impact", "policy", "team"], "上班": ["house", "buy", "speed", "trends"], "創業／做生意": ["tender", "finance", "impact", "trends"], "找工作": ["trends", "policy", "tender"], "家裡有學生": ["school"], "想買房": ["house", "buy", "howbuy"], "務農／漁業": ["policy", "impact", "council"], "退休": ["impact", "policy", "team"], "不住宜蘭": ["trends", "house", "leader"], "上班族": ["house", "buy", "speed", "trends"], "公務員／老師": ["team", "policy", "speed"], "房仲／代書／不動產": ["house", "howbuy", "buy", "tender"], "保險／金融": ["trends", "impact", "numbers"], "餐飲／小吃": ["trends", "policy", "numbers"], "民宿／旅宿／觀光": ["trends", "policy", "numbers"], "零售／服務業": ["trends", "numbers", "policy"], "營造／工程／裝修": ["tender", "finance", "speed"], "工廠／製造": ["tender", "trends"], "醫療／照護": ["impact", "policy", "trends"], "農業": ["policy", "impact"], "漁業": ["policy", "impact"], "運輸／司機": ["policy", "tender"], "自己開店／創業": ["tender", "trends", "impact"], "自由接案": ["tender", "policy"], "家管": ["impact", "policy"], "正在找工作": ["trends", "policy"], "家裡有 0–6 歲小孩": ["impact", "policy"], "照顧長輩或家人": ["impact", "policy"], "租屋": ["house", "buy"], "已經有房子": ["house", "finance"], "身心障礙（自己或家人）": ["impact", "policy"], "新住民": ["policy", "impact"], "原住民": ["policy", "impact"], "生活上需要一些協助": ["impact", "policy"], "未滿 18 歲": ["school"]},N={"house": "房價", "buy": "買房試算", "howbuy": "買房步驟", "school": "升學", "impact": "預算分類", "team": "縣府團隊", "trends": "趨勢", "finance": "欠多少錢", "tender": "錢花在哪", "speed": "辦事天數", "policy": "縣府施政", "foot": "縣長行程", "promise": "政見進度", "media": "媒體怎麼報", "council": "議會", "leader": "施政摘錄", "voice": "意見箱", "numbers": "基本數字", "radar": "找資料", "words": "名詞解釋", "pop-change": "出生死亡"},M={"house": "house", "buy": "house", "school": "school", "trends": "data", "team": "gov", "finance": "money", "howbuy": "house", "impact": "money", "tender": "money", "speed": "gov", "policy": "gov", "council": "gov", "leader": "gov", "voice": "gov", "pop-change": "data", "numbers": "data", "radar": "data", "words": "data", "about": "data"},AL={"上班": "上班族", "創業／做生意": "自己開店／創業", "找工作": "正在找工作", "務農／漁業": "農業"},K='yl_id',st=null,MJ=null;try{st=JSON.parse(localStorage.getItem(K)||'null')}catch(x){st={god:true,nosave:1}}
function tg(s){return(s&&!s.god?(s.tags||[]):[]).map(function(t){return AL[t]||t})}
function rel(s){var o=[];tg(s).forEach(function(t){(R[t]||[]).forEach(function(a){if(o.indexOf(a)<0)o.push(a)})});return o}
function el(n,c,t){var x=d.createElement(n);if(c)x.className=c;if(t!=null)x.textContent=t;return x}
function ln(u,t){var a=el('a',null,t);if(String(u).indexOf('https://')===0){a.href=u;a.target='_blank';a.rel='noopener'}return a}
function mine(s){var w=d.querySelector('.minep');if(!w)return;var T=tg(s);if(!T.length){w.hidden=true;return}
function draw(){var b=w.querySelector('.minel');b.textContent='';var n=0,SN={};function nw(x){if(SN[x.u])return false;SN[x.u]=1;return true}T.forEach(function(t){var rs=((MJ.res||{})[t]||[]).filter(nw),ns=((MJ.news||{})[t]||[]).filter(nw);if(!rs.length&&!ns.length)return;
var dt=el('details','mineg');if(!n)dt.open=true;n++;var sm=el('summary',null,t);sm.appendChild(el('span','sub','　'+[rs.length?rs.length+' 項可以用的資源':'',ns.length?ns.length+' 則縣府動態':''].filter(Boolean).join('・')));dt.appendChild(sm);var nt=(MJ.note||{})[t];if(nt)dt.appendChild(el('p','khp',nt));
if(rs.length){dt.appendChild(el('p','minet','可以申請或使用的'));var ul=el('ul','miner');rs.forEach(function(r){var li=el('li');var h=el('b');h.appendChild(ln(r.u,r.n));li.appendChild(h);if(r.o)li.appendChild(el('span','sub','　'+r.o));
if(r.w)li.appendChild(el('div',null,r.w));if(r.h)li.appendChild(el('div','sub','怎麼申請：'+r.h));ul.appendChild(li)});dt.appendChild(ul)}
if(!ns.length)dt.appendChild(el('p','sub','最近 60 天縣府文件裡，沒有標題直接提到這個身分的。'));if(ns.length){dt.appendChild(el('p','minet','縣府最近跟這個有關的事'));var ul2=el('ul','list');ns.forEach(function(x){var li=el('li');li.appendChild(el('span','d',x.d.slice(5).replace('-','/')+' '));li.appendChild(ln(x.u,x.t));li.appendChild(el('span','sub','（'+x.k+'，跟「'+x.w+'」有關）'));ul2.appendChild(li)});dt.appendChild(ul2)}
b.appendChild(dt)});w.hidden=!n}
if(MJ){draw();return}fetch(w.getAttribute('data-src')).then(function(r){return r.json()}).then(function(j){MJ=j;draw()}).catch(function(){w.hidden=true})}
function mark(s){var A2=rel(s);mine(s);[].forEach.call(d.querySelectorAll('.mineb'),function(x){x.remove()});[].forEach.call(d.querySelectorAll('.tile.mine'),function(x){x.classList.remove('mine')});
A2.forEach(function(a){var h=d.querySelector('section#'+a+' h2');if(h){var bd=d.createElement('span');bd.className='mineb';bd.textContent='跟你有關';h.appendChild(bd)}});
var tl=d.querySelector('#glance .tiles');if(tl){var ts=[].slice.call(tl.children);ts.sort(function(x,y){var i=A2.indexOf(x.getAttribute('data-k')),k=A2.indexOf(y.getAttribute('data-k'));return(i<0?99:i)-(k<0?99:k)});ts.forEach(function(t){if(A2.indexOf(t.getAttribute('data-k'))>=0)t.classList.add('mine');tl.appendChild(t)})}
var bar=d.querySelector('.idbar');if(!bar)return;bar.hidden=false;var t=bar.querySelector('.idt'),pk=bar.querySelector('.idpick');pk.textContent='';
if(!s||s.god){t.textContent='上帝視角：所有資訊都給你看';bar.querySelector('.idgo2').hidden=true;return}bar.querySelector('.idgo2').hidden=false;
t.textContent='你的身分：'+[s.age,s.sex,tg(s).filter(function(x){return x!==s.age}).join('、'),s.town].filter(Boolean).join('｜')+'。下面先列跟你有關的事；相關區塊：';
A2.forEach(function(a){if(!M[a])return;var l=d.createElement('a');l.href=M[a]+'/#'+a;l.textContent=N[a]||a;pk.appendChild(l)});if(!pk.children.length)t.textContent+='（目前都在下面）'}
function save(s){st=s;try{localStorage.setItem(K,JSON.stringify(s))}catch(x){}mark(s)}
var g=d.getElementById('idg');if(g){var last=null;function open(){last=d.activeElement;g.hidden=false;d.body.style.overflow='hidden';var f1=g.querySelector('input');if(f1)f1.focus()}
function close(){g.hidden=true;d.body.style.overflow='';if(last&&last.focus)last.focus()}
function val(n){var x=g.querySelector('input[name='+n+']:checked');return x?x.value:''}
g.querySelector('.idok').onclick=function(){var tags=[].map.call(g.querySelectorAll('input[name=situ]:checked'),function(x){return x.value}).concat([].map.call(g.querySelectorAll('input[name=job]:checked'),function(x){return x.value})),a=val('age'),tw=g.querySelector('select').value;if(a)tags.unshift(a);if(tw==='不住宜蘭')tags.push(tw);save({v:2,god:false,age:a,sex:val('sex'),tags:tags,town:tw});close()};
g.querySelector('.idgod').onclick=function(){save({v:1,god:true});close()};
g.addEventListener('keydown',function(ev){if(ev.key==='Escape'){save({v:1,god:true});close()}if(ev.key==='Tab'){var fs=g.querySelectorAll('input,select,button'),a1=fs[0],z=fs[fs.length-1];if(ev.shiftKey&&d.activeElement===a1){ev.preventDefault();z.focus()}else if(!ev.shiftKey&&d.activeElement===z){ev.preventDefault();a1.focus()}}});
var bar=d.querySelector('.idbar');if(bar){bar.querySelector('.idch').onclick=open;bar.querySelector('.idgo2').onclick=function(){save({v:1,god:true})}}
if(!st||(!st.god&&(st.v||1)<2))open()}
mark(st||{god:true})})();
(function(){var M={"house": "house", "buy": "house", "school": "school", "trends": "data", "team": "gov", "finance": "money", "howbuy": "house", "impact": "money", "tender": "money", "speed": "gov", "policy": "gov", "council": "gov", "leader": "gov", "voice": "gov", "pop-change": "data", "numbers": "data", "radar": "data", "words": "data", "about": "data"},h=location.hash.slice(1),p=document.documentElement.getAttribute('data-page');
if(p==='home'&&M[h]){location.replace(M[h]+'/#'+h)}})();
(function(){var d=document;[].forEach.call(d.querySelectorAll('main section .sb table'),function(t){if(t.id||t.closest('details')||t.closest('.trc'))return;var b=t.tBodies[0];if(!b)return;
var rs=[].slice.call(b.rows);if(rs.length<=7)return;function lab(){return '看全部 '+(rs.length-(b.rows[0]&&b.rows[0].querySelector('th')?1:0))+' 列'}
rs.forEach(function(r,i){if(i>=5)r.hidden=true});var bt=d.createElement('button');bt.type='button';bt.className='sbm tmore';bt.setAttribute('aria-expanded','false');bt.textContent=lab();
bt.onclick=function(){var o=bt.getAttribute('aria-expanded')==='true';rs.forEach(function(r,i){if(i>=5)r.hidden=o});bt.setAttribute('aria-expanded',o?'false':'true');bt.textContent=o?lab():'收起來'};
var w=t.closest('.tw')||t;w.parentNode.insertBefore(bt,w.nextSibling)})})();
(function(){var d=document,m=d.querySelector('.shm'),c=d.querySelector('.shc'),n=d.querySelector('.shn');if(!c)return;function say(t){if(m)m.textContent=t}c.addEventListener('click',function(){var u=c.getAttribute('data-u');function fb(){var i=d.createElement('input');i.value=u;i.setAttribute('readonly','');i.style.cssText='width:100%;margin-top:6px';if(m){m.textContent='請長按下面的網址複製：';m.appendChild(i)}i.focus();i.select()}try{navigator.clipboard.writeText(u).then(function(){say('已複製連結，可以貼到 LINE 群組或臉書。')},fb)}catch(x){fb()}});if(n&&navigator.share){n.hidden=false;n.addEventListener('click',function(){navigator.share({title:n.getAttribute('data-t'),url:n.getAttribute('data-u')}).catch(function(){})})}})();

(function(){var d=document,h=d.documentElement,W=window,RM=W.matchMedia&&W.matchMedia('(prefers-reduced-motion: reduce)').matches;
d.addEventListener('touchstart',function(){},{passive:true});
var b=d.getElementById('bigbtn'),nav=d.getElementById('nav'),toc=d.getElementById('toc');
function fit(){h.classList.remove('tocmode');if(getComputedStyle(nav).display!=='none'&&nav.scrollWidth>nav.clientWidth+1)h.classList.add('tocmode')}
function scr(){[].forEach.call(d.querySelectorAll('.tw'),function(w){var o=w.clientWidth>0&&w.scrollWidth>w.clientWidth+1;w.classList.toggle('scr',o);
 if(o){w.tabIndex=0;w.setAttribute('role','region');if(!w.getAttribute('aria-label')){var p=w.previousElementSibling,l='';while(p&&!l){if(/^H[2-4]$/.test(p.tagName))l=p.textContent;p=p.previousElementSibling}
 if(!l){var s=w.closest&&w.closest('details');l=s?s.querySelector('summary').textContent:'表格'}w.setAttribute('aria-label',l+'，可左右滑動')}}
 else{w.removeAttribute('tabindex');w.removeAttribute('role')}})}
function set(v){h.classList.toggle('big',v);b.setAttribute('aria-pressed',v?'true':'false');try{localStorage.setItem('big',v?'1':'0')}catch(x){}fit();scr()}
try{if(localStorage.getItem('big')==='1')set(true)}catch(x){}
b.onclick=function(){set(!h.classList.contains('big'))};
fit();scr();var rz;W.addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){fit();scr()},120)});
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){fit();scr()});
function sbSet(s,o){s.classList.toggle('clip',o);if(s._bt){s._bt.setAttribute('aria-expanded',o?'false':'true');s._bt.textContent=o?'展開全部':'收起來'}}
(function(){var H=W.innerHeight||800,lim=Math.max(420,Math.round(H*0.75));
function cut(s){var L=lim,k=s.querySelector('[data-clip-after]');if(k)L=Math.max(L,Math.ceil(k.getBoundingClientRect().bottom-s.getBoundingClientRect().top)+100);return L}
[].forEach.call(d.querySelectorAll('.sb'),function(s){var L=cut(s);if(s.scrollHeight<=L*1.35||s.querySelector('input[type=search],select'))return;s.style.setProperty('--clip',L+'px');
 if(s.querySelector('[data-clip-after]')){var rc=function(){s.style.setProperty('--clip',cut(s)+'px')};if(d.fonts&&d.fonts.ready)d.fonts.ready.then(rc);W.addEventListener('load',rc)}
 var bt=d.createElement('button');bt.type='button';bt.className='sbm';s._bt=bt;
 bt.onclick=function(){var o=!s.classList.contains('clip');sbSet(s,o);if(o)s.parentNode.scrollIntoView({block:'start'});scr()};
 s.parentNode.insertBefore(bt,s.nextSibling);sbSet(s,true)})})();
function openTo(id){var el=id&&d.getElementById(id),s=el&&el.closest&&el.closest('.sb.clip');if(s)sbSet(s,false)}
openTo(location.hash.slice(1));W.addEventListener('hashchange',function(){openTo(location.hash.slice(1))});
d.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('a[href^="#"]');if(a)openTo(a.getAttribute('href').slice(1))},true);
d.addEventListener('focusin',function(ev){var s=ev.target.closest&&ev.target.closest('.sb.clip');if(s)sbSet(s,false)});
d.addEventListener('toggle',function(ev){if(ev.target!==toc)scr()},true);
function closeToc(){if(toc.open)toc.open=false}
toc.addEventListener('click',function(ev){if(ev.target.closest&&ev.target.closest('.tocp a'))closeToc()});
d.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&toc.open){closeToc();toc.querySelector('summary').focus()}});
d.addEventListener('click',function(ev){if(toc.open&&!toc.contains(ev.target))closeToc()});
toc.addEventListener('focusout',function(ev){if(toc.open&&ev.relatedTarget&&!toc.contains(ev.relatedTarget))closeToc()});
var po=[];W.addEventListener('beforeprint',function(){po=[].filter.call(d.querySelectorAll('main details:not([open])'),function(x){x.open=true;return true})});
W.addEventListener('afterprint',function(){po.forEach(function(x){x.open=false});po=[]});
var links={},cur='';
[].forEach.call(d.querySelectorAll('#nav a,#toc a'),function(a){var r=a.getAttribute('href')||'';if(r.charAt(0)!=='#')return;var k=r.slice(1);(links[k]=links[k]||[]).push(a)});
function clearCur(){cur='';[].forEach.call(d.querySelectorAll('#nav a[aria-current=location],#toc a[aria-current=location]'),function(a){a.removeAttribute('aria-current')})}
var g=d.querySelector('.gnav'),gl=d.getElementById('glance');
function onS(){g.classList.toggle('stuck',W.scrollY>8);if(cur&&gl&&W.scrollY<gl.offsetTop-120)clearCur()}
W.addEventListener('scroll',onS,{passive:true});onS();
function count(t){if(RM||t.getAttribute('data-c'))return;t.setAttribute('data-c','1');[].forEach.call(t.querySelectorAll('.tv b'),run)}
function run(v){var src=v.textContent,re=/\d[\d,]*(?:\.\d+)?/g;if(!/\d/.test(src))return;var t0=0,D=600;
 v.style.minWidth=v.offsetWidth+'px';var sr=d.createElement('span');sr.className='vh';sr.textContent=src;v.parentNode.insertBefore(sr,v);v.setAttribute('aria-hidden','true');
 function f(m,p){var q=m.split('.'),dec=q[1]?q[1].length:0,s=(parseFloat(m.replace(/,/g,''))*p).toFixed(dec);if(m.indexOf(',')>-1){var r=s.split('.');r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');s=r.join('.')}return s}
 function st(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0)/D),p=1-Math.pow(1-k,5);
  if(k<1){v.textContent=src.replace(re,function(m){return f(m,p)});requestAnimationFrame(st)}
  else{v.textContent=src;v.style.minWidth='';v.removeAttribute('aria-hidden');if(sr.parentNode)sr.parentNode.removeChild(sr)}}
 requestAnimationFrame(st)}
if(!('IntersectionObserver' in W)){return}
var spy=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var id=en.target.id,L=links[id];if(!L||id===cur)return;
 clearCur();cur=id;L.forEach(function(a){a.setAttribute('aria-current','location')});
 var a=L[0];if(nav.contains(a)&&getComputedStyle(nav).display!=='none'){var x=a.offsetLeft-(nav.clientWidth-a.offsetWidth)/2;try{nav.scrollTo({left:x,behavior:RM?'auto':'smooth'})}catch(e){nav.scrollLeft=x}}})},{rootMargin:'-35% 0px -60% 0px'});
[].forEach.call(d.querySelectorAll('section[id]'),function(s){spy.observe(s)});
var vh=W.innerHeight||800;
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var el=en.target;el.classList.add('in');io.unobserve(el);
 if(el.classList.contains('tile')){count(el);el.addEventListener('transitionend',function z(ev){if(ev.target!==el||ev.pseudoElement||ev.propertyName!=='opacity')return;
  el.classList.remove('rv','in');el.style.transitionDelay='';el.removeEventListener('transitionend',z)})}})},{rootMargin:'0px 0px -8% 0px',threshold:0});
[].forEach.call(d.querySelectorAll('.tile'),function(t,i){if(RM||t.getBoundingClientRect().top<vh*0.92){count(t)}else{t.classList.add('rv');t.style.transitionDelay=(i%2)*60+'ms';io.observe(t)}});
if(RM)return;
function hb(x){[].forEach.call(x.querySelectorAll('.hbar'),function(y,j){y.style.transitionDelay=Math.min(j*20,80)+40+'ms'})}
[].forEach.call(d.querySelectorAll('main section'),function(s){var r=s.getBoundingClientRect();if(r.top<vh*0.92)return;
 if(r.height>vh*1.5){[].forEach.call(s.querySelectorAll(':scope>h2,:scope>p.simple,.hbars'),function(x){x.classList.add('rv');hb(x);io.observe(x)})}
 else{s.classList.add('rv');hb(s);io.observe(s)}});
})();
(function(){var f=document.getElementById('fix'),m=document.getElementById('fixmsg'),t0=Date.now();if(!f)return;f.hidden=false;
f.onsubmit=function(ev){ev.preventDefault();if(!window.fetch){m.textContent='這個瀏覽器沒辦法直接送出，請到下面的 GitHub 回報。';return}m.textContent='送出中…';
fetch("https://yilan.zengzhisui.com/api/fix",{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({where:f.where.value,what:f.what.value,hp:f.hp.value,ms:Date.now()-t0})})
.then(function(r){return r.json()}).then(function(j){if(j.ok){m.textContent='收到了，謝謝！我們核對後會修正。';f.reset()}else{m.textContent=j.msg||'沒有送出，請稍後再試。'}})
.catch(function(){m.textContent='現在連不上回報系統，請稍後再試，或到 GitHub 回報。'})};
})();
