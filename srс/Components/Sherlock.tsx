import React from "react";
import Item from "../../item/item";

const SherlockJoke = ({
    ganre: string
}:Props) => {
    const [loading, setLoading] =  useState(true)
    const [listJokes, setListJokes] = useState([
    ]);

    useEffect(()=> {
        => request .... => data

        fetch().the

        setListJokes(data)
        setLoading(false)
    }, [])


    if (loading) {
        return (<Loader />);
    }

    return(
        <div>
            {listJokes.map(j => {
                return <PostJoke title={j.title} text={j.text} />
            })}
        </div>
    )
};

export default SherlockJoke;