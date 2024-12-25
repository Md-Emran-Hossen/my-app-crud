"use client"
import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { ErrorToast, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import { useRouter } from 'next/navigation';


const InsertDataForm = () => {

    let [data, setData] = useState({ name: "", designation: "", image: "", country: "", city: "", salary: "" });

    // const [data1, setData1] = useState()
     const router = useRouter();

    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value
        }))
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        //   if(IsEmail(data.email)){
        //       ErrorToast("Valid Email Address Required")
        //   }
        if (IsEmpty(data.name)) {
            ErrorToast("Name Required")
        }
        else {
            setSubmit(true);

            const options = {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }

            //   let res=await fetch("/api/demo/login",options);
            let res = await fetch("/api/insert", options);
            let ResJson = await res.json();

            setSubmit(false);

            if (ResJson['status'] === "success") {
                SuccessToast("Insert Success")
                // window.location.href = "/crud/load";
                router.push('/crud/load')
            }
            else {
                ErrorToast("Request Fail")
            }
        }
    }


    return (

        <div className="w-5/6 mx-auto bg-emerald-200 my-4">
            <div className="w-full">
                <div className="col-md-4 col-lg-4 col-sm-12 col-12 flex-col">
                    <form onSubmit={formSubmit} className="card animated fadeIn p-5 gradient-bg">

                        <h5 className="mb-3 font-bold text-3xl">Create Employee</h5>
                        <div className="grid grid-cols-3 gap-5 items-center">
                            <div>
                                <div className="p-2">
                                    <label className="form-label">Employee Name</label>
                                </div>
                                <div className="p-2"> 
                                    <input onChange={(e) => { inputOnChange("name", e.target.value) }} type="text" className="form-control mb-2" />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Employee Designation</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("designation", e.target.value) }} type="text" className="form-control mb-1" />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Image</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("image", e.target.value) }} type="text" className="form-control mb-1" />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Country</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("country", e.target.value) }} type="text" className="form-control mb-1" />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">City</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("city", e.target.value) }} type="text" className="form-control mb-1" />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Salary</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("salary", e.target.value) }} type="text" className="form-control mb-1" />
                                </div>
                            </div>
                        </div>

                        <SubmitButton className="pl-2 text-2xl font-bold" submit={submit} text="Submit" />
                        {/* <button className="btn btn-danger mt-3" submit={submit} text="Submit"></button> */}
                        {/* <div className="my-3 d-flex">
                    <Link href="/User/SignUp" className="nav-link mx-2">Sign Up |</Link>
                    <Link href="/User/EmailVerify" className="nav-link">Forget Password</Link>
                </div> */}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default InsertDataForm;