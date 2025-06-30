
const UserList = ({ users , deleteUser ,  getEditUser }) => {

  const handleDelete = (userId) => {
      deleteUser(userId);
  }

  const  handleEdit = (user) => {
     getEditUser(user);
  }

  return (
    <div className='container mx-auto  md:px-0 px-10 my-12'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {
          users.length > 0 ? <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md text-gray-900 uppercase bg-gradient-to-r from-red-400 to-orange-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, idx) => {
                return <tr key={user.id} className="odd:bg-white  even:bg-gray-50 text-black border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.course == 1 ? "Full Stack Development" : user.course == 2 ? "UI & UX Design" : "AI & Machine Learning"}
                  </td>
                  <td className="px-6 py-4">
                    {user.gender}
                  </td>
                  <td className="px-6 py-4">
                    {user.password}
                  </td>
                  <td className="px-6 py-4 flex gap-4">
                    <button href="#" className="font-medium text-xl text-green-600 "
                       onClick={() => handleEdit(user)}>
                           <i className="ri-edit-box-line"></i>
                    </button>
                    <button href="#" className="font-medium text-xl text-red-600 "
                        onClick={() => handleDelete(user.id)}>
                          <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table> :  <div className="p-5 text-xl font-bold text-center text-gray-600"> 
                      <h1> No User Data Available Add New....</h1>
                    </div>
        }
      </div>
    </div>
  )
}

export default UserList