# Revisão 03 — palco único e movimento suave

## Implementação

- Um único palco sticky para os três projetos, com crossfade entre conteúdos e revelação de contornos para foto em cada exemplo. Navegação direta Estar/Café/Varanda.
- Seleção com nove projetos em três colunas por três linhas no desktop. Duas colunas no tablet e uma no celular.
- Galeria própria autorizada pelo usuário, baseada no visual público do Gallery Showcase: disposição diagonal em perspectiva, mosaico, órbita e camadas. Interpolação amortecida, navegação por setas/teclado/arraste e imagem ampliada em dialog. Não usa o componente proprietário Motion+.
- Lenis 1.3.17 armazenado localmente com licença MIT, duration 1.45; loop de animação compartilhado com atualizações de scroll e galeria. Toque mantém rolagem nativa; preferência por movimento reduzido desativa suavização e revela conteúdos estáveis.
- Entradas com máscaras por palavras, stagger, deslocamento, blur e zoom suave de imagens. Durações ampliadas para evitar movimentos secos.
- Corrigida resolução da raiz do servidor de preview no Windows, que retornava 403 para arquivos válidos.

## Evidências

- `node verify.mjs`: 38 referências locais, âncoras e filtros SVG válidos, sem IDs duplicados.
- Sintaxe dos scripts da aplicação e Lenis verificada.
- Chrome local por HTTP: três colunas computadas, nove projetos, um palco e três painéis confirmados pelo DOM.
- Clique em Café: palco top=0, painel Café opacity=1, demais opacity=0.
- Mosaico selecionado e imagem ampliada aberta/fechada com sucesso.
- Viewport mobile 390×844: sem transbordamento horizontal; painel Varanda verificado visualmente. Viewport restaurado após teste.
- Console sem erros JS na conferência final.
- Captura desktop: revisao-03-galeria.png.

Não houve publicação externa, modificação do WordPress ou validação de desempenho em aparelhos físicos.
