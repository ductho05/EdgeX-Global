import React from 'react'
import { Button, Dialog } from '@mui/material'

function Dialogs({ open, close, children }) {

    const handleClose = () => {
        close(false)
    }

    return (
        <Dialog
            open={open}
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: 'transparent',
                    margin: '0',
                    borderRadius: '0',
                    overflow: 'hidden',
                    width: '80%'
                }
            }}
        >
            <div className="px-[20px] py-[10px] text-white bg-colorCard">
                <div className="flex justify-end">
                    <i onClick={handleClose} class="fa-solid fa-xmark cursor-pointer"></i>
                </div>
                {children}
            </div>
        </Dialog>
    )
}

export default Dialogs