import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'

const Singleproduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setproduct] = useState({})
  const [loading, setloading] = useState(true)

  const api = async () => {
    try {
      setloading(true)
      const responce = await axios(`https://fakestoreapi.com/products/${id}`)
      setproduct(responce.data)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    api()
  }, [id])

  if (loading)
    return (
      <div className='h-screen w-full flex items-center justify-center'>
        <Loader />
      </div>
    )

  return (
    <div className='min-h-screen bg-gray-100 p-4 md:p-10'>
      <button
        onClick={() => navigate(-1)}
        className='mb-6 text-sm text-gray-600 hover:text-black transition-colors cursor-pointer'
      >
        ← Back
      </button>

      <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2'>
        {/* Image */}
        <div className='bg-gray-50 p-8 flex items-center justify-center overflow-hidden'>
          <img
            className='w-full max-w-sm aspect-square object-contain transition-transform duration-300 hover:scale-105'
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Details */}
        <div className='p-6 md:p-10 flex flex-col gap-4'>
          <span className='w-fit text-xs uppercase tracking-wide bg-blue-100 text-blue-700 px-3 py-1 rounded-full'>
            {product.category}
          </span>

          <h1 className='text-2xl md:text-3xl font-semibold'>{product.title}</h1>

          <div className='flex items-center gap-3 text-sm'>
            <p className='bg-green-400 py-1.5 px-3 rounded-2xl'>★ {product.rating?.rate}</p>
            <p className='text-gray-500'>{product.rating?.count} Reviews</p>
          </div>

          <p className='text-3xl font-bold'>${product.price}</p>

          <p className='text-gray-600 leading-relaxed'>{product.description}</p>

          <div className='flex gap-3 mt-4'>
            <button className='flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct