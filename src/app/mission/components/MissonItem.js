import { Button } from '@mui/material'
import React from 'react'

function MissonItem({ gift }) {
    return (
        <div className="p-[18px] mb-[15px] flex items-center justify-between bg-colorCard rounded-[6px]">
            <div className="mr-[10px]">
                <p>{gift.title}</p>
                <p>{gift.value >= 0 ? `+ ${gift.value.toFixed(2)}` : gift.value.toFixed(2)} EDX</p>
            </div>
            <Button variant='contained' className="bg-primary hover:bg-primary min-w-[95px]">Nhận</Button>
        </div>
    )
}

export default MissonItem