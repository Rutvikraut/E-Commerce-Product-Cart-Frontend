import { fetchData } from "../utils/request"

export const getAllProducts = async() => {
    try{
        const res = await fetchData('/allProducts')
        console.log(res.data)
        return res.data
    }catch(error){
        throw new Error("Internal Server Error")
    }
}