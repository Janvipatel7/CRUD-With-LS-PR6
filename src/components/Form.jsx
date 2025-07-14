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

        if (input.password.trim() === "" || input.password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters!";
        }

        if (input.confirmPassword.trim() !== input.password) {
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
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#FFE4D9] via-[#FFD0C0] to-[#FF725E]">
            <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row h-[120vh]">

                <div className="w-full lg:w-1/2 px-6 py-6 ">
                    <h2 className="text-red-500 font-bold text-sm">StudentVilla</h2>
                    <h1 className="text-2xl font-bold text-gray-800 mt-1">Student Form</h1>
                    <p className="text-gray-600 text-sm mt-1 mb-4">
                        Fill in your details to complete registration.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-md font-semibold text-black mb-1">Name</label>
                            <input id="name" value={input.name} onChange={handleChange}
                                placeholder="Enter name"
                                className="w-full mb-1 p-2 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                                type="text" />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md font-semibold text-black mb-1">Email</label>
                            <input id="email" value={input.email} onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full mb-1 p-2 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                                type="email" />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="course" className="block text-md font-semibold text-black mb-2">Course</label>
                            <select id="course" value={input.course} onChange={handleChange}
                                className="w-full mb-1 p-2 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400">
                                <option value="">Select Course</option>
                                <option value="1">Full Stack Development</option>
                                <option value="2">UI & UX Design</option>
                                <option value="3">AI & Machine Learning</option>
                            </select>
                            {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
                        </div>
                        <div>
                            <label className="block text-md font-semibold text-black mb-1">Gender</label>
                            <div className="flex gap-4 text-sm mb-1">
                                {["Male", "Female"].map((gender) => (
                                    <label key={gender} className="flex items-center gap-1">
                                        <input type="radio" name="gender" value={gender} checked={input.gender === gender}
                                            onChange={handleChange} id="gender"
                                            className="accent-red-500" />
                                        {gender}
                                    </label>
                                ))}
                            </div>
                            {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-semibold text-black mb-1">Password</label>
                            <input id="password" type="password" value={input.password} onChange={handleChange}
                                placeholder="Min 8 characters"
                                className="w-full mb-1 p-2 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-md font-semibold text-black mb-1">Confirm Password</label>
                            <input id="confirmPassword" type="password" value={input.confirmPassword} onChange={handleChange}
                                placeholder="Re-enter password"
                                className="w-full mb-1 p-2 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
                            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                        </div>
                        <button type="submit"
                            className="mt-2 bg-red-500 text-white text-sm rounded-full px-5 py-2 hover:bg-red-600 transition-all">
                            {editUser ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center p-4">
                    <img src="/Images/Forms-pana.png" alt="Form illustration" className="max-h-[85vh] object-contain" />
                </div>
            </div>
        </div>


    );
};

export default StudentForm;
