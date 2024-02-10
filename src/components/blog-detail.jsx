import { renderMarkdownToHTML } from '@/lib/utils';
import Image from 'next/image';
import { auth } from '../../auth';
import Link from 'next/link';
import { FaDumpster, FaPen } from 'react-icons/fa';

export default async function BlogDetail(props) {

    const session = await auth();
    const { title, description, slug, userEmail, views } = props.blog;

    return (
        <div className="max-w-[1000px] py-14">
            <p className='text-3xl font-serif font-bold'>{title}</p>
            <p className='text-md mt-8'>By <span className='font-bold'>{userEmail}</span></p>

            {session?.user.email === userEmail &&
                <div className='flex justify-end'>
                    <Link href={`/create/${slug}`} className="px-4 py-2 bg-primary text-secondary rounded-md mx-4"> <FaPen /></Link>
                    <Link href={`/create/${slug}`} className="px-4 py-2 bg-destructive rounded-md"><FaDumpster /></Link>
                </div>
            }
            <Image src={`https://picsum.photos/800/400`}
                alt={`${slug} Image`}
                width={800}
                height={400}
                className='mx-auto my-16'
            />

            <div className="my-5" dangerouslySetInnerHTML={renderMarkdownToHTML(description)}></div>
        </div>
    )
}