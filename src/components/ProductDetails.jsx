import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";


const ProductDetails = () => {

    const params = useParams();
    const { user } = useContext(AuthContext);
    const [details, setDetails] = useState([]);
    const [checked, setChecked] = useState("");
    // const [cart, setCart] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/brands/${params.brand}/${params._id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
        setChecked("checked");
    }, [])

    const {
        _id,
        name,
        image,
        brand,
        type,
        price,
        description,
        rating
    } = details;

    const ref = useRef();
    useEffect(() => {
        if(rating) ref.current.childNodes[rating-1].setAttribute(checked, true);
    }, [rating, checked])

    const handleAddToCart = () => {
        
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let cart;
            if(Object.keys(data).length == 0 || !data) {
                cart = {user: user.email, items: [_id]};
            }
            else {
                if(data.items.includes(_id)) {
                    toast("Item already added to cart!");
                    return;
                }
                else{
                    data.items.push(_id);
                    cart = data;
                }
            }

            fetch("http://localhost:5000/addtocart", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0 || data.upsertedCount > 0) toast("Item added to cart!")
            });
        });
        
        console.log(user.email);
    }

    return (
        <div className="px-5 lg:px-32 my-16 flex flex-col items-center text-center">
            <img src={image} alt="" />
            <h2 className="text-2xl font-bold mt-6">{name}</h2>
            <h2 className="text-xl my-4"><span className="font-semibold">Brand:</span> {brand}</h2>
            <h3 className="text-xl mb-4"><span className="font-semibold">Type:</span> {type}</h3>
            <h3 className="text-xl mb-4"><span className="font-semibold">Price:</span> {price}$</h3>
            <h3 className="text-xl mb-2 font-semibold">Rating:</h3>
            <div className="rating mb-4" ref={ref}>
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Description:</h2>
            <p>
                {description}
            </p>

            <button className="btn bg-cyan-500 mt-5" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default ProductDetails;