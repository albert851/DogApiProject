
import { Link, Outlet } from "react-router-dom";
import React, { FC, useState, useEffect } from 'react'
import Search from "./Search";

interface MainProps{
    breeds: any;
    setInputValue: any;
}

const Main: FC <MainProps> = ({ breeds, setInputValue }) => {
    
    return (
        <div className="main">
            <nav>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" >Home</Link>
                    </li>
                </ul>
                <Search setInputValue={setInputValue} />
                <h2 id="bredds">{breeds}</h2>
            </nav>
            <Outlet />

        </div>
    );
}

export default Main;