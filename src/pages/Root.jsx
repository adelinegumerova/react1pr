import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Root = () => {

    useEffect(() => {
        document.title = "Flowers Store";
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
                <Footer />
            </footer>

        </div>
        </>
    )
}

export default Root;