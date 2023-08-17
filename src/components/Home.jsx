import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";

const img1 =  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNrVXc5WufqiO57v_DohW5O5aOtsKzltMNA&usqp=CAU"
const Home = () => {

    const productList = [
        {
            name: "Mac Book",
            price: 2000,
            imgSrc: img1,
            id: "sadjkhasjdhakjd",
        },
        {
            name: "Black Shoes",
            price: 490,
            imgSrc: img2,
            id: "sdasfkjdafalkds",
        }
    ]

    const dispatch = useDispatch()

    const addCartHandler = (options) => {
        console.log(options)
        dispatch({type: "addToCart", payload:options})
        dispatch({type: "calculatePrice"})
        toast.success("Added to Cart")
    }

    return (
        <div className="home">
            {
                productList.map((product)=>(
                    <ProductCard
                        key={product.id}
                        imgSrc={product.imgSrc}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                        handler={addCartHandler}
                    />
                ))
            }
        </div>
    )
}

const ProductCard = ({ name, id, price, handler, imgSrc}) => (
    <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>$ {price}</h4>
        <button onClick={()=> handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>
    </div>
)

export default Home
