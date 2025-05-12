import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NegociacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Negociación Colectiva</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Negociación Colectiva Tradicional</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            La negociación colectiva es un derecho fundamental que permite a los trabajadores, organizados a través de sus sindicatos, negociar con el empleador condiciones de trabajo y remuneraciones para un período determinado. Este proceso busca equilibrar la relación laboral y mejorar las condiciones de los trabajadores.
          </p>
          <p className="text-text-secondary leading-relaxed">
            El Código del Trabajo regula los procedimientos, plazos y materias de la negociación colectiva, incluyendo la presentación del proyecto de contrato colectivo, la respuesta del empleador, la mediación y la posibilidad de huelga.
          </p>
          {/* More detailed content on traditional negotiation can be added here */}
        </section>

        <section className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-primary mb-3">Negociación Ramal o por Sector</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Descripción</h3>
            <p className="text-text-secondary leading-relaxed">
              La negociación ramal es un modelo alternativo donde la negociación colectiva se realiza a nivel de sector económico (rama de actividad) en lugar de limitarse a empresas individuales. Esto permite establecer pisos mínimos de condiciones laborales para todos los trabajadores de un sector.
            </p>
            <p className="text-text-secondary leading-relaxed mt-2">
              La Fundación SOL ha desarrollado propuestas y recursos sobre este modelo, destacando su potencial para fortalecer el poder de los trabajadores y corregir desigualdades.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Propuesta de Negociación Colectiva Ramal (NCR)</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Desarrollada por la Confederación de Sindicatos Bancarios y del Sector Financiero junto a la Fundación SOL.</li>
              <li>Aunque orientada al sector financiero, su matriz puede aplicarse en diferentes áreas de la economía.</li>
              <li>Busca corregir la desigualdad que se ha acrecentado en Chile.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Recursos por Sector (Fundación SOL)</h3>
            <p className="text-text-secondary mb-2">La Fundación SOL ofrece cartillas informativas específicas para diferentes sectores:</p>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Alimentos y agricultura</li>
              <li>Energía, electricidad y gas</li>
              <li>Banca y sector financiero</li>
              <li>Minería</li>
            </ul>
            <p className="mt-2 text-text-secondary">Puedes encontrar más información en el sitio de <a href="https://fundacionsol.cl/negociacion-ramal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fundación SOL</a>.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">Relevancia para Sindicatos</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li>Proporciona un modelo alternativo que puede fortalecer el poder de negociación.</li>
              <li>Ofrece información especializada por sector económico.</li>
              <li>Presenta estudios y análisis sobre las ventajas de negociar a nivel de rama.</li>
              <li>Incluye casos de éxito y experiencias internacionales como referencia.</li>
            </ul>
          </div>
        </section>

        <section>
          <p className="text-sm text-gray-500">
            Fuentes: Código del Trabajo, <a href="https://fundacionsol.cl/negociacion-ramal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fundación SOL</a>.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
