import { LinearProgress, CircularProgress } from "@mui/material"

export default function loading() {
    return (
        <div className="fixed top-0 left-0 right-0 w-full h-screen bg-black-2 flex flex-col items-end">
            <LinearProgress variant="determinate" className="w-full h-0.5" value={100} />
            <CircularProgress size='18px' className="h-1.5 w-1.5 mr-4" />
        </div>
    )
}