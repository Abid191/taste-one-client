import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const UpdateItem = () => {

    const product = useLoaderData()
    console.log(product)

    const [updatedProduct, setUpdatedProduct] = useState([])
    console.log({ updatedProduct })
    const { title, description, price, images, brand } = product

    const handleUpdateItem = event => {
        event.preventDefault();

        const form = event.target

        const name = form.name.value
        const brand = form.brand.value
        const description = form.description.value
        const price = form.price.value
        const photo = form.photo.value

        const UpdateItem = { name, brand, description, price, photo }
        console.log(UpdateItem)

        fetch(`https://dummyjson.com/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateItem)
        })
            .then(res => res.json())
            .then(data => {
                setUpdatedProduct(prev => [...prev, data])
              });

    }
    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-bold text-center">Update Item</h2>
            <form onSubmit={handleUpdateItem} className="">
                {/* {from row} */}
                <div className="md:flex justify-center gap-10 mt-24">
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Title</span>
                        </label>
                        <div className="join ">
                            <input type="text" name="name" defaultValue={title} className="input input-bordered join-item md:w-80" placeholder="Title" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Brand</span>
                        </label>
                        <div className="join">
                            <input type="text" name="brand" defaultValue={brand} className="input input-bordered join-item md:w-80" placeholder="Brand" />
                        </div>
                    </div>
                </div>

                {/* {from row} */}

                <div className="md:flex justify-center gap-10">
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Description</span>
                        </label>
                        <div className="join ">
                            <input type="text" name="description" defaultValue={description} className="input input-bordered join-item md:w-80" placeholder="Description" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Price</span>
                        </label>
                        <div className="join">
                            <input type="text" name="price" defaultValue={price} className="input input-bordered join-item md:w-80" placeholder="Price" />
                        </div>
                    </div>
                </div>

                {/* {from row} */}

                <div className="md:flex justify-center gap-10">
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">PhotoURL</span>
                        </label>
                        <div className="join ">
                            <input type="text" name="photo" className="input input-bordered join-item md:w-[680px]" placeholder="PhotoURL" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <input className="btn btn-info md:w-[680px] " type="submit" value="Update Item" />
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;