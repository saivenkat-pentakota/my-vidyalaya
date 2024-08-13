import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassList = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/classes');
                setStudents(response.data);
            } catch (error) {
                console.error('There was an error fetching the clases!', error);
            }
        };
        fetchClasses();
    }, []);

    return (
        <div>
            <h2>Classes List</h2>
            <ul>
                {classes.map((schoolClass) => (
                    <li key={schoolClass.id}>
                        {schoolClass.class_name} {schoolClass.faculty_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassList;
