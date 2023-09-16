import Context from "./context"
import { useContext } from "react"

const useStore = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}

export default useStore