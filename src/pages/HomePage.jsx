import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {

    const [items, setItems] = useState([]);

    const [initialItems, setInitialItems] = useState([]);

    const sortByPriceIncrease = () => { 
        // Копируем массив товаров 
        const sortedItems = [...items]; 
        // Сортируем услугами по возрастанию цены 
        sortedItems.sort((a, b) => a.price > b.price ? 1 : -1);  
        // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами 
        setItems(sortedItems); 
    };

    const sortByPriceDecrease = () => { 
        // Копируем массив товаров 
        const sortedItems = [...items]; 
        // Сортируем услугами по возрастанию цены 
        sortedItems.sort((a, b) => a.price < b.price ? 1 : -1);  
        // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами 
        setItems(sortedItems); 
      };

      const resetSort = () => { 
        setItems(initialItems); 
      }

    useEffect(() => { 
        fetch("https://exam.avavion.ru/api/services") 
          .then((response) => response.json()) // преобразование в json формат для чтения 
          .then((data) => { 
            setItems(data.data) // запись в основной массив 
            setInitialItems(data.data) // запись в копию массива для сброса 
          }); // запись в массив всех предметов 
      }, []);

    const [query, setQuery] = useState("");

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  
    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }


    return (
        <>

            <form className="search-form">
                <input value={query} onChange={(e) => onChangeQuery(e)} id="search" type="text" name="search" placeholder="Поиск..."></input>
                <button type="submit">Найти</button>
            </form>

            <button onClick={sortByPriceIncrease}>По возрастанию цены</button> 
            <button onClick={sortByPriceDecrease}>По убыванию цены</button> 
            <button onClick={resetSort}>Сбросить сортировку</button>

            <div className="items">

                {
                    filteredItems.length ? filteredItems.map((item) => {
                        return (
                            <>
                                <div className="item">

                                <img src={item.image_url} alt="" />
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                <NavLink className="button_Link" to={`/article/${item.id}`}>Перейти к продукту</NavLink>

                                </div>
                            </>
                        )
                    })

                    :

                    <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                }

            </div>
        </>
    )
}

export default HomePage;