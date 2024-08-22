import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MarksList.css'; // Import the CSS file

const MarksList = () => {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        const fetchMarks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/marks');
                setMarks(response.data);
            } catch (error) {
                console.error('There was an error fetching the marks!', error);
            }
        };
        fetchMarks();
    }, []);

    return (
        <div className="marks-list-container">
            <h2 className="marks-list-title">Marks List</h2>
            <ul>
                {marks.map((marks) => (
                    <li key={marks.id} className="marks-list-item">
                        {marks.student_id} {marks.parent_id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarksList;
