import BasicEditor from "@/components/editor";
import { getBlogBySlug } from "../../../../../actions/blogs";
import { UserAction } from "@/components/user-action";
import { auth } from "../../../../../auth";

export default async function CreateDetailPage({ params: { id } }) {
  const blog = await getBlogBySlug(id);
  const session = await auth();

  if (!blog) {
    return (
      <div className="container mx-auto my-28">
        <p className="text-4xl">No Blog Found</p>
      </div>
    );
  }
  return (
    <main className="container mx-auto my-28">
      <p className="text-md my-4 italic">
        <strong className="text-red-600 mr-4">Note:</strong> Select text to see
        Toolbar options.
      </p>
      {session.user.email === blog?.userEmail && (
        <UserAction
          isPublished={blog.published}
          id={blog.id}
        />
      )}
      <div>
        <BasicEditor blog={blog} isEditable={true} />
      </div>
    </main>
  );
}

export async function generateMetadata({params: {id}}) {
  const blog = await getBlogBySlug(id);

  return {
    title: blog?.title,
    creator: blog?.userEmail
  }
}