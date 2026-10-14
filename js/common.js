/* LaunchMyWeb - shared helpers + data (edit your content here) */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const inr=n=>'₹'+n.toLocaleString('en-IN');
const li=a=>a.map(x=>`<div class="li"><span class="ck"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg></span>${x}</div>`).join('');
const WA_NUMBER='919347864031'; // your WhatsApp number: country code + number, no + or spaces
const APPS=[ // y1 = pay once for 1 year, y2 = pay once for 2 years
 {n:'Online Store',d:'Products, cart and UPI checkout',y1:10000,y2:14999,i:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'},
 {n:'Business Website',d:'Pages, gallery, contact and maps',y1:10000,y2:14999,i:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>'},
 {n:'Restaurant Menu',d:'Digital menu and WhatsApp orders',y1:10000,y2:14999,i:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/>'},
 {n:'Booking App',d:'Slots, reminders and payments',y1:10000,y2:14999,i:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'}
];
const INCLUDED=['Mobile-friendly design','Hosting and SSL setup','Domain setup help','Admin panel to edit content','Free changes in week one','Support on WhatsApp'];
const PHONE='9347864031';
const STORE_PAGES=7; // pages included in the Online Store plan
const STORE_INCL=['Mobile-responsive design','Basic branding with logo and colors','WhatsApp order integration','Basic SEO setup','1 round of minor revisions'];
const CUSTOM_OPTS=[ // edit prices here. base = always included
 {id:'base',n:'Custom website design',d:'Your design, pages and layout',p:10000,base:1},
 {id:'store',n:'Online store',d:'Products, cart and UPI checkout',p:5000},
 {id:'admin',n:'Admin panel',d:'Edit products, orders and content',p:3000},
 {id:'wa',n:'WhatsApp order integration',d:'Orders land on your WhatsApp',p:1500},
 {id:'seo',n:'Basic SEO setup',d:'Titles, meta and Google listing',p:1000},
 {id:'brand',n:'Logo and branding',d:'Logo, colors and fonts',p:2000}
];
const CUSTOM=['Custom design for your brand','Your own features and pages','Admin dashboard to manage content','Launch support and training'];
const WAI='<svg viewBox="0 0 24 24"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5z"/><g transform="translate(7.2 7.2) scale(.4)" stroke-width="4"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></g></svg>';
function toast(msg){const t=$('#toast');if(!t)return;t.textContent=msg;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2800)}
function waMsg(msg){window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg),'_blank')}
function wa(topic){
 if(/X/.test(WA_NUMBER)){toast('Demo: add your number in WA_NUMBER to open WhatsApp');return}
 window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent('Hi LaunchMyWeb, I am interested in: '+topic),'_blank')
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-app]');if(b)wa(b.dataset.app)});
