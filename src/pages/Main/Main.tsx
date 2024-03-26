import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RankerCard from '../../components/Card/RankerCard';
import SchoolRank from '../SchoolRank/SchoolRank';
import Profile from '../Profile/Profile';


function Main() {
    return (
        <main>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/schoolrank' element={<SchoolRank />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/' element={<RankerCard />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
