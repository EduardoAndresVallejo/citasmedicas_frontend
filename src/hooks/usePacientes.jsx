import { useContext } from "react"
import PacientesContext from "../context/PacientesProvaider.jsx"

const usePacientes = () => {
    return useContext(PacientesContext)
}

export default usePacientes