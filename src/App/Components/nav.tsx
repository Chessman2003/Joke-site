import React from "react";
import { Link } from "react-router-dom";

const Nav =() => {
    return(
        <div>
            <Link to="/">Все анекдоты</Link>
            <Link to="/Shtirlits.tsx">Анекдоты про Штирлица</Link>
            <Link to="/Sherlock.tsx">Анекдоты про Шерлока Холмса</Link>
            <Link to="/Developer.tsx">Анекдоты про программистов</Link>
        </div>
    )
};

export default Nav;