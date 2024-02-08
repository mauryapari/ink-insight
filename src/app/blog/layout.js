import Spinner from "@/components/ui/spinner";
import { Suspense } from "react";

export default function PageLayout({ children, category }) {
  return (
    <main className="container mx-auto">
      <div className="flex items-center gap-4">
        <div className="basis-9/12">{children}</div>
        <aside className="basis-3/12">
          <Suspense fallback={<Spinner/>}>{category}</Suspense>
        </aside>
      </div>
    </main>
  );
}
