
"use client";
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { FaPen, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { signOut } from '../../auth';
import Spinner from './ui/spinner';

export default function UserDropdown({ user }) {
    return (
        <div className='ml-4'>
            <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center'>
                    <Avatar className="mr-4">
                        <AvatarImage src={user?.image} />
                        <AvatarFallback className='my-2 block'><Spinner className={'h-4 w-4'} /></AvatarFallback>
                    </Avatar>
                    {user?.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-48'>
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='flex'>
                            <FaUser className='mr-2 h-4 w-4' />
                            <Link href="/settings">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FaPen className='mr-2 h-4 w-4' />
                            <Link href="/create">Create</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <FaSignOutAlt className='mr-2 h-4 w-4' />
                            <p onClick={signOut}>Sign Out</p>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}