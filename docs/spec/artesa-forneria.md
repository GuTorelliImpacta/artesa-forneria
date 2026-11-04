# Spec — Site institucional da Artesã Forneria (São Paulo, Zona Norte)

> Gerada pela pensadora em 04/11/2026. Fonte da verdade para a orquestra-dev: skills executam **dentro** deste documento. Onde houver `[CONFIRMAR]`, não afirme como fato.

## 1. Missão e resultado esperado
Criar o site institucional estático, mobile-first, em pt-BR, da **Artesã Forneria** (pizzaria no bairro Vila Irmãos Arnoni/Tremembé, São Paulo/SP). Público: moradores e frequentadores da Zona Norte que procuram pizza artesanal e happy hour à noite. **Conversão principal:** ligar / chamar no WhatsApp para reservar mesa; secundária: abrir o cardápio online e traçar rota. Decisão do dono do projeto: "decidir sozinha e implementar tudo" → suposições abaixo valem sem nova aprovação.

## 2. Fatos confirmados
| Fato | Origem |
|---|---|
| Nome: Artesã Forneria | Logo, fachada, Maps |
| Endereço: R. Padre Charton, 109 – Vila Irmãos Arnoni, São Paulo – SP, 02375-070 | Print Google Maps (dono do projeto) |
| Telefone: (11) 2994-4246 | Print Google Maps |
| Horários: qui 18h–23h; sex e sáb 18h–23h30; dom 12h–17h; **seg, ter e qua fechado** | Print Google Maps |
| Faixa de preço: R$ 60–140 por pessoa (informado por 49 pessoas no Google) | Print Google Maps |
| Categoria Google: "Pratos para happy hour" | Print Google Maps |
| Cardápio/delivery online: `delivery.yooga.app` | Print Google Maps |
| Instagram: @artesaforneria | Dono do projeto |
| Pizza com borda alta e queimada de forno, base de molho de tomate, prosciutto, rúcula e geleia/doce de figo | Foto (dono do projeto) |
| Salão estreito com tijolo aparente, parede verde, lâmpadas de filamento, adega de madeira, vinhos | Foto do salão |
| Fachada preta com letreiro dourado, porta de madeira, degraus de tijolo, vasos | Foto da fachada |
| Evento/degustação com molhos e queijos (embalagens "Bufalat" visíveis) | Foto da mesa de molhos |
| Pizzaiolo de touca branca e tatuagem no braço, pizza branca em caixa octogonal (retirada/delivery) | Foto da cozinha |

## 3. O que ainda não sabemos e regras de integridade
- `[CONFIRMAR]` WhatsApp: o site de terceiros `artesaforneria.com.br` lista (11) 91650-1473; não bate com o Maps. Usar só em `data/site.json` e validar com o dono.
- `[CONFIRMAR]` Fermentação de 72 h e forno a lenha: aparecem só nesse site de terceiros (conteúdo genérico, datado de 07/2026, com depoimentos sem autoria). **Não usar como fato**: omitir da copy até confirmar. Foto mostra borda alveolada/queimada típica de forno de alta temperatura; a copy pode dizer "borda alta, com a marca do forno".
- `[CONFIRMAR]` Nome do dono/pizzaiolo, ano de abertura, história, cardápio completo e preços, nomes oficiais das pizzas, se aceita reserva e capacidade, estacionamento, acessibilidade, pet friendly, formas de pagamento, URL exata do cardápio Yooga, domínio oficial, e-mail.
- **Integridade:** nenhum depoimento, nota, prêmio, número de clientes, preço de prato, selo (ex.: AVPN) ou ingrediente inventado. Componentes sem dado real ficam ocultos. Sem logos de terceiros (a marca Bufalat nas fotos não vira "parceira"). Sem hotlink de Instagram. Rostos de clientes nas fotos do salão: usar apenas recortes/enquadramentos em que ninguém é identificável (ver seção 14). Nunca copiar texto do site de terceiros.

