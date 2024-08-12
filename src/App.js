import React from 'react';
import SchoolForm from './components/SchoolForm';
import SchoolList from './components/SchoolList';

const App = () => {
    return (
        <div>
            <h1>My Vidyalaya</h1>
            <SchoolForm />
            <SchoolList />
        </div>
    );
};

export default App;
