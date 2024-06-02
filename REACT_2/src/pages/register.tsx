import { useState } from 'react';
import style from '../styles/auth.module.scss';
import { Button } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const nav = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        axios.post('https://board.etty.dev/register', {
            username,
            password
        }).then((res) => {
            switch (res.status) {
                case 200:
                    alert('회원가입이 완료되었습니다.')
                    nav('/login')
                    break;
                case 409:
                    alert('이미 존재하는 아이디입니다.')
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
            <Button onClick={handleSubmit}>회원가입</Button>
        </main>
    );
}

export default RegisterPage;