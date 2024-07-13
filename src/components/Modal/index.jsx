import './style.css';

export default function Modal({isOpen, setModalOpen, children}) {
  if (isOpen) {
    return (
    <div className="modal" onClick={e => {
        if (e.target.className === "modal1")
          setModalOpen("Modal was closed">
      <div className='dv-modal'>
        <div className='letra-modalX' onClick={setModalOpen}>X</div>
        <div>{children}</div>
      </div> 
    </div>
    )
  }

  return null
}

