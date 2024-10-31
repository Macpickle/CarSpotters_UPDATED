import {
    Card
} from 'react-bootstrap';

function Create() {
    return (
        <div className = "container-fluid ">
        <div class = "row h-100">
            <div className="col-6">
                    <Card data-bs-theme="dark" className = "w-100">
                        <Card.Img className = "h-75" src={"https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1726844014042-blob&w=1920&q=100"}/>
                        <Card.Body className = "p-0">
                            <div className = "p-2">
                                <Card.Title className = "h-50">
                                    <div className = "d-flex align-items-center">
                                        <img src={"https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                        <p className = "mb-0">Macpickle</p>
                                    </div>
                                </Card.Title>
                                <Card.Text className = "d-flex justify-content-start">
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
                <Card data-bs-theme="dark" className = "w-100 h-100 d-flex justify-content-center">
                    <div className = "container-fluid">
                        <input type="text" className="form-control" placeholder="Enter a caption..." />
                        <input type="file" className="form-control" />
                        <button className="btn btn-primary">Post</button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    );
}

export default Create;