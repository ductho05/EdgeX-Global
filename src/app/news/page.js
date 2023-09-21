import Default from '@/components/layouts/Default'
import React from 'react'

const news = [
    "EdgeX Structure",
    "EdgeX Business Plan",
    "EdgeX Roadmap",
    "MSB License",
    "Edgex FAQ"
]

function News() {
    return (
        <Default title={'Thông tin mới nhất'}>
            {
                news.map((n, index) => (
                    <p key={index} className="cursor-pointer py-[15px] px-[20px] mt-[15px] bg-colorCard rounded-[8px]">{n}</p>
                ))
            }
        </Default>
    )
}

export default News