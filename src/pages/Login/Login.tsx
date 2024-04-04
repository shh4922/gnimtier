import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.scss"
import { useLogin } from '../../api/auth/queries';


function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

    const { mutate } = useLogin()

    const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if (!userEmail || !password) {
            alert("이메일과 비밀번호를 모두 입력하세요")
            return
        }

        mutate({ userEmail: userEmail, password: password }, {
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return (
        <div className="login">
            <div className='login-content'>
                <h2>로그인</h2>
                <p>그래서 님들학교 티어뭐임?</p>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='이메일' value={userEmail} onChange={handleUserEmail}></input>
                    <input type='password' placeholder='비밀번호' value={password} onChange={handlePassword}></input>
                    <button>로그인</button>
                </form>

            </div>
            <p className='login-footer'>
                아직도 가입을 안했다고? <Link to={"/register"}>회원가입</Link>
            </p>
        </div>
    );
}

export default Login;
