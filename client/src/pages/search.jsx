import { useState, useEffect } from 'react';
import axios from "axios";

function Search() {
    //const [searches, setSearches] = useState([]);
    const [loading, setLoading] = useState(false);

    const searches = [
        {"item": "Pagani"},
        {"item": "Ferrari"},
        {"item": "Lamborghini"},
        {"item": "Porsche"},
        {"item": "Bugatti"},
        {"item": "Koenigsegg"},
        {"item": "McLaren"},
        {"item": "Aston Martin"},
    ]

    useEffect(() => {
        //axios.get('/api/searches').then((response) => {
        //    setSearches(response.data);
        //    setLoading(false);
        //}).catch((error) => {});
    }, [])

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
            <div className="container d-flex w-75 h-75 justify-content-center align-items-center">
                <div className="vstack gap-3 d-flex justify-content-center align-items-center">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for cars..." data-mdb-input-init/>
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                    <h2 className="text-dark">Top Searches Today</h2>
                    <div className="d-flex justify-content-center flex-wrap gap-1">
                        {loading ? (
                            <></>
                        ) : (
                            console.log(searches),
                            searches.map((search, index) => (
                                <button className="btn btn-secondary" key={index}>
                                    {search.item}
                                </button>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;