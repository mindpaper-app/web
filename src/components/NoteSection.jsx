import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import MenuBar from './MenuBar'

import { getNote, updateNote } from '../api'

const NoteSection = ({ id }) => {
  const navigate = useNavigate()
  const [note, setNote] = useState({})

  const editor = useEditor({
    extensions: [
      StarterKit,
    ]
  })

  const saveNote = async () => {
    try {
      const noteData = editor.getHTML()
      const { data } = await updateNote(id, note.title, noteData)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const populateNote = async () => {
    try {
      const { data } = await getNote(id)
      if(data.body && editor) editor.commands.setContent(data.body)
      setNote(data)
    } catch (error) {
      console.log(error)
      navigate('/app')
    }
  }

  const editTitle = (e) => {
    setNote({
      ...note,
      title: e.target.value
    })
  }

  useEffect(() => {
    populateNote()
  }, [id, editor])

  return (
    <div className='note_section'>
      {note && editor ? (
        <>
          <header>
            <input className='title' type="text" value={note.title} onChange={editTitle} />
            <button className='save' onClick={saveNote}>Save</button>
          </header>
          <div className="break"></div>
          <EditorContent className='content' editor={editor} />
          {editor && <MenuBar editor={editor} />}
        </>
      ) : <p>Loading...</p>}
    </div>
  )
}

export default NoteSection