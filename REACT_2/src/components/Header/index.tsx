import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

interface HeaderProps {
    name: string;
}

function Header({ name }: HeaderProps) {
    const nav = useNavigate();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        nav('/');
    }

    return (
        <header className={style.header}>
            <h1>{name}</h1>
            <button onClick={() => logout()}>로그아웃</button>
        </header>
    );
}

export default Header;