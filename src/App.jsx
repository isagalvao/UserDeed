import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isabelle Galvão"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat tempora, explicabo tempore suscipit, illum eligendi fugiat temporibus veniam voluptatum laboriosam earum, molestias maiores quidem illo iusto enim! Maiores, eos?"
          />

          <Post author="Rafael Fernandes" content="Post maneiro" />
        </main>
      </div>
    </div>
  )
}
