import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>School List</h2>
            <ul>
                {schools.map((school) => (
                    <li key={school.id}>
                        {school.school_firstname} {school.school_lastName} - {school.udisecode} - {school.email} - {school.phonenumber} - {school.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolList;
