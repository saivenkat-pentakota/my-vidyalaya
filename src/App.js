import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherForm from './components/TeacherForm';
import StudentForm from './components/StudentForm';
import SchoolForm from './components/SchoolForm';
import SchoolList from './components/SchoolList';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';

const App = () => {
    return (
        <Router>
            <div className='container'>
                <h1  style={{textAlign:"center"}}>My Vidyalaya</h1>
                <Routes>
                    <Route path="/school" element={<SchoolForm />} />
                    <Route path="/student" element={<StudentForm />} />
                    <Route path="/teacher" element={<TeacherForm />} />
                    <Route path="/" element={<SchoolForm />} />
                    <Route path='/schoolslist' element={<SchoolList/>}/>
                    <Route path='/teacherslist' element={<TeacherList/>}/>
                    <Route path='/schoolslist' element={<SchoolList/>}/>
                    <Route path='/studentslist' element={<StudentList/>}/>

                </Routes>
            </div>
        </Router>
    );
};

export default App;
