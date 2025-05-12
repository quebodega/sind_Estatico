import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Bienvenido a Sindicatos Chile</h1>
        <p className="text-lg text-text-secondary mb-4">
          Tu guía completa para la formación y gestión de sindicatos en Chile.
          Aquí encontrarás información actualizada, recursos prácticos y apoyo para fortalecer el movimiento sindical.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-primary mb-3">¿Quieres formar un sindicato?</h2>
            <p className="text-text-secondary mb-4">Te guiamos paso a paso en el proceso de constitución, desde los requisitos legales hasta el depósito de estatutos.</p>
            <a href="/guia-formacion" className="text-primary hover:underline font-medium">Comienza aquí &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-primary mb-3">Explora nuestros recursos</h2>
            <p className="text-text-secondary mb-4">Accede a modelos de documentos, guías sobre negociación colectiva, información sobre tus derechos y mucho más.</p>
            <a href="/recursos" className="text-primary hover:underline font-medium">Ver recursos &rarr;</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
