"use client"

import React, { useState } from 'react'
import Imaged from './Imaged'
import { SlArrowDown } from 'react-icons/sl'
import { AiTwotoneSetting } from 'react-icons/ai'
import { PiBellSimple, PiMagnifyingGlassBold, PiQuestion, PiWallet } from 'react-icons/pi'
import Link from 'next/link'
import { ActiveNav } from '@/utils/Constants'

const NavLinks = [
    { title: 'Notifications', icon: PiBellSimple },
    { title: 'Wallet', icon: PiWallet },
    { title: 'Inquiries', icon: PiQuestion },
    { title: 'Settings', icon: AiTwotoneSetting },
]

export default function Header() {
    const [active, setActive] = useState(3)
    return (
        <div className='h-[5.5625rem] bg-white border-b py-[0.625rem] px-[2.25rem] w-full max-w-[90rem] gap-[1.5rem]'>
            <div className="flex items-center gap-[1.5rem] justify-center h-full px-3">
                <div className="">
                    <div className="relative w-[3.125rem] h-[3rem]">
                        <Imaged src="/images/logo.svg" fill className="w-full h-full" />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-3">
                    <div className="bg-[#f1f2f5] h-[2.5rem] px-4 w-[39.3125rem] rounded-lg flex items-center gap-2">
                        <PiMagnifyingGlassBold />
                        <input type="text" placeholder='Search here...' className="bg-transparent w-full h-full outline-none border-none font-extralight placeholder:text-zinc-500" />
                    </div>
                    <div className="">
                        <div className="lg:flex items-center gap-[0.5rem] hidden">
                            {NavLinks.map((item, index) => (
                                <Link href={``} key={index}
                                    onClick={() => setActive(index)}
                                    className={`${ActiveNav(index === active ? true : false)} transition-all w-[5.5rem] h-[2.81rem] flex flex-col items-center`}>
                                    <item.icon className='text-[1.5rem]' />
                                    <div className="text-xs">{item.title}</div>
                                </Link>
                            ))}
                            <div className="flex items-center gap-[0.5rem] text-[#647995] w-[3.875rem] h-[2.375rem]">
                                <div className="relative w-[2.375rem] h-[2.375rem]"><Imaged src={'/images/profile.svg'} fill /></div>
                                <SlArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden items-center gap-[0.5rem] text-[#647995] w-[3.875rem] h-[2.375rem]">
                        <div className="relative w-[2.375rem] h-[2.375rem]"><Imaged src={'/images/profile.svg'} fill /></div>
                        <SlArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}
