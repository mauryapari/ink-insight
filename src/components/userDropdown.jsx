
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
import { FaPen, FaUser } from 'react-icons/fa';
import Spinner from './ui/spinner';

export default function UserDropdown({ user }) {
    return (
        <div className='ml-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex items-center cursor-pointer'>
                        <Avatar className="mr-4">
                            <AvatarImage src={user?.image} />
                            <AvatarFallback className='my-2 block'><Spinner className={'h-4 w-4'} /></AvatarFallback>
                        </Avatar>
                        {user?.name}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-48'>
                    <DropdownMenuGroup>
                        <Link href="/settings">
                            <DropdownMenuItem className='cursor-pointer'>
                                <FaUser className='mr-2 h-4 w-4' />
                                Profile
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/create">
                            <DropdownMenuItem className="cursor-pointer">
                                <FaPen className='mr-2 h-4 w-4' />
                                Create
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}