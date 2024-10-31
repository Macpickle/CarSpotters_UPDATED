import {
    Card
} from 'react-bootstrap';

import { forceRows } from '../script/forceRows';

const updateContent = (event) => {
    const caption = document.getElementById("post-caption");
    caption.innerHTML = event.target.value;
}

const updateImage = (event) => {
    const image = document.getElementById("post-image");
    image.src = URL.createObjectURL(event.target.files[0]);
}

function Create() {
    return (
        <div className = "container-fluid h-100">
        <div className = "row h-100 d-flex" >
            <div className="col-6 d-flex justify-content-center align-items-center">
                    <Card data-bs-theme="dark" className = "w-100 h-75">
                        <Card.Img className = "h-100 mh-100 img-fluid" id = "post-image" src={"https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1726844014042-blob&w=1920&q=100"}/>
                        <Card.Body className = "p-0">
                            <div className = "p-2 d-flex flex-column">
                                <Card.Title className = "h-50">
                                    <div className = "d-flex align-items-center">
                                        <img src={"https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                        <p className = "mb-0">Macpickle</p>
                                    </div>
                                </Card.Title>
                                <Card.Text id = "post-caption">
                                    Look at this awesome car!
                                </Card.Text>
                            </div>
                            <Card.Footer>
                                <div className="row align-middle">
                                    <div className="col card-button p-0">
                                        <input type="checkbox" id={`like`} />
                                        <label htmlFor={`like`} className="col card-button p-1">
                                            <p className="m-0 unselectable"><i className="fas fa-heart"></i> 0</p>
                                        </label>
                                    </div>
                                    <div className="col card-button p-0">
                                        <input type="checkbox" id={`comment`} />
                                        <label htmlFor={`comment`} className="col card-button p-1">
                                            <p className="m-0 unselectable"><i className="fas fa-comment"></i> 0</p>
                                        </label>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
                <Card data-bs-theme="dark" className = "w-100 h-75 d-flex justify-content-center">
                    <div className = "container-fluid d-flex flex-column align-items-center gap-2">
                        <h2 className = "mb-5">Create</h2>
                        <textarea className="form-control" placeholder="Enter a caption..." rows="2" maxLength={60} style={{resize: "none", overflow: "hidden"}} onInput={forceRows} onChange={updateContent}></textarea>
                        <input type="file" className="form-control" onChange={updateImage}/>
                        <button className="btn btn-primary">Post</button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    );
}

export default Create;