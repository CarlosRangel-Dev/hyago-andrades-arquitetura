(() => {
  const loader=document.querySelector('.page-loader');
  if(!loader)return;
  const fill=loader.querySelector('.loader-fill'),percent=loader.querySelector('.loader-progress'),status=loader.querySelector('.loader-status');
  let complete=false,shown=false,settled=0,exitTimer;
  const tasks=3;
  function progress(){const value=Math.round(settled/tasks*100);fill.style.clipPath=`inset(0 ${100-value}% 0 0)`;percent.textContent=value+'%'}
  function hide(){if(complete)return;complete=true;clearTimeout(showTimer);clearTimeout(timeout);progress();if(shown){loader.classList.add('loader-leaving');exitTimer=setTimeout(()=>{loader.hidden=true;document.querySelector('main')?.removeAttribute('aria-busy')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:550)}else loader.hidden=true}
  const showTimer=setTimeout(()=>{if(complete)return;shown=true;loader.hidden=false;document.querySelector('main')?.setAttribute('aria-busy','true')},350);
  // A timeout or failed image never prevents access to the website.
  const timeout=setTimeout(()=>{status.textContent='Você já pode explorar o site.';hide()},7000);
  loader.querySelector('.loader-skip').addEventListener('click',hide);
  function readyImage(image){return new Promise(resolve=>{if(!image){resolve();return}const finish=()=>{if(image.naturalWidth&&image.decode)image.decode().catch(()=>{}).then(resolve);else resolve()};if(image.complete)finish();else{image.addEventListener('load',finish,{once:true});image.addEventListener('error',resolve,{once:true})}})}
  const critical=[readyImage(document.querySelector('.hero-image')),readyImage(document.querySelector('.official-logo')),document.fonts?.ready||Promise.resolve()];
  critical.forEach(task=>Promise.resolve(task).catch(()=>{}).then(()=>{settled++;progress();if(settled===tasks)hide()}));
  addEventListener('pagehide',()=>{clearTimeout(showTimer);clearTimeout(timeout);clearTimeout(exitTimer);loader.hidden=true});
  addEventListener('pageshow',event=>{if(event.persisted){loader.hidden=true;document.querySelector('main')?.removeAttribute('aria-busy')}});
})();
