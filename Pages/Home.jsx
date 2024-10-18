import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { ClipLoader } from 'react-spinners'
function Home() {
  const [data, setData] = useState([])
  const [loding, setLoding] = useState(true)
  const [text, setText] = useState('')
  useEffect(() => {
    const fetching = async () => {
    try {
        setLoding(true)
      const res = await fetch('http://localhost:9000/image')
      const resback = await res.json()
      setData(resback)
      setLoding(false)
    } catch (error) {
      console.log('faild to Get data')
    }
    }
    fetching()
  }, [])
  const handelChange = (e) => setText(e.target.value)
  const filterdata = data.filter((item) => 
    item.name.toLowerCase().includes(text.toLowerCase())
  )

  return (
    <div>
      <div className='max-w-sm overflow-hidden rounded my-10 mx-auto'>
      <form className='w-full max-w-sm'>
        <div className='flex items-center border-b border-teal-500 py-2'>
          <input onChange={handelChange} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 my-1 mx-2 leading-tight focus:outline-none'
            type="text" placeholder='Search Image Trem...' />
          <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
        </div>
      </form>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-12 lg:grid-cols-3 xl:grid-cols-4 my-3 px-4 mx-auto'>
      {filterdata.map((item,index) => (
        loding ? <ClipLoader className=' fixed top-80 left-1/2'/> : <div key={index} className='h-96 '>
        <Card key={index} item={item} /> 
      </div>
      )
    )}
    </div>

   </div>
  )
}

export default Home