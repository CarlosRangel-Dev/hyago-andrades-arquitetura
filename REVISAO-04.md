# Revisão 04 — carregamento, WhatsApp e mobile

## Alterações

- Loader próprio de texto preenchido da esquerda para a direita, inspirado na descrição pública https://motion.dev/examples/react-loading-fill-text. Aparece apenas após 350 ms se ainda houver trabalho inicial. Acompanha resolução/decodificação de hero, logo e fontes; não usa porcentagem fictícia de bytes. Permite entrar sem aguardar e encerra em até 7 s, inclusive em falhas. Suporta retorno pelo histórico/bfcache.
- Logo original de `imagens ok/logo 1.png` copiado sem alteração para cabeçalho, rodapé e favicon.
- CTAs de hero, cabeçalho, menu mobile, seção de contato e detalhes usam WhatsApp +55 22 99739-5022, informado pelo usuário. Instagram mantido como canal secundário no escritório. Nenhuma mensagem foi enviada.
- Removida a exclusão da galeria do tratamento de scroll do Lenis. Antes, alternava-se entre native scroll e posição suavizada ao passar pela galeria.
- Arraste captura ponteiro somente após intenção horizontal; gesto vertical segue para a página e pinch-zoom permanece permitido. Clique após arraste é suprimido. Removido o salto de reposicionamento ao cruzar o limite circular; navegação limitada ao acervo, com reprodução alternando direção nos extremos.
- Lenis limitado a telas acima de 820 px com ponteiro fino/hover. Mobile usa rolagem nativa. Redução de sombras, filtros e trabalho inicial em dispositivos de toque.
- Imagens responsivas locais e contornos SVG carregados somente ao se aproximar da cena. Hero mobile: 295.294 bytes, contra 665.824 da versão maior, sem alteração da arquitetura. Outras fotos receberam variantes de até 800 px.
- Ajustes de áreas de toque, safe areas, orientação paisagem, viewport dinâmico e dialog de projeto.

## Validação realizada

- Chrome desktop local: rolagem vertical sobre o carrossel avançou 8603 → 8972 → 9341 px em dois gestos sucessivos, sem abrir dialog e sem retorno de posição.
- Viewports 360×800, 390×844, 430×932 e 844×390: sem transbordamento horizontal. Menu abriu e fechou; destino WhatsApp validado no DOM sem envio de mensagem.
- Mobile 390×844: hero-mobile selecionado, logo oficial carregado, Lenis desativado e loader encerrado. Captura `revisao-04-mobile.png`.
- Console sem erros JS na conferência final.
- `test-loading.mjs`: cache quente não exibe loader; espera real exibe; conclusão, timeout e entrada manual liberam a página.
- Sintaxe JS, arquivos locais, srcsets, âncoras e filtros SVG verificados.

## Limites

Não há Safari/WebKit ou aparelhos físicos iOS/Android disponíveis nesta sessão. Viewport Chrome não reproduz integralmente esses motores, barras móveis ou gestos de hardware. As correções consideram toque e APIs dos navegadores atuais; validação física Safari iOS e Chrome Android permanece necessária antes de lançamento definitivo. Não houve publicação externa nem alteração do WordPress.
