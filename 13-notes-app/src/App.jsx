import React, { useState } from 'react'

const App = () => {
   const [title, settitle] = useState('')
   const [details, setDetails] = useState('')

   const [task, setTask] = useState([])

   const submitHandler =(e)=>{
    e.preventDefault()
    const copyTask=[...task];
     copyTask.push({title,details})
     setTask(copyTask);
     console.log(task);
     

   settitle('')
   setDetails('')
  }
  return (
    <div className='h-screen lg:flex  bg-black text-white  '>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }} className='flex   gap-5 lg:w-1/2   flex-col items-start p-10 '> 
     <h1 className='text-4xl font-bold'>Add Notes</h1> 
      
      <input 
       type="text"
       placeholder='Enter notes heading'
       className='px-5  w-full font-medium py-2 border-2 outline-none rounded '
       value={title}
       onChange={(e)=>{
        settitle(e.target.value);
        
       }}     
     />
      
      <textarea
      type="text" 
     className='px-5  h-32 py-2 font-medium  w-full  border-2 outline-none rounded '
     placeholder='Write Details'
     value={details}
     onChange={(e)=>
      setDetails(e.target.value)
     }
     />
     
     <button 
     className='bg-white active:scale-95 font-medium w-full  outline-none text-black px-5 py-2 rounded'>
      Add Note
      </button>
      </form> 
     
      <div className='lg:w-1/2  lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes notes</h1>
     <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
      {task.map(function (elem,idx){
        return  <div key={idx} className=" relative h-52 w-40 rounded-2xl text-black bg-cover px-9 gap-4 py-8 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OterLH39QKYktr4mF3uSXLBdavO9oj47jA&s')]">
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
        </div>
      })}
      </div>
    </div>
    </div>
  )
}

export default App
