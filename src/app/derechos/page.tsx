import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DerechosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Derechos y Deberes Sindicales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">I. Derecho de Sindicalización</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Definición y Garantías</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Es el derecho que tienen los trabajadores del sector privado y de las empresas del Estado para constituir organizaciones sindicales <strong>sin autorización previa</strong>.</li>
              <li>Está garantizado en la <strong>Constitución Política</strong> (artículo 19 N° 19) y en los <strong>Convenios N° 87 y 98 de la OIT</strong>.</li>
              <li>Son titulares los trabajadores del sector privado y de las empresas del Estado, cualquiera sea su naturaleza jurídica.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Derechos de los Sindicatos</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Constituir, afiliarse y desafiliarse a federaciones, confederaciones y centrales sindicales.</li>
              <li>Representar a los afiliados en procesos de negociación colectiva.</li>
              <li>Suscribir instrumentos colectivos de trabajo y velar por su cumplimiento.</li>
              <li>Propender al mejoramiento de sistemas de prevención de riesgos.</li>
              <li>Promover la educación de sus afiliados.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Características de la Afiliación Sindical</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Es <strong>única</strong> en función de un mismo empleador (no se puede pertenecer a más de un sindicato por el mismo empleo).</li>
              <li>Es <strong>personal</strong> (no puede transferirse ni delegarse).</li>
              <li>Es <strong>voluntaria</strong> (nadie puede ser obligado a afiliarse).</li>
              <li>La <strong>desafiliación</strong> también es voluntaria.</li>
              <li>Los menores de 18 años no necesitan autorización para afiliarse.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">II. Prácticas Antisindicales</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Definición</h3>
            <p className="text-text-secondary leading-relaxed">
              Son todas aquellas acciones u omisiones que directa o indirectamente tienden a <strong>impedir u obstaculizar</strong> el ejercicio de la libertad sindical o la autonomía de funcionamiento de las organizaciones sindicales.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Ejemplos de Prácticas Antisindicales (Empleador)</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Negarse injustificadamente a recibir a dirigentes sindicales.</li>
              <li>Negarse a proporcionar información necesaria para el cumplimiento de obligaciones sindicales.</li>
              <li>Ejercer presiones o amenazas de despido.</li>
              <li>Otorgar mejores beneficios a los no sindicalizados para desincentivar la afiliación.</li>
              <li>Ofrecer beneficios especiales para desincentivar la formación de sindicatos.</li>
              <li>Presionar a trabajadores para que se afilien a un sindicato determinado.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Procedimiento y Sanciones</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>El conocimiento y resolución corresponde a los <strong>Juzgados de Letras del Trabajo</strong>.</li>
              <li>La <strong>Inspección del Trabajo</strong> debe denunciar los hechos que constate.</li>
              <li>Cualquier interesado puede denunciar estas conductas.</li>
              <li>Las sanciones incluyen <strong>multas</strong> (hasta 150 UTM).</li>
              <li>El juez puede ordenar que se subsanen las conductas y la <strong>reincorporación inmediata</strong> de trabajadores con fuero despedidos.</li>
              <li>Algunas conductas pueden acarrear <strong>responsabilidad penal</strong>.</li>
            </ul>
          </div>
        </section>

        <section>
          <p className="text-sm text-gray-500">
            Fuente: Basado en Guía Práctica de ASIMET y Código del Trabajo.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
