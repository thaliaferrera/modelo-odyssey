export const WHATSAPP_URL = "https://wa.me/5511999998888";
export const PHONE_DISPLAY = "+55 11 99999-8888";
export const EMAIL = "concierge@odysseydental.com";
export const ADDRESS_LINES = [
  "Rua Haddock Lobo 1600, 12º andar",
  "Jardins · São Paulo · SP",
];
export const HOURS_DISPLAY = "Seg – Sex · 09h – 20h · Sáb com hora marcada";

// Endereço estruturado para dados ricos (JSON-LD). Deriva de ADDRESS_LINES
// acima para manter uma única fonte de verdade — não duplica os dados.
const [addressStreet, addressExtra] = ADDRESS_LINES;
const [addressNeighborhood, addressCity, addressRegion] = addressExtra.split(" · ");
export const CLINIC_ADDRESS = {
  streetAddress: `${addressStreet}, ${addressNeighborhood}`,
  addressLocality: addressCity,
  addressRegion,
  addressCountry: "BR",
};
