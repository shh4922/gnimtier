
import { Link } from 'react-router-dom';
import "./header.scss"

import { currentUserStore } from '../../stores/userStore';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const { currentUser, login, logout } = currentUserStore()
    const [searchInput, setSearchInput] = useState<string>("")

    const clickLogout = () => {
        logout()
    }

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    return (
        <header>
            <nav>
                <Link to={"/"}><h1>ㄱㄴㅌ</h1></Link>
                <div className='icon-input'>
                    <input className='search' placeholder='검색하기' value={searchInput} onChange={handleSearchInput} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                </div>

                {
                    currentUser ? (
                        <button className='logout' onClick={clickLogout}>로그아웃</button>
                    ) : (
                        <Link to={"/login"} className='login'>로그인</Link>
                    )
                }
            </nav>
        </header>
    );
}

export default Header;
