import { useEffect, useState } from 'react';
import { Header } from '../components';
import style from '../styles/home.module.scss'
import axios from 'axios';

interface Post {
    title: string;
    content: string;
    id: number;
}

function List({ title, content, id }: Post) {
    return (
        <a href={`/home/${id}`} className={style.article}>
            <h2>{title}</h2>
            <span>{content}</span>
        </a>
    )
}

function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://board.etty.dev/board/${localStorage.getItem('name')}/posts`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setData(res.data.data);
        })
    });

    return (
        <section className={style.home}>
            <Header name={localStorage.getItem('name') || ''} />
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map((post: any) => {
                    return <List title={post.title} content={post.writerUsername} id={post.id} />
                })
            }
        </section>
    );
}

export default Home;