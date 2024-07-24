import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Imaged from '@/components/Imaged'

export default function CustomTable({ tableHeaders, tableData, EditData, DeleteData }) {

    return (
        <div>

            <Table className="rounded-br-md rounded-bl-md">
                <TableHeader>
                    <TableRow>
                        {tableHeaders.map((item, index) => (
                            <TableHead key={index}>
                                <div className={`flex items-center gap-2 font-semibold`}>
                                    {index === 0 && <div className="h-5 w-5 border border-[#D0D5DD] rounded-sm"></div>} {item}{index !== tableHeaders.length - 1 && <Imaged src="/images/icon.svg" width={10} height={100} className="" />}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white">
                    {tableData.map((item, index) => (
                        <TableRow key={index}
                        >
                            <TableCell>
                                <div className="font-medium flex items-center gap-2">
                                    <div className="h-5 w-5 border border-[#D0D5DD] rounded-sm"></div> <div>{item.fullname}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium flex items-center gap-2">
                                    <div>{item.email}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium flex items-center gap-2">
                                    <div className={`${item.className}`}>{item.role}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <div 
                                    onClick={() => EditData(item)}
                                    className="font-semibold px-3 cursor-pointer flex items-center gap-2 text-customblue"> Edit</div>
                                    <div 
                                    onClick={() => DeleteData(item)}
                                    className="font-semibold px-3 cursor-pointer flex items-center gap-2 text-grayed"> Remove</div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {tableData.length < 1 && <div className="text-center text-grayed text-sm mt-10">No records found</div> }

        </div>
    )
}
