export type Destino = {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  pais: string;
  clima: string;
  melhorEpoca: string;
};

const destinos: Destino[] = [
  {
    id: 1,
    nome: "Paris",
    imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    descricao:
      "Paris, a Cidade Luz, é um dos destinos mais visitados do mundo. Com a icônica Torre Eiffel, o Museu do Louvre e a culinária refinada, a capital francesa encanta viajantes de todas as partes do globo.",
    pais: "França",
    clima: "Temperado oceânico",
    melhorEpoca: "Abril a junho / Setembro a outubro",
  },
  {
    id: 2,
    nome: "Tóquio",
    imagem: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    descricao:
      "Tóquio é uma metrópole vibrante que une tradição e modernidade de forma única. Templos centenários convivem com arranha-céus futuristas, gastronomia inigualável e uma cultura pop que conquista o mundo.",
    pais: "Japão",
    clima: "Subtropical úmido",
    melhorEpoca: "Março a maio / Outubro a novembro",
  },
  {
    id: 3,
    nome: "Machu Picchu",
    imagem: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    descricao:
      "Machu Picchu é a joia arqueológica dos Andes peruanos. Esta cidade inca do século XV, situada entre montanhas cobertas de névoa, é um dos patrimônios históricos mais fascinantes e bem preservados do mundo.",
    pais: "Peru",
    clima: "Subtropical de montanha",
    melhorEpoca: "Maio a setembro",
  },
  {
    id: 4,
    nome: "Santorini",
    imagem: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    descricao:
      "Santorini é um paraíso mediterrâneo com suas icônicas casas brancas e cúpulas azuis à beira do mar Egeu. Os pôr do sol de Oia, as praias vulcânicas e os vinhos locais tornam a ilha grega inesquecível.",
    pais: "Grécia",
    clima: "Mediterrâneo",
    melhorEpoca: "Abril a junho / Setembro a outubro",
  },
  {
    id: 5,
    nome: "Nova York",
    imagem: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    descricao:
      "Nova York é a cidade que nunca dorme. Com a Estátua da Liberdade, o Central Park, a Times Square e uma cena cultural sem igual, a maior metrópole dos EUA oferece experiências únicas para todos os gostos.",
    pais: "Estados Unidos",
    clima: "Continental úmido",
    melhorEpoca: "Setembro a novembro / Abril a junho",
  },
  {
    id: 6,
    nome: "Bali",
    imagem: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    descricao:
      "Bali é a ilha dos deuses indonésia, famosa por seus templos majestosos, terraços de arroz esculpidos nas colinas, praias paradisíacas e uma cultura espiritual profunda que proporciona paz e encantamento.",
    pais: "Indonésia",
    clima: "Tropical",
    melhorEpoca: "Abril a outubro",
  },
];

export default destinos;
