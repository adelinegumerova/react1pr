import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SinglePage = () => {

    const params = useParams();

    const [item, setItems] = useState({});

    useEffect(() => {
        fetch(`https://646bafb47d3c1cae4ce42749.mockapi.io/Projects/${params.id}`)
        .then((r) => r.json())
        .then((data) => setItems(data))
    }, []);

  return (
    <>

        <NavLink className="button_Home" to={`/`}>На главную</NavLink>

        <div className="item_Single">

        <img src={item.photo} alt="" />

          <div className="item_Body">

            <h2>{item.title}</h2>
            <p>{item.skills}</p>
            <button className='button_Add'>Купить</button>

          </div>

        </div>
    </>
  )
}

export default SinglePage