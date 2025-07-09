const UserList = ({ users, deleteUser, getEditUser }) => {
  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  const handleEdit = (user) => {
    getEditUser(user);
  };

  return (
    <div className="container mx-auto px-4 md:px-0 my-12">
      <div className="relative overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white">
        {users.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-sm text-white uppercase bg-gradient-to-r from-red-500 to-orange-400 tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4">Full Name</th>
                <th scope="col" className="px-6 py-4">Email</th>
                <th scope="col" className="px-6 py-4">Course</th>
                <th scope="col" className="px-6 py-4">Gender</th>
                <th scope="col" className="px-6 py-4">Password</th>
                <th scope="col" className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="odd:bg-white even:bg-gray-50 border-b">
                  <td className="px-6 py-3 font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-3">{user.email}</td>
                  <td className="px-6 py-3">
                    {user.course == 1
                      ? "Full Stack Development"
                      : user.course == 2
                      ? "UI & UX Design"
                      : "AI & Machine Learning"}
                  </td>
                  <td className="px-6 py-3">{user.gender}</td>
                  <td className="px-6 py-3">{user.password}</td>
                  <td className="px-6 py-3">
                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-green-600 hover:text-green-800 transition text-lg"
                        title="Edit"
                      >
                        <i className="ri-edit-box-line"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800 transition text-lg"
                        title="Delete"
                      >
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-10 text-center text-gray-500">
            <i className="ri-user-line text-5xl mb-2"></i>
            <h1 className="text-xl font-semibold">No User Data Found</h1>
            <p className="text-sm mt-1">Please add new users to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
