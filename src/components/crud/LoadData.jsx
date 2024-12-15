
import Link from "next/link";
import Image from "next/image";
async function getData() {
    const res = await fetch("http://localhost:3000/api/populate");

    if (!res.ok) {
        throw new Error("Data loading failed");
    }
    return res.json();
}

const LoadData = async () => {

    const data = await getData();

    return (

        <div className="w-5/6 mx-auto my-5">
            <table className="w-full border-black">
                <thead>
                    <tr className="bg-green-50 font-bold text-xl">
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

                    {data.map((item) => (
                        <tr key={item.id}
                            className="hover:bg-gray-100"
                        >
                            <td>{item.id}</td>
                            <td>
                                {/* <Image src={item['image']} height={24} width={24} alt="employee image"></Image> */}
                                <img src={item.image} height={48} width={56} alt="employee image"></img>
                            </td>
                            <td>{item['name']}</td>
                            <td>{item['designation']}</td>

                            <td>{item['country']}</td>
                            <td>{item['city']}</td>
                            <td>{item['salary']}</td>
                            <td>
                                <div>
                                    <Link className="text-green-500 font-bold" href={"/"}>Edit</Link>
                                </div>
                                <div>
                                    <Link className="text-red-400 font-bold" 
                                         href={{ usePathname: "/crud/delete", query: { id: item.id } }}
                                    >
                                            Delete
                                    </Link>
                                </div>

                                {/* <button onClick={() => handleDelete(item['id'])}
                                    className="btn btn-outline btn-error m-1">
                                    Delete
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default LoadData;