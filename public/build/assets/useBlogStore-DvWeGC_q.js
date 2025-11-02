import{z as o}from"./app-CcLotF7i.js";const s=o("blog",{state:()=>({articles:[],loading:!1}),getters:{categories:e=>{const a=e.articles.map(i=>i.category);return Array.from(new Set(a))},randomArticles:e=>[...e.articles].sort(()=>.5-Math.random()).slice(0,3)},actions:{async fetchArticles(){if(!this.articles.length){this.loading=!0;try{this.articles=[{id:1,title:"Colombia lidera la transición energética en América Latina con proyectos solares",slug:"colombia-lidera-transicion-energetica",excerpt:"El país alcanza 3.5 GW de capacidad solar instalada, posicionándose como referente regional en energías renovables y atrayendo inversión extranjera.",content:`
              <p>Colombia ha experimentado un crecimiento exponencial en su capacidad de generación solar durante los últimos cinco años, consolidándose como líder regional en la transición hacia energías limpias. Con una capacidad instalada que supera los 3.5 gigavatios (GW), el país se posiciona como un referente en América Latina.</p>

              <h2>Inversión récord en infraestructura solar</h2>
              <p>Durante 2024 y 2025, Colombia ha atraído más de $4,500 millones de dólares en inversión extranjera directa para proyectos de energía solar. Empresas de España, Estados Unidos, China y Emiratos Árabes Unidos han establecido operaciones en el país, aprovechando las condiciones climáticas favorables y los incentivos gubernamentales.</p>

              <h2>Impacto en la matriz energética</h2>
              <p>La energía solar representa actualmente el 12% de la matriz energética nacional, un aumento significativo desde el 2% registrado en 2020. El gobierno colombiano ha establecido la meta de alcanzar el 30% de participación de energías renovables no convencionales para 2030.</p>

              <h2>Beneficios económicos y ambientales</h2>
              <p>Los proyectos solares han generado más de 15,000 empleos directos y 45,000 indirectos en todo el país. Además, se estima que la reducción de emisiones de CO₂ alcanza las 2.5 millones de toneladas anuales, equivalente a retirar 540,000 vehículos de las calles.</p>

              <blockquote>
                "Colombia tiene el potencial de convertirse en un exportador neto de energía limpia en la próxima década, gracias a su ubicación geográfica privilegiada y recursos naturales abundantes."
                <cite>— Ministerio de Minas y Energía</cite>
              </blockquote>

              <h2>Proyectos destacados</h2>
              <p>Entre los proyectos más importantes se encuentran el Parque Solar El Paso en Cesar (86 MW), la Granja Solar Celsia en Bolívar (99.8 MW), y múltiples instalaciones en La Guajira que aprovechan la alta radiación solar de la región.</p>
            `,category:"Nacional",image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",date:"2025-10-28"},{id:2,title:"Unión Europea aprueba inversión récord de €300 mil millones en energía limpia",slug:"ue-inversion-energia-limpia",excerpt:"El nuevo paquete de inversión busca acelerar la independencia energética europea y alcanzar cero emisiones netas para 2050.",content:`
              <p>La Comisión Europea ha anunciado el mayor plan de inversión en energías renovables de su historia, con un presupuesto de €300 mil millones que se desplegarán entre 2025 y 2030. Esta iniciativa busca acelerar la transición energética del continente y reducir la dependencia de combustibles fósiles importados.</p>

              <h2>Objetivos del plan de inversión</h2>
              <p>El paquete de inversión se enfoca en cuatro áreas principales: expansión de energía eólica offshore (€120 mil millones), desarrollo de infraestructura de hidrógeno verde (€80 mil millones), modernización de redes eléctricas (€60 mil millones), y almacenamiento energético a gran escala (€40 mil millones).</p>

              <h2>Impacto en la independencia energética</h2>
              <p>Según proyecciones de la Comisión, este plan permitirá a Europa reducir sus importaciones de gas natural en un 70% para 2030 y alcanzar la independencia energética total para 2040. Esto representa un ahorro estimado de €200 mil millones anuales en importaciones de combustibles fósiles.</p>

              <h2>Creación de empleo verde</h2>
              <p>Se estima que la implementación de estos proyectos generará 3.5 millones de empleos verdes en toda Europa, con especial énfasis en regiones que históricamente dependían de industrias de carbón y petróleo.</p>

              <blockquote>
                "Esta inversión no solo es necesaria para combatir el cambio climático, sino que también representa una oportunidad económica sin precedentes para Europa."
                <cite>— Ursula von der Leyen, Presidenta de la Comisión Europea</cite>
              </blockquote>
            `,category:"Internacional",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",date:"2025-10-25"},{id:3,title:"E.C Orinoco inaugura planta solar de 50 MW en el Meta",slug:"ec-orinoco-planta-solar-meta",excerpt:"Nuestra nueva instalación generará energía limpia para más de 30,000 hogares, consolidando nuestro compromiso con la sostenibilidad regional.",content:`
              <p>Con una inversión de $45 millones de dólares, E.C Orinoco S.A.S. inaugura su planta solar más grande hasta la fecha en el departamento del Meta. Esta instalación de 50 megavatios representa un hito en nuestro compromiso con la transición energética de Colombia.</p>

              <h2>Características técnicas del proyecto</h2>
              <p>La planta cuenta con 125,000 paneles solares bifaciales de última generación, distribuidos en 80 hectáreas. El sistema incluye tecnología de seguimiento solar de un eje, lo que aumenta la eficiencia de captación en un 25% comparado con instalaciones fijas.</p>

              <h2>Impacto en la comunidad</h2>
              <p>Durante la fase de construcción, el proyecto generó 350 empleos directos, priorizando la contratación de mano de obra local. En su fase operativa, la planta empleará permanentemente a 45 personas y generará energía suficiente para abastecer a más de 30,000 hogares.</p>

              <h2>Beneficios ambientales</h2>
              <p>Se estima que la planta evitará la emisión de 45,000 toneladas de CO₂ anualmente, equivalente al impacto ambiental de plantar 2 millones de árboles. Además, el proyecto incluye un programa de reforestación de 20 hectáreas en zonas aledañas.</p>

              <blockquote>
                "Esta planta representa nuestro compromiso con el desarrollo sostenible de la región y demuestra que es posible combinar crecimiento económico con responsabilidad ambiental."
                <cite>— CEO de E.C Orinoco S.A.S.</cite>
              </blockquote>

              <h2>Próximos proyectos</h2>
              <p>E.C Orinoco planea desarrollar tres proyectos adicionales en los departamentos de Casanare, Arauca y Vichada durante 2026, con una capacidad combinada de 120 MW.</p>
            `,category:"Empresa",image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",date:"2025-10-20"},{id:4,title:"Inteligencia artificial revoluciona el mantenimiento predictivo en redes eléctricas",slug:"ia-mantenimiento-predictivo",excerpt:"Algoritmos de machine learning reducen hasta 40% los costos de mantenimiento al predecir fallas antes de que ocurran.",content:`
              <p>La implementación de inteligencia artificial en sistemas eléctricos está transformando la industria energética, permitiendo predecir fallas con hasta 95% de precisión y reducir significativamente los costos operativos.</p>

              <h2>Cómo funciona el mantenimiento predictivo con IA</h2>
              <p>Los algoritmos de machine learning analizan millones de datos en tiempo real provenientes de sensores instalados en transformadores, líneas de transmisión y subestaciones. Estos sistemas pueden detectar patrones anómalos que indican posibles fallas hasta 30 días antes de que ocurran.</p>

              <h2>Resultados comprobados</h2>
              <p>Empresas que han implementado estas tecnologías reportan reducciones de hasta 40% en costos de mantenimiento, 60% menos tiempo de inactividad no planificado, y un aumento del 25% en la vida útil de los equipos.</p>

              <blockquote>
                "La IA no reemplaza a los técnicos, sino que les proporciona información valiosa para tomar decisiones más informadas y oportunas."
                <cite>— Instituto de Investigación en Energía Eléctrica</cite>
              </blockquote>
            `,category:"Tecnología",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",date:"2025-10-18"},{id:5,title:"Baterías de estado sólido: el futuro del almacenamiento energético",slug:"baterias-estado-solido",excerpt:"Nueva tecnología promete triplicar la capacidad de almacenamiento y reducir costos en sistemas de energía renovable.",content:`
              <p>Los avances en baterías de estado sólido representan un cambio de paradigma en el almacenamiento de energía, ofreciendo una mayor eficiencia, durabilidad y seguridad comparadas con las baterías de iones de litio actuales.</p>

              <h2>Características de las baterías de estado sólido</h2>
              <p>Estas baterías utilizan un electrolito sólido en lugar de líquido, lo que elimina la posibilidad de reacciones químicas peligrosas y aumenta la vida útil del dispositivo. Además, ofrecen una mayor densidad de energía y una carga más rápida.</p>

              <h2>Aplicaciones en la industria energética</h2>
              <p>Las baterías de estado sólido están siendo adoptadas en una variedad de aplicaciones, desde vehículos eléctricos hasta sistemas de almacenamiento de energía para redes eléctricas. Su implementación promete reducir significativamente los costos de almacenamiento y mejorar la eficiencia de la red eléctrica.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque la tecnología está avanzando rápidamente, aún existen desafíos en términos de escalabilidad y costos de producción. Sin embargo, se espera que en los próximos años estas baterías se vuelvan cada vez más accesibles y se conviertan en la norma en el sector de energías renovables.</p>
            `,category:"Innovación",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",date:"2025-10-15"},{id:6,title:"Parques eólicos offshore en La Guajira generarán 2 GW para 2027",slug:"parques-eolicos-offshore-guajira",excerpt:"El gobierno colombiano aprueba tres proyectos eólicos marinos que transformarán la matriz energética del Caribe.",content:`
              <p>El gobierno colombiano ha aprobado la instalación de tres parques eólicos offshore en la región de La Guajira, con una capacidad total de 2 gigavatios (GW). Estos proyectos representan un hito en la expansión de la energía eólica en el Caribe colombiano.</p>

              <h2>Ubicación estratégica</h2>
              <p>La región de La Guajira cuenta con condiciones climáticas ideales para la generación de energía eólica, con velocidades de viento promedio superiores a 10 metros por segundo. La ubicación offshore permite aprovechar las condiciones más favorables y minimizar el impacto en la costa.</p>

              <h2>Impacto en la matriz energética</h2>
              <p>Una vez completados, estos parques eólicos marinos representarán el 10% de la capacidad total de energía renovable en Colombia, contribuyendo significativamente a la reducción de emisiones de CO₂ y la diversificación de la matriz energética.</p>

              <h2>Beneficios económicos</h2>
              <p>El proyecto creará más de 1,000 empleos directos durante la fase de construcción y operación. Además, se espera que atraiga inversiones extranjeras y fortalezca la economía regional.</p>

              <blockquote>
                "La expansión de la energía eólica en La Guajira es un paso importante hacia una Colombia más sostenible y autónoma energéticamente."
                <cite>— Ministerio de Minas y Energía</cite>
              </blockquote>
            `,category:"Nacional",image:"https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80",date:"2025-10-12"},{id:7,title:"China alcanza 1,200 GW de capacidad renovable instalada",slug:"china-capacidad-renovable",excerpt:"El gigante asiático supera todas las proyecciones y se consolida como líder mundial en generación de energía limpia.",content:`
              <p>China ha alcanzado un hito histórico en su transición energética, superando ampliamente sus objetivos y consolidándose como líder mundial en generación de energía limpia. Con una capacidad instalada de 1,200 gigavatios (GW), el país ha logrado reducir significativamente sus emisiones de CO₂ y diversificar su matriz energética.</p>

              <h2>Componentes de la capacidad renovable</h2>
              <p>La capacidad renovable en China se compone principalmente de energía solar (450 GW), eólica (350 GW), hidroeléctrica (250 GW) y biomasa (100 GW). Estos proyectos han sido impulsados por una combinación de políticas gubernamentales, inversiones privadas y avances tecnológicos.</p>

              <h2>Impacto ambiental</h2>
              <p>La expansión de la energía renovable en China ha permitido reducir las emisiones de CO₂ en un 30% desde 2005, superando las metas establecidas en el Acuerdo de París. Además, se han creado más de 12 millones de empleos en el sector energético renovable.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque China ha logrado grandes avances, aún enfrenta desafíos en términos de integración de la energía renovable en la red eléctrica y almacenamiento de energía. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y el país continúe liderando la transición energética global.</p>
            `,category:"Internacional",image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",date:"2025-10-10"},{id:8,title:"E.C Orinoco recibe certificación ISO 14001 por gestión ambiental",slug:"ec-orinoco-certificacion-iso",excerpt:"Nuestro compromiso con la excelencia ambiental es reconocido internacionalmente con la certificación ISO 14001:2015.",content:`
              <p>E.C Orinoco S.A.S. ha obtenido la prestigiosa certificación ISO 14001, que valida nuestros procesos de gestión ambiental y compromiso con la sostenibilidad. Esta certificación nos ha permitido mejorar nuestros procesos internos y reducir significativamente nuestro impacto ambiental.</p>

              <h2>Beneficios de la certificación</h2>
              <p>La certificación ISO 14001 nos ha permitido identificar áreas de mejora en nuestros procesos, reducir costos operativos y mejorar nuestra reputación como empresa responsable. Además, ha abierto nuevas oportunidades de negocio en mercados que valoran la sostenibilidad.</p>

              <h2>Próximos pasos</h2>
              <p>E.C Orinoco planea continuar mejorando nuestros procesos de gestión ambiental y explorar nuevas oportunidades de colaboración con empresas y organizaciones comprometidas con la sostenibilidad.</p>

              <blockquote>
                "Obtener la certificación ISO 14001 es un reconocimiento de nuestro compromiso con la excelencia ambiental y nuestra dedicación a la sostenibilidad."
                <cite>— CEO de E.C Orinoco S.A.S.</cite>
              </blockquote>
            `,category:"Empresa",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",date:"2025-10-08"},{id:9,title:"Hidrógeno verde: la apuesta de Colombia para descarbonizar la industria",slug:"hidrogeno-verde-colombia",excerpt:"El país lanza hoja de ruta para producir 3 millones de toneladas de hidrógeno verde al año para 2050.",content:`
              <p>Colombia se posiciona como futuro exportador de hidrógeno verde en América Latina, con una hoja de ruta para producir 3 millones de toneladas de hidrógeno verde anuales para 2050. Este plan representa un paso importante hacia la descarbonización de la industria y la diversificación de la matriz energética.</p>

              <h2>Características del hidrógeno verde</h2>
              <p>El hidrógeno verde se produce a través de procesos que no emiten emisiones de CO₂, como la hidrogenación de agua utilizando energía renovable. Este tipo de hidrógeno es considerado una de las soluciones más prometedoras para la transición hacia energías limpias.</p>

              <h2>Aplicaciones en la industria</h2>
              <p>El hidrógeno verde tiene una amplia gama de aplicaciones, desde la producción de combustibles hasta la generación de energía eléctrica y la industria química. Su implementación promete reducir significativamente las emisiones de CO₂ en estas industrias.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque el hidrógeno verde tiene un gran potencial, aún enfrenta desafíos en términos de costos de producción y infraestructura. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y el hidrógeno verde se convierta en una parte integral de la matriz energética global.</p>
            `,category:"Innovación",image:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",date:"2025-10-05"},{id:10,title:"Microgrids inteligentes transforman comunidades rurales en Colombia",slug:"microgrids-comunidades-rurales",excerpt:"Sistemas autónomos de energía solar llevan electricidad confiable a más de 500 comunidades apartadas del país.",content:`
              <p>La implementación de microgrids inteligentes está revolucionando el acceso a energía en zonas rurales de Colombia, llevando electricidad confiable a más de 500 comunidades apartadas del sistema eléctrico central. Estos sistemas autónomos utilizan energía solar y baterías de almacenamiento para proporcionar una fuente de energía fiable y sostenible.</p>

              <h2>Características de los microgrids</h2>
              <p>Los microgrids inteligentes utilizan tecnología de seguimiento solar y baterías de almacenamiento avanzadas para proporcionar una fuente de energía fiable y sostenible. Además, cuentan con sistemas de gestión de energía que optimizan el uso de la energía y reducen los costos operativos.</p>

              <h2>Impacto en las comunidades</h2>
              <p>La implementación de microgrids inteligentes ha permitido mejorar significativamente el acceso a energía en zonas rurales, lo que ha impulsado el desarrollo económico y social de estas comunidades. Además, ha reducido la dependencia de combustibles fósiles y mejorado la calidad de vida de los habitantes.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque los microgrids inteligentes tienen un gran potencial, aún enfrentan desafíos en términos de costos de implementación y mantenimiento. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y los microgrids inteligentes se conviertan en una parte integral de la matriz energética global.</p>
            `,category:"Sostenibilidad",image:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",date:"2025-10-02"},{id:11,title:"Gemelos digitales optimizan el rendimiento de plantas solares",slug:"gemelos-digitales-plantas-solares",excerpt:"La tecnología de simulación digital permite aumentar hasta 15% la eficiencia operativa de instalaciones fotovoltaicas.",content:`
              <p>Los gemelos digitales están revolucionando la gestión y optimización de plantas de energía solar, permitiendo aumentar hasta 15% la eficiencia operativa de estas instalaciones. Esta tecnología utiliza simulación digital para optimizar el rendimiento de las plantas y reducir los costos operativos.</p>

              <h2>Características de los gemelos digitales</h2>
              <p>Los gemelos digitales utilizan tecnología de simulación digital para crear un modelo virtual de la planta solar. Este modelo permite optimizar el rendimiento de la planta, reducir los costos operativos y mejorar la eficiencia energética.</p>

              <h2>Impacto en la industria</h2>
              <p>La implementación de los gemelos digitales ha permitido mejorar significativamente el rendimiento de las plantas de energía solar, lo que ha impulsado el desarrollo de la industria y reducido los costos operativos. Además, ha permitido identificar áreas de mejora en los procesos internos y reducir el impacto ambiental.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque los gemelos digitales tienen un gran potencial, aún enfrentan desafíos en términos de costos de implementación y mantenimiento. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y los gemelos digitales se conviertan en una parte integral de la matriz energética global.</p>
            `,category:"Tecnología",image:"https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80",date:"2025-09-28"},{id:12,title:"India supera a Alemania como tercer mayor productor solar del mundo",slug:"india-tercer-productor-solar",excerpt:"Con 70 GW instalados, India acelera su ambicioso plan de alcanzar 500 GW de energía renovable para 2030.",content:`
              <p>India ha superado a Alemania como tercer mayor productor solar del mundo, con una capacidad instalada de 70 gigavatios (GW). Este logro representa un paso importante hacia el cumplimiento de su ambicioso plan de alcanzar 500 GW de energía renovable para 2030.</p>

              <h2>Componentes de la capacidad solar</h2>
              <p>La capacidad solar en India se compone principalmente de proyectos de energía solar fotovoltaica y energía solar térmica. Estos proyectos han sido impulsados por una combinación de políticas gubernamentales, inversiones privadas y avances tecnológicos.</p>

              <h2>Impacto ambiental</h2>
              <p>La expansión de la energía solar en India ha permitido reducir significativamente sus emisiones de CO₂ y diversificar su matriz energética. Además, se han creado más de 12 millones de empleos en el sector energético renovable.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque India ha logrado grandes avances, aún enfrenta desafíos en términos de integración de la energía renovable en la red eléctrica y almacenamiento de energía. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y India continúe liderando la transición energética global.</p>
            `,category:"Internacional",image:"https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",date:"2025-09-25"},{id:13,title:"E.C Orinoco lanza programa de capacitación en energías renovables",slug:"ec-orinoco-programa-capacitacion",excerpt:"Formamos a 200 técnicos especializados en instalación y mantenimiento de sistemas solares, impulsando el empleo verde.",content:`
              <p>Nuestro nuevo programa de capacitación busca cerrar la brecha de talento en el sector de energías renovables, formando a 200 técnicos especializados en instalación y mantenimiento de sistemas solares. Este programa representa un paso importante hacia el desarrollo de la industria y la creación de empleos verdes.</p>

              <h2>Características del programa</h2>
              <p>El programa de capacitación incluye formación en instalación y mantenimiento de sistemas solares, así como en la gestión de proyectos y la optimización de la eficiencia energética. Además, cuenta con una etapa práctica que permite a los participantes aplicar lo aprendido en proyectos reales.</p>

              <h2>Impacto en la industria</h2>
              <p>La implementación de este programa ha permitido cerrar significativamente la brecha de talento en el sector de energías renovables, lo que ha impulsado el desarrollo de la industria y la creación de empleos verdes. Además, ha permitido mejorar la calidad de los servicios prestados por la industria y reducir los costos operativos.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque el programa de capacitación tiene un gran potencial, aún enfrenta desafíos en términos de financiamiento y recursos humanos. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y el programa de capacitación se convierta en una parte integral del desarrollo de la industria.</p>
            `,category:"Empresa",image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",date:"2025-09-22"},{id:14,title:"Blockchain garantiza transparencia en certificados de energía renovable",slug:"blockchain-certificados-energia",excerpt:"La tecnología blockchain elimina el fraude en certificados verdes y facilita el comercio de energía limpia.",content:`
              <p>La implementación de blockchain en el mercado de energía renovable está creando un ecosistema más confiable, eliminando el fraude en certificados verdes y facilitando el comercio de energía limpia. Esta tecnología utiliza la cadena de bloques para registrar y verificar los certificados de energía renovable, lo que garantiza su autenticidad y transparencia.</p>

              <h2>Características de la tecnología blockchain</h2>
              <p>La tecnología blockchain utiliza la cadena de bloques para registrar y verificar los certificados de energía renovable, lo que garantiza su autenticidad y transparencia. Además, cuenta con una alta seguridad y resistencia a los ataques cibernéticos.</p>

              <h2>Impacto en el mercado</h2>
              <p>La implementación de blockchain en el mercado de energía renovable ha permitido eliminar el fraude en certificados verdes y facilitar el comercio de energía limpia. Además, ha permitido mejorar la confianza en el mercado y reducir los costos operativos.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque la tecnología blockchain tiene un gran potencial, aún enfrenta desafíos en términos de costos de implementación y adopción. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y blockchain se convierta en una parte integral del mercado de energía renovable.</p>
            `,category:"Innovación",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",date:"2025-09-18"},{id:15,title:"Economía circular en paneles solares: reciclaje alcanza 95% de eficiencia",slug:"economia-circular-paneles-solares",excerpt:"Nuevas tecnologías permiten recuperar casi la totalidad de materiales valiosos de paneles solares al final de su vida útil.",content:`
              <p>El reciclaje de paneles solares se convierte en una industria clave para la sostenibilidad del sector, permitiendo recuperar casi la totalidad de materiales valiosos de paneles solares al final de su vida útil. Esta economía circular representa un paso importante hacia la sostenibilidad y la reducción de residuos en el sector de energías renovables.</p>

              <h2>Características de la economía circular</h2>
              <p>La economía circular utiliza nuevas tecnologías para recuperar y reciclar materiales valiosos de paneles solares al final de su vida útil. Además, cuenta con una alta eficiencia y reducción de residuos.</p>

              <h2>Impacto en el sector</h2>
              <p>La implementación de la economía circular en el sector de energías renovables ha permitido reducir significativamente los residuos en el sector y mejorar la sostenibilidad. Además, ha permitido mejorar la eficiencia energética y reducir los costos operativos.</p>

              <h2>Desafíos y perspectivas futuras</h2>
              <p>Aunque la economía circular tiene un gran potencial, aún enfrenta desafíos en términos de costos de implementación y adopción. Sin embargo, se espera que en los próximos años estos desafíos se solucionen y la economía circular se convierta en una parte integral del sector de energías renovables.</p>
            `,category:"Sostenibilidad",image:"https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",date:"2025-09-15"}]}catch(e){console.error("Error al cargar artículos:",e)}finally{this.loading=!1}}},getArticleBySlug(e){return this.articles.find(a=>a.slug===e)}}});export{s as u};
