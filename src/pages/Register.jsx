import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import useAuth from "../hooks/useAuth";

const Register = () => {
    const {createUser} = useAuth;
    console.log(createUser)
    const [registerError,setRegisterError] = useState('');
    const [success,setSuccess] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        setRegisterError('')
        setSuccess('')
        console.log(data.password , data.confirmpassword)
        if(data.password.length < 6){
            setRegisterError(' Password should be at least 6 characters or longer');
            return;
        }
        else if(!/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(data.password)){
            setRegisterError('Your password should have at least one upper case,number & simbol characters.');
            return;
        }
        else if(data.password !== data.confirmpassword){
            setRegisterError('password didnot mach');
            return;
        }
        createUser(data.email,data.password)   
         .then(result => {
            // console.log(result.user);
            setSuccess('User Created Successfully')
         })
         .catch(error => {
            setRegisterError(error.message);
         })
    }
    return (
        <div className="hero min-h-screen bg-black bg-opacity-50 ">
        <form onSubmit={handleSubmit(onSubmit)}  className="container flex flex-col w-full max-w-md p-4 rounded-md shadow sm:p-8 space-y-12 bg-gray-50 bg-opacity-50 "
         >
            <p className="font-medium text-lg text-center mt-3 ">Personal Inormation</p>
            <p className="text-sm text-center  dark:text-gray-600">Have a acount?
                 <Link to='/login' href="#" rel="noopener noreferrer" className="focus:underline font-bold text-green-600 hover:underline">LogIn here</Link>
             </p>
             <fieldset className="flex justify-center items-center gap-6 p-6 rounded-md shadow-sm ">
         
                 <div className=" gap-4 col-span-full lg:col-span-3">
                     <div className="">
                         <label htmlFor="fullName" className="text-sm">fullName</label>
                         <input id="fullName" type="text" placeholder="fullName" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                       {...register("fullName", { required: true })} 
                         />
                         {errors.fullName && <span  className="text-red-500">This field is required</span>}
                     </div><br />
                      <div className="">
                         <label htmlFor="potho" className="text-sm">PothoURL</label>
                         <input id="potho" type="text" placeholder="PothoURL" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                       {...register("image")}  />
                     </div><br />
                     <div className="">
                         <label htmlFor="email" className="text-sm">Email</label>
                         <input id="email" type="email" placeholder="Email" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" 
                         {...register("email", { required: true })} 
                         />
                             {errors.email && <span  className="text-red-500">This field is required</span>}
                     </div> <br />
                     <div className="">
                         <label htmlFor="email" className="text-sm">Password</label>
                         <input id="email" type="password" placeholder="password" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" 
					{...register("password", { required: true })} 
					/>
                         {errors.password && <span  className="text-red-500">This field is required</span>}
                     </div>
                     <br />
                     <div className="">
                         <label htmlFor="email" className="text-sm">Confirm password</label>
                         <input id="email" type="password" placeholder="Confirm password" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                         {...register("confirmpassword", { required: true })} 
                          />
                          {errors.confirmpassword && <span  className="text-red-500">This field is required</span>}
                     </div><br/>                     
                     <div className="flex justify-between">
                         <div className="form-control">
                         <label className="cursor-pointer label gap-2">
                             <span className="label-text">Remember me</span>
                             <input type="checkbox" defaultChecked className="checkbox checkbox-success" 
                             {...register("ckeckbox", { required: true })} 
                             />
                                 {errors.checkbox && <span  className="text-red-500">This field is required</span>}
                         </label>
                         </div>
                         <button className="btn " type="submit">Submit</button>
                            
                     </div>
                     {
                         registerError && <p className="text-red-700">{registerError}</p>
                     }
                     {
                         success && <p className="text-green-700">{success}</p>
                     }
                 </div>
             </fieldset>
             
         </form>
     </div>
    );
};

export default Register;