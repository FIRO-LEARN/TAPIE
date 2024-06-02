import axios from "axios";
import { Button, Header } from "../components";
import useCreateStore from "../store/create";
import style from '../styles/create.module.scss';
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const { title, content, setTitle, setContent } = useCreateStore();
    const nav = useNavigate();
    
    function handleSubmit() {
        axios.post(`https://board.etty.dev/board/${localStorage.getItem('name')}/posts`, {
            title,
            content
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            if(res.data.success) {
                alert('게시글이 작성되었습니다.')
                nav('/home')
            } else {
                alert('게시글 작성에 실패했습니다.')
            }
        })
    }

    return (
        <>
        <Header name={localStorage.getItem('name') || ''} />
        <main className={style.container}>
            <label className={style.label}>제목</label>
            <input type='text' className={style.input} onChange={(e) => setTitle(e.target.value)} placeholder='제목' />
            <label className={style.label}>내용</label>
            <textarea className={style.input} onChange={(e) => setContent(e.target.value)} placeholder='내용' />
            <Button onClick={() => handleSubmit()}>작성</Button>
        </main>
        </>
    );
}

export default CreatePage;