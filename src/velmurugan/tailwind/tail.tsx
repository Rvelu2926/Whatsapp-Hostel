import React from 'react'

function Tail() {
  return (
    <div className=" my-5 ">
      <div className="container mx-auto mt-5 mb-1">
        <h3 className="  text-blue-800 text-center  bg-gray-300  p-0 border-4 border-solid rounded-lg">
          Complaint Form{' '}
        </h3>
      </div>
      <table className="container border-blue-400  border-4 border-solid sm:mx-auto">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Name
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Email
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Complaint
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Status
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Name
              </span>
              <img
                className="inline object-cover w-8 h-8 rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image"
              />
              <span className="pl-2"> Karthikraja </span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Email
              </span>
              kkraja@gmail.com
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Complaint
              </span>
              water problem
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Status
              </span>
              <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Actions
              </span>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline">
                Edit
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">
                Remove
              </a>
            </td>
          </tr>
          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Name
              </span>
              karthikeyan
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Email
              </span>
              kkeyan@gmail.com
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Complaint
              </span>
              power problem
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Status
              </span>
              <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Actions
              </span>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline">
                Edit
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">
                Remove
              </a>
            </td>
          </tr>
          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Name
              </span>
              Kavi
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Email
              </span>
              kavi@gmail.com
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Complaint
              </span>
              food problem
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Status
              </span>
              <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Actions
              </span>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline">
                Edit
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tail
