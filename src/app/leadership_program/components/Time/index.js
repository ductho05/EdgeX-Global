import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

function Time({ d, h, m, s }) {

    const [date, setDate] = useState(d)
    const [hour, setHour] = useState(h)
    const [minute, setMinute] = useState(m)
    const [second, setSecond] = useState(s)

    useEffect(() => {
        setTimeout(() => {
            setSecond(prev => {
                return prev === 0 ? 59 : prev - 1
            })
        }, 1000)

        if (second === 59) {
            setMinute(prev => {
                return prev === 0 ? 59 : prev - 1
            })
        }

        return () => clearTimeout()
    }, [second])

    useEffect(() => {

        if (minute === 59) {
            setHour(prev => {
                return prev === 0 ? 23 : prev - 1
            })
        }

    }, [minute])

    useEffect(() => {

        if (hour === 23) {
            setDate(prev => {
                return prev === 0 ? 0 : prev - 1
            })
        }

    }, [hour])

    return (
        <div className="w-full p-[40px] rounded-[10px] bg-colorCard flex items-center flex-col justify-center">
            <p className="text-[20px] mb-[25px]">Sắp ra mắt</p>
            <div className="flex items-center">
                <Button variant='contained' className="bg-primary hover:bg-primary w-max h-[44px] normal-case">
                    {date} Ngày
                </Button>
                <p className="mx-[10px]">:</p>
                <Button variant='contained' className="bg-primary hover:bg-primary w-max h-[44px] normal-case">
                    {hour} Giờ
                </Button>
                <p className="mx-[10px]">:</p>
                <Button variant='contained' className="bg-primary hover:bg-primary w-max h-[44px] normal-case">
                    {minute} Phút
                </Button>
                <p className="mx-[10px]">:</p>
                <Button variant='contained' className="bg-primary hover:bg-primary w-max h-[44px] normal-case">
                    {second} Giây
                </Button>
            </div>
        </div>
    )
}

export default Time