
import { Link } from 'react-router-dom';
import "./header.scss"

import { currentUserStore } from '../../stores/userStore';

function Header() {
    const { currentUser, login, logout} = currentUserStore()
    
    const clickLogout = () => {
        logout() 
    }
    const logplz = () => {
        console.log(currentUser?.name)
    }
    const logplz2 = () => {
        login()
    }

    return (
        <header>
            <Link to={"/"}><h1>그래서 님 티어가</h1></Link>
            {
                currentUser ? (
                    <button className='logout' onClick={clickLogout}>로그아웃</button>
                ) : (
                    <Link to={"/login"}>로그인</Link>
                )
            }
            
            {/* <button onClick={logplz}>log</button>
            <button onClick={logplz2}>로그인ed</button> */}
        </header>
    );
}

export default Header;
