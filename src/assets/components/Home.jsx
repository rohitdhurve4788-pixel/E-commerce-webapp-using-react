import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Footer from './Footer'

const categories = [
  { name: "Men's Clothing", icon: '👕', bg: 'bg-blue-100' },
  { name: "Women's Clothing", icon: '👗', bg: 'bg-pink-100' },
  { name: 'Jewellery', icon: '💍', bg: 'bg-yellow-100' },
  { name: 'Electronics', icon: '🎧', bg: 'bg-green-100' },
]

const features = [
  { icon: '🚚', title: 'Free Delivery', text: 'On orders above $50' },
  { icon: '🔄', title: 'Easy Returns', text: '7 days return policy' },
  { icon: '🔒', title: 'Secure Payment', text: '100% safe checkout' },
  { icon: '💬', title: '24/7 Support', text: 'We are always here' },
]

const Home = () => {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  const getFeatured = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=4')
      setFeatured(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getFeatured()
  }, [])

  return (
    <div className='bg-white'>
      {/* ---------- HERO ---------- */}
      <section className='relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
        <div className='absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl' />
        <div className='absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl' />

        <div className='relative max-w-6xl mx-auto px-4 md:px-7 py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center'>
          {/* Left */}
          <div className='flex flex-col gap-6'>
            <span className='w-fit text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full'>
              ✨ New season, new deals
            </span>

            <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight'>
              Shop everything you love, <span className='text-indigo-600'>in one nest.</span>
            </h1>

            <p className='text-gray-600 text-base md:text-lg max-w-md'>
              Fashion, jewellery and electronics at honest prices. Pick your favourites and
              get them delivered to your door.
            </p>

            <div className='flex flex-wrap gap-3'>
              <Link
                to='/product'
                className='bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-1'
              >
                Shop Now →
              </Link>
              <a
                href='#featured'
                className='px-6 py-3 rounded-full font-medium border border-gray-300 text-gray-700 transition-colors duration-300 hover:border-indigo-600 hover:text-indigo-600'
              >
                Featured Products
              </a>
            </div>

            <div className='flex gap-8 pt-4'>
              <div>
                <p className='text-2xl font-bold text-gray-900'>20+</p>
                <p className='text-sm text-gray-500'>Products</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-gray-900'>4</p>
                <p className='text-sm text-gray-500'>Categories</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-gray-900'>4.5★</p>
                <p className='text-sm text-gray-500'>Avg. Rating</p>
              </div>
            </div>
          </div>

          {/* Right: product images */}
          <div className='grid grid-cols-2 gap-4'>
            {loading
              ? [1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-2xl bg-gray-200 animate-pulse ${i % 2 === 0 ? 'mt-8' : ''}`}
                  />
                ))
              : featured.map((item, i) => (
                  <Link
                  key={item.id}
                    to={`/product/${item.id}`}
                    className={`bg-white rounded-2xl shadow-md p-5 flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      i % 2 === 1 ? 'mt-8' : ''
                    }`}
                    >
                    <img className='aspect-square object-contain' src={item.image} alt={item.title} />
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className='max-w-6xl mx-auto px-4 md:px-7 py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {features.map((f) => (
          <div
            key={f.title}
            className='flex items-center gap-3 p-4 rounded-xl bg-gray-50 transition-colors duration-300 hover:bg-indigo-50'
            >
            <span className='text-2xl'>{f.icon}</span>
            <div>
              <p className='text-sm font-semibold text-gray-900'>{f.title}</p>
              <p className='text-xs text-gray-500'>{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className='max-w-6xl mx-auto px-4 md:px-7 py-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Shop by Category</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {categories.map((c) => (
            <Link
              key={c.name}
              to='/product'
              className={`${c.bg} rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
            >
              <span className='text-4xl'>{c.icon}</span>
              <p className='font-medium text-gray-800'>{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED PRODUCTS ---------- */}
      <section id='featured' className='max-w-6xl mx-auto px-4 md:px-7 py-10'>
        <div className='flex items-end justify-between mb-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Featured Products</h2>
          <Link to='/product' className='text-sm font-medium text-indigo-600 hover:underline'>
            View all →
          </Link>
        </div>

        <div className='grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[450px]:grid-cols-1'>
          {loading
            ? [1, 2, 3, 4].map((i) => (
                <div key={i} className='h-80 rounded-lg bg-gray-200 animate-pulse' />
              ))
              : featured.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className='group bg-gray-400/40 rounded-lg flex flex-col justify-between gap-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gray-400/60'
                >
                  <img
                    className='p-5 aspect-square object-contain transition-transform duration-300 group-hover:scale-110'
                    src={item.image}
                    alt={item.title}
                  />
                  <div className='p-5'>
                    <h3 className='text-md line-clamp-2 transition-colors duration-300 group-hover:text-blue-600'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-700 mt-3'>${item.price}</p>
                    <p className='bg-green-400 w-fit py-1.5 px-3 rounded-2xl mt-3 text-xs'>
                      ★ {item.rating.rate}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className='max-w-6xl mx-auto px-4 md:px-7 py-10 pb-16'>
        <div className='bg-indigo-600 rounded-3xl px-6 py-12 md:px-14 text-center text-white flex flex-col items-center gap-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>Ready to find your next favourite?</h2>
          <p className='text-indigo-100 max-w-md'>
            Browse the full collection and discover something new today.
          </p>
          <Link
            to='/product'
            className='bg-white text-indigo-600 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home