
const Glossary = () => {
  const terms = [
    {
      term: "Fuero Sindical",
      definition: "Protección especial que la ley otorga a ciertos dirigentes sindicales y trabajadores involucrados en la formación de un sindicato o en negociación colectiva, que impide que sean despedidos o que se alteren sus condiciones de trabajo sin autorización judicial previa.",
      category: "Derechos y Protección"
    },
    {
      term: "Negociación Colectiva",
      definition: "Proceso mediante el cual uno o más empleadores se relacionan con una o más organizaciones sindicales, o con trabajadores que se unen para tal efecto, con el objeto de establecer condiciones comunes de trabajo y de remuneraciones por un tiempo determinado.",
      category: "Procesos Sindicales"
    },
    {
      term: "Contrato Colectivo",
      definition: "Acuerdo escrito resultante de la negociación colectiva que establece las condiciones de trabajo y remuneraciones para los trabajadores cubiertos por él. Tiene una duración determinada y obliga a las partes.",
      category: "Documentos y Acuerdos"
    },
    {
      term: "Huelga Legal",
      definition: "Suspensión colectiva del trabajo acordada por los trabajadores en el marco de un proceso de negociación colectiva reglada, como medida de presión para lograr un acuerdo con el empleador.",
      category: "Acciones Sindicales"
    },
    {
      term: "Prácticas Antisindicales o Desleales",
      definition: "Acciones u omisiones del empleador o de cualquier persona que atenten contra la libertad sindical, incluyendo la obstaculización de la formación o funcionamiento de sindicatos, la discriminación de trabajadores sindicalizados, o la injerencia indebida en las actividades sindicales.",
      category: "Derechos y Protección"
    },
    {
      term: "Quórum de Constitución",
      definition: "Número mínimo de trabajadores/as que la ley exige para poder constituir válidamente un sindicato. Varía según el tamaño de la empresa y si existen o no otros sindicatos en ella.",
      category: "Formación Sindical"
    },
    {
      term: "Ministro de Fe",
      definition: "Persona habilitada por ley (ej. Inspector del Trabajo, Notario Público, Oficial del Registro Civil) para certificar la regularidad de ciertos actos sindicales, como la asamblea de constitución y la votación de estatutos.",
      category: "Formación Sindical"
    }
    // Se pueden agregar más términos aquí
  ];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Glosario de Términos Sindicales</h2>
      <div className="space-y-4">
        {terms.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md border border-gray-100">
            <h3 className="text-lg font-semibold text-primary">{item.term}</h3>
            <p className="text-sm text-text-secondary mt-1">{item.definition}</p>
            <p className="text-xs text-accent mt-2">Categoría: {item.category}</p>
          </div>
        ))}
      </div>
      <p className="text-xs mt-6 text-center text-gray-600">
        Este glosario contiene definiciones de términos comunes en el ámbito sindical y laboral chileno. Se irá actualizando y expandiendo.
      </p>
    </section>
  );
};

export default Glossary;