## 4. Análise de marca
- **Nome:** "Artesã" no feminino = quem faz com as mãos; "Forneria" = lugar do forno. Logo: rolo de massa desenhado a traço sobre círculo preto, cercado por tijolo.
- **Paleta amostrada (hex reais):** preto do logo `#000000`; creme do letreiro `#B1AE9E` (amostrado; no web usar versão clareada `#E9E1CF` p/ texto, pois o creme puro tem contraste baixo); tijolo `#C5936A`; dourado do neon da fachada `#D5945C` (amostrado); verde da parede do salão amostrado `#738354` `[CONFIRMAR em foto de maior qualidade]`.
- **Personalidade:** artesanal, noturna, acolhedora, de bairro com ambição. Não é cantina italiana de toalha quadriculada nem hamburgueria industrial.
- **Posicionamento:** "a forneria de tijolo e luz baixa da Zona Norte": pizza e vinho sem precisar atravessar a cidade (deslocamento de transporte público do print: 2h18 do ponto de referência; de carro 41 min — a Zona Norte é carente de opção desse tipo).
- **Fraquezas a resolver:** logo em baixa resolução (894 px, JPG); fotos são prints (≤1206 px); presença web fraca (só Maps/Instagram + um site de terceiros genérico); confusão de nome com "Artesão Forneria e Pizzas" (Perdizes, outro negócio).

## 5. Nicho e concorrência (fontes na seção 17)
- Pizza napolitana/fermentação natural tem vitrines recorrentes em guias de SP (Guia da Semana, Gazeta SP) — mas centradas em Jardins, Mooca, Santana. **Não há destaque para Tremembé/Vila Irmãos Arnoni** nas buscas feitas em 04/11/2026: espaço de SEO local aberto.
- Concorrentes de referência na Zona Norte: Graça di Napolli (Santana), Panni (Casa Verde/Água Fria) — ficha de 2017, `[CONFIRMAR]` atualidade. Homônimo a evitar: Artesão Forneria e Pizzas (Perdizes).
- **Diferenciais provados por foto:** ambiente (tijolo, luz, adega), borda de forno, combinação doce-salgada (figo + prosciutto), eventos de degustação com molhos, retirada em caixa própria, funcionamento noturno + domingo almoço.

## 6. Público e objetivos
- Público: casais e grupos 25–55 anos da Zona Norte; famílias no domingo ao meio-dia; quem busca happy hour. Dores: "será que está aberto hoje?" (fecha seg–qua), "como é lá dentro?", "quanto custa?", "vale a viagem?".
- Conversão: 1) Ligar; 2) WhatsApp com mensagem pré-preenchida; 3) Ver cardápio (Yooga); 4) Traçar rota.
- KPIs: cliques em ligar/WhatsApp/cardápio/rota (eventos, só após consentimento); chamadas via ficha Google.
- Metas técnicas: Lighthouse ≥ 95 (perf, a11y, SEO, boas práticas) no celular; LCP ≤ 2,0 s; CLS ≤ 0,05; INP ≤ 200 ms.

## 7. Direção de design
**Conceito: "Noite de forno".** O site é a porta preta da fachada: fundo escuro de luz baixa, onde o creme do letreiro e o dourado do neon acendem o conteúdo, com o tijolo como acabamento. Nasce do logo (círculo preto sobre tijolo) e do ambiente real, não de template.
- **Tokens obrigatórios:** `--preto #0B0A09` (sobre o `#000000` do logo, levemente quente), `--creme #E9E1CF` (texto), `--creme-logo #B1AE9E` (texto secundário/linhas), `--tijolo #C5936A` (destaques e blocos), `--dourado #D5945C` (CTA e estado "aberto"), `--verde #738354` (uso pontual, no máx. 1 bloco). No máximo 2 cores de destaque além da paleta (tijolo + dourado).
- **Contraste:** texto creme sobre preto ≥ 12:1; dourado sobre preto ≥ 7:1; **nunca** `#B1AE9E` em corpo pequeno sobre tijolo. Validar tudo.
- **Hero:** H1 em um bloco legível: "Pizza de forno, vinho e luz baixa na Zona Norte." Subtítulo com endereço curto. Ao lado/abaixo, **cartão de status ao vivo** "Aberto agora / Abre hoje às 18h / Fechado hoje, volta quinta às 18h" calculado por JS (fuso America/Sao_Paulo) com fallback em HTML estático dos horários. CTA primário "Reservar pelo WhatsApp"/"Ligar" visível acima da dobra em 390 px; secundário "Ver cardápio".
- **Perfil tipográfico + candidatas:** títulos serifados suaves com personalidade manual, corpo humanista sem serifa legível. Candidatas: títulos **Fraunces** (recomendada), Young Serif, Gloock; corpo **Figtree** (recomendada), Hanken Grotesk, Instrument Sans. O script do logo **só** aparece no logo (não imitar com fonte script em títulos). Decisão final da design-taste-frontend dentro dessas restrições. Fontes auto-hospedadas, `font-display: swap`, subset latin.

