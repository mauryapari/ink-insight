import HeroBanner from "@/components/hero-banner";
import HeroBlog from "@/components/hero-blogs";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="container mx-auto">
        <div className="my-10">
          <h1 className="text-5xl font-bold font-sans mb-10">Featured Blogs</h1>
          <HeroBlog />
        </div>
      </main>
      ś
    </>
  );
}
