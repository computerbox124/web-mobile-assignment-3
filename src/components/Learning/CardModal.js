import {useRef} from "react";

function CardModal({state, setState, currentData, setCurrentData, setData}){
    const closeState = () => {
        setState(0);
        setCurrentData(null);
    }

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const answerRef = useRef(null);
    const imgURLRef = useRef(null);
    const statusRef = useRef(null);

    const saveForm = () => {
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const answer = answerRef.current.value;
        const imgURL = imgURLRef.current.value;
        const status = statusRef.current.value;
        const date = new Date().getTime();

        const sendData = {
            'title': title,
            'content': content,
            'answer': answer,
            'img': imgURL,
            'status': status,
            'date': date
        }

        const urlAPI = process.env.REACT_APP_BACKEND_API + '/cards';
        const cardUrlAPI = urlAPI + '/' + state;
        let finalAPI;
        if(state === -1)finalAPI = urlAPI;
        else finalAPI = cardUrlAPI;
        const postRequest = async () => {
            try {
                let method;
                if(state === -1)method = 'POST';
                else method = 'PUT';
                const options = {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sendData)
                };
                const response = await fetch(finalAPI, options);
                const result = await response.json();
                const response1 = await fetch(urlAPI);
                const result1 = await response1.json();
                setData(result1);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        postRequest()
            .then(closeState);
    }

    if(state)return (
       <div className="modal fade show" id="createCard" style={{display: "block"}}>
           <div className="modal-dialog">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">{state === -1 ? 'Add new card' : 'Edit card' } </h5>
                   <button type="button"  onClick={closeState} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <div className="form">
                         <label htmlFor="title">Title:</label>
                         <input ref={titleRef} type="text" className="form-control" id="title"
                                defaultValue={currentData !== null ? currentData.title : ''} />
                     </div>

                     <div className="form">
                         <label htmlFor="content">Content:</label>
                         <textarea ref={contentRef}  className="form-control" id="content"
                                   defaultValue={currentData !== null ? currentData.content : ''}
                         ></textarea>
                     </div>

                     <div className="form">
                         <label htmlFor="image">Image URL:</label>
                         <input ref={imgURLRef} type="text" className="form-control" id="image"
                                defaultValue={currentData !== null ? currentData.img : ''} />
                     </div>

                     <div className="form">
                         <label htmlFor="answer">Answer:</label>
                         <textarea ref={answerRef} className="form-control" id="answer"
                                   defaultValue={currentData !== null ? currentData.answer : ''}
                         ></textarea>
                     </div>

                     <div className="form">
                         <label htmlFor="status">Status</label>
                         <select ref={statusRef} className="form-control" id="statuses"
                                 defaultValue={currentData !== null ? currentData.status : ''}
                         >
                             <option>Noted</option>
                             <option>Want to Learn</option>
                             <option>Learned</option>
                         </select>
                     </div>


                 </div>

                 <div className="modal-footer">
                   <button type="button" onClick={closeState} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   <button type="button" onClick={saveForm} className="btn btn-primary">Save changes</button>
                 </div>
               </div>
           </div>
       </div>
   )
}

export default CardModal;