import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'

const Header = () => {

  return (
    <>

        <NavLink className="logo" to={`/`}>
            <img src={logo} alt="" />
        </NavLink>

        <NavLink className="button_Link" to={`/form`}>Заказать букет</NavLink>

    </>
  )
}

export default Header