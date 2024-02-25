import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const updateData = useLoaderData();
  console.log(updateData)


  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const BrandName = form.BrandName.value;
    const type = form.type.value;
    const price = form.price.value;
    // const description = form.description.value;

    const photoUrl = form.photoUrl.value;
    const updateProduct = { name, BrandName, type, price, photoUrl };
    console.log(updateProduct);
    fetch(`http://localhost:5000/users/${updateData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product update successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
          form.reset();
        }
        
      });
  };
  return (
    <div>
      <div className="bg-slate-200 p-4 my-8">
        <form onSubmit={handleUpdate}>
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
                  defaultValue={updateData?.name}
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
                  defaultValue={updateData?.BrandName}
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
                  defaultValue={updateData?.type}
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
                  defaultValue={updateData?.price}
                  placeholder="Price"
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
                defaultValue={updateData?.photoUrl}
                placeholder="Photo-URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            className="w-full bg-gray-700 p-3 mt-4 rounded-xl text-white"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
