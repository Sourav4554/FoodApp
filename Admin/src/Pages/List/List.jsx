import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import './List.css'
const List = ({url}) => {

const [list,setList]=useState([]);

//method for fetch foods from database
const fethList= async()=>{
const response= await axios.get(`${url}/api/food/list`)
if(response.data.sucess){
const sorted=response.data.message.reverse()
setList(sorted);
}else{
  toast.error('error')
}
}

//method for remove food from database
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