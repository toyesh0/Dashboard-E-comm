import React, { useState } from 'react'

const AddProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [error,setError] = useState(false)

    const HandleSubmit = async ()=>{
        

        if(!name || !price || !category || !company)
        {   
            setError(true)
            return false;
        }

        console.log(name,price,category,company);

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
        method:'POST',
        body: JSON.stringify({name,price,category,company,userId}),
        headers: {
            'Content-Type':'application/json'
        }
        });
        result = await result.json()
        console.log(result);
    }

  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type='text' placeholder='Enter Product Name' value={name} className='input-box' onChange={(e)=>{setName(e.target.value)}} />

        { error && !name && <span className='invalid-input'>Enter valid name</span>}

        <input type='text' placeholder='Enter Product Price' value={price} className='input-box' onChange={(e)=>{setPrice(e.target.value)}} />

        { error && !price && <span className='invalid-input'>Enter valid price</span>}

        <input type='text' placeholder='Enter Product Category' value={category} className='input-box' onChange={(e)=>{setCategory(e.target.value)}}/>

        { error && !category && <span className='invalid-input'>Enter valid category</span>}

        <input type='text' placeholder='Enter Product Company' value={company} className='input-box' onChange={(e)=>{setCompany(e.target.value)}}/>

        { error && !company && <span className='invalid-input'>Enter valid Company</span>}

        <button onClick={()=>HandleSubmit()} className='appButton'>Add product</button>
    </div>
  )
}

export default AddProduct