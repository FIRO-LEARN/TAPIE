import { Header } from "../components";
import { useParams } from "react-router-dom";
import style from '../styles/post.module.scss';
import { useEffect } from "react";
import usePostStore from "../store/getPost";
import axios from "axios";

function PostDetailPage() {
    const { title, content, author, setTitle, setContent, setAuthor } = usePostStore();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://board.etty.dev/board/${localStorage.getItem('name')}/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setTitle(res.data.data.title);
            setContent(res.data.data.content);
            setAuthor(res.data.data.writerUsername);
        })
    });

    return (
        <>
        <Header name={localStorage.getItem('name') || ''} />
        <main className={style.container}>
            <h1>{title}</h1>
            <span>{author}</span>
            <p>{content}</p>
        </main>
        </>
    );
}

export default PostDetailPage;