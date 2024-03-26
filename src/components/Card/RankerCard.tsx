import React, { useState } from 'react';
import "./rankcard.scss"
import { Link } from 'react-router-dom';
interface UserInfo {
    name: string,
    currentSchool: string,
    profileImage: string,
    tier: string
}
function RankerCard() {
    const myInfo: UserInfo = {
        name: "나 잡아봐랑 끼힛",
        currentSchool: "string",
        profileImage: "string",
        tier: "string"
    }
    return (
        <Link to={`/profile?${myInfo.name}`}>
            <div className='rankerCard'>
                <p className='rank'>1 ST</p>
                <div className='img-box'>
                    <img className='profile-img' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmn8AT4RnhnaXcqwumbp_llSeVXpdd-a9B9buZelWxBUfm6JSraGBTLxD4rLrpscZhSIpffA'></img>
                </div>

                <strong>나잡아봐랑끼힛#kr1</strong>
                <p className='tier'>에메랄드4</p>

                <section>
                    <div>
                        <p className='result'>56%</p>
                        <p className='result-info'>승률</p>
                    </div>
                    <div>
                        <p className='result'>5623</p>
                        <p className='result-info'>게임수</p>
                    </div>
                    <div>
                        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmn8AT4RnhnaXcqwumbp_llSeVXpdd-a9B9buZelWxBUfm6JSraGBTLxD4rLrpscZhSIpffA'></img>
                        <p className='result-info'>게임수</p>
                    </div>
                </section>
            </div>
        </Link>

    );
}

export default RankerCard;
