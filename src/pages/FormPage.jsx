import React, { useEffect, useState } from 'react'

const FormPage = () => {

    const [item, setItems] = useState([]);

    const [form, setForm] = useState({
        email: "",
        full_name: "",
        message: "",
        service_id: 1 
    });

    const onChangeSelect = (e) => {
        setForm((prevState) => {
            prevState = { ...prevState };

            prevState[e.target.name] = parseInt(e.target.value);

            return prevState;
        });
    }

    const onChangeForm = (e) => {
        setForm((prevState) => {
            prevState = { ...prevState };

            prevState[e.target.name] = e.target.value;

            return prevState;
        });
    }

    const send = (e) => {
        e.preventDefault();

        fetch("https://exam.avavion.ru/api/requests/create", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((r) => r.json()).then((data) => console.log(data));
    };

    useEffect(() => {
        fetch("https://exam.avavion.ru/api/services")
        .then((r) => r.json())
        .then((data) => setItems(data.data))
    }, []);

  return (
    <>
        <form className="product-form">
        <div className="form-group">
            <label htmlFor="email">Почта</label>
            <input onChange={(e) => onChangeForm(e)} type="email" id="email" name="email" required></input>
        </div>
        <div className="form-group">
            <label htmlFor="full_name">Имя и Фамилия</label>
            <input onChange={(e) => onChangeForm(e)} type="text" id="name" name="full_name" required></input>
        </div>
        <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea onChange={(e) => onChangeForm(e)} id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="category">Категория</label>
            <select id="service_id" name="service_id" required onChange={onChangeSelect}>
                {item.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
        <button onClick={(e) => send(e)} type="submit">Добавить продукт</button>
        </form>
    </>
  )
}

export default FormPage