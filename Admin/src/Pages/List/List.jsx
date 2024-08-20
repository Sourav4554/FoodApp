import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import './List.css'
const List = () => {
const url='http://localhost:4000'
const [list,setList]=useState([]);
const fethList= async()=>{
const response= await axios.get(`${url}/api/food/list`)
console.log(response.data);
if(response.data.sucess){
setList(response.data.message);
}else{
  toast.error('error')
}
}
const removeFood=async(itemid)=>{
const response=await axios.post(`${url}/api/food/remove`,{id:itemid});
await fethList();
if(response.data.sucess){
toast.success(response.data.message)
}
else{
toast.error('error')
}
}

useEffect(()=>{
fethList();
},[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="lst-table">
        <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
        </div>
       {list.map((item,index)=>{
       
        return(
          <div className="list-table-format" key={index}>
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p className='cursor' onClick={()=>{removeFood(item._id)}}>X</p>
          </div>
          )
        
        })} 
      </div>
    </div>
  )
}

export default List