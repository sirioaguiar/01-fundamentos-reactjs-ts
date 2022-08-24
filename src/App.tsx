import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";


import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author :{
      avatarUrl: 'https://github.com/sirioaguiar.png',
      name: 'Sírio Aguiar',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Post1  de exemplo do feed'},
      { type: 'paragraph', content: 'linha2 do post1'},
      { type: 'link', content: 'https://github.com/sirioaguiar'},
    ],
    publishedAt: new Date('2022-08-17 16:48:00')
  },
  {
    id: 2,
    author :{
      avatarUrl: 'https://github.com/wagnermanko.png',
      name: 'Wagner Mengue',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Post2  de exemplo do feed'},
      { type: 'paragraph', content: 'linha2 do post2'},
      { type: 'link', content: 'https://github.com/wagnermanko'},
    ],
    publishedAt: new Date('2022-08-13 16:49:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          }) }

        </main>
      </div>
    </div>
  )
}

export default App
