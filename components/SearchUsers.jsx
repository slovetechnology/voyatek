import React, { useState } from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi'

export default function SearchUsers({ data, FilteredData, reserved }) {
    const [search, setSearch] = useState('')
    const handleInputChange = e => {
        const value = e.target.value
        if (value.length > 0) {
            const result = data.filter(ele => ele.fullname.toLowerCase().includes(value.toLowerCase()) || ele.email.toLowerCase().includes(value.toLowerCase()) || ele.password.toLowerCase().includes(value.toLowerCase()) || ele.role.toLowerCase().includes(value.toLowerCase()))


            if (result.length > 0) {
                FilteredData(result)
            } else {
                FilteredData([])
            }
        } else {
            FilteredData(reserved)
        }
    }
    return (
        <div className="border h-[2.5rem] px-4 w-full text-grayed rounded-lg flex items-center gap-2">
            <PiMagnifyingGlassBold />
            <input
                onChange={e => setSearch(e.target.value)}
                onKeyUp={handleInputChange}
                value={search}
                type="text" placeholder='Search here...' className="bg-transparent w-full h-full outline-none border-none font-extralight placeholder:text-zinc-400" />
        </div>
    )
}
