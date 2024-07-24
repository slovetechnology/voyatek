"use client"
import { ActiveSidenav, SideLinks } from '@/utils/Constants'
import Link from 'next/link'
import React, { useState } from 'react'
import {PiSignOut} from 'react-icons/pi'

export default function Sidebar() {
    const [active, setActive] = useState(5)
    return (
        <div>
            <div className="px-4 h-[1.06rem] mt-4">Settings</div>
            <div className="h-[28rem] mt-[1.18rem] px-2">
                <div className="h-[24.56rem] border-b mt-[1.18rem] gap-3 flex flex-col">
                    {SideLinks.map((item, index) => (
                        <Link
                            onClick={() => setActive(index)}
                            href={`${item?.url}`} key={index} className={`flex items-center transition-all px-4 py-3 h-[2.75rem] w-[13rem] gap-3 capitalize rounded-md ${ActiveSidenav(index === active ? true : false)}`}>
                            <item.icon className='text-[1.1rem]' />
                            <div className="text-sm">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-2 mt-[6rem]">
                <Link href={`/account`} className='flex items-center py-3 px-4 text-[#475569] border border-[#475569] rounded-md gap-1 h-[2.75rem] w-[12rem]'>
                    <PiSignOut className='text-lg' />
                    <div className='text-sm'>Back to Dashboard</div>
                </Link>
            </div>
        </div>
    )
}
