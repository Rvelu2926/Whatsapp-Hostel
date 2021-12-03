import React from 'react'
import './Table.scss'

export default function Table() {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <table className="w-full flex flex-row flex-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-blue-100 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Company name
              </th>
              <th className="p-3 font-bold uppercase bg-blue-100 text-gray-600 border border-gray-300 hidden lg:table-cell">
                E-mail
              </th>
              <th className="p-3 font-bold uppercase bg-blue-100 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Status
              </th>
              <th className="p-3 font-bold uppercase bg-blue-100 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Company name
                </span>
                Selva
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  E-mail
                </span>
                German
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="rounded bg-red-400 py-1 px-3 text-xs text-white font-bold">
                  deleted
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  font-bold uppercase">
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
                  Company name
                </span>
                Vetriselvan
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  E-mail
                </span>
                Schweden
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="rounded bg-green-400 py-1 px-3 text-xs text-white font-bold">
                  active
                </span>
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
                  Company name
                </span>
                Sathish kumar
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  E-mail
                </span>
                Switzerland
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="rounded bg-yellow-400 py-1 px-3 text-xs text-white font-bold">
                  inactive
                </span>
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
    </div>
  )
}
