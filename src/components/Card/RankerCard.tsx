import { useNavigate } from 'react-router-dom';
import "./rankcard.scss"

interface UserInfo {
    name: string,
    currentSchool: string,
    profileImage: string,
    tier: string
}

function RankerCard() {
    const navigator = useNavigate()

    const myInfo: UserInfo = {
        name: "나 잡아봐랑 끼힛",
        currentSchool: "string",
        profileImage: "string",
        tier: "string"
    }

    const moveToProfile = () => {
        navigator(`/profile?${myInfo.name}`)
    }

    return (
        <article className='rankerCard' onClick={moveToProfile}>
            <p className='rank'>1 ST</p>
            <div className='circle-iconbox'>
                <img className='profile-icon' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmn8AT4RnhnaXcqwumbp_llSeVXpdd-a9B9buZelWxBUfm6JSraGBTLxD4rLrpscZhSIpffA' alt='프로필아이콘'></img>
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
                    <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmn8AT4RnhnaXcqwumbp_llSeVXpdd-a9B9buZelWxBUfm6JSraGBTLxD4rLrpscZhSIpffA' alt='포지션 이미지'></img>
                    <p className='result-info'>게임수</p>
                </div>
            </section>
        </article>
    );
}

export default RankerCard;
