export type Lang = 'pt' | 'en'

export type Product = {
  n: string
  a: string
  sz: string[]
}

export type Brand = {
  b: string
  s: Product[]
}

export const CATALOG: Brand[] = [
  {
    b: 'Tequila Aluzar',
    s: [
      { n: 'Aluzar Tequila Blanco', a: '40°ABV', sz: ['70 cl', '1 L'] },
      { n: 'Aluzar Tequila Reposado', a: '40°ABV', sz: ['70 cl', '1 L'] },
      { n: 'Aluzar Tequila Alta Graduación', a: '50°ABV', sz: ['70 cl'] },
    ],
  },
  {
    b: 'Tequila Tobien',
    s: [{ n: 'Tequila Tobien Blanco', a: '35°ABV', sz: ['70 cl'] }],
  },
  {
    b: 'Tequila Cascahuin',
    s: [
      { n: 'Cascahuin Blanco', a: '40°ABV', sz: ['70 cl'] },
      { n: 'Cascahuin Reposado', a: '40°ABV', sz: ['70 cl'] },
      { n: 'Cascahuin Anejo', a: '40°ABV', sz: ['70 cl'] },
      { n: 'Cascahuin Plata', a: '48°ABV', sz: ['70 cl'] },
      { n: 'Cascahuin Tahona', a: '42°ABV', sz: ['70 cl'] },
    ],
  },
  {
    b: 'Mezcal Banhez',
    s: [
      { n: 'Banhez Mezcal Ensamble', a: '42°ABV', sz: ['70 cl', '1 L'] },
      { n: 'Banhez Mezcal Cuishe', a: '47°ABV', sz: ['70 cl'] },
      { n: 'Banhez Mezcal Tobala', a: '47°ABV', sz: ['70 cl'] },
      { n: 'Banhez Mezcal Tepeztate', a: '47°ABV', sz: ['70 cl'] },
    ],
  },
  {
    b: 'Combier Triple Sec',
    s: [{ n: 'Combier Triple Sec L\'Original', a: '40°ABV', sz: ['70 cl', '3 L'] }],
  },
]

export type Translation = {
  info: string
  bar: string
  bar_ph: string
  tel: string
  tel_ph: string
  order: string
  notes: string
  notes_ph: string
  submit: string
  total: string
  recap: string
  items: (n: number) => string
  bottles: (n: number) => string
  err_bar: string
  err_tel: string
  err_order: string
  opening: string
  moloni_ok: string
}

export const T: Record<Lang, Translation> = {
  pt: {
    info: 'Informações do estabelecimento',
    bar: 'Nome do bar / restaurante',
    bar_ph: 'Ex: Bar Central',
    tel: 'Telemóvel (WhatsApp)',
    tel_ph: '+351 9XX XXX XXX',
    order: 'Encomenda',
    notes: 'Notas',
    notes_ph: 'Entrega urgente, instruções especiais...',
    submit: 'Enviar encomenda via WhatsApp',
    total: 'Total',
    recap: 'Resumo da encomenda',
    items: (n) => (n === 1 ? '1 artigo' : `${n} artigos`),
    bottles: (n) => (n === 1 ? '1 garrafa' : `${n} garrafas`),
    err_bar: 'Introduza o nome do estabelecimento.',
    err_tel: 'Introduza um número de telemóvel.',
    err_order: 'Selecione pelo menos 1 produto.',
    opening: 'A abrir WhatsApp...',
    moloni_ok: 'Encomenda registada em Moloni ✓',
  },
  en: {
    info: 'Venue information',
    bar: 'Bar / restaurant name',
    bar_ph: 'Ex: Central Bar',
    tel: 'Phone (WhatsApp)',
    tel_ph: '+351 9XX XXX XXX',
    order: 'Order',
    notes: 'Notes',
    notes_ph: 'Urgent delivery, special instructions...',
    submit: 'Send order via WhatsApp',
    total: 'Total',
    recap: 'Order summary',
    items: (n) => (n === 1 ? '1 item' : `${n} items`),
    bottles: (n) => (n === 1 ? '1 bottle' : `${n} bottles`),
    err_bar: 'Please enter the venue name.',
    err_tel: 'Please enter a phone number.',
    err_order: 'Please select at least 1 product.',
    opening: 'Opening WhatsApp...',
    moloni_ok: 'Order registered in Moloni ✓',
  },
}

export const WHATSAPP_NUMBER = '351938009839'

export const key = (product: string, size: string) => `${product}||${size}`
