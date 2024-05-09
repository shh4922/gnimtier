import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import SchoolRank from '../../pages/SchoolRank/SchoolRank';
import Profile from '../../pages/Profile/Profile';
import Index from '../../pages/Index/Index';

import "./main.scss"
import RegionSoloRank from '../../pages/RegionSoloRank/RegionSoloRank';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Index />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/regionSoloRank' element={<RegionSoloRank/>}></Route>
                <Route path='/schoolrank' element={<SchoolRank />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
