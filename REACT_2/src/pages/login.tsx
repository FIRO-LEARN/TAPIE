import { useState } from 'react';
import style from '../styles/auth.module.scss';
import { Button } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const nav = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        axios.post('https://board.etty.dev/login', {
            username,
            password
        }).then((res) => {
            if(res.status !== 200) {
                alert('로그인에 실패했습니다.');
            } else {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', username)
                alert('로그인에 성공했습니다.')
                nav('/home')
            }
        }).catch((err) => {
            switch (err.response.status) {
                case 401:
                    alert('올바르지 않는 계정 정보 입니다.')
                    break;
                case 400:
                    alert('요청이 잘못 됨.')
                    break;
                case 500:
                    alert('서버 오류.')
                    break;
            }
        })
    }

    return (
        <main className={style.main}>
            <label className={style.label}>아이디</label>
            <input className={style.input} type='text' onChange={(e) => setUsername(e.target.value)} />
            <label className={style.label}>비밀번호</label>
            <input className={style.input} type='password' onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
            <Button onClick={handleSubmit}>로그인</Button>
        </main>
    );
}

export default LoginPage;