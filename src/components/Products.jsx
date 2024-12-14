import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../api/productApi'
import { useCartContext } from '../provider/CartProvider'

const Products = () => {
    const [products,setProducts] = useState([])
    // const [checkOutProducts,setCheckOutProducts] = useState(() => {
    //     // Load cart from localStorage when the component mounts
    //     const storedCart = localStorage.getItem('checkOutProducts')
    //     return storedCart ? JSON.parse(storedCart) : []
    // })
    const {cartProducts,setCartProducts} = useCartContext()

    console.log("Products",typeof(products))
    useEffect(()=>{
        const fetchAllProducts = async() =>{
            const products = await getAllProducts()
            if(products){
                setProducts(products)
            }
        }
        fetchAllProducts()
    },[])

    const handleAddToCart = (product, quantity) => {
        const isProductInCart = cartProducts.find(item => item._id === product._id);
        if (isProductInCart) {
          const updatedCart = cartProducts.map(item =>
            item._id === product._id ? { ...item, quantity } : item
          );
          setCartProducts(updatedCart);
        } else {
          const productWithQuantity = { ...product, quantity };
          setCartProducts(prevCart => [...prevCart, productWithQuantity]);
        }
      };
  return (
    <div className='flex gap-4 mx-8 my-5 flex-wrap justify-center'>
        {products.map((product,index)=>(
            <div key={index} className="flex flex-col max-w-screen-sm w-72 h-auto p-3 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative mx-3 mt-3 object-cover w-[264px] h-44 flex justify-center overflow-hidden rounded-xl">
                    <img className="object-cover" src={`${product.imageUrl}`} alt="product image" />
                    <span className="absolute top-0 left-0 m-2 px-2 py-1 rounded-lg bg-black text-center text-sm font-medium text-white">{product.category}</span>
                </div>
                <div className="mt-4 px-5 pb-5 w-full">
                    <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900 text-wrap">{product.name}</h5>
                    </a>
                    <div className="mt-2 w-full mb-5 flex flex-col gap-2">
                        <p className="text-sm text-left font-bold text-slate-900">Rs <span className='text-3xl'>{product.price}</span>
                        </p>
                        <input
                            type="number"
                            id={`quantity-${product._id}`}
                            name="quantity"
                            defaultValue={1}
                            min={1}
                            max={10}
                            className="w-full border border-slate-300 rounded-md py-2 px-3 text-sm text-gray-900"
                            onChange={(e) => {
                                const inputValue = parseInt(e.target.value, 10)
                                if (inputValue < 1) e.target.value = 1
                                if (inputValue > 10) e.target.value = 10
                            }}
                        />
                    </div>
                    <button className="flex items-center justify-center rounded-md bg-slate-900 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer w-full" 
                    onClick={() => {
                        const quantityInput = document.getElementById(`quantity-${product._id}`)
                        const quantity = parseInt(quantityInput.value, 10)
                        handleAddToCart(product, quantity)
                    }}>
                        Add to cart
                    </button>
                </div>
            </div>
    ))}
    </div>
  )
}

export default Products