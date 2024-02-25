import { Link, useLoaderData,  } from "react-router-dom";


const Brands = () => {
    const getData = useLoaderData();
    console.log(getData)
   
    return (
        <div>
             <h1 className="text-5xl font-bold text-cyan-600 text-center my-7">Our Brands is Follows </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {
                getData.map(data => <div className="" key={data.id}>

                    <div className="p-4 h-[300px] ">
                   

                   <Link to={`/brandProduct/${data.brand}`}>
                   <img className="h-full w-full" src={data.image_url} alt="" />
                    <p className="bg-blue-300 text-2xl font-bold text-center p-2">{data.brand}</p>
                   </Link>

                 
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Brands;  