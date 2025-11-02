import { defineStore } from "pinia";

// 🖼️ Imágenes de ejemplo (puedes reemplazarlas por tus reales en /resources/images/services/)
import imagen1 from '../../images/services/imagen1.jpg';
import imagen2 from '../../images/services/imagen2.jpg';
import imagen3 from '../../images/services/imagen3.jpg';
import imagen4 from '../../images/services/imagen4.jpg';
import imagen5 from '../../images/services/imagen5.jpg';
import imagen6 from '../../images/services/imagen6.jpg';
import imagen7 from '../../images/services/imagen7.jpg';
import imagen8 from '../../images/services/imagen8.jpg';
import imagen9 from '../../images/services/imagen9.jpg';
import imagen10 from '../../images/services/imagen10.jpg';
import imagen11 from '../../images/services/imagen11.jpg';
import imagen12 from '../../images/services/imagen12.jpg';
import imagen13 from '../../images/services/imagen13.jpg';
import imagen14 from '../../images/services/imagen14.jpg';
import imagen141 from '../../images/services/imagen14.1.jpg';
import imagen142 from '../../images/services/imagen14.2.jpg';
import imagen15 from '../../images/services/imagen15.jpg';
import imagen151 from '../../images/services/imagen15.1.jpg';
import imagen152 from '../../images/services/imagen15.2.jpg';

export const useServicesStore = defineStore("services", {
  state: () => ({
    services: [
      {
        clasificacion: "Energías Renovables y Eficiencia Energética",
        icono: "mdi-solar-power",
        servicios: [
          {
            title:
              "Suministro e instalación de sistemas de energía solar para bombeo de agua",
            description:
              "Desarrollamos proyectos solares y eólicos desde la viabilidad hasta la puesta en marcha, garantizando calidad y sostenibilidad.",
            photos: [{ source: imagen1 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Instalación de sistemas de conversión de energía renovable",
            description:
              "Ofrecemos soporte técnico integral en la instalación de sistemas solares y eólicos, asegurando eficiencia y confiabilidad.",
            photos: [{ source: imagen2 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Ingeniería, suministro y mantenimiento",
            description:
              "Mantenimiento predictivo de turbinas eólicas y equipos dinámicos con sistemas de monitoreo avanzados.",
            photos: [{ source: imagen3 }, { source: imagen4 }],
            layout: [1, 1],
            height: ["25vh", "25vh"],
          },
          {
            title: "Prospección y predicción de recursos renovables",
            description:
              "Evaluamos recursos eólicos y solares mediante simulaciones y estudios técnicos de alto nivel.",
            photos: [{ source: imagen5 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Servicio posventa especializado",
            description:
              "Asistencia técnica permanente y monitoreo remoto de sistemas de energía eólica y solar.",
            photos: [{ source: imagen6 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Sistemas de respaldo de energía en telecomunicaciones",
            description:
              "Diseño e integración de soluciones de respaldo energético híbridas y sostenibles para redes de comunicación.",
            photos: [{ source: imagen7 }],
            layout: [1],
            height: ["50vh"],
          },
        ],
      },
      {
        clasificacion: "Ingeniería y Construcción",
        icono: "mdi-hard-hat",
        servicios: [
          {
            title: "Diseño y ejecución de obras civiles",
            description:
              "Realizamos proyectos de infraestructura civil, hidráulica y sanitaria con altos estándares técnicos.",
            photos: [{ source: imagen8 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Hidropaneles solares",
            description:
              "Capturamos la humedad del aire y la convertimos en agua potable mediante energía solar 100% autónoma.",
            photos: [{ source:imagen10  }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Diseños y consultoría técnica",
            description:
              "Estudios y diseños estructurales, hidráulicos, arquitectónicos y geotécnicos con laboratorio propio.",
            photos: [{ source: imagen9 }],
            layout: [1],
            height: ["50vh"],
          },
        ],
      },
      {
        clasificacion: "Servicios Eléctricos y Comunicaciones",
        icono: "mdi-flash",
        servicios: [
          {
            title: "Servicios eléctricos convencionales",
            description:
              "Diseño, construcción y operación de plantas eléctricas, redes y sistemas de alumbrado.",
            photos: [{ source: imagen12 }],
            layout: [1, 1],
            height: ["25vh", "25vh"],
          },
          {
            title: "Eficiencia energética",
            description:
              "Optimización del consumo eléctrico mediante simulaciones y sustitución de luminarias LED.",
            photos: [{ source: imagen13 }],
            layout: [1],
            height: ["50vh"],
          },
          {
            title: "Iluminación de zonas comunes y vías",
            description:
              "Implementación de sistemas híbridos solar-convencional para conjuntos y alumbrado público.",
            photos: [
              { source: imagen14 },
              { source: imagen141 },
              { source: imagen142 },
            ],
            layout: [2, 1],
            height: ["20vh", "30vh"],
          },
          {
            title: "Cableado estructurado voz y datos",
            description:
              "Instalación de sistemas de comunicación y redes estructuradas de alta capacidad.",
            photos: [
              { source: imagen15 },
              { source: imagen151 },
              { source: imagen152 },
            ],
            layout: [1, 2],
            height: ["30vh", "20vh"],
          },
        ],
      },
    ],
  }),
});
