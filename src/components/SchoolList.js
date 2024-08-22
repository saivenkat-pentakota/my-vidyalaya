import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SchoolList.css';

const SchoolList = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await axios.get('http://localhost:8080/schools');
                setSchools(response.data);
            } catch (error) {
                console.error('There was an error fetching the schools!', error);
            }
        };
        fetchSchools();
    }, []);

    return (
        <div className="school-list-container">
            <h2 className="school-list-title">School List</h2>
            <table className="school-list-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UDISE Code</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((school, index) => (
                        <tr key={school.id}>
                            <td>{index + 1}</td> 
                            <td>{school.school_firstname}</td>
                            <td>{school.school_lastName}</td>
                            <td>{school.udisecode}</td>
                            <td>{school.email}</td>
                            <td>{school.phonenumber}</td>
                            <td>{school.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SchoolList;
