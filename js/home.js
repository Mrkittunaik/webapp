/* LaunchMyWeb - Home page */
const a0=APPS[0],m1=inr(Math.round(a0.y1/12)),m2=inr(Math.round(a0.y2/24));
$('#hp').textContent=`${m1} / month · billed ${inr(a0.y1)} yearly`;
$('#pp').textContent=`${inr(a0.y1)} for 1 year or ${inr(a0.y2)} for 2 years. That is ${m1} or ${m2} a month.`;
$('#inc').innerHTML=li(INCLUDED);
