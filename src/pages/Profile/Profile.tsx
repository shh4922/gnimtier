import React, { useEffect, useState } from 'react';

import "./profile.scss"
import { useLocation, useParams, useSearchParams } from 'react-router-dom';


// TODO
// 경로로 쿼리스트링으로 보내도록 해야함.

function Profile() {
    
    // queryString 값 추출
    // 한글깨지는 이슈로 decodeURI 사용
    const userName = decodeURI(window.location.search) 
    useEffect(()=> {
        if(!userName) {
            alert("없는유저")
        }
        console.log(userName)
    },[])
    

    return (
        <div className="Profile">
            <section className='userInfo'>
                <img src='https://img.sbs.co.kr/newimg/news/20230922/201836925_500.jpg'></img>
                <div className='nameschool'>
                    <p>Hide on bush#kr1</p>
                    <p>이상혁 / 광주인성고</p>
                </div>
                <div>
                    {/* NOTE 
                        인스타그램 아이콘 추가
                     */}
                    <p>instagram</p>
                    <button>op.gg</button>
                </div>
                <div className='Rank'>
                    <p>강남구</p>
                    <p>1등</p>
                </div>
                <div className='Rank'>
                    <p>강남구</p>
                    <p>1등</p>
                </div>
            </section>
            
            <section className='tier'>
                <div>
                    <p>솔로랭크</p>
                    <div className='tierAndPoint'>
                        <img></img>
                        <p></p>
                    </div>
                </div>
                <div>
                    <p>자유랭크</p>
                    <div className='tierAndPoint'>
                        <img></img>
                        <p></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
