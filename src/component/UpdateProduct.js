import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const UpdateProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const params = useParams();

    useEffect(() => {
      const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
      };
  
      console.log(params);
      getProductDetails();
    }, [params]);


    const updateProduct = async ()=>{
        console.log(name,price,category,company)
    }

  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input type='text' placeholder='Enter Product Name' value={name} className='input-box' onChange={(e)=>{setName(e.target.value)}} />


        <input type='text' placeholder='Enter Product Price' value={price} className='input-box' onChange={(e)=>{setPrice(e.target.value)}} />


      <input type='text' placeholder='Enter Product Category' value={category} className='input-box' onChange={(e)=>{setCategory(e.target.value)}}/>


      <input type='text' placeholder='Enter Product Company' value={company} className='input-box' onChange={(e)=>setCompany(e.target.value)}/>


        <button onClick={()=>updateProduct()} className='appButton'>Update product</button>
    </div>
  )
}

export default UpdateProduct;