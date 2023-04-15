import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'

const Header = () => {

  return (
    <>
    <div className="header">

        <NavLink className="logo" to={`/`}>
            <img src={logo} alt="" />
        </NavLink>

        <NavLink className="button_Link" to={`/form`}>Добавить новый продукт</NavLink>

    </div>
    </>
  )
}

export default Header