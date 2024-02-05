import BasicEditor from "@/components/editor";
import { db } from "@/lib/db";

async function getAllCategories() {
  const res = await db.category.findMany({});
  // fetch("http://localhost:3000/api/category");
  // console.log(res);
  // const data = await res.json();
  return res;
}

export default async function create() {
  const categories = await getAllCategories();
  console.log('categories', categories);

  return (
    <main className="container mx-auto my-28">
      {/* <p className="text-5xl font-bold">Blog Creation Page</p> */}
      <p className="text-md my-4 italic"><strong className="text-red-600 mr-4">Note:</strong> Select text to see Toolbar options.</p>
      <div>
        <BasicEditor categories={categories}/>
      </div>
    </main>
  );
}
