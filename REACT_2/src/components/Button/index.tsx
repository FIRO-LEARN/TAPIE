import style from './style.module.scss';

interface ButtonProps {
    children: string;
    onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button className={style.button} onClick={onClick}>{children}</button>
    );
}

export default Button;