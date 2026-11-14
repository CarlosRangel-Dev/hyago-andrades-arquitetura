# Verificação da primeira versão

14/11/2026

- `node --check dist/app.js`: passou.
- `node --check server.mjs`: passou.
- `node verify.mjs`: passou; 12 referências locais e todas as âncoras verificadas.
- Fotos selecionadas visualmente em folha de contato. Originais preservados.
- Implementados: filtros por categoria, dialog de projetos, fechamento por Escape, retorno de foco, menu mobile, links de contato e preferência por movimento reduzido.
- Comportamentos implementados ainda precisam de teste interativo: a prévia do navegador não conectou ao servidor local. Não houve validação visual final nem medição de Core Web Vitals.
- Publicação não concluída. A revisão automática rejeitou o envio dos arquivos e fotos à hospedagem externa sem autorização específica de payload e destino. Não foi tentado contorno do bloqueio.
- WordPress e domínio de produção não alterados.

## Como revisar

Abra `dist/index.html` em um navegador para uma revisão local, ou use `node server.mjs` e http://localhost:4173. O ZIP de revisão contém a pasta dist e um arquivo LEIA-ME; extraia antes de abrir.
