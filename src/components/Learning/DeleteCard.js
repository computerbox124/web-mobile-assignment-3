
function DeleteCard({state, setState, setData}) {
    const closeState = () => setState(0);
    const cardID = state;
    const saveForm = () => {

        const urlAPI = process.env.REACT_APP_BACKEND_API + '/cards' ;
        const urlLDeleteAPI = urlAPI + '/' + cardID;
        const deleteRequest = async () => {
            try {
                const options = {
                    method: 'DELETE',
                };
                const response = await fetch(urlLDeleteAPI, options);
                const result = await response.json();
                const response1 = await fetch(urlAPI);
                const result1 = await response1.json();
                setData(result1);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        deleteRequest()
            .then(closeState);

    }


    if(state)return (
        <div className="modal fade show" id="createCard" style={{display: "block"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete card</h5>
                        <button type="button"  onClick={closeState} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       <h5>Are you that you want delete the card ?</h5>

                    </div>

                    <div className="modal-footer">
                        <button type="button" onClick={closeState} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={saveForm} className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DeleteCard;