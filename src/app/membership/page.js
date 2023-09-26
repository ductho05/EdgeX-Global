import Default from '@/components/layouts/Default'
import Link from 'next/link'
import React from 'react'

const members = [
    {
        title: 'Rookie',
        icon: '/rookie.png'
    },
    {
        title: 'Advance',
        icon: '/avance.png'
    },
    {
        title: 'Expert',
        icon: '/expert.png'
    },
    {
        title: 'Elite',
        icon: '/elite.png'
    },
    {
        title: 'Diamond',
        icon: '/diamon.png'
    }
]

function Membership() {
    return (
        <Default title={"Hội viên"}>
            {
                members.map((m, index) => (
                    <Link href={`/membership_detail?initIndex=${index}`} key={index} className="p-[20px] mt-[15px] cursor-pointer bg-colorCard rounded-[10px] flex items-center justify-between">
                        <p>{m.title}</p>
                        <img src={m.icon} alt="membership Icon" className="w-[27px]" />
                    </Link>
                ))
            }
        </Default>
    )
}

export default Membership