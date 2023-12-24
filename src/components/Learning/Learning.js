import Card from "./Card";
import NewCard from "./NewCard";
import {useEffect, useState} from "react";

function Learning (){
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([])
    const urlAPI = process.env.REACT_APP_BACKEND_API + '/cards';

    const cardsRow = 4; // Count of cards in each row
    const renderRows = (renderData) => {
        let rows = [];
        for (let i = 0; i < renderData.length; i += cardsRow) {
            rows.push(renderData.slice(i, i + cardsRow));
        }
        return rows;

    }

    const dataFetch = async (urlAPI) => {
        try {
            const response = await fetch(urlAPI);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        dataFetch(urlAPI);
    }, []);

    useEffect(() => {
        setRows(renderRows(data));
    }, [data]);


    const [modalState, setModalState] = useState(false)
    const openModal = () => setModalState(true);




    return (
        <div className="flexWrapper">
            <div className="container">
                <div className="row mb-10 gy-10">
                    <div className="col">
                       <div style={{marginTop: "20px", marginBottom: "30px"}}>
                           <button type="button" onClick={openModal} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createCard">Add card</button>
                       </div>
                    </div>
                </div>
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
            <NewCard state={modalState} setState={setModalState} setData={setData} />
        </div>

    );
}


export default Learning;