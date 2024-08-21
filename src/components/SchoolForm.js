import React, { useState } from 'react';
import axios from 'axios';
import './SchoolForm.css';

const SchoolForm = () => {
    const [school, setSchool] = useState({
        school_firstname: '',
        school_lastName: '',
        udisecode: '',
        email: '',
        phonenumber: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSchool((prevSchool) => ({
            ...prevSchool,
            [name]: value,
        }));

        
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validate = () => {
        let errors = {};

        if (!school.school_firstname.trim()) {
            errors.school_firstname = 'First Name is required';
        }
        if (!school.school_lastName.trim()) {
            errors.school_lastName = 'Last Name is required';
        }
        if (!school.udisecode) {
            errors.udisecode = 'U-DISE Code is required';
        } else if (school.udisecode.length !== 11) {
            errors.udisecode = 'U-DISE Code must be 11 digits long';
        }
        if (!school.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(school.email)) {
            errors.email = 'Email is invalid';
        }
        if (!school.phonenumber) {
            errors.phonenumber = 'Phone Number is required';
        } else if (school.phonenumber.length !== 10) {
            errors.phonenumber = 'Phone Number must be 10 digits long';
        }
        if (!school.address.trim()) {
            errors.address = 'Address is required';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Sending data:', school); 
            try {
                const response = await axios.post('http://localhost:8080/schools', school, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                alert('School added successfully!');
                console.log(response.data);

                
                setSchool({
                    school_firstname: '',
                    school_lastName: '',
                    udisecode: '',
                    email: '',
                    phonenumber: '',
                    address: '',
                });

                setErrors({});
            } catch (error) {
                console.error('There was an error saving the school!', error.response?.data || error);
            }
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <h2  style={{textAlign:"center"}}>SCHOOL FORM</h2>
            </div>
            <div>
                <input
                    type="text"
                    name="school_firstname"
                    placeholder="First Name"
                    value={school.school_firstname}
                    onChange={handleChange}
                />
                {errors.school_firstname && <span className="error">{errors.school_firstname}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="school_lastName"
                    placeholder="Last Name"
                    value={school.school_lastName}
                    onChange={handleChange}
                />
                {errors.school_lastName && <span className="error">{errors.school_lastName}</span>}
            </div>

            <div>
                <input
                    type="number"
                    name="udisecode"
                    placeholder="U-DISE Code"
                    value={school.udisecode}
                    onChange={handleChange}
                />
                {errors.udisecode && <span className="error">{errors.udisecode}</span>}
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={school.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    value={school.phonenumber}
                    onChange={handleChange}
                />
                {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
            </div>

            <div>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={school.address}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <button type="submit">Add School</button>
        </form>
    );
};

export default SchoolForm;
