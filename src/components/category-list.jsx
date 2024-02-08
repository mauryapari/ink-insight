import Link from "next/link";
import { getCategories } from "../../actions/category";


export default async function CategoryList() {
  const data = await getCategories();
  const colors = ["bg-orange-600", "bg-yellow-500", "bg-lime-700", "bg-teal-600", "bg-indigo-400","bg-purple-600"]
  return (
    <div className="my-10">
      <ul className="mx-5">
        {data.map((item, index) => (
          <li className={`px-4 py-2 ${colors[index]} my-4 rounded-md`}key={item.id}>
            <Link href={`category/${item.slug}`} className="block">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}