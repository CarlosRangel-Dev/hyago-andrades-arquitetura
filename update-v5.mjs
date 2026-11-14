import {readFile,writeFile} from 'node:fs/promises';
let html=await readFile('dist/index.html','utf8');
html=html.replace('<link rel="icon" href="assets/logo-oficial.png">','<link rel="icon" href="favicon.ico" sizes="any"><link rel="icon" type="image/png" href="assets/favicon-32.png" sizes="32x32"><link rel="apple-touch-icon" href="assets/apple-touch-icon.png"><link rel="manifest" href="site.webmanifest">');
html=html.replace(/<div class="gallery-arrangements"[\s\S]*?<\/div>/,'');
html=html.replace('Arraste para percorrer. Clique para ampliar.','Órbita automática. Arraste ou clique para explorar.').replace('class="gallery-play" aria-pressed="false">Reproduzir galeria ▷','class="gallery-play" aria-pressed="true">Pausar órbita Ⅱ');
html=html.replace('<script src="cursor-trail.js" defer></script>','<script src="cursor-trail.js" defer></script><script src="orbit.js" defer></script>');
await writeFile('dist/index.html',html);
let experience=await readFile('dist/experience-v3.js','utf8');
experience=experience.slice(0,experience.indexOf('// Continuous poses'))+`
dialog.addEventListener('close',()=>lenis?.start());new MutationObserver(()=>{if(dialog.open)lenis?.stop()}).observe(dialog,{attributes:true,attributeFilter:['open']});
addEventListener('scroll',()=>pageDirty=true,{passive:true});addEventListener('resize',()=>{pageDirty=true});motion.addEventListener('change',()=>{configureScroll();pageDirty=true;scenes.forEach(s=>{s.el.style.visibility='';s.el.removeAttribute('aria-hidden')})});
desktopScroll.addEventListener('change',()=>{configureScroll();pageDirty=true});
let lastTimestamp=0;configureScroll();function tick(time){const dt=Math.min(48,time-lastTimestamp||16);lastTimestamp=time;lenis?.raf(time);if(!lenis&&document.documentElement.classList.contains('lenis'))document.documentElement.classList.remove(...[...document.documentElement.classList].filter(c=>c==='lenis'||c.startsWith('lenis-')));if(pageDirty)updatePage();window.updateOrbit?.(dt,time);requestAnimationFrame(tick)}requestAnimationFrame(tick);
`;
await writeFile('dist/experience-v3.js',experience);
