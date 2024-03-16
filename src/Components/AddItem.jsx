import { useState } from "react";

const AddItem = () => {

    const [addProduct, setAddProduct] = useState([])
    console.log({ addProduct })

    const handleAddIItem = event => {
        event.preventDefault();

        const form = event.target

        const name = form.name.value
        const brand = form.brand.value
        const description = form.description.value
        const price = form.price.value
        const photo = form.photo.value

        const addNewItem = { name, brand, description, price, photo }
        console.log(addNewItem)

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewItem)
        })
            .then(res => res.json())
            .then(data => {
                setAddProduct(prev => [...prev, data])
            });
        alert('Add successfully')

    }
    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-bold text-center">Add A Item</h2>
            <form onSubmit={handleAddIItem} className="">
                {/* {from row} */}
                <div className="md:flex justify-center gap-10 mt-24">
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Title</span>
                        </label>
                        <div className="join ">
                            <input type="text" name="name" className="input input-bordered join-item md:w-80" placeholder="Title" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Brand</span>
                        </label>
                        <div className="join">
                            <input type="text" name="brand" className="input input-bordered join-item md:w-80" placeholder="Brand" />
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
                            <input type="text" name="description" className="input input-bordered join-item md:w-80" placeholder="Description" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text  font-semibold">Price</span>
                        </label>
                        <div className="join">
                            <input type="text" name="price" className="input input-bordered join-item md:w-80" placeholder="Price" />
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
                    <input className="btn btn-info md:w-[680px] " type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;