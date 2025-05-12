import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sindicatos Chile
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/guia-formacion" className="hover:underline">Formar Sindicato</Link></li>
          <li><Link href="/derechos" className="hover:underline">Derechos</Link></li>
          <li><Link href="/negociacion" className="hover:underline">Negociación</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          <li><Link href="/recursos" className="hover:underline">Recursos</Link></li>
          <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
        </ul>
        {/* Aquí se podría agregar el buscador más adelante */}
      </nav>
    </header>
  );
}
