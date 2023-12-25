import {useEffect, useState} from "react";

function getTime(time){
  const dateObj = new Date(time)
  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"]
  return 'Created/Modified: ' + date + ' ' + months[month] + ' ' + hours + ':' + minutes + ':' + seconds;
}

function Card ({props, setDeleteDialogue, setEditDialogue, setCurrentData, cardID}){
    const [update, setUpdate] = useState(false);
    const openDeleteModal = () => setDeleteDialogue(cardID);

    const openEditModal = () => {
        setCurrentData(props);
        setEditDialogue(cardID);
    }


    const handleMouseEnter = () => {
        setUpdate(true);
    }

    const handleMouseOut = () => {
        setUpdate(false);
    }

    return (
        <div className="card h-100" onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}>
            {
                props.status === "Learned" ?
                    <div className="card-header" style={{color: "white", background: "green"}}>{props.status}</div>:
                props.status === 'Want to Learn' ?
                    <div className="card-header" style={{color: "white", background: "red"}}>{props.status}</div>:
                    <div className="card-header" style={{color: "white", background: "orange"}}>{props.status}</div>

            }

            <div className="card-body">
                    <p className="card-text">{props.content}</p>
                    {props.img !== "none" ? <img className="card-img" src={props.img} alt="Card image cap" /> : <div />}
                    <p className="card-text">Answer: {props.answer}</p>
            </div>

            <div className="card-footer">
                <p className="card-text">
                    {getTime(props.date)}
                </p>
                {
                    update === true ?
                       <div>
                        <button className="btn btn-warning" onClick={openEditModal}>Edit</button>
                        <button className="btn btn-danger" onClick={openDeleteModal} style={{marginLeft: "10px"}}>Delete</button>
                       </div> : null
                }
            </div>
        </div>
    );
}


export default Card;