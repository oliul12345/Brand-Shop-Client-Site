import Swal from 'sweetalert2'


const AddProduct = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const BrandName = form.BrandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;

        const photoUrl = form.photoUrl.value;
        const addProduct = {name,BrandName,type,price,description,photoUrl}
        console.log(addProduct)
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            form.reset()
        })
    }
    return (
        <div>
              <div className="border p-5 rounded-xl bg-red-200">
      <h1 className="text-3xl">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* input row  */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name of Product"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="BrandName"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* input row  */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Type of Product</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* input row  */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photo url */}
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo-URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

            <input className="w-full bg-gray-700 p-3 mt-4 rounded-xl text-white" type="submit" value="Add Product" />
      </form>
  
    </div>
        </div>
    );
};

export default AddProduct;