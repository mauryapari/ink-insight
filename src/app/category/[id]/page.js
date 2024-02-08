import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage(props) {
    const {params: {id}} = props;
    const categoryBlogs = await getBlogsByCategory(id);
    return (
        <ul>
            {categoryBlogs?.map(item => (
                <li key={item.id}>
                    <div className="lg:flex items-center my-10">
                        <div className="mb-4 mr-10 lg:mb-0 basis-5/12">
                            <Image src="https://picsum.photos/800/700" alt={`${item.slug}-image`}
                                width={800}
                                height={700} />
                        </div>
                        <div className="content self-center basis-7/12">
                            <div className="post-meta mb-3">
                                <Link href={`/category/${item.catSlug}`} className="font-bold mr-4">{item.catSlug.toUpperCase()}</Link>
                                <span className="date">{ISOtoReadableDate(item.createdAt)}</span>
                            </div>
                            <h2 className="font-bold text-2xl underline underline-offset-4">
                                <Link href={`/blog/${item.slug}`}>
                                    {item.title}
                                </Link>
                            </h2>
                            <div className="my-5" dangerouslySetInnerHTML={renderMarkdownToHTML(item.description.substring(0,160))}></div>
                            <p className="underline underline-offset-4"><Link href={`/blog/${item.slug}`}>Read More</Link></p>
                            <div className="flex items-center my-5">
                                <div className="pr-4">
                                    <Image src="https://picsum.photos/30/30" alt={`${item.userEmail}-image`}
                                        width={30}
                                        height={30}
                                        className="rounded-full" />
                                </div>
                                <div className="text">
                                    By <strong>{item.userEmail}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}