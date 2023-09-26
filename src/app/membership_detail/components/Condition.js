import React from 'react'

function Condition({ content }) {
    return (
        <div className="text-[15px] mb-[15px] p-[15px] flex justify-start items-center bg-colorCard rounded-[10px]">
            {content}
        </div>
    )
}

export default Condition