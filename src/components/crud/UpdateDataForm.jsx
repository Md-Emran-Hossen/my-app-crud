"use client"

import React, { useEffect, useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { ErrorToast, IsEmpty, SuccessToast } from '@/utility/FormHelper';


const UpdateDataForm = () => {

    const searchParams = useSearchParams();
    let id = searchParams.get('id');
    console.log("Query ID:=", id);

    let [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            let response = await fetch(`http://localhost:3000/api/populateByID?id=${id}`)
            let json = await response.json()
            setData(json['data'])
            console.log(data);
        })()
    }, [])



    //let [data, setData] = useState({ name: "", designation: "", image: "", country: "", city: "", salary: "" });

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
        if (IsEmpty(data.name)) {
            ErrorToast("Name Required")
        }
        else {
            setSubmit(true);

            const options = {
                method: 'PUT',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
            let res = await fetch(`/api/update?id=${id}`, options);
            let ResJson = await res.json();

            setSubmit(false);

            if (ResJson['status'] === "success") {
                SuccessToast("Insert Success")
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

                        <h5 className="mb-3 font-bold text-3xl">Update Employee</h5>
                        <div className="grid grid-cols-3 gap-5 items-center">
                            <div>
                                <div className="p-2">
                                    <label className="form-label">Employee Name</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("name", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-2" 
                                        defaultValue={data.name}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Employee Designation</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("designation", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-1" 
                                        defaultValue={data.designation}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Image</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("image", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-1" 
                                        defaultValue={data.image}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Country</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("country", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-1" 
                                        defaultValue={data.country}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">City</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("city", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-1" 
                                        defaultValue={data.city}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="p-2">
                                    <label className="form-label">Salary</label>
                                </div>
                                <div className="p-2">
                                    <input onChange={(e) => { inputOnChange("salary", e.target.value) }} 
                                        type="text" 
                                        className="form-control mb-1" 
                                        defaultValue={data.salary}
                                    />
                                </div>
                            </div>
                        </div>
                        <SubmitButton className="pl-2 text-2xl font-bold" submit={submit} text="Update" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateDataForm;