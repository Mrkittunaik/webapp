/* LaunchMyWeb - splash + intro slides */
let sl=0,tm;
function go(id){clearTimeout(tm);$$('.scr').forEach(e=>e.classList.toggle('on',e.id===id))}
function slide(i){sl=Math.max(0,Math.min(2,i));$('#trk').style.transform=`translateX(-${sl*100}%)`;$$('.dot').forEach((d,k)=>d.classList.toggle('on',k===sl));$('#nx').textContent=sl===2?'Start':'Next'}
let x0=0;const vp=$('#vp');
vp.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
vp.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)slide(sl+(d<0?1:-1))});
const start=()=>{location.href='pages/home.html'};
$('#nx').onclick=()=>sl===2?start():slide(sl+1);
$('#sk').onclick=start;
tm=setTimeout(()=>go('onb'),2300);
