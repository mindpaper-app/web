import { useParams } from 'react-router-dom'
import NotesList from '../components/NotesList'
import NoteSection from '../components/NoteSection'

import '../styles/NoteEditor.scss'

const NoteEditor = () => {
  const { id } = useParams()

  return (
    <div className='note_editor'>
        <NotesList />
        <NoteSection id={id} />
    </div>
  )
}

export default NoteEditor