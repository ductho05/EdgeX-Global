import React from 'react'
import MissonItem from './MissonItem'

const gifts = [
    {
        title: 'Mời 10 thành viên',
        value: 1
    },
    {
        title: '1 thành viên tầng đầu tiên bên dưới mua gói dịch vụ 20U',
        value: 10
    },
    {
        title: '1 thành viên tầng đầu tiên bên dưới mua gói dịch vụ 80U',
        value: 40
    },
    {
        title: '1 thành viên tầng đầu tiên bên dưới mua gói dịch vụ 200U',
        value: 100
    },
]

function GiftEveryWeek() {
    return (
        <div>
            {
                gifts.map((g, index) => (
                    <MissonItem key={index} gift={g} />
                ))
            }
        </div>
    )
}

export default GiftEveryWeek