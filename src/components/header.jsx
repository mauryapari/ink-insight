import Link from 'next/link';
import { ThemeToggle } from './theme-toggler';
import UserDropdown from './userDropdown';
import { auth } from '../../auth';

const Header = async () => {
    const session = await auth();
    return (
        <header className='bg-accent shadow-sm shadow-primary'>
            <div className='container mx-auto'>
                <div className='flex justify-between py-5 items-center'>
                    <div className='text-2xl'>InkInsight</div>
                    <div className='flex gap-4 items-center'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        {session && session.user?.id ?
                            <>
                                <ThemeToggle />
                                <UserDropdown {...session} />
                            </>
                            :
                            <Link href="/auth/login">Login</Link>
                        }
                        {!session && <ThemeToggle />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;