import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import RequisitosCalculator from "@/components/calculators/RequisitosCalculator";
// import VisualFormationGuide from "@/components/guides/VisualFormationGuide";
// import CalendarTimeline from "@/components/guides/CalendarTimeline"; 

export default function GuiaFormacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Guía para Formar un Sindicato en Chile</h1>

        {/* Guía Visual del Proceso - Contenido Estático de Ejemplo */}
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Proceso de Formación Sindical (Visualización Estática)</h2>
          <div className="space-y-4 text-text-secondary">
            <p><strong>Paso 1: Reunir el Quórum Mínimo.</strong> Dependiendo del tamaño de la empresa, se necesita un número específico de trabajadores interesados.</p>
            <p><strong>Paso 2: Asamblea de Constitución.</strong> Celebrar una asamblea con un ministro de fe (Inspector del Trabajo, Notario, etc.) para aprobar estatutos y elegir directiva.</p>
            <p><strong>Paso 3: Depósito de Documentos.</strong> Presentar el acta de constitución y los estatutos en la Inspección del Trabajo.</p>
            <p><strong>Paso 4: Obtención de Personalidad Jurídica.</strong> Si todo está en orden, el sindicato obtiene personalidad jurídica.</p>
          </div>
        </section>

        {/* Calculadora de Requisitos - Contenido Estático de Ejemplo */}
        <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Requisitos de Constitución (Información Estática)</h2>
          <p className="text-text-secondary">Los requisitos para formar un sindicato varían según el número de trabajadores de la empresa. Por ejemplo, en empresas con más de 50 trabajadores, se necesitan al menos 25 trabajadores que representen, a lo menos, el 10% del total que presten servicios en ella.</p>
        </section>

        {/* Calendario de Plazos y Trámites - Contenido Estático de Ejemplo */}
        <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Plazos Clave (Información Estática)</h2>
          <ul className="list-disc list-inside text-text-secondary space-y-1">
            <li><strong>Depósito de Acta y Estatutos:</strong> Dentro de los 15 días siguientes a la asamblea de constitución.</li>
            <li><strong>Observaciones de la DT:</strong> La Dirección del Trabajo tiene un plazo para formular observaciones.</li>
          </ul>
        </section>

        <section className="mb-8 mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-3">Descripción del Trámite Detallado</h2>
          <p className="text-text-secondary leading-relaxed">
            Este procedimiento permite a organizaciones sindicales, regidas por el Código del Trabajo y por la Ley Nº 19.296, depositar en la Inspección del Trabajo los antecedentes relativos a la constitución de la organización sindical.
          </p>
        </section>

        <section className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Plazo Importante</h2>
          <p className="text-blue-700">
            Si el depósito se realiza dentro de <strong>quince días</strong> contados desde la fecha de la asamblea de constitución (celebrada ante ministro de fe), la Inspección del Trabajo registrará a la organización y esta podrá solicitar el certificado de personalidad jurídica provisoria.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">¿A Quién está Dirigido?</h2>
          <ul className="list-disc list-inside text-text-secondary space-y-1">
            <li>Organizaciones sindicales del sector privado.</li>
            <li>Organizaciones sindicales del sector público (Asociaciones de Funcionarios).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Requisitos para Realizar el Trámite</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-text-primary mb-2">En Oficina:</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li><strong>Acta original de constitución</strong> certificada por ministro de fe (incluir nómina, cédula de identidad y firma de socios/as; para org. superiores, agregar nombre de org. representada y ponderación de voto).</li>
                <li><strong>Dos copias de los estatutos</strong> certificados por ministro de fe.</li>
                <li><strong>Carta de solicitud</strong> especificando el trámite y listado de documentos.</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-text-primary mb-2">En Línea (Portal Mi DT):</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li><strong>ClaveÚnica</strong>.</li>
                <li><strong>Formulario completado</strong> en el portal.</li>
                <li><strong>Documentos escaneados</strong> (íntegros y legibles):
                  <ul className="list-circle list-inside ml-4">
                    <li>Acta original de constitución certificada.</li>
                    <li>Estatutos certificados.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Costo del Trámite</h2>
          <p className="text-text-secondary">Este trámite <strong>no tiene costo</strong>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Procedimiento en Línea (Portal Mi DT)</h2>
          <ol className="list-decimal list-inside text-text-secondary space-y-2">
            <li>Acceder al portal de la Dirección del Trabajo (<a href="https://midt.dirtrab.cl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">midt.dirtrab.cl</a>).</li>
            <li>Iniciar sesión con ClaveÚnica.</li>
            <li>Ingresar al perfil "Trabajador" (actualizar datos si es primera vez).</li>
            <li>Seleccionar "Oficina de Partes Virtual".</li>
            <li>Elegir "Depósito de expediente de constitución de organización sindical".</li>
            <li>Ingresar la información solicitada y adjuntar los documentos requeridos (acta y estatutos escaneados).</li>
            <li>Enviar la solicitud.</li>
            <li>Recibirás un correo electrónico con el número de expediente para hacer seguimiento.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Marco Legal</h2>
          <ul className="list-disc list-inside text-text-secondary space-y-1">
            <li>Artículo 222 del Código del Trabajo.</li>
            <li>Artículo 9 de la Ley Nº 19.296 (Asociaciones de Funcionarios).</li>
          </ul>
        </section>

        <section>
          <p className="text-sm text-gray-500">
            Fuente: <a href="https://www.dt.gob.cl/portal/1626/w3-article-119401.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dirección del Trabajo</a>
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}

