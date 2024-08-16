import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
    const [student, setStudent] = useState({
        student_firstname: '',
        student_lastname: '',
        studentId: '',
        email: '',
        phonenumber: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let errors = {};

        if (!student.student_firstname.trim()) {
            errors.student_firstname = 'First Name is required';
        }
        if (!student.student_lastname.trim()) {
            errors.student_lastname = 'Last Name is required';
        }
        if (!student.studentId.trim()) {
            errors.studentId = 'Student ID is required';
        }
        if (!student.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(student.email)) {
            errors.email = 'Email is invalid';
        }
        if (!student.phonenumber) {
            errors.phonenumber = 'Phone Number is required';
        } else if (student.phonenumber.length !== 10) {
            errors.phonenumber = 'Phone Number must be 10 digits long';
        }
        if (!student.address.trim()) {
            errors.address = 'Address is required';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/students', student, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                alert('Student added successfully!');
                console.log(response.data);

                
                setStudent({
                    student_firstname: '',
                    student_lastname: '',
                    studentId: '',
                    email: '',
                    phonenumber: '',
                    address: '',
                });

                setErrors({}); 
            } catch (error) {
                console.error('There was an error saving the student!', error.response?.data || error);
            }
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="student_firstname"
                    placeholder="First Name"
                    value={student.student_firstname}
                    onChange={handleChange}
                />
                {errors.student_firstname && <span className="error">{errors.student_firstname}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="student_lastname"
                    placeholder="Last Name"
                    value={student.student_lastname}
                    onChange={handleChange}
                />
                {errors.student_lastname && <span className="error">{errors.student_lastname}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="studentId"
                    placeholder="Student ID"
                    value={student.studentId}
                    onChange={handleChange}
                />
                {errors.studentId && <span className="error">{errors.studentId}</span>}
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={student.phonenumber}
                    onChange={handleChange}
                />
                {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={student.address}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
