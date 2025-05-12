
const VisualFormationGuide = () => {
  const steps = [
    {
      title: "1. Reunir Quórum",
      description: "Verifica cuántos trabajadores se necesitan según el tamaño de tu empresa. ¡Usa nuestra calculadora arriba!",
      icon: "👥", // Placeholder icon
    },
    {
      title: "2. Asamblea de Constitución",
      description: "Convoca una asamblea con los interesados. Deben aprobar los estatutos y elegir la directiva provisional.",
      icon: "📝",
    },
    {
      title: "3. Ministro de Fe",
      description: "Un ministro de fe (Inspector del Trabajo, Notario, etc.) debe certificar el acta de constitución y los estatutos.",
      icon: "🧑‍⚖️",
    },
    {
      title: "4. Depósito de Documentos",
      description: "Deposita el acta y dos copias de los estatutos (certificados) en la Inspección del Trabajo. Plazo: 15 días desde la asamblea.",
      icon: "📂",
    },
    {
      title: "5. Personalidad Jurídica Provisoria",
      description: "Si todo está en orden, la DT registrará el sindicato y podrás solicitar el certificado de personalidad jurídica provisoria.",
      icon: "📜",
    },
    {
      title: "6. Comunicación al Empleador",
      description: "Comunica formalmente la constitución del sindicato al empleador.",
      icon: "📢",
    },
  ];

  return (
    <section className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Proceso de Formación Sindical: Guía Visual</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
      <p className="text-xs mt-6 text-center text-gray-600">
        Esta es una guía simplificada. Cada paso tiene detalles y requisitos específicos. Consulta la información detallada más abajo y la normativa vigente.
      </p>
    </section>
  );
};

export default VisualFormationGuide;

