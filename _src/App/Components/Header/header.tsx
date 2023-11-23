import React, {useState} from "react";

type Props = {
        title: string
};

const Header = ({title}: Props) => {
    return(
        <div id="header">
            <h1>
                {title}
            </h1>
        </div>
    )
};


export default Header