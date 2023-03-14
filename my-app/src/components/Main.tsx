
import { Link, Outlet } from "react-router-dom";
import React, { FC, useState, useEffect } from 'react'
import Search from "./Search";

interface MainProps{
    inputValue: any;
    setInputValue: any;
}

const Main: FC <MainProps> = ({ inputValue, setInputValue }) => {
    
    return (
        <div className="main">
            <nav>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" >Home</Link>
                    </li>
                </ul>
                <Search inputValue={inputValue} setInputValue={setInputValue} />
            </nav>
            
            <Outlet />

        </div>
    );
}

export default Main;