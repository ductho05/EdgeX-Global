import React from 'react'

function ProfileItem({ title }) {
    return (
        <div className="flex items-center justify-between py-[15px] px-[20px] bg-background-black rounded-[6px] cursor-pointer mb-[15px]">
            <p>{title}</p>
            <i class="fa-solid fa-chevron-right text-[14px]"></i>
        </div>
    )
}

export default ProfileItem