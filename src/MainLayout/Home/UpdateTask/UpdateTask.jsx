
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const[task,setTask]=useState([])
 const id=useParams()

    // useEffect(()=>{
    //     fetch(' https://job-task-projects-server.vercel.app/addData')
    //     .then(res=>res.json())
    //     .then(data=>{
      
    //        const newData=data.filter(td=>td._id === id.id)

    //        setTask(newData)
    //     })
    // },[])
// console.log(task);
const handleUpdate=e=>{
    e.preventDefault();
    const form=e.target;
    const title=form.title.value;
    const date=form.date.value;
    const status=form.categoryTask.value;
    const des=form.description.value
    const updateData={
        title,
        date,
       
        status,
        des,
    }
    console.log(updateData);
    fetch(` https://job-task-projects-server.vercel.app/updateTask/${id.id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updateData)
    })
    .then(res=>res.json())
    .then(data=>{
     form.reset()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Task Update',
        showConfirmButton: false,
        timer: 1500
      })
      
        console.log(data);
    })
}

    return (
        <div>
            <h2 className='text-center text-3xl mt-2 text-[#0d47a1] font-bold '>Update Task</h2>
            <div>
      <div className="w-full">
        <section id="contact">
          <h2 className="heading-style w-full"></h2>
          <div className=" contact__container">
            <form onSubmit={handleUpdate}>
              <input type="text" name="title" placeholder="Title" required />
              <input
                type="date"
                name="date"
                id=""
                placeholder="Status"
                required
              />
               <select name="categoryTask" className="input input-bordered">
            <option value="pending">Pending</option>
            <option value="Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
              <textarea
                name="description"
                id=""
                rows="7"
                placeholder="Description"
                required
              ></textarea>
              <input
                className="btn btn-primary"
                type="submit"
                value="Update Task"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
        </div>
    );
};

export default UpdateTask;