import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "./Header"

export function ProjectsPage() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return(
        <>
            <h1>All Projects</h1>
            <Link to='/'>Back to Home</Link>
            <button onClick={goBack}>Home</button>
        </>
    )
}