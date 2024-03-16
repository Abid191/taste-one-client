import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {

  const product = useLoaderData()
  const { title, description, price, images, brand } = product.products

  const [deletedProduct, setDeletedProduct] = useState([])
  console.log({deletedProduct})



  const handleDelete = (id) => {


    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        setDeletedProduct(prev => [...prev, data])
      });
    alert('Delete Successfully')

  }

  return (
    <>
      <div className="overflow-x-auto mt-5 mx-20">


        <div className='text-right  mb-5'>
          <Link to="/addItem">
            <button className="btn bg-black text-white">Add Item</button>
          </Link>
        </div>

        <table className="table">
          {/* head */}

          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              product.products.map(item => <tr
                key={item._id}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.thumbnail} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm opacity-50">{item.brand}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.description}
                </td>
                <td>${item.price}</td>
                <th>
                  <div>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-xs btn-warning w-full mb-2">Delete</button>
                  </div>
                  <div>
                    <Link to={`/updateItem/${item.id}`}>
                      <button className="btn btn-xs btn-error w-full">Update</button>
                    </Link>
                  </div>
                </th>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
