import Link from 'next/link';
import { ThemeToggle } from './theme-toggler';
import UserDropdown from './userDropdown';
import { auth } from '../../auth';
import SignOut from './sign-out';
import Hamburger from './hamburger';

const Header = async () => {
    const session = await auth();
    return (
        <header className='bg-accent shadow-sm shadow-primary'>
            <div className='container mx-auto'>
                <div className='flex justify-between py-5 items-center'>
                    <div className='text-2xl'><Link href="/">InkInsight</Link></div>
                    <div className='max-lg:hidden flex gap-4 items-center'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blogs</Link>
                        {session && session.user?.id ?
                            <>
                                <ThemeToggle />
                                <UserDropdown {...session} />
                                <SignOut />
                            </>
                            :
                            <Link href="/auth/login">Login</Link>
                        }
                        {!session && <ThemeToggle />}
                    </div>
                    <div className='lg:hidden flex justify-between'>
                        <ThemeToggle/>
                        <Hamburger />
                        <SignOut/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;