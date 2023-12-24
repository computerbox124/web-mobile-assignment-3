import Card from "./Card";
import {useEffect, useState} from "react";

function Learning (){
    const [data, setData] = useState([]);
    const urlAPI = process.env.REACT_APP_BACKEND_API;

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch(urlAPI + '/cards');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        dataFetch();
    }, [urlAPI]);


    // Splitting cards to the rows
    const cardsRow = 4; // Count of cards in each row
    const rows = [];
    for (let i = 0; i < data.length; i += cardsRow) {
        rows.push(data.slice(i, i + cardsRow));
    }

    return (
        <div className="flexWrapper">
            <div className="container">

                {rows.map((row, indexRow) => (
                    <div key={indexRow} className="row mb-4 gy-2">
                        {row.map(card => (
                            <div key={card.id} className="col">
                             <Card props={{...card}} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Learning;