import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})


  const submitHandler = (e) => {
  e.preventDefault()

  const task = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category,
    active: true,
    newTask: true,
    failed: false,
    completed: false,
  }

  const data = JSON.parse(localStorage.getItem('employees'))

  // 🔥 real employees array
  const employeeList = data[0].employees

  employeeList.forEach((emp) => {
    if (emp.firstname.toLowerCase() === asignTo.toLowerCase()) {
      emp.tasks.push(task)

      // 🔥 update taskNumbers also
      emp.taskNumbers.total += 1
      emp.taskNumbers.newTask += 1

      console.log("Task added to:", emp)
    }
  })

  // ✅ SAVE BACK TO LOCAL STORAGE
  localStorage.setItem('employees', JSON.stringify(data))
  

  // reset form
  setTaskTitle('')
  setTaskDescription('')
  setTaskDate('')
  setCategory('')
  setAsignTo('')
}

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'  >
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev,etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
                </div>

            </form>
        </div >
    )
}

export default CreateTask