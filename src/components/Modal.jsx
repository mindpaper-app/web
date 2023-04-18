import { RxCross2 } from 'react-icons/rx'
import '../styles/Modal.scss'

const Modal = ({ title, children, opened, setOpened }) => {

    const escFunction = (event) => {
        if (event.keyCode === 27) {
            setOpened(false)
        }
    }
    document.addEventListener("keydown", escFunction, false)

    return opened && (
        <div className='modal_container'>
            <div className='modal'>
                <div className="modal_header">
                    <h1>{title}</h1>
                    <RxCross2 onClick={() => setOpened(false)} />
                </div>
                <div className="modal_body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal