import { useNavigate } from "react-router-dom"

const NoteElement = ({ title, content, id }) => {
    const navigate = useNavigate()

    content.length > 70 ? content = content.slice(0, 70) + '...' : content = content
    content = content.replace(/&nbsp;/g, ' ')
    content = content.replace(/<\/h1>/g, ' ')
    content = content.replace(/<\/h2>/g, ' ')
    content = content.replace(/<\/p>/g, ' ')
    const regex = /(<([^>]+)>)/ig;
    content = content.replace(regex, '')

    return (
        <div className="note_element" onClick={() => navigate(`/app/${id}`)}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default NoteElement