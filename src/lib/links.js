import site from '../data/site.json';
export const waLink = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(site.whatsapp.mensagem)}`;
export const telLink = `tel:${site.telefone.tel}`;
