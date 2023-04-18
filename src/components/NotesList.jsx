import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CiStickyNote } from 'react-icons/ci'
import { AiOutlinePlus } from 'react-icons/ai'

import NoteElement from './NoteElement'
import { getAllNotes } from '../api'

import '../styles/NotesList.scss'

const NotesList = () => {
    const navigate = useNavigate()

    const [notes, setNotes] = useState([])

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
        <div className='notes_list'>
            <header>
                <div className='click' onClick={() => navigate('/app')}>
                    <CiStickyNote />
                    <h1>mindpaper</h1>
                </div>
                <div>
                    <AiOutlinePlus className='new_note' />
                </div>
            </header>
            <div className="notes">
                {
                    notes.map((note, index) => (
                        <NoteElement key={index} title={note.title} content={note.body} id={note._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default NotesList