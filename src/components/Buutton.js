import React from 'react'

const Buutton = ({fetchData}) => {
  return (
    <>  <button 
    className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={fetchData}
>
    Fetch Content
</button>
    </>
  )
}

export default Buutton