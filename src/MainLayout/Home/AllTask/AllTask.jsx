import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete,MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
const AllTask = () => {
  const [task, setTask] = useState([]);
const [reload,setReload]=useState(true)
  useEffect(() => {
    fetch(" https://job-task-projects-server.vercel.app/addData")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
      });
  }, [reload]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://job-task-projects-server.vercel.app/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
              setReload(!reload)
            }
          });
      }
    });
  };


  
  const handleStatus=id=>{
    fetch(` https://job-task-projects-server.vercel.app/task/${id}`,{
      method:'PATCH',
      headers:{
          'content-type': 'application/json'
      },
      body:JSON.stringify({status:"approved"})
    })
    .then(res=>res.json())
    .then(data=>{
  
      if(data.modifiedCount > 0){
          //  update state 
        setReload(!reload)
      }
    })
    }
  return (
    <div>
        <h1 className="text-3xl font-bold mb-3 text-center mt-5">All Task</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Approved Action</th>
              <th>Delete Action</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {task.map((td,index) => (
              <>
                <tr>
                  <th>{index+1}</th>
                  <td>{td.title}</td>
                  <td>{td.date}</td>
                  <td>{td.des}</td>
                  <td>{td.status}</td>
                  <th>
                 {td.status ==='approved'? <span className= "rounded-lg p-2 bg-[#70e000]  btn-xs">approved</span> :<button onClick={()=>handleStatus(td._id)} className=" rounded-lg bg-[#70e000] btn-xs">
                    {td.status}
                  </button>}
                </th>

                  <td>
                    <button
                      onClick={() => handleDelete(td?._id)}
                      className="bg-[#ff758f] hover:bg-[#ca1551] p-2 rounded-lg font-bold"
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <td className="btn mt-2 flex items-center  btn-sm text-black bg-purple-500">
                    <Link to={`/updateTask/${td._id}`}><MdOutlineUpdate/></Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
