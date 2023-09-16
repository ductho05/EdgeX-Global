import React from 'react'

const MenuItem = ({ menu }) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer flex-grow-[4] flex-shrink-[4] basis-1/5 bg-[#1d252a] rounded-[8px] min-h-[120px] p-[8px]">
            <img src={menu?.image} alt='menu_icon' className="min-h-[25px]" />
            <p className="text-[15px] text-center">{menu?.name}</p>
        </div>
    )
}

export default MenuItem