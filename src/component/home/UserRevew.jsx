import FeaturedProducts from "./FeaturedProducts";

const UserRevew = () => {
    return (
        <div className="my-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <FeaturedProducts/>
        <FeaturedProducts/>
        <FeaturedProducts/>
     </div>
    );
};

export default UserRevew;