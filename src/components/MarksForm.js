import React, { useState } from 'react';
import axios from 'axios';

const MarksForm = () => {
    const [marks, setMarks] = useState({
        student_id: '',
        parent_id:'',
        teacher_id:'',
        sub1_marks:'',
        sub2_marks:'',
        sub3_marks:'',
        sub4_marks:'',
        sub5_marks:'',
        sub6_marks:'',
        total_marks:'',
        percentage:'',
        grade:''
    });

    const handleChange = (e) => {
        setMarks({
            ...marks,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/markslist', attendance);
            alert('marks added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the marks!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="student_id"
                placeholder="Student Id"
                value={marks.student_id}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="parent_id"
                placeholder="Parent Id"
                value={marks.parent_id}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="teacher_id"
                placeholder="Teacher Id"
                value={marks.teacher_id}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub1_marks"
                placeholder="Sub1 Marks"
                value={marks.sub1_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub2_marks"
                placeholder="Sub2 Marks"
                value={marks.sub2_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub3_marks"
                placeholder="Sub3 Marks"
                value={marks.sub3_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub4_marks"
                placeholder="Sub4 Marks"
                value={marks.sub4_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub5_marks"
                placeholder="Sub5 Marks"
                value={marks.sub5_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="sub6_marks"
                placeholder="Sub6 Marks"
                value={marks.sub6_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="total_marks"
                placeholder="Total Marks"
                value={marks.total_marks}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="percentage"
                placeholder="Percentage"
                value={marks.percentage}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="grade"
                placeholder="Grade"
                value={marks.grade}
                onChange={handleChange}
                required
            />
            
            <button type="submit">Add Marks</button>
        </form>
    );
};

export default MarksForm;
