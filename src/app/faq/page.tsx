import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Simple Accordion Component (can be moved to components later)
const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  // Basic structure, no state for simplicity in prototype
  return (
    <div className="border border-gray-200 rounded-md mb-2">
      <h3 className="text-lg font-medium p-3 bg-gray-50 cursor-pointer">
        {title}
      </h3>
      <div className="p-3 text-text-secondary">
        {children}
      </div>
    </div>
  );
};

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Preguntas Frecuentes (FAQ)</h1>

        <div className="max-w-3xl mx-auto">
          <AccordionItem title="¿Cuántos trabajadores se necesitan para formar un sindicato?">
            <p>El número mínimo depende del tamaño de la empresa:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Empresas con más de 50 trabajadores:</strong> Se necesitan al menos 25 trabajadores que representen, como mínimo, el 10% del total de quienes prestan servicios en la empresa.</li>
              <li><strong>Empresas con 50 o menos trabajadores:</strong> Se necesitan al menos 8 trabajadores.</li>
              <li><strong>Empresas sin sindicato vigente:</strong> Se puede constituir con 8 trabajadores, pero deben completar el quórum del 50% en el plazo de un año para no perder la personalidad jurídica.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="¿Qué es un ministro de fe y por qué es necesario?">
            <p>Un ministro de fe es un funcionario de la Inspección del Trabajo (o un notario, oficial del Registro Civil, etc., según el caso) que certifica la realización de la asamblea de constitución del sindicato, la aprobación de los estatutos y la elección del directorio. Su presencia y certificación son requisitos legales para validar el proceso.</p>
          </AccordionItem>

          <AccordionItem title="¿Cuánto tiempo toma obtener la personalidad jurídica?">
            <p>Una vez depositado el expediente de constitución (acta y estatutos certificados) en la Inspección del Trabajo dentro del plazo de 15 días desde la asamblea, la organización obtiene la <strong>personalidad jurídica provisoria</strong>. La Inspección debe registrarla y emitir el certificado correspondiente, usualmente en un plazo de 4 días hábiles si todo está en orden.</p>
          </AccordionItem>

          <AccordionItem title="¿Qué son las prácticas antisindicales?">
            <p>Son acciones u omisiones, generalmente del empleador, que buscan impedir o dificultar el ejercicio de la libertad sindical. Ejemplos incluyen presionar a trabajadores para no afiliarse, ofrecer beneficios a los no sindicalizados para desincentivar la afiliación, o negarse a negociar con el sindicato.</p>
          </AccordionItem>

           <AccordionItem title="¿Puedo pertenecer a más de un sindicato en la misma empresa?">
            <p>No. La afiliación sindical es única en relación con un mismo empleador. Un trabajador no puede pertenecer a más de un sindicato simultáneamente respecto del mismo empleo.</p>
          </AccordionItem>

          {/* More FAQs can be added based on research */}
        </div>

      </main>
      <Footer />
    </div>
  );
}
