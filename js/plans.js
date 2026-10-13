/* LaunchMyWeb - Plans page */
let yr=1;
function setMode(m){$('#m2').classList.toggle('on',m==='2');$('#mc').classList.toggle('on',m==='c');$('#p2').hidden=m!=='2';$('#pc').hidden=m!=='c'}
function plans(){
 $('#b1').classList.toggle('on',yr===1);$('#b2').classList.toggle('on',yr===2);
 $('#apps').innerHTML=APPS.map(a=>{const t=yr===1?a.y1:a.y2;return `<div class="app"><div class="ah"><i class="pi"><svg viewBox="0 0 24 24">${a.i}</svg></i><div class="an"><b>${a.n}</b><span>${a.d}</span></div><div class="ap"><b>${inr(Math.round(t/(yr*12)))}</b><small>/ month</small></div></div><div class="pay"><span class="chip">2 days delivery</span><span>${yr===1?'Pay '+inr(a.y1)+' once a year':'Pay '+inr(a.y2)+' once for 2 years'}</span></div><button class="btn wa" data-app="${a.n} (2 days delivery)">${WAI}Order on WhatsApp</button></div>`}).join('')}
$('#m2').onclick=()=>setMode('2');$('#mc').onclick=()=>setMode('c');
$('#b1').onclick=()=>{yr=1;plans()};$('#b2').onclick=()=>{yr=2;plans()};
$('#b2').innerHTML='2 Years<small>Save '+inr(2*APPS[0].y1-APPS[0].y2)+'</small>';
$('#cf').innerHTML=li(CUSTOM);
plans();
