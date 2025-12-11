import { useContext } from "react"
import DoctorContext from "../context/DoctorProvaider"

const useDoctor = () => {
    return useContext(DoctorContext)
}

export default useDoctor