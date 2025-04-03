import React from 'react'

function Cart() {
  return (
    <div className='p-5 ml-65 bg-slate-200 -mt-150 mr-10 h-auto'>
          <table className="mt-5 border-2 w-full mx-auto border-collapse text-center">
    <thead>
      <tr className="bg-slate-300">
        <th className="border-2 p-2">Product</th>
        <th className="border-2 p-2">Price</th>
        <th className="border-2 p-2">Unit</th>
      </tr>
    </thead>
    <tbody>

        <tr className="bg-white">
          <td className="border-2 p-2"></td>
          <td className="border-2 p-2"></td>
          <td className="border-2 p-2"></td>
        </tr>
    
    </tbody>
  </table>
    </div>
  )
}

export default Cart