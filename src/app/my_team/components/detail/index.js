import React from 'react'

const details = [
    {
        label: 'Đăng kí',
        value: '0.00 USDT'
    },
    {
        label: 'Số thành viên trong nhóm',
        value: '0'
    },
    {
        label: 'Tổng số thành viên VIP trong nhóm',
        value: '0'
    },
    {
        label: 'Tổng thu nhập nhóm hằng ngày',
        value: '0'
    }
]

function Detail() {
    return (
        <div className="flex gap-1 flex-wrap p-[20px] rounded-[10px] bg-colorCard">
            {
                details.map((detail, index) => (
                    <div key={index} className="flex-shrink-[4] flex-grow-[4] basis-1/3">
                        <p className="text-[16px]">{detail.label}</p>
                        <p className="text-[17px]">{detail.value}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Detail