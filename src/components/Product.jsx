import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../redux/slice';
import { fetchProducts } from '../redux/productSlice';

export default function Product() {

    const dispatch=useDispatch();

    useEffect(()=>{
       dispatch(fetchProducts());
    },[])

    const productSelector=useSelector(state=>state.products.items);
    console.log(productSelector)

       const cartSelector=useSelector((state)=>state.cart.items);
        console.log(cartSelector);

  return (
    <div>
       
<section className="products">
  <h2>Our Products</h2>
  <div className="product-grid">
{productSelector.length && productSelector.map((product)=>(
      
      <div className="product-card"  key={product.id}>
        <img src={product.images[0]} alt="Product"/>
        <div className='content'>
        <h3>{product.title}</h3>
        <div>{product.brand}</div>
        <div>{product.rating}</div>
        <p className="price">${product.price}</p>
        </div>
        { cartSelector && cartSelector.find(obj=>obj.id===product.id) ?
        <button  className='btn remove-btn' onClick={()=>dispatch(removeItem(product))}>Remove from Cart</button> :
        <button  className='btn' onClick={()=>dispatch(addItem(product))}>Add to Cart</button>
       }
        
        {/* <button className='btn remove-btn' onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button> */}
      </div>
   
))

}
</div>

</section>


    </div>
  )
}
