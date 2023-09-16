"use client"
import React from 'react'
import PackageItem from '@/components/PackageItem'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Button } from '@mui/material';
import ProductItem from '@/components/ProductItem';


const packages = [
    {
        name: '20 USDT',
        value: 0
    },
    {
        name: '80 USDT',
        value: 0
    },
    {
        name: '200 USDT',
        value: 0
    },
    {
        name: '800 USDT',
        value: 0
    },
    {
        name: '2500 USDT',
        value: 0
    },
    {
        name: '10000 USDT',
        value: 0
    },
]

const Subscribe = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
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
        <>
            <div className="flex items-center justify-between">
                <p className="text-[22px] text-white">Mua</p>
                <i className="fa-regular fa-note-sticky fa-lg"></i>
            </div>
            <div className="bg-[url(https://h5.edgexads.co/assets/subscribe.2433b4a1.png)] bg-no-repeat bg-center bg-cover px-[20px] pt-[18px] pb-[22px] rounded-[20px] mt-[25px]">
                <p className="text-[18px] mb-[12px]">Gói cá nhân: </p>
                <div className="flex gap-[10px] flex-wrap">
                    {
                        packages.map((item, index) => (
                            <PackageItem key={index} Package={item} />
                        ))
                    }
                </div>
                <div className='mt-[15px]'>
                    <BorderLinearProgress variant="determinate" value={-1} />
                </div>
                <p className="text-[22px] mt-[15px]">
                    {0}/8.0000
                    <span className="text-[17px] ml-[10px]">EDX</span>
                </p>
                <div className="flex mt-[25px] items-center justify-between">
                    <div className='flex mobile:flex-col tablet:flex-row laptop-small:flex-col'>
                        <div className="mr-[20px]">
                            <p className="text-[16px]">Tổng cộng(USDT)</p>
                            <p className="text-[21px]">0</p>
                        </div>
                        <div>
                            <p className="text-[16px]">Tổng cộng(EDX)</p>
                            <p className="text-[21px]">0</p>
                        </div>
                    </div>
                    <Button className="capitalize h-[42px] w-[120px] bg-bg-button hover:bg-bg-button" variant="contained" startIcon={<i className="fa-solid fa-download fa-2xs" />}>
                        Nạp
                    </Button>
                </div>
            </div>
            <div className="mt-[20px]">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    )
}

export default Subscribe