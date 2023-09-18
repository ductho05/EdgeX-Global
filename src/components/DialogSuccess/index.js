import React from 'react'
import { motion } from 'framer-motion'

function Dialogsuccess({ notice }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: -100, transform: 'translate(-50%, -50%)' }}
            animate={{ opacity: 1, y: 0, transform: 'translateX(-50%)' }}
            exit={{ opacity: 0, y: -100, transform: 'translate(-50%, -50%)' }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-[200px] h-[200px] rounded-[4px] bg-[rgba(000,000,000,.8)] fixed top-[50%] left-[50%] flex flex-col items-center justify-center"
        >
            <i className="fa-solid fa-circle-check text-[52px] text-[#67c23a]"></i>
            <p className="text-[16px] mt-[20px]">{notice}</p>
        </motion.div>
    )
}

export default Dialogsuccess