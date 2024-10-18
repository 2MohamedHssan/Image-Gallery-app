import React from 'react'
function Card({item}) {
  const tag = item.tags.split(',')
  return (
    <div className=' overflow-hidden rounded shadow-lg mx-auto min-h-96'>
      <div className='overflow-hidden'><img suors={item.suors} className='w-full h-[50%]' alt="" /></div>
      <div className='px-6 py-4 z-20'>
        <div className=' font-bold text-purple-500 text-lg mb-2'>
          Photo For Mohamed Hassan
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {item.View}
          </li>
          <li>
            <strong>Download: </strong> {item.Download}
          </li>
          <li>
            <strong>Likes: </strong> {item.Likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tag.map((e,index) => (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2' key={index}> #{ e }</span>
      ))}
      </div>
    </div>
  )
}

export default Card