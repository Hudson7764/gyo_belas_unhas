export const site = {
  name: "Gyô Belas Unhas",
  role: "Manicure & Nail Designer",
  location: "Serrania - MG",
  instagramHandle: "@gyobelasunhas_",
  instagramUrl: "https://instagram.com/gyobelasunhas_",
  whatsappNumber: "5535987064114",
  whatsappDisplay: "+55 (35) 9 8706-4114",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
};

export function whatsappUrlWithMessage(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}
