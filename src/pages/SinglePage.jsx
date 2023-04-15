import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SinglePage = () => {

    const params = useParams();

    const [item, setItems] = useState({});

    useEffect(() => {
        fetch(`https://exam.avavion.ru/api/services/${params.id}`)
        .then((r) => r.json())
        .then((data) => setItems(data.data))
    }, []);

  return (
    <>
        <div className="item_Single">

            <img src={item.image_url} alt="" />
            <h2>{item.name}</h2>
            <p>{item.content}</p>
            <NavLink className="button_Link" to={`/`}>На главную</NavLink>

        </div>
    </>
  )
}

export default SinglePage