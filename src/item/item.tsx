import React from "react";

type Props = {
    title: string,
    text: string
};

const Item = ({title, text}: Props) => {
    return(
        <div id="item">
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    )
};

export default Item;