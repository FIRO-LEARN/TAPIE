import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import style from '../styles/first.module.scss';
import { IoIosArrowForward } from "react-icons/io";

function FirstPage() {
    const nav = useNavigate();

    return (
        <main className={style.home}>
            <Button onClick={() => nav('login')}>로그인</Button>
            <div onClick={() => nav('register')} className={style.register}>
                <span>회원가입 하기</span>
                <IoIosArrowForward />
            </div>
        </main>
    );
}

export default FirstPage;