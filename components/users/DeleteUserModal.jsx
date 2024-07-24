import React, { useState } from 'react'
import ModalLayout from '../ModalLayout'
import { PiTrash } from 'react-icons/pi'
import Loading from '@/utils/Loading'
import { deleteUrl } from '@/utils/Apis'
import { ToastAction } from '../ui/toast'
import { toast } from '../ui/use-toast'

export default function DeleteUserModal({ onclose, singleData, refetch }) {
    const [loading, setLoading] = useState(false)

    
    const HandleDeleting = async () => {
        try {
            setLoading(true)
            const response = await deleteUrl(`${singleData?.id}`)
            if (response.status === 200) {
                toast({
                    title: `User deleted successfully`,
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
            console.log(error)
        }finally {
            setLoading(false)
        }
    }
    return (
        <ModalLayout onclose={onclose} showclose={false}>
            <div className="">
            <div className="text-[1.5rem] font-semibold text-center">Delete this user</div>
            <div className="text-grayed text-center w-[22.3rem] mx-auto">This user and all associated data will be permanently removed. Do you wish to continue</div>
            </div>
            <div className="flex items-center gap-3 justify-center mt-[2.06rem]">
                <button 
                onClick={onclose}
                className='flex h-[2.25rem] py-2 px-3 text-sm truncate w-[7.75rem] items-center gap-2 text-slate-700 border border-slate-700 bg-slate-200/40 rounded-md justify-center'>Cancel Action</button>
                <button 
                onClick={HandleDeleting}
                className='flex h-[2.25rem] py-2 px-3 text-sm truncate w-[7.75rem] items-center gap-2 text-red-700 border border-red-700 bg-red-200/40 rounded-md justify-center'> <PiTrash /> Yes, Delete</button>
            </div>
           {loading && <Loading />}
        </ModalLayout>
    )
}
