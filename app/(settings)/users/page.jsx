"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { VscListFilter } from 'react-icons/vsc'
import { RxPlusCircled } from 'react-icons/rx'
import CustomTable from '@/utils/CustomTable'
import UserModal from '@/components/users/UserModal'
import CustomButton from '@/utils/CustomButton'
import { getUrl } from '@/utils/Apis'
import { UserRoles } from '@/utils/Constants'
import DeleteUserModal from '@/components/users/DeleteUserModal'
import SearchUsers from '@/components/SearchUsers'

const TableHeader = [
  "Name",
  "Email Address",
  "Role",
  "Actions",
]


const TABS = [
  { title: 'users' },
  { title: 'roles' },
]

const TableData = [
  { name: 'Taiwo', className: '' },
  { name: 'Taiwo@gmail.com', className: '' },
  { name: 'Administration', className: 'text-blue-600 bg-blue-200/40 py-[2px] px-3 rounded-lg text-sm' },
]

export default function UsersRolesPage() {
  const [active, setActive] = useState(0)
  const [dels, setDels] = useState({
    status: false,
    data: {}
  })
  const [views, setViews] = useState({
    status: false,
    data: {}
  })
  const [reserved, setReserved] = useState([])
  const [data, setData] = useState({
    data: [],
    isLoading: true,
  })

  const FetchData = useCallback(async () => {
    try {
          const response = await getUrl()
          const result = []
          response.data.map((item) => {
            const values = {
              ...item,
              className: UserRoles(item.role)
            }
            return result.push(values)
          })
          setReserved(result)
          setData({ data: result, isLoading: false })
    } catch (error) {
      setData({ ...data, isLoading: false })
      console.log(error)
    }
  }, [])

  useEffect(() => {FetchData()}, [FetchData])

  const EditData = item => {
    setViews({ status: true, data: item })
  }

  const DeleteData = item => {
    setDels({ status: true, data: item })
  }

  const FilteredData = (data) => {
    setData({ ...data, data: data })
  }


  const CustomBody = ({children}) => {
    return (<>
      <div className="text-[1.5rem] font-semibold mt-[1.5rem]">Users & Roles</div>
      <div className="text-grayed font-light">Manage all users in your business</div>
      <div className="">
        <div className="flex items-center mt-[1.5rem]">
          {TABS.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`w-[4.25rem] cursor-pointer px-4 py-2 flex items-center justify-center capitalize h-[2.5rem] transition-all border-b-2 ${active === index ? 'text-customblue border-customblue' : 'text-grayed border-transparent'}`}>{item.title}</div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="h-[4.25rem] bg-white p-4 grid items-center grid-cols-5 rounded-tr-md rounded-tl-md">
          <div className="flex items-center gap-2 col-span-3 lg:col-span-2">
            <SearchUsers 
            data={data.data}
            reserved={reserved}
            FilteredData={FilteredData}
            />
            <div className="border h-[2.5rem] px-4 font-medium rounded-lg flex items-center gap-2">
              <VscListFilter />
              <div className="">Filter</div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-3">
            <div className="w-fit ml-auto">
              <CustomButton
                onClick={() => setViews({ status: true, data: {} })}
                Icon={RxPlusCircled}
                label={'New User'}
                className={'w-full bg-customblue hover:bg-customblue gap-1'}
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
    )
  }

  if (data.isLoading) return (
    <CustomBody>Loading...</CustomBody>
  )
if(!data) return (
  <CustomBody>Something went wrong</CustomBody>
)
  return (
    <>
    <CustomBody>
      <CustomTable
        tableHeaders={TableHeader}
        tableData={data.data || []}
        EditData={EditData}
        DeleteData={DeleteData}
      />
      </CustomBody>

      {views.status && <UserModal
        singleData={views.data}
        refetch={() => FetchData()}
        onclose={() => setViews({ ...views, status: false })}
      />}
      {dels.status && <DeleteUserModal
        singleData={dels.data}
        refetch={() => FetchData()}
        onclose={() => setDels({ ...dels, status: false })}
      />}
    </>
  )
}
