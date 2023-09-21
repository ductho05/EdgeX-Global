import React from 'react'
import MissonItem from './MissonItem'

const gifts = [
    {
        title: 'Tham gia nhóm Telegram',
        value: 1
    },

    {
        title: 'Có một thành viên hợp lệ ở tầng đầu tiên bên dưới',
        value: 10
    },

    {
        title: 'Mua gói dịch vụ 80U',
        value: 40
    }
]

function OneGift() {
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

export default OneGift