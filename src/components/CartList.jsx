import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllItems, removeItem } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

export default function CartList() {

    const cartSelector=useSelector((state)=>state.cart.items);
    const[cartItems,setCartItems]=useState(cartSelector);
    
    const dispatch=useDispatch();

    const navigate=useNavigate();


    useEffect(()=>{
        setCartItems(cartSelector)
    },[cartSelector])

    const manageQuantity=(id,q)=>{

        let quantity=parseInt(q)>1?parseInt(q):1;
        const carttempItems=cartSelector.map((item)=>{
            return item.id==id ? {...item,quantity}:item
        })
        console.log(carttempItems)

        setCartItems(carttempItems);

    }

    const handlePlaceholder=()=>{
        localStorage.clear();
        dispatch(clearAllItems());
        navigate("/");
    }


  return (
    <>
    <div className='cart-container'>
        <div className='cart-header'>
            <h2>Your Cart Items</h2>
            <span>{cartItems.length} items</span>
        </div>
        {
            cartItems.length >0 ?  cartItems.map((item)=>(
                <div key={item.id} className='cart-item'>
                    <div className='item-info'>
                        <img src={item.thumbnail}></img>
                        <div className='item-details'>
                            <h4>{item.title}</h4>
                            <p>{item.brand}</p>
                        </div>
                        </div>
                        <div className='item-actions' style={{display:'flex'}}>
                            <input onChange={(e)=>manageQuantity(item.id,e.target.value)} value={item.quantity?item.quantity:1} style={{margin:'10px'}} type="number" placeholder="enter quantity"/>
                            <span className='price'>${(item.quantity?item.quantity* item.price:item.price).toFixed(2)}</span>
                            <button className='btn' onClick={()=>dispatch(removeItem(item))}>Remove</button>
                        </div>

                    

                </div>
            )) :null  
        }

        <div className='cart-footer'>
            Total : ${(cartItems.reduce((sum,item)=> item.quantity? sum+item.price* item.quantity: sum+item.price,0)).toFixed(2)}
        </div>
    </div>

    <button className='btn' onClick={handlePlaceholder}>Place Order</button>

    </>
  )
}
