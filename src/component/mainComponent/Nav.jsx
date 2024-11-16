import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
  }

  const navOptions = <>

  <li><Link to="/product">Products</Link></li>
  <li><Link to="/contact">Contacts</Link></li>
  <li><Link to="/about">About</Link></li>
  </>
  return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">GADGET SHOP</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end gap-2 flex items-center">
       
       {
        user ? <>
   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li>
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      
        </li> 
      </ul>
    </div>
       
        </>:<>
        <Link to="/login">
             <button className="btn bg-gray-400 text-black px-4 rounded-md border border-black">Sing In</button>
          </Link>
          <Link to="/register">
             <button className="btn bg-black text-white px-4 rounded-md border border-black">Sing Up</button>
          </Link>
        </>
       }
          
        </div>
      </div>
    );
};

export default Nav;