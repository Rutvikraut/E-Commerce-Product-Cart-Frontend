
export const fetchData = async (url)=>{
    try{
        const BASE_URL = 'https://e-commerce-product-cart-backend.vercel.app';
        const res = await fetch(`${BASE_URL}${url}`);
        if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Data fetched successfully:', data);
        return data;
    }catch(error){
        throw new Error("Internal Server Error")
    }
}