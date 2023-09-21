import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

function Progress({ value, totalValue }) {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 18,
        borderRadius: 100,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 100,
            backgroundColor: theme.palette.mode === 'light' ? '#25AA52' : '#25AA52',
        },
    }));

    return (
        <div className='relative mt-[15px]'>
            <BorderLinearProgress variant="determinate" value={value && totalValue ? ((value / totalValue) * 100).toFixed(0) : -1} />
            {
                value > 0 && totalValue ? <p className='absolute text-[#333] text-[13px] left-6 top-1/2 translate-y-[-54%]'>{`${value}/${totalValue} EDX`}</p>
                    : totalValue && <p className='absolute text-[#333] text-[13px] left-6 top-1/2 translate-y-[-54%]'>{`0/${totalValue} EDX`}</p>
            }
        </div>
    )
}

export default Progress