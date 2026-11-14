import {readFile,writeFile} from 'node:fs/promises';
let html=await readFile('dist/index.html','utf8');
html=html.replace(/<img\b([^>]*?)src="assets\/([^"/]+)\.jpg"([^>]*?)>/g,(match,before,id,after)=>{if(id==='logo')return match;const sizes=before.includes('gallery')||after.includes('gallery')?'(max-width: 820px) 180px, 240px':'(max-width: 820px) 100vw, 80vw';return `<img${before}src="assets/${id}.jpg" srcset="assets/${id}-mobile.jpg 800w, assets/${id}.jpg 2000w" sizes="${sizes}"${after}>`});
html=html.replace('as="image" href="assets/hero.jpg"','as="image" href="assets/hero.jpg" imagesrcset="assets/hero-mobile.jpg 800w, assets/hero.jpg 2000w" imagesizes="100vw"');
html=html.replace(/<image href="(assets\/[^\"]+)"/g,'<image data-src="$1"');
await writeFile('dist/index.html',html);
