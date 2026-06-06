import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData= async()=>{
   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
   setuserData(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData=<h3 className='text-gray-400 text-xs'>No data available</h3>
 
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_black' >
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
        <img  classname='h-full  w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
       </div>
    })
  }
  
  
  return (
    <div className='bg-black  overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed bg-red-400 text-6xl'>{index}</h1>
        <div className='flex flex-wrap gap-4'>
          {printUserData}
        </div>
        <div className='flex justify-center  gap-6 items-center p-4'>
          <button
           className='bg-amber-200 text-black rounded px-4 py-2 font-semibold'  
           onClick={()=>{
             if(index>1){
               return setIndex(index-1)
            }
           }}>prev</button>
          <button 
          className='bg-amber-200 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
           return setIndex(index+1)
          }}>next</button>
        </div>
    </div>
  )
}

export default App
