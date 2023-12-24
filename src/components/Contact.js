import {useRef} from "react";

function ContactMe(){
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const emailRef = useRef(null);

    const sendMessage = () => {
        const subject = subjectRef.current.value;
        const content = contentRef.current.value;
        const email = emailRef.current.value;


        const sendData = {
            'subject': subject,
            'content': content,
            'email': email,
        }
        console.log(sendData);

        const urlAPI = process.env.REACT_APP_BACKEND_API + '/messages';
        const postRequestMessage = async () => {
            try {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sendData)
                };
                const response = await fetch(urlAPI, options);
                const result = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        postRequestMessage();

    };


    return (
        <div className="flexWrapper">
            <div className="container">
                <h1>Contact me</h1>
                <div className="form">
                    <label htmlFor="subject">Subject:</label>
                    <input ref={subjectRef} type="text" className="form-control" id="subject" />
                </div>
                <div className="form">
                    <label htmlFor="email">Email:</label>
                    <input ref={emailRef} type="text" className="form-control" id="email" />
                </div>
                <div className="form">
                    <label htmlFor="content">Content:</label>
                    <textarea ref={contentRef} className="form-control" id="content" />
                </div>
                    <button onClick={sendMessage} type="submit" className="btn btn-primary" style={{marginTop: "20px"}}>Send</button>
          </div>
        </div>
    )
}


export default ContactMe;