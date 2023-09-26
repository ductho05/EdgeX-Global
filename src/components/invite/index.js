import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

function Invite({ content1, content2, content3, button }) {

    const router = useRouter()

    const handleClick = () => {
        if (button?.action === 'dialog') {
            button.setOpen(true);
        } else if (button?.action === 'link') {
            router.push(button?.link)
        }
    }

    return (
        <div className="flex items-center justify-between mt-[15px] p-[18px] bg-[#1d252a] rounded-[8px]">
            <div>
                <p className="text-[18px] text-white mb-1">{content1}</p>
                <p className="text-[16px] text-white mb-1">{content2}</p>
                <div className="flex mt-4 laptop-small:flex-col mobile:flex-col tablet:flex-row">
                    {
                        content3?.map((content, index) => (
                            <div key={index} className="mr-[20px] laptop-small:mt-[20px] mobile:mt-[20px]">
                                <p className="text-[19px]">{content.value}</p>
                                <p>{content.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Button onClick={handleClick} variant="contained" size="small" className="min-w-[100px] h-[38px] text-white text-[15px] bg-primary hover:bg-primary normal-case">{button?.name}</Button>
        </div>
    )
}

export default Invite