import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Glossary from "@/components/guides/Glossary";
// import OfficeDirectory from "@/components/guides/OfficeDirectory";

const ResourceLink = ({ href, title, description, download }: { href: string, title: string, description: string, download?: string }) => (
  <div className="mb-4 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary hover:underline" download={download}>
      {title} {download && <span className="text-sm text-accent">[Descargar]</span>}
    </a>
    <p className="text-text-secondary mt-1">{description}</p>
  </div>
);

export default function RecursosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Recursos Útiles</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Modelos de Documentos</h2>
          <ResourceLink
            href="/documentos/modelo_estatuto_sindicato_dt.doc"
            title="Modelo de Estatuto Sindicato de Empresa (Dirección del Trabajo)"
            description="Documento Word (.doc) con un modelo de estatutos proporcionado por la Dirección del Trabajo. Puede ser adaptado a las necesidades de su organización."
            download="modelo_estatuto_sindicato_dt.doc"
          />
          <ResourceLink
            href="/documentos/modelo_acta_constitucion_sindicato.md"
            title="Modelo de Acta de Constitución de Sindicato"
            description="Modelo de acta de constitución en formato Markdown (.md). Este documento es una guía y debe ser adaptado a las circunstancias específicas y la normativa vigente. Se recomienda asesoría legal."
            download="modelo_acta_constitucion_sindicato.md"
          />
          {/* More documents will be added here */}
        </section>

        {/* Directorio de Oficinas de la Inspección del Trabajo - Contenido Estático de Ejemplo */}
        <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Directorio de Oficinas de la Inspección del Trabajo (Información Estática)</h2>
          <p className="text-text-secondary">Aquí se mostraría un listado de las oficinas de la Inspección del Trabajo a nivel nacional, con sus direcciones y datos de contacto. Para la versión completa, esta sección será interactiva y permitirá filtrar por región.</p>
          <p className="text-xs mt-4 text-gray-500">Fuente: Dirección del Trabajo (ejemplo de cita)</p>
        </section>

        {/* Glosario de Términos - Contenido Estático de Ejemplo */}
        <section className="my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Glosario de Términos Sindicales (Información Estática)</h2>
          <div className="space-y-2 text-text-secondary">
            <p><strong>Fuero Sindical:</strong> Protección especial contra el despido para dirigentes sindicales.</p>
            <p><strong>Negociación Colectiva:</strong> Proceso para acordar condiciones laborales entre empleador y sindicato.</p>
          </div>
          <p className="text-xs mt-4 text-gray-500">Este es un ejemplo. La versión completa incluirá más términos y definiciones.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Sitios Oficiales y Legales</h2>
          <ResourceLink
            href="https://www.dt.gob.cl/portal/1626/w3-propertyvalue-26865.html"
            title="Dirección del Trabajo - Sindicatos"
            description="Portal oficial con información sobre trámites, normativa, capacitación y dictámenes relacionados con sindicatos en Chile."
          />
          <ResourceLink
            href="https://www.bcn.cl/leychile/navegar?idNorma=24234"
            title="Código del Trabajo (Ley Chile)"
            description="Texto actualizado del Código del Trabajo, que regula las relaciones laborales y la organización sindical."
          />
           <ResourceLink
            href="https://www.ilo.org/santiago/lang--es/index.htm"
            title="Organización Internacional del Trabajo (OIT) - Oficina para el Cono Sur"
            description="Información sobre convenios internacionales, derechos laborales fundamentales y recursos sobre libertad sindical."
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Organizaciones Sindicales y de Apoyo</h2>
          <ResourceLink
            href="https://cut.cl/"
            title="Central Unitaria de Trabajadores (CUT)"
            description="Principal central sindical de Chile, con noticias, recursos y apoyo para organizaciones afiliadas."
          />
          <ResourceLink
            href="https://fundacionsol.cl/"
            title="Fundación SOL"
            description="Centro de estudios con investigaciones, formación y recursos sobre el mundo del trabajo, incluyendo negociación ramal."
          />
        </section>

      </main>
      <Footer />
    </div>
  );
}

