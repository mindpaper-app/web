import { useNavigate } from "react-router-dom"

const NoteElement = ({ title, content, id }) => {
    const navigate = useNavigate()
    return (
        <div className="note_element" onClick={() => navigate(`/app/${id}`)}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default NoteElement