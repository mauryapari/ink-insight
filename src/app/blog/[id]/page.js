import BlogDetail from "@/components/blog-detail";
import { getBlogBySlug, getLatestPublishedBlogs } from "../../../../actions/blogs";

export default async function BlogDetailPage({params: {id}}) {
  const blog = await getBlogBySlug(id);
  return (
    <div>
      <BlogDetail blog={blog} />
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await getLatestPublishedBlogs();
  const data =  blogs?.slice(0,5);

  return data?.map(item => ({
    id: item.slug
  }))
}

export async function generateMetadata({params: {id}}) {
  const blog = await getBlogBySlug(id);

  return {
    title: blog?.title,
    creator: blog?.userEmail
  }
}