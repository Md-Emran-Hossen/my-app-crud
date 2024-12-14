"use client"
import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { ErrorToast, IsEmpty, SuccessToast } from '@/utility/FormHelper';


const InsertDataForm = () => {

    let [data, setData] = useState({ name: "", designation: "", city: "", salary: "" });

    const [data1, setData1] = useState()

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
                window.location.href = "/";
            }
            else {
                ErrorToast("Request Fail")
            }
        }
    }

    // useEffect(() => {
    //     fetch(process.env.BASE_URL+'/api/populate')
    //       .then((res) => res.json())
    //       .then((data1) => {
    //         setData1(data1)
    //         setLoading(false)
    //       })
    //   }, [])

    //   const dataAll = getData();

      
    return (
        <div className="row justify-content-center center-screen bg-slate-400">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 flex-col">
                <form onSubmit={formSubmit} className="card animated fadeIn p-5 gradient-bg">

                    <h5 className="mb-3">Insert Employee Info</h5>
                    <label className="form-label">Employee Name</label>
                    <input onChange={(e) => { inputOnChange("name", e.target.value) }} type="text" className="form-control mb-2" />

                    <label className="form-label">Employee Designation</label>
                    <input onChange={(e) => { inputOnChange("designation", e.target.value) }} type="text" className="form-control mb-1" />

                    <label className="form-label">Employee City</label>
                    <input onChange={(e) => { inputOnChange("city", e.target.value) }} type="text" className="form-control mb-1" />

                    <label className="form-label">Employee Salary</label>
                    <input onChange={(e) => { inputOnChange("salary", e.target.value) }} type="text" className="form-control mb-1" />


                    <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Submit" />
                    {/* <button className="btn btn-danger mt-3" submit={submit} text="Submit"></button> */}
                    {/* <div className="my-3 d-flex">
                    <Link href="/User/SignUp" className="nav-link mx-2">Sign Up |</Link>
                    <Link href="/User/EmailVerify" className="nav-link">Forget Password</Link>
                </div> */}

                </form>
            </div>      
        </div>
    );
};

export default InsertDataForm;