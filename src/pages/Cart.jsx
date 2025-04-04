import React, { useEffect, useState } from 'react'
import { getCart } from '../utils/cart';

function Cart() {


  const [cart, setCart] = useState([])

  const fetchInfo = async () => {
    const response = await getCart()
    console.log(response.data)
    if (response.data) {
      setCart(response.data);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='p-5 ml-65 bg-slate-200 -mt-150 mr-10 h-auto'>
      <table className="mt-5 border-2 w-full mx-auto border-collapse text-center">
        <thead>
          <tr className="bg-slate-300">
            <th className="border-2 p-2">User</th>
            <th className="border-2 p-2">Product</th>
            <th className="border-2 p-2">Quantity</th>
            <th className="border-2 p-2">Price</th>
          </tr>
        </thead>


        <tbody>
          {cart.map((cart, index) => (
            <tr key={index} className="bg-white">
              <td className="border-2 p-2">{cart.user.email}</td>
              <td className="border-2 p-2 flex gap-4 items-center justify-center">
                <img className='w-10 h-10 ' src={cart.product.image} alt="" />
                {cart.product.name}

              </td>
              <td className="border-2 p-2">{cart.product.unit}</td>
              <td className="border-2 p-2"><span className='text-red-500'>$ {cart.product.price}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart