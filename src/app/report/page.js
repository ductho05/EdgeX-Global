import Default from '@/components/layouts/Default'
import Link from 'next/link'
import React from 'react'

const reports = [
    {
        title: 'Báo cáo giao dịch',
        link: '/report/report_transaction'
    },
    {
        title: 'Thống kê đặt cọc',
        link: '/report_staking'
    },
    {
        title: 'Gói đã chọn',
        link: '/report/report_package'
    },
    {
        title: 'Lịch sử ICO',
        link: '/report_ico'
    },
    {
        title: 'Lịch sử rút tiền',
        link: '/report/report_withdraw'
    },
    {
        title: 'Lịch sử gửi tiền',
        link: '/report/report_deposit'
    },
    {
        title: 'Lịch sử P2P',
        link: '/report/report_p2p'
    },
    {
        title: 'Gửi tiền nhanh',
        link: '/report/report_deposit_express'
    },
    {
        title: 'Rút tiền nhanh',
        link: '/report/report_withdraw_express'
    },
    {
        title: 'Nhiệm Vụ Hàng Tuần',
        link: '/report/report_bonus'
    },
    {
        title: 'Nhiệm vụ một lần',
        link: '/report/report_bonus'
    },
    {
        title: 'Phần Thưởng Giới Thiệu',
        link: '/report/report_bonus'
    },
    {
        title: 'Phần thưởng nhóm',
        link: '/report/report_bonus'
    },
    {
        title: 'Lợi nhuận hàng ngày',
        link: '/report/report_bonus'
    },
    {
        title: 'Phần thưởng Chương trình Lãnh đạo',
        link: '/report/report_bonus'
    },
]

function Report() {
    return (
        <Default title="Báo cáo">
            {
                reports.map((r, index) => (
                    <Link href={r.link} key={index} className="flex items-center p-[15px] justify-between rounded-[10px] cursor-pointer">
                        <p>{r.title}</p>
                        <i className="fa-solid fa-angle-right text-[#77808f]"></i>
                    </Link>
                ))
            }
        </Default>
    )
}

export default Report