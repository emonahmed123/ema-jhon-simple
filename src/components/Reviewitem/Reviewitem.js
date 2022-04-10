import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon ,faTrashAlt} from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviewitem.css'
const Reviewitem = (props) => {
 const {product, handleRemoveProduct}=props;
    const { name, img, price, shipping, quantity } = props.product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt='' />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details'>
                    <p className='product-name' title={name}>{name.length >20? name.slice(0,20)+'...':name}</p>
                    <p>Price:$ <span className='orange-color'>{price}</span></p>
                    <p><small>Shpping:${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>

                </div>
                <div className='delete-container'>
                      <button  onClick={()=>handleRemoveProduct(product)} className='button'  > <FontAwesomeIcon  className='delete-icon' icon={faTrashRestoreAlt}></FontAwesomeIcon></button>
                </div>

            </div>



        </div>
    );
};

export default Reviewitem;