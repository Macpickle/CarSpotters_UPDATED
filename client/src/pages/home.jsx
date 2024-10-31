import { useState, useEffect } from 'react';
import axios from "axios";

import {
    Card
} from 'react-bootstrap';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/posts').then((response) => {
            setPosts(response.data);
            setLoading(false);
        }).catch((error) => {});
    }, []);

    return (
        <div id = "post-container">
            <div className="container-fluid">
                <div className="row">
                    {loading ? (
                        <div className = "loader-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className = "container-fluid mt-3">
                            <div className = "row justify-content-evenly">
                                {posts.map((post, index) => (
                                    <button className="col-md-5 m-1" key={index}>
                                        <Card data-bs-theme="dark" className = "">
                                            <Card.Img src={"https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                                            <Card.Body className = "p-0">
                                                <div className = "p-2">
                                                    <Card.Title>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <img src={""} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                                            <p>{post.username}</p>
                                                        </div>
                                                    </Card.Title>
                                                    <Card.Text className = "d-flex justify-content-start">
                                                        {post.caption}
                                                    </Card.Text>
                                                </div>
                                                <Card.Footer>
                                                    <div className="row align-middle">
                                                        <div className="col card-button p-0">
                                                            <input type="checkbox" id={`like-${index}`} />
                                                            <label htmlFor={`like-${index}`} className="col card-button p-1">
                                                                <p className="m-0 unselectable"><i className="fas fa-heart"></i> {post.likes}</p>
                                                            </label>
                                                        </div>
                                                        <div className="col card-button p-0">
                                                            <input type="checkbox" id={`comment-${index}`} />
                                                            <label htmlFor={`comment-${index}`} className="col card-button p-1">
                                                                <p className="m-0 unselectable"><i className="fas fa-comment"></i> 0</p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;