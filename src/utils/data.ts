import visibility from "../../public/images/2.webp";
import visibilityDilemma from "../assets/images/f6f2.jpg";
import engagementGap from "../assets/images/img_18ac720d.jpg";
import resultsInHibernation from "../assets/images/img_121103.jpg";

const services = [
  {
    title: "Orientación",
    features: [
      "Definir las características del deportista",
      "Analisis de resultados reales",
      "Programa y estrategias detallado con un enfoque individual",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Contenido",
    features: [
      "Horario personalizado",
      "Programa de trabajo",
      "Imágenes",
      "Medios audiovisuales",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Resultados tangibles",
    features: [
      "Análisis integral",
      "Seguimiento de objetivos",
      "Feedback",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },  
  
];

const competiciones = [
  {
    title: "Competición",
    painPoint:
      "Cuando notas que te estás ahogando entre el vasto mar de las redes sociales y tú lucha por conseguir sumar puntos, en un contexto en el que todos hacen más y mejor.",
    agitatepainPoint:
      "Es desalentador que tu esfuerzo pase desapercibido. Tus puntos no llegan, simplemente no puedes encontrarte en medio del ruido.",
    solution:
      "Mi estrategia para mantenerte y crecer, eliminan el caos, garantizando el crecimiento  personal. ",
    img: visibilityDilemma,
  },
  {
    title: "Brecha de compromiso",
    painPoint:
      "A pesar de tus esfuerzos, tús resultados siguen sin convencerte y las interacciones con otras experiencias no se traducen en efectos positivos. ",
    agitatepainPoint:
      "Es frustrante ver a los competidores mejorar en cada participación mientras tú luchas por mantenerte. Tú trabajo merece mejores resultados. ",
    solution:
      "Mi estrategía te convertirá de un mero espectador a un participante auténtico.",
    img: engagementGap,
  },
  {
    title: "Resultados",
    painPoint:
      "Tús esfuerzos no se traducen en resultados tangibles, lo que te hace preguntarte si tu inversión está dando frutos.",
    agitatepainPoint:
      "Es desalentador cuando los números muestran poco crecimiento o caida. El tiempo y los recursos son valiosos y es hora de liberarse del ciclo de resultados estancados.",   
    solution:
      "Nuestro enfoque basado en fases garantiza que cada acción tenga un propósito y produzca resultados mensurables.",
    img: resultsInHibernation,
  },
  
];

const quien = [
  {
    title: "Quien soy",
    painPoint:
      "Me inicie en el tiro con arco despues de haber estado practicando toda mi vida futbol sala y futbol-7, debido principalmente al miedo a lesionarme, lo deje. Tambien he practicado submarinismo, que siempre me ha aportado un gran bienestar.",  
    agitatepainPoint:
      "De niño me quedaba mirando la televisión cuando salian deportes de precisión como tiro con arco, por lo que en el año 2011, decidi iniciarme en este apasionante deporte.",
    solution:
      "La decisión de hacerme entrenador, es porque de siempre me ha gustado enseñar a la gente y trasmitir lo que se. Soy incapaz de ver algo mal y no ayudar, es mi T.O.C. ",
    img: visibility,
  },]


export { services, competiciones, quien};
