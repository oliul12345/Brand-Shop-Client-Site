import { FaPhoneSquareAlt,FaFacebook,FaGoogle,FaArrowRight,FaMapMarkerAlt} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(()=>{
        AOS.init()
      },[])
    return (
        <div>
            <p className="text-4xl font-bold text-blue-600 text-center my-7">Contact Us</p>
            <hr className="w-2/4 justify-center mx-auto border-2" />
             <div className="md:flex  my-11 gap-10 p-3 ">
                <div className="md:w-1/2"  data-aos="fade-right"  data-aos-duration="2000">
                   <div className="w-full flex">
                   <img  className=" w-1/2" src="https://img.freepik.com/free-photo/          online-fashion-shopping-with-laptop_23-2150400630.jpg?w=740&   t=st=1697647990~exp=1697648590~hmac=979bf2e6fbf5b80326e0a063f6b5c6038a76a749c1587f60fb3327fc93e 16e51" alt="" />
                   <img className="w-1/2" src=" https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=740&t=st=1697648387~exp=1697648987~hmac=a248a51b7c36de2f647d1f1bf90b1ba360bc934a9900809f469c5146ae2b61ee" alt="" />
                   </div>
                   <img src="https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?w=740" alt="" />
                  
                </div>
               
               <div className="md:w-1/2 sticky" data-aos="fade-left" data-aos-duration="3000" >
                 <h1 className="text-3xl ">Welcome to Our Website</h1>
                 <p className="my-4 ">I think our services is better than other organization And this is proved</p>

                 <div className= "  rounded-xl w-3/4 border-2  p-7">
                    <p>Contact Us</p>
                    <p className="flex items-center gap-4 my-3">PHONE NUMBER :<FaPhoneSquareAlt className="text-xl"></FaPhoneSquareAlt> +044533356</p>
                    
                 </div>
                 <div className= "  rounded-xl w-3/4 border-2  my-4 p-7">
                    <AiOutlineMail className="text-3xl text-center"></AiOutlineMail>
                    <p className="flex items-center gap-4 my-3">EMAIL INFO </p>
                    <p>Emil Address :educa@organization.com</p>
                 </div>
                 <div className= "  rounded-xl w-3/4 border-2 p-7">
                    <FaMapMarkerAlt className="text-3xl text-center"></FaMapMarkerAlt>
                    <p className="flex items-center gap-4 my-3">ADDRESS INFO </p>
                    <p>Address : Rampura, Dhaka, 1221</p>
                 </div>

                 <div className="mt-6">
                    <p className="my-5 flex items-center gap-3 text-xl">Contact Us With <FaArrowRight></FaArrowRight></p>
                    <button className="bg-orange-200 p-3 rounded font-bold w-1/2 hover:bg-orange-400 text-black flex gap-4 items-center justify-center"><FaFacebook className="text-2xl"></FaFacebook> Facebook</button>
                    <button className="bg-amber-200 p-3 rounded font-bold w-1/2 hover:bg-amber-400 text-black flex gap-4 items-center justify-center mt-4"><FaGoogle className="text-2xl"></FaGoogle> Google</button>
                    
                 </div>
               </div>
              
            </div>
        </div>
    );
};

export default ContactUs;