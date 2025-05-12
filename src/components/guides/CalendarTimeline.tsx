const CalendarTimeline = () => {
  const events = [
    {
      category: "Formación del Sindicato",
      items: [
        {
          event: "Asamblea de Constitución",
          deadline: "N/A - Es el punto de partida",
          details: "Reunión de trabajadores para aprobar estatutos y elegir directiva. Requiere Ministro de Fe.",
        },
        {
          event: "Depósito de Acta y Estatutos en DT",
          deadline: "Dentro de los 15 días siguientes a la asamblea de constitución",
          details: "Entregar acta original y dos copias de estatutos certificados en la Inspección del Trabajo.",
        },
        {
          event: "Obtención Personalidad Jurídica Provisoria",
          deadline: "DT registra y emite certificado usualmente en 4 días hábiles tras el depósito, si todo está en orden.",
          details: "Permite al sindicato comenzar a operar legalmente de forma provisoria.",
        },
        {
          event: "Comunicación al Empleador",
          deadline: "Una vez constituido el sindicato y obtenida la personalidad jurídica.",
          details: "Informar formalmente al empleador sobre la constitución del sindicato.",
        },
        {
          event: "Completar Quórum (Casos Especiales)",
          deadline: "Dentro de 1 año desde la constitución (para sindicatos formados con 8 personas en empresas sin sindicato previo y que no alcanzaban el 50% inicialmente).",
          details: "Deben alcanzar el quórum legal (ej. 50% en empresas de hasta 50 trabajadores) para no perder la personalidad jurídica.",
        },
      ],
    },
    {
      category: "Negociación Colectiva (Proceso Reglado General)",
      items: [
        {
          event: "Presentación Proyecto Contrato Colectivo",
          deadline: "No antes de 60 días ni después de 45 días anteriores al vencimiento del instrumento colectivo vigente. Si no hay instrumento, en cualquier momento (salvo excepciones).",
          details: "El sindicato presenta su propuesta de condiciones laborales y salariales al empleador.",
        },
        {
          event: "Respuesta del Empleador",
          deadline: "Dentro de los 15 días siguientes a la presentación del proyecto.",
          details: "El empleador debe responder por escrito todas las cláusulas del proyecto.",
        },
        {
          event: "Período de Negociación Directa",
          deadline: "Desde la respuesta del empleador. La ley no fija un plazo máximo, pero las partes suelen acordarlo.",
          details: "Las partes se reúnen para intentar llegar a un acuerdo.",
        },
        {
          event: "Solicitud de Mediación Obligatoria (Dirección del Trabajo)",
          deadline: "Dentro de los 5 días siguientes de recibida la respuesta del empleador, o en cualquier momento durante la negociación si hay acuerdo.",
          details: "Cualquiera de las partes puede solicitar la intervención de un mediador de la DT.",
        },
        {
          event: "Votación de Última Oferta / Huelga",
          deadline: "Debe realizarse dentro de los últimos 5 días de vigencia del contrato colectivo anterior, o si no hay, dentro de los últimos 5 días del plazo de 45 días desde la presentación del proyecto (o 60 si es gran empresa).",
          details: "Los trabajadores votan si aceptan la última oferta del empleador o declaran la huelga.",
        },
      ],
    },
  ];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Calendario de Plazos y Trámites Clave</h2>
      {events.map((categoryObj, catIndex) => (
        <div key={catIndex} className="mb-8">
          <h3 className="text-xl font-semibold text-text-primary mb-4 border-b pb-2">{categoryObj.category}</h3>
          <div className="space-y-4">
            {categoryObj.items.map((item, itemIndex) => (
              <div key={itemIndex} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <h4 className="font-medium text-primary">{item.event}</h4>
                <p className="text-sm text-text-secondary"><strong className="text-accent">Plazo:</strong> {item.deadline}</p>
                <p className="text-xs text-gray-600 mt-1">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs mt-6 text-center text-gray-600">
        Este calendario es una guía referencial y simplificada de algunos plazos importantes. Los procesos pueden tener más etapas y variaciones según el caso. Siempre consulte la legislación vigente (Código del Trabajo) y la Dirección del Trabajo para información oficial y detallada.
      </p>
    </section>
  );
};

export default CalendarTimeline;

