import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../../auth";
import { FaDumpster, FaPen, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getBlogsByUser } from "../../../../actions/blogs";
import { ISOtoReadableDate, renderMarkdownToHTML } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default async function SettingsPage() {
  const blogData = await getBlogsByUser();

  if(!blogData?.length) {
    return <div className="container mx-auto text-2xl items-center my-10">
        No Blogs Present. <br/>

        <Link href="/create" className="text-sm underline underline-offset-4 mt-20">Create a Blog...</Link>
    </div>
  }

  return (
    <div className="container mx-auto">
      Settings Page
      <ul>
        {blogData?.map((item) => (
          <li key={item.id}>
            <div className="lg:flex items-center my-10">
              <div className="mb-4 mr-10 lg:mb-0 ">
                <Image
                  src="https://picsum.photos/300/200"
                  alt={`${item.slug}-image`}
                  width={300}
                  height={200}
                />
              </div>
              <div className="content self-center basis-7/12">
                <div className="post-meta mb-3">
                  <Link
                    href={`/category/${item.catSlug}`}
                    className="font-bold mr-4"
                  >
                    {item.catSlug.toUpperCase()}
                  </Link>
                  <span className="date">
                    {ISOtoReadableDate(item.createdAt)}
                  </span>
                  <Badge
                    variant={"outline"}
                    className={`${
                      item.published ? "bg-lime-700" : "bg-destructive"
                    } py-1 mx-4`}
                  >
                    {item.published ? "Published" : "Unpublished"}
                  </Badge>
                </div>
                <h2 className="font-bold text-2xl underline underline-offset-4">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h2>
                <div
                  className="my-5"
                  dangerouslySetInnerHTML={renderMarkdownToHTML(
                    item.description.substring(0, 160)
                  )}
                ></div>
                <p className="underline underline-offset-4">
                  <Link href={`/blog/${item.slug}`}>Read More</Link>
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  href={`/create/${item.slug}`}
                  className="px-4 py-2 bg-primary text-secondary rounded-md mx-4"
                >
                  {" "}
                  <FaPen />
                </Link>
                <Link
                  href={`/create/${item.slug}`}
                  className="px-4 py-2 bg-destructive rounded-md"
                >
                  <FaDumpster />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
