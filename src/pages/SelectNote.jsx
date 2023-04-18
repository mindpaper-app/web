import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

import NoteElementForSelect from '../components/NoteElementForSelect'
import Modal from '../components/Modal'

import { createNote, getAllNotes } from '../api'

import '../styles/SelectNote.scss'

const SelectNote = () => {
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [modalOpened, setModalOpened] = useState(false)
  const [newNoteTitle, setNewNoteTitle] = useState('')

  const handleCreate = async () => {
    try {
      const { data } = await createNote(newNoteTitle, "New note")
      setModalOpened(false)
      setNewNoteTitle('')
      navigate(`/app/${data._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const populateNotes = async () => {
    try {
      const { data } = await getAllNotes()
      setNotes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    populateNotes()
  }, [])


  return (
    <>
      <div className='select_note_page'>
        <h1>Select a note</h1>
        <div className="notes_grid">
          <div className="new_note" onClick={() => setModalOpened(true)}>
            <AiOutlinePlus />
          </div>
          {notes.map((note, index) => (
            <NoteElementForSelect key={index} title={note.title} content={note.body} id={note._id} />
          ))}
        </div>
      </div>
      <Modal title='New note' opened={modalOpened} setOpened={setModalOpened}>
        <div className="new_note_modal">
          <input type="text" placeholder='Title' value={newNoteTitle} onChange={(e) => setNewNoteTitle(e.target.value)} />
          <button onClick={() => handleCreate()}>Create</button>
        </div>
      </Modal>
    </>
  )
}

export default SelectNote