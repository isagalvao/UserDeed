import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/102769431?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Isabelle Galvão</strong>
            <span>Futura Dev</span>
          </div>
        </div>

        <time title="13 de Novembro ás 11:19h" dateTime="2022-11-13 11:19:35">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz e
          se chama To Do List!🚀
        </p>
        <p>
          <a href="https://to-do-list-isagalvao.vercel.app/">
            👉 https://to-do-list-isagalvao.vercel.app/
          </a>{' '}
        </p>
        <p>
          <a href="">#novoprojeto </a> <a href="">#github </a>{' '}
          <a href="">#react</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
