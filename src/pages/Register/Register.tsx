import React, { useState } from 'react';

import "./register.scss"
function Register() {
    const [userId, setUserId] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    // NOTE 
    // 디바운스로 수정해야함.
    const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value)
    }
    const handlePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

    return (
        <div className="register">
            <section className='register-left'>
                <strong>그님티 멤버 ID를 <br></br>생성하세요</strong>
                <p>당신의 학교의 티어를 빛낼 그님티에 오신것을 환영합니다. 등록후 학교를 빛내보세요</p>
            </section>

            <section className='register-right'>
                <input placeholder='아이디' value={userId} onChange={handleUserId}></input>
                <input type='password' placeholder='비밀번호' value={password1} onChange={handlePassword}></input>
                <input type='password' placeholder='비밀번호확인' value={password2} onChange={handlePassword2}></input>
                <button>회원가입</button>
            </section>
        </div>
    );
}

export default Register;
