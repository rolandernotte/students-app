import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StudentList from '../components/StudentList';

function HomePage(){

    const students = [
        {id: 757842, firstName: 'Basile', lastName:'Bernard'},
        {id: 757843, firstName: 'Sarah', lastName:'Carlier'},
        {id: 757844, firstName: 'Clément', lastName:'Dubois'},
    ];

    const [searchKey, setSearchKey] = useState('');

    function handleSearch(key){
        // console.log(key);
        setSearchKey(key);
    }

    const studentsToDisplay = students.filter((student) =>{
        const fullName = `${student.firstName}, ${student.lastName}`.toLowerCase();
        return fullName.includes(searchKey.toLowerCase());
    } );

    return (
        <div className="home">
            <Header text="Etudiants - EMMU3" />
            <SearchBar onSearch={handleSearch} />
            <StudentList students={studentsToDisplay} />
        </div>
    );
}

export default HomePage;