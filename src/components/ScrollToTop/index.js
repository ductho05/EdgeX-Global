import { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ScrollToTop = () => {

    const [displayButtonTop, setDisplayButtonTop] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {

        if (window.scrollY + window.innerHeight >= 700) {
            setDisplayButtonTop(true)
        } else {
            setDisplayButtonTop(false)
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={handleScrollToTop} className={displayButtonTop ? 'fixed cursor-pointer flex items-center justify-center bottom-14 right-5 w-10 h-10 shadow-primary rounded-full bg-primary animate-fade-in' : 'hidden'}>
            <ArrowDropUpIcon fontSize='large' className="text-black" />
        </div>
    )
}

export default ScrollToTop