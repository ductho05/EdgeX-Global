"use client"
import Default from '@/components/layouts/Default'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Progress from '@/components/Progress';
import Tabs from '@/components/Tabs';
import { useSearchParams } from 'next/navigation';
import {
    AdvanceCondition,
    AdvanceWelfare,
    DiamondCondition,
    DiamondWelfare,
    EliteCondition,
    EliteWelfare,
    ExpertCondition,
    ExpertWelfare,
    RookieCondition,
    RookieWelfare
} from './components';

const tabs = ['Điều kiện', 'Phúc lợi']
const members = [
    {
        title: 'Rookie',
        icon: '/rookie.png',
        components: [<RookieCondition />, <RookieWelfare />]
    },
    {
        title: 'Advance',
        icon: '/avance.png',
        components: [<AdvanceCondition />, <AdvanceWelfare />]
    },
    {
        title: 'Expert',
        icon: '/expert.png',
        components: [<ExpertCondition />, <ExpertWelfare />]
    },
    {
        title: 'Elite',
        icon: '/elite.png',
        components: [<EliteCondition />, <EliteWelfare />]
    },
    {
        title: 'Diamond',
        icon: '/diamon.png',
        components: [<DiamondCondition />, <DiamondWelfare />]
    }
]

function MembershipDetail() {

    const searchParams = useSearchParams()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        currentSlide: searchParams.get('initIndex')
    }

    return (
        <Default title="Hội viên">
            <Slider {...settings} className="w-full mt-[70px] pb-[50px]">
                {
                    members.map((member, index) => (
                        <div key={index} className="w-full slide">
                            <img src={member.icon} alt="member" className="w-[200px] h-[200px]" />
                            <div className="relative w-[99%]">
                                <img src="https://h5.edgexads.co/assets/rank-bg1.575a706b.png" alt="bg" className="w-full h-full" />
                                <div className="absolute left-0 top-0 flex flex-col justify-center items-center w-full h-full z-10 mt-[10px]">
                                    <p className="text-[25px] mb-[16px]">{member.title}</p>
                                    <Progress />
                                </div>
                            </div>
                            <Tabs tabs={tabs} components={member.components} />
                        </div>
                    ))
                }
            </Slider>
        </Default>
    )
}

export default MembershipDetail