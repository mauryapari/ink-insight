import Link from 'next/link';

export default function NotFound() {
    return(
        <div className='flex flex-col gap-4 justify-center items-center h-full my-40'>
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className='text-4xl'>Page Not Found</h2>
            <Link href="/" className='underline underline-offset-4 mt-8'>Return Home</Link>
        </div>
    )
}