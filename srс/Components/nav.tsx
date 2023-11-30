import React from "react";
import { Link } from "react-router-dom";

const Nav =() => {
    return(
        <div>
            <Link to="/">Все анекдоты</Link>
            <Link to="/Shtirlits">Анекдоты про Штирлица</Link>
            <Link to="/Sherlock">Анекдоты про Шерлока Холмса</Link>
            <Link to="/Developer">Анекдоты про программистов</Link>
        </div>
    )
};

export default Nav;