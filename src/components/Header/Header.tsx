import "./header.scss"
import { Link, useLocation } from 'react-router-dom';
import { currentUserStore } from '../../stores/userStore';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { authStore } from "../../stores/authStore";

function Header() {
    const { currentUser, login, logout } = currentUserStore()
    const [searchInput, setSearchInput] = useState<string>("")
    const location = useLocation()
    const { token } = authStore()

    useEffect(() => {
        console.log(location.pathname)
    }, [])
    const clickLogout = () => {
        logout()
    }

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    return (
        <header>
            <div className="header-content">
                <Link to={"/"}><h1>ㄱㄴㅌ?</h1></Link>
                {
                    location.pathname === "/login" ? (
                        null
                    ) : (
                        <div className='icon-input'>
                            <input className='search' placeholder='검색하기' value={searchInput} onChange={handleSearchInput} />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                        </div>

                    )
                }
                {
                    location.pathname !== "/login" && (
                        token?.accessToken ? (
                            <button className='logout' onClick={clickLogout}>로그아웃</button>
                        ) : (
                            <Link to={"/login"} className='login'>로그인</Link>
                        )
                    )
                }
            </div>
        </header>
    );
}

export default Header;
