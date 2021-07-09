import {useState} from "react";
import "../modal/headerModal.css";
import {useDispatch} from 'react-redux';
import {CHANGE_TEXT} from "../todos/todoLIst/constants";

const Modal = ({showModal, setShowModal, text: currentText, id}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleClick = () => {
        dispatch({ type: CHANGE_TEXT, payload: {id, text} })
    }

    const handleChange = (e) => setText(e.target.value);

    return (
        <>
            {showModal ?
                <div className="openModal">
               <div className="modal-title">
                   <h4>{currentText}</h4>
                   <button onClick={() => setShowModal(false)}>x</button>
               </div>
                    <div className="modal-input">
                         <input
                             placeholder="edit text"
                             value={text}
                             onChange={handleChange}
                         />

                         <button onClick={handleClick}>edit</button>
                     </div>
                </div> : null}
        </>
    )
}

export default Modal;

