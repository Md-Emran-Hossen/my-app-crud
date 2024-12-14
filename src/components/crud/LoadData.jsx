import Link from "next/link";

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

        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr className="bg-green-50 font-bold text-xl">
                        <th>Employee Name</th>
                        <th>Designation </th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item) => (
                        <tr key={item.i}
                            className="hover:bg-gray-100"
                        >
                            <td>{item['name']}</td>
                            <td>{item['designation']}</td>
                            <td>{item['city']}</td>
                            <td>{item['salary']}</td>
                            <td>
                                <Link href={"/"}>Delete</Link>
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