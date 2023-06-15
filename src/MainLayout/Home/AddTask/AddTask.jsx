import React from "react";
import "./addTask.css";
import Swal from "sweetalert2";
const AddTask = () => {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const status=form.categoryTask.value;
    const date=form.date.value

    const des = form.description.value;
    const newData = {
      title,
      date,
     status,
      des,
    
    };
    console.log(newData);

    fetch(" https://job-task-projects-server.vercel.app/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        form.reset()
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Task Added',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(data);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };
  return (
    <div>
      <div className="w-full">
        <section id="contact">
          <h2 className="heading-style font-bold text-[#0d47a1] w-full">Manage Task</h2>
          <div className=" contact__container">
            <form onSubmit={handleFormData}>
              <input type="text" name="title" placeholder="Title" required />
              <input type="date" name="date" placeholder="date" required />
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
                value="Add Task"
              />
             
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
