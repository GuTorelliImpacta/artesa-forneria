# Artesã Forneria — site institucional

Site estático (Astro) da Artesã Forneria, R. Padre Charton, 109, Vila Irmãos Arnoni, São Paulo.
Spec de origem: [`docs/spec/artesa-forneria.md`](docs/spec/artesa-forneria.md) (fonte da verdade).

## Rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm test         # testa a lógica de "aberto agora"
```
`SITE_URL` define o domínio canônico (padrão `https://artesaforneria.com.br`, a confirmar com o dono).

## Onde editar
- `src/data/site.json`: endereço, telefones, WhatsApp, horários, links (Yooga, Instagram, mapa).
- `src/assets/`: fotos já recortadas (privacidade). Originais em `assets/originais/` (o print do Maps nunca é publicado).
- `src/styles/global.css`: tokens da marca (cores amostradas do logo) e componentes.

## Hospedagem
Publique o conteúdo de `dist/`. Headers de segurança em `public/_headers` (Netlify/Cloudflare), `public/.htaccess` (Apache/Hostinger) e `vercel.json`.

## Decisões
- Sem formulário, login ou analytics: contato por `tel:` e `wa.me`; mapa Google incorporado (a CSP libera só `google.com`).
- 72 h de fermentação, forno a lenha, depoimentos e o WhatsApp (11) 91650-1473 vêm de um site de terceiros e **não** foram tratados como fato. O WhatsApp está em uso, marcado `confirmado: false` em `site.json`.
