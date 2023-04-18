import { useNavigate } from "react-router-dom"

const NoteElementForSelect = ({ title, content, id }) => {
    const navigate = useNavigate()

    content.length > 80 ? content = content.slice(0, 80) + '...' : content = content
    content = content.replace(/&nbsp;/g, ' ')
    content = content.replace(/<\/h1>/g, ' ')
    content = content.replace(/<\/h2>/g, ' ')
    content = content.replace(/<\/p>/g, ' ')
    const regex = /(<([^>]+)>)/ig;
    content = content.replace(regex, '')

    return (
        <div className='note_element_fors' onClick={() => navigate(`/app/${id}`)}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default NoteElementForSelect