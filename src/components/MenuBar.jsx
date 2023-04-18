import { MdFormatBold, MdFormatItalic, MdFormatStrikethrough } from 'react-icons/md'
import { RiCodeLine, RiH1, RiH2, RiCodeBoxLine, RiDoubleQuotesL, RiSeparator } from 'react-icons/ri'
import { GoListOrdered, GoListUnordered } from 'react-icons/go'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const MenuBar = ({ editor }) => {
    if (!editor) return null

    const getFocus = () => editor.chain().focus()
    const isActive = (type, options) => {
        return editor.isActive(type, options ?? {}) ? 'active' : ''
    }

    const menus = [
        [
            { icon: MdFormatBold, onClick: () => getFocus().toggleBold().run(), isActive: isActive('bold') },
            { icon: MdFormatItalic, onClick: () => getFocus().toggleItalic().run(), isActive: isActive('italic') },
            { icon: MdFormatStrikethrough, onClick: () => getFocus().toggleStrike().run(), isActive: isActive('strikethrough') },
            { icon: RiCodeLine, onClick: () => getFocus().toggleCode().run(), isActive: isActive('code') },
        ],
        [
            { icon: RiH1, onClick: () => getFocus().toggleHeading({ level: 1 }).run(), isActive: isActive('heading', { level: 1 }) },
            { icon: RiH2, onClick: () => getFocus().toggleHeading({ level: 2 }).run(), isActive: isActive('heading', { level: 2 }) },
            { icon: GoListOrdered, onClick: () => getFocus().toggleBulletList().run(), isActive: isActive('bulletList') },
            { icon: GoListUnordered, onClick: () => getFocus().toggleOrderedList().run(), isActive: isActive('orderedList') },
            { icon: RiCodeBoxLine, onClick: () => getFocus().toggleCodeBlock().run(), isActive: isActive('codeBlock') },
        ],
        [
            { icon: RiDoubleQuotesL, onClick: () => getFocus().toggleBlockquote().run(), isActive: isActive('blockquote') },
            { icon: RiSeparator, onClick: () => getFocus().setHorizontalRule().run() },
            { icon: HiOutlineInformationCircle, onClick: () => setInfoModal(true) },
        ],
    ]

    return (
        <div className='menubar'>
            {menus.map((menu, index) => {
                return (
                    <div key={index} className='group_item'>
                        {menu.map((item, i) => {
                            return (
                                <button key={i} className={`menu_item ${item.isActive}`} onClick={item.onClick}>
                                    <item.icon />
                                </button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default MenuBar