### Assinatura visual (8 eixos)
1. **Arquétipo: Utilitário com camada editorial.** O hero é uma ação (status aberto/fechado + reservar), porque a dúvida nº 1 é "abre hoje?"; abaixo, seções editoriais com fotos.
2. **Tipografia:** artesanal-editorial; contraste alto entre título serifado grande (peso médio) e corpo pequeno e arejado. Combina com "feito à mão".
3. **Linguagem de forma:** janela em **arco** (boca de forno / porta de madeira) como máscara de foto; **círculo** do logo como selo (horários, "aberto"); linhas finas em fiadas de tijolo (padrão sutil de juntas, CSS/SVG) como divisor. Sem cards de cantos arredondados genéricos.
4. **Tratamento de imagem:** cor natural quente, sem filtro pesado; fotos sempre dentro de arcos ou molduras fixas; fotos de baixa resolução em tamanho contido (≤ largura nativa).
5. **Cor:** escuro dominante (≈75% preto, 15% creme, 8% tijolo, 2% dourado); uma seção em tijolo sólido para o bloco de visita. Verde só em um detalhe.
6. **Ritmo e densidade:** respiro generoso, seções curtas; informação prática (horários, endereço) em blocos densos e escaneáveis.
7. **Movimento:** sutil funcional: fade-up leve ao entrar, "brilho" dourado discreto no status aberto (pulso lento); respeitar `prefers-reduced-motion`. Sem parallax pesado, sem vídeo autoplay.
8. **Voz da copy:** calorosa e direta, frases curtas, sem hipérbole ("a melhor do mundo"), sem italianismos caricatos.

**Referências usadas (nicho: Alimentação e gastronomia):**
- Madero (madero.com.br) — princípio: foto de produto que dá apetite com caminho curto para unidade/pedido. *Não verificado ao vivo* (host inacessível no ambiente em 04/11/2026).
- Outback (outback.com.br) — princípio: reserva/unidade como ação sempre à mão. *Não verificado ao vivo.*
- Fora do nicho: Airbnb (airbnb.com.br), do nicho turismo — princípio: foto e informação prática do lugar vendem a experiência antes do texto. *Não verificado ao vivo.*
Princípio, nunca estrutura.

**Clichês evitados:** hero título-gigante-esquerda/foto-direita; faixa de números (nota/seguidores); grade de 3 cards com ícone; faixa final de cor sólida só com telefone gigante (o bloco tijolo da visita traz mapa e horários, justificado pelo uso real); alternância título+parágrafo+imagem igual em todas as seções; **fundo de madeira e cardápio em imagem** (armadilha do nicho); estética "cantina xadrez/bandeira da Itália".

**Não fazer:** textura de madeira como fundo; tipografia script em títulos; preto+vermelho de pizzaria; stock photos; emoji de pizza; cardápio em PDF/imagem; carrossel automático.

**Teste da troca:** se trocarmos o logo por outro, o site deixa de servir: depende do letreiro dourado/creme sobre preto, do arco do forno, das fiadas de tijolo, do status "abre quinta às 18h" (fecha seg–qua) e das fotos do salão/fachada reais. ✔

