import React, { useState } from 'react';
import axios from 'axios';
import './TeacherForm.css';

const TeacherForm = () => {
    const [teacher, setTeacher] = useState({
        teacher_firstName: '',
        teacher_lastName: '',
        subject: '',
        dob: '',
        email: '',
        phonenumber: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTeacher((prevTeacher) => ({
            ...prevTeacher,
            [name]: value,
        }));

        
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };


    const validate = () => {
        let errors = {};

        if (!teacher.teacher_firstName.trim()) {
            errors.teacher_firstName = 'First Name is required';
        }
        if (!teacher.teacher_lastName.trim()) {
            errors.teacher_lastName = 'Last Name is required';
        }
        if (!teacher.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!teacher.dob) {
            errors.dob = 'Date of Birth is required';
        }
        if (!teacher.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(teacher.email)) {
            errors.email = 'Email is invalid';
        }
        if (!teacher.phonenumber) {
            errors.phonenumber = 'Phone Number is required';
        } else if (teacher.phonenumber.length !== 10) {
            errors.phonenumber = 'Phone Number must be 10 digits long';
        }
        if (!teacher.address.trim()) {
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
                const response = await axios.post('http://localhost:8080/teachers', teacher, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                alert('Teacher added successfully!');
                console.log(response.data);

                
                setTeacher({
                    teacher_firstName: '',
                    teacher_lastName: '',
                    subject: '',
                    dob: '',
                    email: '',
                    phonenumber: '',
                    address: '',
                });

                setErrors({});
            } catch (error) {
                console.error('There was an error saving the teacher!', error.response?.data || error);
            }
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <div>
                    <h2  style={{textAlign:"center"}}>Teacher Form</h2>
                </div>
                <input
                    type="text"
                    name="teacher_firstName"
                    placeholder="First Name"
                    value={teacher.teacher_firstName}
                    onChange={handleChange}
                />
                {errors.teacher_firstName && <span className="error">{errors.teacher_firstName}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="teacher_lastName"
                    placeholder="Last Name"
                    value={teacher.teacher_lastName}
                    onChange={handleChange}
                />
                {errors.teacher_lastName && <span className="error">{errors.teacher_lastName}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={teacher.subject}
                    onChange={handleChange}
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div>
                <input
                    type="date"
                    name="dob"
                    value={teacher.dob}
                    onChange={handleChange}
                />
                {errors.dob && <span className="error">{errors.dob}</span>}
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={teacher.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={teacher.phonenumber}
                    onChange={handleChange}
                />
                {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={teacher.address}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default TeacherForm;
