import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
    // const {_id} = useParams();
    const getData = useLoaderData();
    console.log(getData)
    // const findData = getData.find((item) => item.id == _id);
    // console.log(findData);
    // const {details} = findData;
    const {name,BrandName,type,price,description,photoUrl
    } = getData;
  return (
    <div>
    
          <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col lg:flex-row ">
          <div className="w-1/2">
          <img
             src={photoUrl
             }
             className="w-full rounded-lg shadow-2xl"
           />
          </div> 
           <div className="w-1/2 font-bold gap-y-2">
             <h1 className="text-5xl font-bold">{name}</h1>
             <p>Brand : {BrandName}</p>
             <p>Type: {type}</p>
             <p><span className="text-blue-500">Price</span>: {price}</p>
             <p className="py-6">
               {description
}
             </p>
             <button className="btn btn-primary">Add to Cart</button>
           </div>
         </div>
       </div>
    
    </div>
  );
};

export default ProductsDetails;
