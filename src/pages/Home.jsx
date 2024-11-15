import Accordion from "../component/home/Accordion";
import Banner from "../component/home/Banner";
import FeaturedProducts from "../component/home/FeaturedProducts";
import Revew from "../component/home/Revew";
import N from "../component/mainComponent/n";


const Home = () => {
    return (
       <div className="">
           <N/>
            <Banner/>
         <div className="container mx-auto">
            <div className="my-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <FeaturedProducts/>
                <FeaturedProducts/>
                <FeaturedProducts/>
             </div>
             <Accordion/><br /><br />
             <Revew/>
        </div>
       </div>
    );
};

export default Home;