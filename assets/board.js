(function(){var b=document.querySelector('.hban');if(!b)return;var im=b.querySelectorAll('img'),c=b.querySelector('.hbc'),i=0;
if(im.length<2||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
addEventListener('load',function(){[].forEach.call(im,function(x){if(!x.getAttribute('src'))x.src=x.getAttribute('data-src')});
setInterval(function(){if(document.hidden)return;im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on');var x=im[i],a=c.querySelectorAll('a');
a[0].textContent=x.getAttribute('data-c');a[0].href=x.getAttribute('data-u');a[1].textContent=x.getAttribute('data-l');a[1].href=x.getAttribute('data-lu')},7000)})})();
(function(){var M={"house": "house", "buy": "house", "school": "school", "trends": "data", "finance": "money", "howbuy": "house", "impact": "money", "tender": "money", "speed": "gov", "policy": "gov", "council": "gov", "leader": "gov", "voice": "gov", "pop-change": "data", "numbers": "data", "radar": "data", "words": "data", "about": "data"},h=location.hash.slice(1),p=document.documentElement.getAttribute('data-page');
if(p==='home'&&M[h]){location.replace(M[h]+'/#'+h)}})();
(function(){var d=document;[].forEach.call(d.querySelectorAll('main section .sb table'),function(t){if(t.id||t.closest('details')||t.closest('.trc'))return;var b=t.tBodies[0];if(!b)return;
var rs=[].slice.call(b.rows);if(rs.length<=7)return;function lab(){return '看全部 '+rs.length+' 列'}
rs.forEach(function(r,i){if(i>=5)r.hidden=true});var bt=d.createElement('button');bt.type='button';bt.className='sbm tmore';bt.setAttribute('aria-expanded','false');bt.textContent=lab();
bt.onclick=function(){var o=bt.getAttribute('aria-expanded')==='true';rs.forEach(function(r,i){if(i>=5)r.hidden=o});bt.setAttribute('aria-expanded',o?'false':'true');bt.textContent=o?lab():'收起來'};
var w=t.closest('.tw')||t;w.parentNode.insertBefore(bt,w.nextSibling)})})();

(function(){var d=document,h=d.documentElement,W=window,RM=W.matchMedia&&W.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
[].forEach.call(d.querySelectorAll('.sb'),function(s){if(s.scrollHeight<=lim*1.35||s.querySelector('input[type=search],select'))return;s.style.setProperty('--clip',lim+'px');
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
