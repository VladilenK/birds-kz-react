import { useState } from "react"
// import { MouseEvent } from "react"

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // const handleClick = (e: MouseEvent) => console.log("Clicked:",e);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const [name, setName] = useState("");


    return (
        <>
            <h2>{heading}</h2>
            {items.length === 0 && <p>nothing found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    (<li 
                        key={item} 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        onMouseOver={() => {setSelectedIndex(index)}}
                        onClick={() => {onSelectItem(item)}}
                    >
                        {item}
                    </li>)

                )}
            </ul>
        </>
    )
}

export default ListGroup;