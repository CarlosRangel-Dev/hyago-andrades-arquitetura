import {readFile,access} from 'node:fs/promises';
const html=await readFile(new URL('./dist/index.html',import.meta.url),'utf8');
const refs=[...html.matchAll(/(?:src|href)="(assets\/[^"#]+|(?:vendor\/)?[\w.-]+\.(?:css|js))"/g)].map(m=>m[1]);
for(const ref of refs)await access(new URL('./dist/'+ref,import.meta.url));
for(const match of html.matchAll(/(?:image)?srcset="([^"]+)"/g))for(const source of match[1].split(',')){const file=source.trim().split(/\s+/)[0];await access(new URL('./dist/'+file,import.meta.url))}
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
const allIds=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(ids.size!==allIds.length)throw Error('IDs duplicados');
for(const match of html.matchAll(/url\(#([^\)]+)\)/g))if(!ids.has(match[1]))throw Error('Filtro SVG inexistente: '+match[1]);
for(const match of html.matchAll(/href="#([^"]+)"/g))if(!ids.has(match[1]))throw Error('Âncora inexistente: '+match[1]);
if((html.match(/<h1[ >]/g)||[]).length!==1)throw Error('Título principal inválido');
console.log(`Verificação concluída: ${refs.length} referências locais e todas as âncoras existem.`);
