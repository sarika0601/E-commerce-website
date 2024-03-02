import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/ImagesFolder/dropdown_icon.png'
import Item from '../Components/Items/Items'
const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
       <img src={props.banner} alt=""/>
       <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36
        </p>
        <div className="shopcategory-sort">
          Sort by < img src={dropdown_icon} alt=""/> 

        </div>
        <div className="shopcategory-products">
          {all_product.map((items,i)=>{
            if(props.category===items.category){
              return<Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>

            }
            else{
              return null;
            }
          }
          )}

        </div>
       </div>
    </div>
  )
}

export default ShopCategory