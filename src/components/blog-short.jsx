import { renderMarkdownToHTML } from '@/lib/utils';
import Image from 'next/image';
import Link from "next/link";
import { FaDumpster, FaPen } from 'react-icons/fa';
import { auth } from '../../auth';

export default async function BlogShort(props) {

    const session = await auth();
    const { title, description, slug, userEmail, views } = props.blog;

    return (
        <div className="">
            <div className='flex justify-between'>
                <p className='text-xl font-serif font-bold'>{title}</p>
                {session?.userEmail === userEmail && 
                    <div className='flex'>
                        <Link href={`/create?${slug}`} className="px-4 py-2 bg-primary text-secondary rounded-md mx-4"> <FaPen /></Link>
                        <Link href={`/create?${slug}`} className="px-4 py-2 bg-destructive rounded-md"><FaDumpster /></Link>
                    </div>
                }
            </div>
            <p className='text-sm mt-8'>By <span className='font-bold'>{userEmail}</span></p>
            <Image src={`https://picsum.photos/200/200`}
                alt={`${slug} Image`}
                width={200}
                height={200}
                className='mx-auto my-16'
            />

            <div className="my-5" dangerouslySetInnerHTML={renderMarkdownToHTML(description.substring(0, 180))}></div>
            <p className='underline underline-offset-4'>
                <Link variant={"ghost"} href={`/blog/${slug}`}>
                    Read More
                </Link>
            </p>
        </div>
    )
}