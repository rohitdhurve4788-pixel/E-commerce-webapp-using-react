import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [data, setdata] = useState([])
 const [loading,setloading]= useState(false)


  let api = async () => {
    setloading(true)
    let responce = await axios('https://fakestoreapi.com/products')
    setdata(responce.data);
    setloading(false)
  }
  useEffect(() => {
    api()
  }, [])
  

  if(loading) return <Loader className={'h-screen w-full flex items-center justify-center'}/>

  return (
    <div className='grid grid-cols-5 gap-5 p-7 max-[1100px]:grid-cols-4 max-[900px]:grid-cols-3  max-[500px]:grid-cols-2 max-[450px]:grid-cols-1  max-[600px]:p-2'>
      {data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  )

}


const Product = ({ item }) => {

  let navigate=useNavigate()
  return (
    <div
  onClick={() => navigate(`/product/${item.id}`)}
  className='group bg-gray-400/40 rounded-lg flex flex-col justify-between gap-1 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gray-400/60'
>
  <img
    className='p-5 aspect-square object-contain transition-transform duration-300 group-hover:scale-110'
    src={item.image}
    alt=""
  />
  <div className='p-5'>
    <h1 className='text-md line-clamp-2 transition-colors duration-300 group-hover:text-blue-600'>
      {item.title}
    </h1>
    <p className='text-sm text-gray-700 mt-3'>{item.price} $</p>
    <div className='py-3 flex items-center justify-between text-xs'>
      <p className='bg-green-400 w-fit py-2 px-3 rounded-2xl mt-4'>★ {item.rating.rate}</p>
      <p className='mt-3.5'> {item.rating.count} Review</p>
    </div>
  </div>
</div>
  )

}





export default Products