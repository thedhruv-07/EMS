import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const countTasks = (tasks, key) => {
    return tasks.filter(task => task[key]).length
  }


  const [userData, setUserData] = useContext(AuthContext)

  // 🔥 real employees array
  const employees = userData?.employees?.[0]?.employees || []

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>

      {/* Header */}
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      {employees.map((emp, idx) => (
        <div
          key={idx}
          className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'
        >
          <h2 className='w-1/5'>{emp.firstname}</h2>
          <h3 className='w-1/5 text-green-400'>
            {countTasks(emp.tasks, 'newTask')}
          </h3>

          <h5 className='w-1/5 text-yellow-400'>
            {countTasks(emp.tasks, 'active')}
          </h5>

          <h5 className='w-1/5 text-white'>
            {countTasks(emp.tasks, 'completed')}
          </h5>

          <h5 className='w-1/5 text-red-600'>
            {countTasks(emp.tasks, 'failed')}
          </h5>

        </div>
      ))}

    </div>
  )
}

export default AllTask



