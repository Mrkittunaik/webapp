/* LaunchMyWeb - Plans page */
let yr=1,cart=null;const picked=new Set(['base']);
function setMode(m){$('#m2').classList.toggle('on',m==='2');$('#mc').classList.toggle('on',m==='c');$('#p2').hidden=m!=='2';$('#pc').hidden=m!=='c'}
function plans(){
 $('#b1').classList.toggle('on',yr===1);$('#b2').classList.toggle('on',yr===2);
 $('#apps').innerHTML=APPS.map((a,k)=>{const t=yr===1?a.y1:a.y2;return `<div class="app"><div class="ah"><i class="pi"><svg viewBox="0 0 24 24">${a.i}</svg></i><div class="an"><b>${a.n}</b><span>${a.d}</span></div><div class="ap"><b>${inr(Math.round(t/(yr*12)))}</b><small>/ month</small></div></div><div class="pay"><span class="chip">2 days delivery</span><span>${yr===1?'Pay '+inr(a.y1)+' once a year':'Pay '+inr(a.y2)+' once for 2 years'}</span></div><button class="btn" data-plan="${k}">Check price</button></div>`}).join('')}
const ctotal=()=>CUSTOM_OPTS.filter(o=>picked.has(o.id)).reduce((s,o)=>s+o.p,0);
function customOpts(){
 $('#co').innerHTML=CUSTOM_OPTS.map(o=>`<label class="opt${picked.has(o.id)?' on':''}"><input type="checkbox" data-opt="${o.id}" ${picked.has(o.id)?'checked':''} ${o.base?'disabled':''}><span class="ck"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></span><span class="ot"><b>${o.n}</b><small>${o.d}</small></span><span class="op">${o.base?'':'+'}${inr(o.p)}</span></label>`).join('');
 $('#ct').textContent=inr(ctotal())}
function openCart(c){cart=c;
 const lines=c.items.map(x=>`<div class="cl"><span>${x[0]}</span><b>${x[1]}</b></div>`).join('');
 $('#sb').innerHTML=`<div class="sh"><h3 class="br">Payment cart</h3><button class="x" id="cx" aria-label="Close">&times;</button></div>
 <div class="cp"><b>${c.title}</b><small>${c.sub}</small></div>
 ${c.pages?`<div class="cl"><span>Pages included</span><b>${c.pages} pages</b></div>`:''}
 ${lines}
 ${c.incl?`<h4>Additional inclusions</h4>${li(c.incl)}`:''}
 ${c.admin?`<label class="opt${c.adminOn?' on':''}"><input type="checkbox" id="adm" ${c.adminOn?'checked':''}><span class="ck"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></span><span class="ot"><b>Admin panel</b><small>Included in the price if you need it</small></span><span class="op">Free</span></label>`:''}
 <div class="tot"><span>${c.totLabel}</span><b>${inr(c.total)}</b></div>
 <button class="btn" id="pay">Pay &amp; confirm on WhatsApp</button>
 <p class="note" style="text-align:center">Questions? Call or WhatsApp ${PHONE}</p>`;
 $('#sheet').hidden=false;
 $('#cx').onclick=closeCart;
 const ad=$('#adm');if(ad)ad.onchange=()=>{c.adminOn=ad.checked;ad.closest('.opt').classList.toggle('on',ad.checked)};
 $('#pay').onclick=()=>{let m='Hi LaunchMyWeb, I want to order: '+c.title+' ('+c.sub+')\n';
  c.items.forEach(x=>m+='- '+x[0]+': '+x[1]+'\n');
  if(c.pages)m+='- Pages: '+c.pages+'\n';
  if(c.admin)m+='- Admin panel: '+(c.adminOn?'Yes':'No')+'\n';
  m+=c.totLabel+': '+inr(c.total);waMsg(m)}}
function closeCart(){$('#sheet').hidden=true}
$('#m2').onclick=()=>setMode('2');$('#mc').onclick=()=>setMode('c');
$('#b1').onclick=()=>{yr=1;plans()};$('#b2').onclick=()=>{yr=2;plans()};
$('#b2').innerHTML='2 Years<small>Save '+inr(2*APPS[0].y1-APPS[0].y2)+'</small>';
$('#sheet').onclick=e=>{if(e.target.id==='sheet')closeCart()};
document.addEventListener('click',e=>{
 const p=e.target.closest('[data-plan]');
 if(p){const a=APPS[+p.dataset.plan],t=yr===1?a.y1:a.y2,store=a.n==='Online Store';
  openCart({title:a.n,sub:'2 days delivery · '+(yr===1?'1 year':'2 years'),items:[['Plan price',inr(t)],['Per month',inr(Math.round(t/(yr*12)))]],pages:store?STORE_PAGES:0,incl:store?STORE_INCL:INCLUDED,admin:1,adminOn:true,total:t,totLabel:'Pay '+(yr===1?'once a year':'once for 2 years')})}
});
document.addEventListener('change',e=>{const o=e.target.closest('[data-opt]');if(!o)return;o.checked?picked.add(o.dataset.opt):picked.delete(o.dataset.opt);customOpts()});
$('#cc').onclick=()=>{const sel=CUSTOM_OPTS.filter(o=>picked.has(o.id));
 openCart({title:'Custom Website',sub:'Built your way',items:sel.map(o=>[o.n,inr(o.p)]),pages:0,incl:null,admin:0,total:ctotal(),totLabel:'Total'})};
customOpts();plans();
