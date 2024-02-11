import HeroBanner from "@/components/hero-banner";
import HeroBlog from "@/components/hero-blogs";
import Spinner from "@/components/ui/spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="container mx-auto">
        <div className="my-10">
          <h1 className="text-5xl font-bold font-sans mb-10">Featured Blogs</h1>
          <div className="">
            <Suspense fallback={<Spinner className={"h-20 w-20"} />}>
              <HeroBlog />
            </Suspense>
          </div>
        </div>
      </main>
      ś
    </>
  );
}
