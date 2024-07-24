import { PiBellSimple, PiCloud, PiLock, PiMoney, PiTag, PiUserBold, PiUsers } from 'react-icons/pi'


export const DefaultImageTag = 'Voyatek Group'

export const ActiveNav = (status) => {
    if(status) return `text-[#0D6EFD]`
    return `text-[#94A3B8]`
}

export const ActiveSidenav = (status) => {
    if(status) return `text-[#0D6EFD] bg-[#f0f6fe]`
    return `text-[#94A3B8]`
}


export const SideLinks = [
    { title: 'account', icon: PiUserBold, url: '/account' },
    { title: 'security', icon: PiLock, url: '/security' },
    { title: 'notifications', icon: PiBellSimple, url: '/notifications'},
    { title: 'pricing', icon: PiMoney, url: '/pricing' },
    { title: 'sales', icon: PiTag, url: '/sales'},
    { title: 'users & roles', icon: PiUsers, url: '/users'},
    { title: 'backups', icon: PiCloud, url: '/backups' },
]

export const SelectOptions = [
    "Admin",
    "Sales Manager",
    "Sales Representative",
]
export const UserRoles = (role) => {
    if(role === SelectOptions[0]) return `text-blue-600 bg-blue-200/40 py-[2px] px-3 rounded-lg text-sm`
    if(role === SelectOptions[1]) return `text-green-600 bg-green-200/40 py-[2px] px-3 rounded-lg text-sm`
    if(role === SelectOptions[2]) return `text-orange-600 bg-orange-200/40 py-[2px] px-3 rounded-lg text-sm`
}
