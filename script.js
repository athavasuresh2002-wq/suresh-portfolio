const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const progress=$('.scroll-line');
window.addEventListener('scroll',()=>{const d=document.documentElement;progress.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i%5*70,280)+'ms';observer.observe(el)});
const menu=$('#menu'); const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('mobile-open'));
$$('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));

const data={
sales:{k:'01 / POWER BI PROJECT',t:'Sales Dashboard',p:'A Power BI report file supplied directly for this portfolio. The site presents it as a verified project artifact instead of inventing a screenshot.',tags:['Power BI','PBIX report','Sales dashboard'],file:'assets/powerbi/sales-dashboard.pbix'},
hr:{k:'02 / POWER BI PROJECT',t:'HR Analytics Dashboard',p:'The supplied report contains employee and attrition analysis, including Total Employee, Attrition Count, Attrition Rate, Average Age, Average Experience, Average Years at Company, Attrition by Education, Attrition by Age and Attrition by Years.',tags:['Power BI','Power Query','DAX','Slicers','Attrition','Workforce'],file:'assets/powerbi/hr-analytics-dashboard.pbix'},
superstore:{k:'03 / POWER BI PROJECT',t:'Superstore Sales Dashboard',p:'The supplied report includes Total Orders, Total Sales, Total Profit, category analysis, monthly sales, YoY sales, sales forecasting, regional filtering, a map and other interactive visuals.',tags:['Power BI','DAX','Forecast','YoY','Sales','Profit','Orders'],file:'assets/powerbi/superstore-sales-dashboard.pbix'}
};
const modal=$('#modal');
$$('.view').forEach(btn=>btn.addEventListener('click',()=>{
 const d=data[btn.dataset.project]; $('#modalKicker').textContent=d.k; $('#modalTitle').textContent=d.t; $('#modalText').textContent=d.p;
 $('#modalList').innerHTML=d.tags.map(x=>`<span>${x}</span>`).join('');
 $('#modalActions').innerHTML=`<a href="${d.file}" download>Download original PBIX ↗</a>`;
 modal.classList.add('open');
}));
$('#modalClose').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

// Subtle particle field
const c=$('#particles'),ctx=c.getContext('2d'); let pts=[];
function resize(){c.width=innerWidth*devicePixelRatio;c.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(70,Math.floor(innerWidth/20))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.3,v:(Math.random()-.5)*.12}))}
resize();addEventListener('resize',resize);
function loop(){ctx.clearRect(0,0,innerWidth,innerHeight);pts.forEach(p=>{p.y+=p.v;if(p.y<0||p.y>innerHeight)p.v*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(176,201,230,.32)';ctx.fill();});requestAnimationFrame(loop)}loop();
