export const site = {
  name: "Gyô Belas Unhas",
  role: "Manicure & Nail Designer",
  location: "Serrania - MG",
  instagramHandle: "@gyobelasunhas_",
  instagramUrl: "https://instagram.com/gyobelasunhas_",
  whatsappNumber: "5535987064114",
  whatsappDisplay: "+55 (35) 9 8706-4114",
  address: {
    street: "Rua Amicis B. Libanco, 104",
    neighborhood: "Centro",
    city: "Serrania",
    state: "MG",
  },
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get mapsUrl() {
    const { street, neighborhood, city, state } = this.address;
    const query = `${street}, ${neighborhood}, ${city} - ${state}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  },
};

export function whatsappUrlWithMessage(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}
