"use client"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { SideLinks } from '@/utils/Constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import dynamic from 'next/dynamic'
const PageLink = dynamic(() => import('@/components/PageLink'), {ssr: false})


export default function SettingsLayout({children}) {
    const pathname = usePathname()
    const currentPath = SideLinks.find(ele => ele?.url === pathname)
    return (
        <div className='overflow-hidden'>
            <Header />
            <div className="flex items-center">
                <div className="w-[14rem] mt-4 ml-[1.5rem] h-[44rem] border hidden lg:block self-center bg-white rounded-md py-[0.25rem] gap-[0.625rem]">
                    <Sidebar />
                </div>
                <div className="h-[84.5dvh] w-full px-4 lg:px-[3.5rem] pt-10 lg:pt-0 overflow-y-auto overflow-x-hidden pb-20">
                    <PageLink
                        link={currentPath?.url}
                        title={currentPath?.title}
                    />
                    {children}
                </div>
            </div>
            <Toaster />

        </div>
    )
}
