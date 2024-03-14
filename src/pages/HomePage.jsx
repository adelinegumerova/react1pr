import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {

    const [items, setItems] = useState([]);

    const [initialItems, setInitialItems] = useState([]);

    const sortByPriceIncrease = () => { 
        // Копируем массив товаров 
        const sortedItems = [...items]; 
        // Сортируем услугами по возрастанию цены 
        sortedItems.sort((a, b) => a.title > b.title ? 1 : -1);  
        // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами 
        setItems(sortedItems); 
    };

    const sortByPriceDecrease = () => { 
        // Копируем массив товаров 
        const sortedItems = [...items]; 
        // Сортируем услугами по возрастанию цены 
        sortedItems.sort((a, b) => a.title < b.title ? 1 : -1);  
        // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами 
        setItems(sortedItems); 
      };

      const resetSort = () => { 
        setItems(initialItems); 
      }

    useEffect(() => { 
        fetch("https://646bafb47d3c1cae4ce42749.mockapi.io/Projects") 
          .then((response) => response.json()) // преобразование в json формат для чтения 
          .then((data) => { 
            setItems(data) // запись в основной массив 
            setInitialItems(data) // запись в копию массива для сброса 
          }); // запись в массив всех предметов 
      }, []);

    const [query, setQuery] = useState("");

    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
  
    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }


    return (
        <>

        <div className="items_Header">

            <div className="sort">

                <button className="button_Sort" onClick={sortByPriceIncrease}>По возрастанию цены</button> 
                <button className="button_Sort" onClick={sortByPriceDecrease}>По убыванию цены</button> 
                <button className="button_Sort" onClick={resetSort}>Сбросить сортировку</button>

            </div>

            <form className="search-form">
                <input value={query} onChange={(e) => onChangeQuery(e)} id="search" type="text" name="search" placeholder="Поиск..."></input>
                <button type="submit">Найти</button>
            </form>

        </div>

            <div className="items">

                {
                    filteredItems.length ? filteredItems.map((item) => {
                        return (
                            <>
                                <div className="item">

                                <img src={item.preview} alt="" />
                                <h2>{item.title}</h2>
                                <p>{item.skills} ℗</p>
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