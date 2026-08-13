export const serviceCategories = [
  {
    id: "basico",
    title: "Básico",
    items: [
      { name: "Manicure", price: 28 },
      { name: "Pedicure", price: 30 },
    ],
  },
  {
    id: "aplicacao",
    title: "Aplicação",
    items: [
      { name: "Banho de gel", price: 80 },
      { name: "Esmaltação em gel", price: 60 },
      { name: "Unha postiça", price: 40 },
    ],
  },
  {
    id: "decoracao",
    title: "Decoração",
    items: [
      { name: "Glitter", price: 2 },
      { name: "Pedraria", price: 3 },
    ],
  },
];

export function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
