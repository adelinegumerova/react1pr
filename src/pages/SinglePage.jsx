import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SinglePage = () => {

    const params = useParams();

    const [item, setItems] = useState({});

    useEffect(() => {
        fetch(`https://flowers.avavion.ru/api/products/${params.id}`)
        .then((r) => r.json())
        .then((data) => setItems(data.data))
    }, []);

  return (
    <>

        <NavLink className="button_Home" to={`/`}>На главную</NavLink>

        <div className="item_Single">

        <img src={item.preview_image} alt="" />

          <div className="item_Body">

            <h2>{item.name}</h2>
            <p>{item.text}</p>
            <p className='price'> Цена: {item.price} ℗</p>
            <button className='button_Add'>Купить</button>

          </div>

        </div>
    </>
  )
}

export default SinglePage