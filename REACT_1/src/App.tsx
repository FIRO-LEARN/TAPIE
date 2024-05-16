import { useEffect, useState } from 'react'
import './App.css'

function Post({ id }: { id: number }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        setData(json.title);
        setLoading(false);
      })
  });
  
  return (
    <span>{loading ? 'loading' : data}</span>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  )
}

function App() {
  return (
    <>
      <div className='container'>
        <Counter />
        <Post id={1} />
      </div>
    </>
  )
}

export default App
