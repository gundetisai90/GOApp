import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useCart } from './contextReducer';

export default function Card(props) {
    let dispatch = useDispatch();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let data = useCart();
    const priceRef = useRef();

    const [qty, setqty] = useState(1);
    const [size, setsize] = useState("");

    let foodItem = props.fooditems;

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
          if (item.id === foodItem._id) {
            food = item;
    
            break;
          }
        }
        
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: foodItem.img })
            // console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
    
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
    
    
        // setBtnEnable(true)
    
      }
    
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setsize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "450px" }}>
                <img src={foodItem.img} className="card-img-top" style={{ "height": "200px", "objectFit": "fill" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foodItem.name}</h5>
                    <p className="card-text">{foodItem.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded' onChange={(e) => setqty(e.target.value)}>
                            {
                                Array.from
                                    (
                                        Array(6), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            )
                                        }
                                    )
                            }
                        </select>
                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setsize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className='d-inline fs-5 h-100 m-2'>
                            <span>&#8377;</span>{finalPrice}/-
                        </div>
                    </div>
                    <hr>
                    </hr>
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
