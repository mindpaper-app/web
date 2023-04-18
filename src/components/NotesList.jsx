import { CiStickyNote } from 'react-icons/ci'
import NoteElement from './NoteElement'
import { AiOutlinePlus } from 'react-icons/ai'

import '../styles/NotesList.scss'

const NotesList = () => {
    return (
        <div className='notes_list'>
            <header>
                <div>
                    <CiStickyNote />
                    <h1>mindpaper</h1>
                </div>
                <div>
                    <AiOutlinePlus className='new_note' />
                </div>
            </header>
            <div className="notes">
                <NoteElement title="Testowa notatka" content="eoooooooo" id="1" />
            </div>
        </div>
    )
}

export default NotesList