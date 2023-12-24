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

function Card ({props}){

    return (
        <div className="card h-100">
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
            </div>

            <div className="card-footer">
                <p className="card-text">
                    {getTime(props.date)}
                </p>
            </div>
        </div>
    );
}


export default Card;