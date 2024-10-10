"use client"
import { useState } from 'react';
import TaskCard from './TaskCard';

interface Task {
  id:number;
  title : string;
  description : string;
  date:string;
  status : 'Completed' | 'Incomplete';

}

const TaskList = () => {

  const [tasks,setTasks] =useState<Task[]>([
    { 
      id:0,
      title: 'Update Passwords',
      description: 'Review online accounts and update passwords for better security.',
      date: '13/10/2023',
      status: 'Completed',
    },
    { 
      id:1,
      title: 'Watch a video from Fireship',
      description: 'Enroll in that Weird JavaScript Course by Fireship.',
      date: '10/11/2023',
      status: 'Incomplete',
    },
    {
      id:2,
      title: 'Dentist Appointment',
      description: 'Schedule a 6-month check-up with the dentist.',
      date: '25/10/2023',
      status: 'Completed',
    },
    {
      id:3,
      title: 'Plant New Flowers',
      description: 'Buy a variety of flower seeds or bulbs.',
      date: '29/10/2023',
      status: 'Incomplete',
    },
  ])

   // Function to update a specific task
   const updateTask = (id: number, updatedTitle: string, updatedDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle, description: updatedDescription }
          : task
      )
    );
  };

  //new state managemenet function1
  const handleInputChange = (id:number, field:'title'| 'description', value:string) =>{
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task,[field]:value}:task))
  }

  //function to add new tasks

  const addNewTasks = () =>{
    const newTask: Task = {
      id:tasks.length>0 ? Math.max(...tasks.map(task => task.id)) + 1 :0,
      title:'New Task',
      description:'Add description ...',
      date: new Date().toLocaleDateString(), // Assigning current date
      status: 'Incomplete', // Default status
    };
    setTasks((prevTasks)=>[...prevTasks,newTask])
  }

 

  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  //     {tasks.map((task, index) => (
  //       <TaskCard key={task.id}
  //       title={task.title}
  //       description={task.description}
  //       date={task.date}
  //       status={task.status}
  //      // Pass update function as a prop to TaskCard
  //      onUpdate={(updatedTitle, updatedDescription) =>
  //       updateTask(task.id, updatedTitle, updatedDescription)
  //     }

  //       />
  //     ))}
  //     <div 
  //     onClick={addNewTasks}
  //     className="p-4 border-2
  //      border-dashed rounded-lg flexjustify-center items-center cursor-pointer">
  //       Add New Task
  //     </div>
  //   </div>
  // );


  //1
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map(task => (
           <TaskCard key={task.id}
                 title={task.title}
                 description={task.description}
                 date={task.date}
                 status={task.status}
         onChange={e => handleInputChange(task.id, 'title', e.target.value)}
       />
      ))}

       <div 
      onClick={addNewTasks}
      className="p-4 border-2
       border-dashed rounded-lg flexjustify-center items-center cursor-pointer">
        Add New Task
      </div>
    </div>
  )
};

export default TaskList;