## 8. UX: páginas e fluxo
Páginas (navegação: Início · Cardápio · Ambiente · Visite):
1. **Início `/`**: hero+status; "A casa" (2–3 frases factuais + foto do salão em arco); destaque da pizza prosciutto/rúcula/figo (nome `[CONFIRMAR]`: usar descrição "Prosciutto, rúcula e doce de figo"); faixa "Do forno à mesa" com pizzaiolo; bloco "Visite" com **mapa embutido**, horários e endereço.
2. **Cardápio `/cardapio/`**: explica que o cardápio completo e preços ficam no Yooga (botão "Abrir cardápio" nova aba, `rel="noopener"`); lista curta de "o que a casa serve" **somente** do que é comprovado (pizzas, vinhos na adega, pratos para happy hour); sem preços. Nota: faixa R$60–140/pessoa (fonte: Google).
3. **Ambiente `/ambiente/`**: galeria com 4–5 fotos (fachada, salão, adega/salão, pizzaiolo, mesa de degustação) com legendas e `alt`. Sem repetição de foto da Home além da fachada.
4. **Visite `/visite/`**: endereço em texto, horários completos, telefone, WhatsApp, **mapa Google incorporado**, "Traçar rota" (secundário), como chegar de carro/ônibus `[CONFIRMAR]`, mensagem de reserva.
5. **Privacidade `/privacidade/`**: política curta (sem formulário, sem cookies de rastreio por padrão; cita Google Maps como terceiro).
6. 404 customizada.
- **Mobile:** barra fixa inferior com 3 botões (Ligar · WhatsApp · Rota), alvos ≥ 48 px, sem cobrir conteúdo (padding-bottom). Botão ligar usa `tel:+551129944246`. WhatsApp: `https://wa.me/<número>?text=` com texto pré-preenchido "Olá! Gostaria de reservar uma mesa na Artesã Forneria para ___ pessoas, dia ___ às ___." Sem formulário no site.
- **Mapa:** iframe incorporado na Home (seção Visite) e em `/visite/`: `https://www.google.com/maps?q=Artes%C3%A3+Forneria%2C+R.+Padre+Charton%2C+109+-+Vila+Irm%C3%A3os+Arnoni%2C+S%C3%A3o+Paulo+-+SP%2C+02375-070&output=embed`, `loading="lazy"`, altura reservada (≥ 320 px mobile / 420 px desktop, `aspect-ratio`), `title="Mapa: Artesã Forneria, R. Padre Charton, 109"`, endereço em texto ao lado. `[CONFIRMAR]` código "Compartilhar > Incorporar" oficial (trocar se o dono enviar). "Traçar rota" abre nova aba.

## 9. Conteúdo (copy base, pt-BR)
- **Título/H1:** "Pizza de forno, vinho e luz baixa na Zona Norte."
- **Sub:** "Artesã Forneria — R. Padre Charton, 109, Vila Irmãos Arnoni."
- **A casa:** "Tijolo à vista, lâmpadas acesas e uma adega de madeira à mão. A Artesã Forneria é o lugar para dividir uma pizza de borda alta e escolher um vinho sem sair da Zona Norte." (somente o que as fotos provam).
- **Destaque:** "Prosciutto, rúcula e doce de figo sobre molho de tomate e borda marcada pelo forno." (`[CONFIRMAR]` nome oficial).
- **Cozinha:** "As pizzas saem do forno uma a uma, e também seguem para viagem em caixa própria."
- **Eventos:** "Já recebemos degustações com molhos e queijos." (`[CONFIRMAR]` periodicidade; só como fato passado fotografado).
- **FAQ (JSON-LD FAQPage só com respostas confirmadas):** Quando abre? (horários). Onde fica? (endereço). Tem cardápio online? (Yooga). Como reservar? (telefone/WhatsApp). Faixa de preço? (R$60–140, fonte Google). Itens `[CONFIRMAR]` (estacionamento, pet, acessibilidade) ficam fora até resposta.
- **Aviso legal:** "Bebidas alcoólicas: venda proibida a menores de 18 anos. Beba com moderação." no rodapé (norma do segmento).
- Páginas educativas de topo de funil: **fora do escopo** até haver conteúdo real do dono (evitar texto genérico estilo site de terceiros).

