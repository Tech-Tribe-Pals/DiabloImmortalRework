import { toggleMenu } from "./header.js";
import { getClass, getBtns } from "./build.js";
import {updateContent} from "./story.js"

export let data = [];
export let newsData = [];
export const classes = [
  {
    name: "Bárbaro",
    description:
      "Salvajes guerreros que custodian con ferocidad las tierras ancestrales de sus antepasados. Empuñan armas ancestrales y canalizan la furia de los elementos para enfrentar a la horda de demonios que amenaza con invadir sus territorios. Su coraje y determinación son inquebrantables, y su grito de guerra resuena como un eco poderoso en las montañas, inspirando a todos los que luchan a su lado.",
    pve: 70,
    pvp: 45,
    dif: 50,
    icon: "./img/barbaro/barbarian.svg",
    img: "./img/barbaro/imgBarbarian.svg",
    videoSkills: "./videos/barbaro/barbaro.mp4",
    imageBuild: "./img/builds/barbaro.png",
  },
  {
    name: "Cruzado",
    description:
      "Inquebratables campeones de la fe que utilizan su magia sagrada y su armadura pesada para resistir los ataques del enemigo, al tiempo que fulminan a los demonios con fuego ardiente y luz cegadora",
    pve: 85,
    pvp: 80,
    dif: 40,
    icon: "./img/cruzada/cruzada.svg",
    img: "./img/cruzada/img.png",
    videoSkills: "./videos/cruzado/cruzado.mp4",
    imageBuild: "./img/builds/cruzada.png",
  },
  {
    name: "Cazador de Demonios",
    description:
      "Vigilantes implacables que se cobran venganza de la horda demoníaca con una arsenal de flechas, explosivos y mecanismos mientras se mueven sin parar para mantenerse fuera de su alcanza",
    pve: 75,
    pvp: 85,
    dif: 75,
    icon: "./img/cazadora/icon.svg",
    img: "./img/cazadora/img.png",
    videoSkills: "./videos/cazador/cazador.mp4",
    imageBuild: "./img/builds/cazadora.png",
  },
  {
    name: "Monje",
    description:
      "Artistas marciales sagrados que canalizan la energía divina en el campo de batalla para asestar potentes ataques cuerpo a cuerpo, activar movimientos veloces e invocar barreras para protegerse a sí mismo y a sus aliados",
    pve: 70,
    pvp: 45,
    dif: 70,
    icon: "./img/monje/monje.svg",
    img: "./img/monje/img.png",
    videoSkills: "./videos/monje/monje.mp4",
    imageBuild: "./img/builds/monje.png",
  },
  {
    name: "Nigromante",
    description:
      "Maestros de la vida y la muerte que utilizan el poder de los muertos y atormentan a sus enemigos con esbirros esqueléticos y magia obscura",
    pve: 75,
    pvp: 60,
    dif: 70,
    icon: "./img/nigromante/nigromante.svg",
    img: "./img/nigromante/img.png",
    videoSkills: "./videos/nigromante/nigromante.mp4",
    imageBuild: "./img/builds/nigromante.png",
  },
  {
    name: "Mago",
    description:
      "Hechizeros renegados que canalizan las energías arcanas para transformarlas en combinaciones de magia poderosa, capaces de manipular y destruir a sus enemigos",
    pve: 80,
    pvp: 50,
    dif: 70,
    icon: "./img/maga/maga.svg",
    img: "./img/maga/img.png",
    videoSkills: "./videos/mago/mago.mp4",
    imageBuild: "./img/builds/maga.png",
  },
];

export const getFetched = async (url) => {
  const response = await fetch(url);
  const arr = await response.json();
  return arr;
};

data = await getFetched("./json/db.json");





getClass(classes[0], 0);
getBtns(classes);
