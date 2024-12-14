import React, { useEffect, useState } from 'react';
import { useCartContext } from '../provider/CartProvider';
import { Button, Modal } from 'flowbite-react';
import ModalComponent from './ModalComponent';

const CartCheckOut = () => {
  const { cartProducts, setCartProducts } = useCartContext();
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [productToRemove, setProductToRemove] = useState(null);

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const confirmRemoveFromCart = () => {
    if (productToRemove) {
      setCartProducts((prevProducts) => prevProducts.filter((item) => item._id !== productToRemove._id));
    }
    closeModal();
  };

  const openModal = (product) => {
    setProductToRemove(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setProductToRemove(null);
    setIsModalOpen(false);
  };


  return (
    <>
    <div className="flex justify-center">
      <div className="mt-4 gap-4 mx-8 my-5 flex flex-col h-auto p-3 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
        <div className="m-5 flex flex-col gap-4 justify-center">
          <h4 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
            Order summary
          </h4>
          <div className='w-full flex flex-col justify-center'>
          {cartProducts.length > 0 ? (
            <div className="flex flex-col gap-4 justify-center">
              {cartProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <img
                    className="w-16 h-16 object-cover rounded-md"
                    src={product.imageUrl}
                    alt="product"
                  />
                  <div className="ml-4 w-48">
                    <h5 className="text-sm font-medium text-wrap">{product.name}</h5>
                    <p className="text-sm font-semibold">Rs <span className='text-lg'>{product.price}</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="mr-2 text-nowrap">Qty: {product.quantity}</p>
                    <button
                      className="text-sm bg-red-500 text-white font-medium px-2 py-1 rounded-lg"
                      onClick={() => openModal(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center'>Your cart is empty!</p>
          )}
          {cartProducts.length > 0 && (<div className='w-full flex justify-between mt-5'>
            <p className='text-xl font-medium'>Total Price</p>
            <span className='text-xl font-medium'>Rs {totalPrice}</span>
          </div>)}
          {cartProducts.length > 0 && (
            <button
              className="flex items-center justify-center rounded-md bg-slate-900 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer mt-4"
            >
              Proceed to Checkout
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}confirmRemoveFromCart={confirmRemoveFromCart}/>
    </>
  );
};

export default CartCheckOut;