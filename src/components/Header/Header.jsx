import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import ModalContent from '../Modal/ModalContent';

const Header = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
      setModalIsOpen(false);
      document.body.style.overflow = 'auto';
  };

  return (
    <>

        <NavLink className="logo" to={`/`}>
            <img src={logo} alt="" />
        </NavLink>

        <NavLink className="button_Link" onClick={openModal}>Корзина</NavLink>

        <ModalContent closeModal={closeModal} modalIsOpen={modalIsOpen}/>

    </>
  )
}

export default Header