import Brands from "../../../Brands/Brands";
import Category from "../../../Category/Category";
import ContactUs from "../../../ContactUs/ContactUs";
import Shop from "../../../OurShop/Shop";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Brands></Brands>
            <Shop></Shop>
            <Category></Category>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;