import Card from "./Card";
import CardDialogues from "./NewCard";
import {useEffect, useState} from "react";
import DeleteCard from "./DeleteCard";


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
    }, [urlAPI]);

    useEffect(() => {
        setRows(renderRows(data));
    }, [data]);

    // Add Card Dialogue state
    const [addCardState, setAddCardState] = useState(false);
    const openAddModal = () => setAddCardState(true);

    // Delete Card Dialogue state
    const [deleteCardState, setDeleteCardState] = useState(0);

    // Edit Card Dialogue state
    const [editCardState, setEditCardState] = useState(0);



    return (
        <div className="flexWrapper">
            <div className="container">
                <div className="row mb-10 gy-10">
                    <div className="col">
                       <div style={{marginTop: "20px", marginBottom: "30px"}}>
                           <button type="button" onClick={openAddModal} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createCard">Add card</button>
                       </div>
                    </div>
                </div>
                {rows.map((row, indexRow) => (
                    <div key={indexRow} className="row mb-4 gy-2">
                        {row.map(card => (
                            <div key={card.id} className="col">
                             <Card props={{...card}} setDeleteDialogue={setDeleteCardState}
                                   setEditDialogue={setEditCardState} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <CardDialogues state={addCardState} setState={setAddCardState} setData={setData} />
            <DeleteCard state={deleteCardState} setState={setDeleteCardState} setData={setData} />
        </div>

    );
}


export default Learning;