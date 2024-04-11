import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
export default function ModalContent({ closeModal, modalIsOpen }) {

    return (
        <>
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className='ReactModal__Content'>
                <h2>Корзина</h2>
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </ReactModal>
        </>
    )
}