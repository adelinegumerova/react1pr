import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Root = () => {

    useEffect(() => {
        document.title = "SAFQ";
      }, []);

    return (
        <>
        <div className='container'>

            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <h2>Подвал</h2>
            </footer>

        </div>
        </>
    )
}

export default Root;