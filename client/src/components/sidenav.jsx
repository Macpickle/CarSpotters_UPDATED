import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

/*
import {
    Overlay,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
*/

function SidenavComponent() {
    const [username, setUsername] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        axios.get('/userinformation').then((response) => {
            const { username, photo } = response.data;
            setUsername(username);
            setPhoto(photo);
        }).catch((error) => {});
    }, []);

    return (
        <div className="d-flex overflow-scroll-inital sticky-top" style={{ height: '100vh' }}>
            <CDBSidebar className = "text-light bg-dark">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                    CarSpotters
                  </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <Link to="/" className="text-light">
                        <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                        </Link>
                        <Link to="/search" className="text-light">
                        <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
                        </Link>
                        <Link to="/browse" className="text-light">
                        <CDBSidebarMenuItem icon="car">Browse</CDBSidebarMenuItem>
                        </Link>
                        <Link to="/notifications" className="text-light">
                        <CDBSidebarMenuItem icon="bell">Notifications</CDBSidebarMenuItem>
                        </Link>
                        <Link to="/create" className="text-light">
                        <CDBSidebarMenuItem icon="plus">Create</CDBSidebarMenuItem>
                        </Link>
                        <div className = "position-absolute bottom-0 w-100">
                            <Link to="/profile">
                                <CDBSidebarMenuItem>
                                    <div className = "d-flex align-items-center">
                                        <img src={photo} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                        <p className = "mb-0" style={{ marginLeft: '0.5rem'}}>{username}</p>
                                    </div>
                                </CDBSidebarMenuItem>
                            </Link>
                        </div>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
}

export default SidenavComponent;