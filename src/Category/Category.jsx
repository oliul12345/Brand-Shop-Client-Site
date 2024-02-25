const Category = () => {
  return (
    <div className="">
        <div className="flex justify-center">
            <div className="mt-6">
            <img className="w-full h-[200px]" src="https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161200410/67602131-categories-stamp-sign-text-word-logo-red.jpg" alt="" />
             <h2 className="text-3xl text-stone-800 font-bold my-5">Our Products Category</h2>
            </div>
        </div>
      <div  className="flex flex-wrap my-10 gap-5">
        <div className="border-2 p-3 rounded">
          <a href="">Bags and Travel</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Bedding & Bath</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Cameras</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Fashion</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Laundry & Cleaning</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Furniture & Décor</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Sports & Outdoors</a>
        </div>
        <div className="border-2 p-3 rounded">
          <a href="">Stationery & Craft</a>
        </div>
      </div>
      <hr className="w-3/4 mx-auto my-10 border-2" />
    </div>
  );
};

export default Category;
