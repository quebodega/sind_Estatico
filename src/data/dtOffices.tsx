const officeData = [
  {
    region: "Arica y Parinacota",
    offices: [
      {
        name: "Dirección Regional de Arica y Parinacota",
        address: "General Lagos N° 589, Arica",
        phone: "+56 58 223 2324",
        director: "(No especificado en vista general)",
      },
      {
        name: "Inspección Provincial del Trabajo Arica",
        address: "General Lagos N° 589, Arica",
        phone: "+56 58 223 2324",
      },
    ],
  },
  {
    region: "Tarapacá",
    offices: [
      {
        name: "Dirección Regional de Tarapacá",
        address: "Bolívar N° 354, Edificio Humberstone, 2° Piso, Iquique",
        phone: "+56 57 2721200 / 2721201",
        director: "Jaime Rojas Vásquez",
      },
      {
        name: "Inspección Provincial del Trabajo Iquique",
        address: "Serrano N° 145, Edificio Econorte, Piso 9°, Iquique",
        phone: "+56 57 2516900",
      },
      {
        name: "Inspección Comunal del Trabajo Alto Hospicio",
        address: "Av. La Pampa N° 3115, Local N° 5, Alto Hospicio",
        phone: "+56 57 2516930",
      },
      {
        name: "Inspección Comunal del Trabajo Pozo Almonte",
        address: "Aldunate N° 409, Pozo Almonte",
        phone: "+56 57 2751027",
      },
    ],
  },
  {
    region: "Antofagasta",
    offices: [
        {
            name: "Dirección Regional del Trabajo Antofagasta",
            address: "Washington N° 2562, Pisos 1, 2 y 3, Antofagasta",
            phone: "+56 55 2458800 / 2458801",
            director: "(No especificado en vista general)"
        },
        {
            name: "Inspección Provincial del Trabajo Antofagasta",
            address: "Washington N° 2562, Pisos 1, 2 y 3, Antofagasta",
            phone: "+56 55 2458800"
        },
        {
            name: "Inspección Provincial del Trabajo El Loa-Calama (Calama)",
            address: "Av. Granaderos N° 2226, Calama",
            phone: "+56 55 2458850"
        },
        {
            name: "Inspección Provincial del Trabajo Tocopilla",
            address: "21 de Mayo N° 1667, Tocopilla",
            phone: "+56 55 2458880"
        },
        {
            name: "Inspección Comunal del Trabajo de María Elena (i)",
            address: "(No especificado en vista general)",
            phone: "(No especificado)"
        }
    ]
  },
  {
    region: "Atacama",
    offices: [
        {
            name: "Dirección Regional del Trabajo de Atacama",
            address: "Rancagua N° 499, Copiapó",
            phone: "+56 52 2205300 / 2205301",
            director: "(No especificado en vista general)"
        },
        {
            name: "Inspección Provincial del Trabajo Copiapó",
            address: "Rancagua N° 499, Copiapó",
            phone: "+56 52 2205300"
        },
        {
            name: "Inspección Provincial del Trabajo Chañaral",
            address: "Buin N° 602, Chañaral",
            phone: "+56 52 2205330"
        },
        {
            name: "Inspección Provincial del Trabajo Huasco (Vallenar)",
            address: "Serrano N° 940, Vallenar",
            phone: "+56 51 2673150"
        },
        {
            name: "Inspección Comunal del Trabajo Diego de Almagro (i)",
            address: "Juan Martínez N° 1704, Diego de Almagro",
            phone: "+56 52 2205340"
        },
        {
            name: "Inspección Comunal del Trabajo Caldera (i)",
            address: "Gana N° 260, Caldera",
            phone: "+56 52 2205350"
        }
    ]
  },
  {
    region: "Coquimbo",
    offices: [
        {
            name: "Dirección Regional del Trabajo Coquimbo",
            address: "Eduardo de la Barra N° 480, La Serena",
            phone: "+56 51 2673100 / 2673101",
            director: "(No especificado en vista general)"
        },
        {
            name: "Inspección Provincial del Trabajo La Serena",
            address: "Eduardo de la Barra N° 480, La Serena",
            phone: "+56 51 2673100"
        },
        {
            name: "Inspección Provincial del Trabajo Limarí (Ovalle)",
            address: "Miguel Aguirre N° 380, Ovalle",
            phone: "+56 53 2436200"
        },
        {
            name: "Inspección Provincial del Trabajo Choapa (Illapel)",
            address: "Independencia N° 0306, Illapel",
            phone: "+56 53 2436230"
        },
        {
            name: "Inspección Provincial del Trabajo Coquimbo",
            address: "Bilbao N° 451, Coquimbo",
            phone: "+56 51 2673130"
        },
        {
            name: "Inspección Comunal del Trabajo Vicuña",
            address: "San Martín N° 401, Vicuña",
            phone: "+56 51 2673180"
        },
        {
            name: "Inspección Comunal del Trabajo Salamanca (i)",
            address: "(No especificado en vista general)",
            phone: "(No especificado)"
        },
        {
            name: "Inspección Comunal del Trabajo Los Vilos (i)",
            address: "(No especificado en vista general)",
            phone: "(No especificado)"
        }
    ]
  },
  {
    region: "Valparaíso",
    offices: [
        {
            name: "Dirección Regional del Trabajo Valparaíso",
            address: "Blanco N° 1232, Valparaíso",
            phone: "+56 32 2500300 / 2500301",
            director: "(No especificado en vista general)"
        },
        {
            name: "Centro de Conciliación y Mediación Valparaíso",
            address: "Blanco N° 1232, Valparaíso",
            phone: "+56 32 2500300"
        },
        {
            name: "Inspección Provincial del Trabajo Valparaíso",
            address: "Blanco N° 1232, Valparaíso",
            phone: "+56 32 2500300"
        },
        {
            name: "Inspección Provincial del Trabajo San Felipe",
            address: "Salinas N° 1060, San Felipe",
            phone: "+56 34 2343800"
        },
        {
            name: "Inspección Provincial del Trabajo Quillota",
            address: "Chacabuco N° 390, Quillota",
            phone: "+56 33 2343700"
        },
        {
            name: "Inspección Provincial del Trabajo San Antonio",
            address: "Av. Barros Luco N° 1610, San Antonio",
            phone: "+56 35 2459100"
        },
        {
            name: "Inspección Provincial del Trabajo Los Andes",
            address: "Santa Rosa N° 300, Los Andes",
            phone: "+56 34 2343830"
        },
        {
            name: "Inspección Provincial del Trabajo Petorca (La Ligua)",
            address: "Portales N° 560, La Ligua",
            phone: "+56 33 2343730"
        },
        {
            name: "Inspección Provincial del Trabajo de Marga Marga (Quilpué)",
            address: "Esmeralda N° 716, Quilpué",
            phone: "+56 32 2500330"
        },
        {
            name: "Inspección Provincial del Trabajo Rapa Nui (Isla de Pascua)",
            address: "Policarpo Toro S/N, Hanga Roa",
            phone: "+56 32 2551350"
        },
        {
            name: "Inspección Comunal del Trabajo Viña del Mar",
            address: "Arlegui N° 263, Viña del Mar",
            phone: "+56 32 2500360"
        },
        {
            name: "Inspección Comunal del Trabajo Casablanca",
            address: "Portales N° 590, Casablanca",
            phone: "+56 32 2500390"
        },
        {
            name: "Inspección Comunal del Trabajo de Limache (i)",
            address: "(No especificado en vista general)",
            phone: "(No especificado)"
        },
        {
            name: "Inspección Comunal del Trabajo de Quintero (i)",
            address: "(No especificado en vista general)",
            phone: "(No especificado)"
        }
    ]
  }
  // ... More regions to be added here by clicking on the DT website and extracting data
];

export default officeData;