## 10. SEO
- Termos naturais: "pizzaria Zona Norte São Paulo", "pizza Tremembé", "pizzaria Vila Irmãos Arnoni", "happy hour zona norte SP", "pizza e vinho zona norte". Evitar disputar "Artesão Forneria".
- `<title>` Início: "Artesã Forneria | Pizza e vinho na Zona Norte de São Paulo" (≤ 60 car.). Description ≤ 155 car. por página; canonical via `SITE_URL`; Open Graph/Twitter com imagem 1200×630 gerada da fachada.
- **JSON-LD `Restaurant`** (`servesCuisine: Pizza`, `priceRange: "R$ 60–140"` com cuidado → usar `"$$"`; `openingHoursSpecification` conforme seção 2; `telephone`, `address`, `sameAs`: Instagram). `FAQPage` na Home. Sem `aggregateRating`.
- **NAP idêntico** à ficha pública em todo o site e no schema. `sitemap.xml`, `robots.txt`, `<html lang="pt-BR">`, links internos entre páginas.
- **Checklist Google Meu Negócio (para o dono):** categoria primária "Pizzaria", incluir site, link de reserva (WhatsApp), link do cardápio, fotos novas em alta resolução, responder avaliações, publicar horários especiais.
- Analytics: nenhum por padrão; se ativado (Plausible/GA), só após consentimento; eventos: `click_ligar`, `click_whatsapp`, `click_cardapio`, `click_rota`.

## 11. Performance e acessibilidade
- HTML estático, JS mínimo (status aberto/fechado, menu mobile). Imagens: AVIF/WebP + fallback JPG, `srcset`, `width/height`, `loading="lazy"` abaixo da dobra, hero com `fetchpriority="high"`. Fontes ≤ 2 famílias, ≤ 4 arquivos.
- WCAG 2.1 AA: foco visível, navegação por teclado, `skip link`, landmarks, `alt` descritivo, `prefers-reduced-motion`, tamanho de texto ≥ 16 px, toque ≥ 44–48 px. Testar em 360, 390, 768, 1440 px; sem scroll horizontal.

## 12. Segurança e privacidade
- Sem formulário, sem backend, sem login → superfície mínima. Contato só por `tel:` e `wa.me`.
- Headers (via `_headers`/`vercel.json`/`.htaccess`, conforme hospedagem): CSP `default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://www.google.com https://maps.google.com; script-src 'self'`, HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restritiva, `frame-ancestors 'none'`. Links externos com `rel="noopener noreferrer"`.
- LGPD: política cita Google Maps (terceiro que pode definir cookies ao carregar o mapa); carregar o iframe só ao rolar/clique é opcional. Sem segredos no cliente; `npm audit` limpo de altas/críticas; dependências fixas.

## 13. Stack e estrutura
Repositório vazio → **Astro (estático) + CSS próprio com variáveis** (ou Tailwind se a skill de implementação preferir): páginas múltiplas, zero JS por padrão, ótimo SEO/Lighthouse, deploy em qualquer host (Hostinger/Vercel/Netlify), sem custo de servidor. Dados editáveis em `src/data/site.json` (nome, endereço, telefones, WhatsApp, horários, links, redes) e `src/data/cardapio.json`. Env: `SITE_URL`. Saída `dist/`. Nada é publicado/deployado sem pedido do dono.

