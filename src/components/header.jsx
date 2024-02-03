import Link from 'next/link';
import { ThemeToggle } from './theme-toggler';
import AuthComponent from './authComponent';

const Header = () => {
    return (
        <header className='bg-accent border-b-2 border-primary'>
            <div className='container mx-auto'>
                <div className='flex justify-between py-5 items-center'>
                    <div className='text-2xl'>InkInsight</div>
                    <div className='flex gap-4 items-center'>
                        <Link href="/">Home</Link>
                        <Link href="/About">About</Link>
                        <AuthComponent />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;