import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify"

const StudentForm = ({ addUser, editUser, updateUser }) => {
    const [input, setInput] = useState({
        name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editUser) {
            setInput(editUser);
        } else {
            setInput({
                name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
            })
        }
    }, [editUser]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (input.name.trim() === "") {
            validationErrors.name = "Please enter your name!";
        }

        if (input.email.trim() === "") {
            validationErrors.email = "Please enter your email!";
        }

        if (!input.course) {
            validationErrors.course = "Please select your course!";
        }

        if (!input.gender) {
            validationErrors.gender = "Please select your gender!";
        }

        if (input.password.trim().length <= 8) {
            validationErrors.password = "Password must be at least 8 characters!";
        }

        if (input.password !== input.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match!";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (editUser) {
            updateUser(input);
        } else {
            addUser({ ...input, id: Date.now() });
            toast.success("Form Submitted!");
        }

        setInput({
            name: "", email: "", course: "", gender: "", password: "", confirmPassword: ""
        });



    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-red-500 px-4 py-10">
            <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">


                <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12">
                    <h2 className="text-red-600 font-bold text-lg">StudentVilla</h2>
                    <h1 className="text-4xl font-bold text-black mt-2">Student Form</h1>
                    <p className="text-gray-700 mt-4">
                        Hey student! Just fill in your basic details to complete your student registration.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-10 space-y-4 w-full max-w-xl">

                        <div className='py-2'>
                            <label htmlFor="name" className="block text-[20px] font-medium text-gray-700 mb-2">Name</label>
                            <input id="name" value={input.name} onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                                type="text" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>


                        <div className='py-2'>
                            <label htmlFor="email" className="block text-[20px] font-medium text-gray-700 mb-2">Email</label>
                            <input id="email" value={input.email} onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                                type="email" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>


                        <div className='py-2'>
                            <label htmlFor="course" className="block text-[20px] font-medium text-gray-700 mb-2">Course</label>
                            <select id="course" value={input.course} onChange={handleChange}
                                className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400">
                                <option value="">Select Course</option>
                                <option value="1">Full Stack Development</option>
                                <option value="2">UI & UX Design</option>
                                <option value="3">AI & Machine Learning</option>
                            </select>
                            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
                        </div>


                        <div className='py-2'>
                            <label className="block text-[20px] font-medium text-gray-700 mb-2">Gender</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input type="radio" id="gender" name="gender" value="Male"
                                        checked={input.gender === "Male"} onChange={handleChange}
                                        className="accent-red-500" />
                                    Male
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" id="gender" name="gender" value="Female"
                                        checked={input.gender === "Female"} onChange={handleChange}
                                        className="accent-red-500" />
                                    Female
                                </label>
                            </div>
                            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                        </div>


                        <div className='py-2'>
                            <label htmlFor="password" className="block text-[20px] font-medium text-gray-700 mb-2">Password</label>
                            <input id="password" value={input.password} onChange={handleChange}
                                placeholder="Enter password" type="password"
                                className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <div className='py-2'>
                            <label htmlFor="confirmPassword" className="block text-[20px] font-medium text-gray-700 mb-2">Confirm Password</label>
                            <input id="confirmPassword" value={input.confirmPassword} onChange={handleChange}
                                placeholder="Confirm your password" type="password"
                                className="w-full p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400" />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>


                        <button type="submit"
                            className="  bg-red-500 text-white rounded-full px-7 py-2 hover:bg-red-600 transition w-fit">
                            {editUser ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="hidden lg:block w-full lg:w-1/2 bg-cover bg-center bg-no-repeat bg-image"></div>
            </div>
        </div>

    );
};

export default StudentForm;
