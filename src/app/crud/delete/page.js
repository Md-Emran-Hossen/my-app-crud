"use client"
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter()
    const { id } = router.query 
    return (
        <div>
             <h1> Value: {id}</h1>
        </div>
     
    );
};

export default Page;