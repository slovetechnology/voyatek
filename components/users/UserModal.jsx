"use client"
import React, { useState } from 'react'
import ModalLayout from '../ModalLayout'
import Imaged from '../Imaged'
import Forminput from '@/utils/Forminput'
import { zodResolver } from "@hookform/resolvers/zod"
import CustomButton from '@/utils/CustomButton'
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
} from "@/components/ui/form"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { postUrl, updateUrl } from '@/utils/Apis'
import Loading from '@/utils/Loading'
import { SelectOptions } from '@/utils/Constants'



const FormSchema = z.object({
    email: z.string().email(),
    fullname: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    role: z.string(),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})

export default function UserModal({ onclose, singleData, refetch }) {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: singleData?.email || "",
            fullname: singleData?.fullname || "",
            role: singleData?.role || "",
            password: singleData?.password || "",
        },
    })
    const [loading, setLoading] = useState(false)


    async function onSubmit(data) {
        try {
            setLoading(true)
            const response = !singleData?.id ? await postUrl(data) : await updateUrl(`${singleData.id}`, data)
            if (response.status === 200) {
                toast({
                    title: `${data.fullname} added successfully`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Close</ToastAction>
                    ),
                })
                onclose()
                refetch()
            } else {
                toast({
                    title: `${data.message}`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Close</ToastAction>
                    ),
                })
            }
        } catch (error) {
            console.log(`${error}`)
        }finally {
            setLoading(false)
        }
    }
    return (
        <ModalLayout onclose={onclose}>
            <div className="flex flex-col items-center gap-2">
                <Imaged src="/images/user.svg" width={60} height={100} />
                <div className="text-lg font-semibold capitalize">{singleData?.id ? `Update ${singleData?.fullname} account` : 'New User'}</div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-[2rem]'>
                    <Forminput value={singleData?.email} form={form} label="Email Address" placeholder="New User's Email address" formtype="text" name="email" />
                    <Forminput value={singleData?.fullname} form={form} name="fullname" label="Full Name" placeholder="New User's Full Name" formtype="text" />
                    <Forminput value={singleData?.role} form={form} name="role" label="Role" formtype="select" placeholder={'Select Role'} options={SelectOptions} />
                    <Forminput value={singleData?.password} form={form} name="password" label="Create Password" placeholder="Create a Password for New User" formtype="password" type="password" />
                    <div className="mt-[1.5rem]">
                        <CustomButton type="submit" label={`${singleData?.id ? `Update User` : 'Add User'}`} className={'w-full bg-customblue hover:bg-custombluev py-6'} />
                    </div>
                </form>
            </Form>
            {loading && <Loading />}
        </ModalLayout>
    )
}


