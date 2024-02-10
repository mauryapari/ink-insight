import BlogDetail from "@/components/blog-detail";
import { getBlogBySlug } from "../../../../actions/blogs";

export default async function BlogDetailPage({params: {id}}) {
  const blog = await getBlogBySlug(id);
  return (
    <div>
      <BlogDetail blog={blog} />
    </div>
  );
}
