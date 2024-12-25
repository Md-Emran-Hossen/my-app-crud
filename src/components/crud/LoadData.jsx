"use client"

import React, { useState, useEffect } from "react";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const LoadData =  () => {

    const router = useRouter();

    let [data, setData] = useState([])
    useEffect(()=>{
        (async ()=>{
            let response = await fetch("http://localhost:3000/api/populate")
            let json = await response.json()
            setData(json['data'])
        })()
    },[])

    const onDelete = async (id) => {
      
        const response = await fetch(`/api/delete?id=${id}`, {
            method: 'DELETE',
        });
      
        if(response['status']===200){
            console.log("IF Condition Execute:",response);
            location.reload();
          //  router.refresh();
        }
        else {
            ErrorToast("Invalid Request")
        }


     
    //  window.location.href = "/crud/load";
       // router.push('/')

        // const options={method:'DELETE',body:JSON.stringify({id:parseInt(id)})}
        // console.log(options);
        // let res=await (await fetch(`/api/delete?id=${id}`,options)).json();
        // console.log(res);
        // if(res['status']==="success"){
        //     SuccessToast("Request Completed");
        //     router.refresh();
        // }
        // else {
        //     ErrorToast("Invalid Request")
        // }

    }

    return (

        <div className="w-5/6 mx-auto my-5">
            <table className="w-full border-black">
                <thead>
                    <tr className="bg-green-50 font-bold text-xl">
                        <th>ID </th>
                        <th>Image </th>
                        <th>Employee Name</th>
                        <th>Designation </th>
                        <th>Country </th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item, index) => (
                        <tr key={index}
                            className="hover:bg-gray-100"
                        >
                             <td>{item['id']}</td>
                            <td>
                                {/* <Image src={item['image']} height={24} width={24} alt="employee image"></Image> */}
                                <img src={item['image']} height={48} width={56} alt="employee image"></img>
                            </td>
                            <td>{item['name']}</td>
                            <td>{item['designation']}</td>

                            <td>{item['country']}</td>
                            <td>{item['city']}</td>
                            <td>{item['salary']}</td>
                            <td>
                                <div>
                                  <button onClick={()=>onDelete(item['id'])} className="btn btn-danger btn-sm px-2">Delete</button>
                                    {/* <Link className="text-green-500 font-bold" href={"/"}>Edit</Link> */}
                                </div>
                                <div>
                                <button  className="btn btn-danger btn-sm px-2">Edit</button>
                                    {/* <Link className="text-red-400 font-bold" href={"/"}>Delete</Link> */}
                                    {/* onClick={()=>onEdit(item['id'])} */}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default LoadData;