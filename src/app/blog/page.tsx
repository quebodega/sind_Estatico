import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';

// Placeholder data for blog posts
const posts = [
  {
    slug: "bienvenida-al-blog",
    title: "¡Bienvenido al Blog de Sindicatos Chile!",
    excerpt: "Inauguramos este espacio para compartir noticias, análisis y consejos prácticos para el mundo sindical en Chile.",
    date: "2025-05-05",
  },
  {
    slug: "importancia-libertad-sindical",
    title: "La Importancia de la Libertad Sindical",
    excerpt: "Un pilar fundamental de los derechos laborales. Exploramos qué significa y por qué es crucial defenderla.",
    date: "2025-05-04",
  },
  {
    slug: "negociacion-colectiva-claves",
    title: "Claves para una Negociación Colectiva Exitosa",
    excerpt: "Consejos prácticos para preparar y llevar a cabo un proceso de negociación colectiva efectivo.",
    date: "2025-05-03",
  },
];

const PostCard = ({ post }: { post: typeof posts[0] }) => (
  <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
    <Link href={`/blog/${post.slug}`}>
      <h2 className="text-xl font-semibold text-primary hover:underline mb-1">{post.title}</h2>
    </Link>
    <p className="text-sm text-gray-500 mb-2">Publicado el {post.date}</p>
    <p className="text-text-secondary">{post.excerpt}</p>
    <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium mt-2 inline-block">
      Leer más &rarr;
    </Link>
  </div>
);

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Blog Sindical</h1>
        <p className="text-text-secondary mb-8">Artículos sobre actualidad, casos de éxito y consejos prácticos para sindicatos y trabajadores en Chile.</p>

        <div className="max-w-3xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination could be added here later */}

      </main>
      <Footer />
    </div>
  );
}
