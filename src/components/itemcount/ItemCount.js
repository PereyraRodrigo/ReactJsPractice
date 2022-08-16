import { useState } from "react";

export const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial)
    /* console.log(counter); */
    /* const add = () => {
        setCounter(counter + 1)
    }
    const decreace = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    } */
    const add = () => {
        if (counter < props.stock) {
            setCounter(counter + 1);
        }
    }
    const decreace = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    /* const onAdd = () => {
        if (stock > 0) {
            alert(`You've added ${counter} items`)
        }
        else {
            alert('There is no stock for this product')
        }
    } */
    return (
        <>
            <div className="itemCounter__container">
                <button className="itemCounter__button" onClick={decreace}>-</button>
                <p className="itemCounter__number">{counter}</p>
                <button className="itemCounter__button" onClick={add}>+</button>
            </div>
        </>
    )
}