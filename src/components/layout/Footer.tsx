export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white p-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Sindicatos Chile. Todos los derechos reservados.</p>
        <p className="mt-1">Un sitio informativo para trabajadores y sindicatos en Chile.</p>
        {/* Podríamos agregar enlaces a políticas de privacidad o términos si es necesario */}
      </div>
    </footer>
  );
}
