import React, { useState } from 'react'
import Time from '../Time'

function Phase2() {

    const [isLauched, setIsLauched] = useState(false)

    return (
        <div className="py-[15px] min-h-[70vh] flex items-center">
            {
                !isLauched &&
                <Time d={1} h={1} m={1} s={3} />
            }
        </div>
    )
}

export default Phase2