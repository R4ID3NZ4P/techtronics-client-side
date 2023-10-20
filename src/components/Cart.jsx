import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import CartItem from "./CartItem";
import emptyImage from "/empty.png";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(Object.keys(data).length == 0 || data.items.length == 0) {
                setItems([]);
            }
            else setItems(data.items);
        })
    }, [])

    const handleRemove = (id) => {
        const updatedItems = items.filter(item => item != id);
        setItems(updatedItems);
        const updatedCart = {user: user.email, items: updatedItems};
        fetch("http://localhost:5000/addtocart", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }

    console.log(items);
    return (
        <div className="text-center my-16">
            <h1 className="text-3xl font-bold mb-5">My Cart</h1>
            <div className="px-5 lg:px-32 flex flex-col items-center">
                {items.length == 0 ? 
                    <div className="flex flex-col items-center">
                        <img src={emptyImage} alt="" className="w-1/2 mb-8"/>
                        <h2>Your cart is empty!</h2>
                    </div> : 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map(id => <CartItem key={id} id={id} remove={handleRemove}></CartItem>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;