## 14. Assets e política de imagens
Originais em `assets/originais/` (todos baixa resolução, **prints**; nenhum atinge 1600 px):
| Arquivo | Mostra | Res. | Uso |
|---|---|---|---|
| logo-artesa.jpg | Logo circular sobre tijolo | 894×892 | Header/rodapé/favicon (recortar o círculo); `[CONFIRMAR]` vetor |
| fachada-noite.jpg | Fachada, letreiro, 4 pessoas com taça | 1206×1163 | Hero (em arco, tamanho contido) e og:image; as pessoas aparecem de frente: **usar enquadramento em recorte na porta/letreiro ou confirmar autorização** |
| pizza-prosciutto-rucula-figo.jpg | Pizza em tábua | 1206×1190 | Destaque Home e Cardápio |
| salao-interno.jpg | Salão com clientes | 1206×1165 | Ambiente: **clientes identificáveis → recortar adega/teto/tijolo** ou pedir autorização |
| pizzaiolo-pizza-branca.jpg | Pizzaiolo e pizza branca | 1206×1201 | Seção "Do forno à mesa"; `[CONFIRMAR]` autorização do funcionário |
| mesa-molhos-degustacao.jpg | Mesa de molhos, limões | 1206×1172 | Galeria (evento) — tem marcas de terceiros: recortar/evitar embalagens em primeiro plano |
| print-google-maps.jpg | Print de horários | — | **Só fonte de dados, nunca publicar** |
Regras: foto do cliente primeiro; nunca ampliar acima da largura nativa (hero em arco ≤ 600 px de largura útil no desktop; sem full-bleed); sem imagem repetida em seções diferentes (fachada só 1x na Home + og); sem stock. Se ficar fraco, usar placeholder marcado "FOTO PENDENTE".
**Fotos necessárias (enviar ao dono):** fachada e salão sem clientes, 1600 px+; pizzas individuais (cada sabor), vista do forno em operação, adega, prato de happy hour, logo vetorial/PNG transparente.

## 15. Processo e QA
1. Setup + tokens + dados → 2. **Home** → **checkpoint visual (screenshots 390/768/1440) antes das demais páginas** → 3. demais páginas → 4. SEO/schema/headers → 5. revisão final 390/768/1440 com ≥ 1 ciclo de correção → 6. Lighthouse/axe/validação JSON-LD → 7. relatório com pendências. Auditorias de design/performance/SEO/segurança rodadas pela orquestra-dev.

## 16. Critérios de aceite
- [ ] Páginas Início, Cardápio, Ambiente, Visite, Privacidade e 404 existem; build e lint sem erro.
- [ ] NAP, telefone e horários idênticos aos fatos da seção 2 em HTML e JSON-LD.
- [ ] Nenhum dado inventado (sem depoimento, nota, preço, 72 h, forno a lenha); `[CONFIRMAR]` não aparece como fato.
- [ ] CTA (Ligar/WhatsApp) acima da dobra em 390 px; barra inferior fixa funcional; sem scroll horizontal em 360 px.
- [ ] Status "aberto/fechado" correto para cada dia/horário (testar qui 17h59/18h00, dom 16h59/17h00, qua) em America/Sao_Paulo; fallback sem JS.
- [ ] **Mapa Google incorporado e carregando no endereço certo, sem tirar o visitante do site**, com `title`, lazy e altura reservada.
- [ ] Contraste AA, navegação por teclado, alt em todas as imagens, `prefers-reduced-motion`.
- [ ] Lighthouse mobile ≥ 95 nas 4 categorias; JSON-LD válido (Rich Results/validator); headers e CSP aplicados sem quebrar o mapa.
- [ ] Imagens conforme inventário, sem upscale acima do nativo, nenhuma repetida, print do Maps não publicado, clientes não identificáveis.
- [ ] **Assinatura visual da seção 7 aplicada** (arco, círculo, fiadas de tijolo, noite de forno) e teste da troca aprovado.
- [ ] Relatório final lista pendências e fotos necessárias.

## 17. Fontes (consulta em 04/11/2026)
- Print Google Maps da Artesã Forneria (material do dono do projeto) — dados de endereço, telefone, horários, preço.
- Instagram @artesaforneria — instagram.com/artesaforneria — **bloqueado (HTTP 429)**, não consultado; pedir print da bio.
- artesaforneria.com.br e /blog/ — site de terceiros/autoria `[CONFIRMAR]`, posts de 29–30/07/2026; usado só para listar divergências (WhatsApp, 72 h, forno a lenha).
- delivery.yooga.app — cardápio online citado no Maps; conteúdo não acessível via fetch.
- Guia da Semana, "Onde comer pizzas napolitanas em São Paulo" — guiadasemana.com.br — acesso bloqueado (403); só título/snippet via busca.
- Gazeta SP, "Pizzarias paulistanas ganham destaque em rankings internacionais" — gazetasp.com.br — só snippet; data não confirmada.
- Tripadvisor/Zomato/RestaurantGuru — listagens de "Artesão Forneria e Pizzas" (Perdizes), negócio homônimo distinto.
