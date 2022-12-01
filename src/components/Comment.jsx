import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/102369431?v=4" alt="" />

      <div className={styles.commentBox}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Rafael Otavio</strong>
            <time
              title="01 de Dezembro ás 12:15h"
              dateTime="2022-11-13 11:19:35"
            >
              Cerca de 1h atrás
            </time>
          </div>

          <button title="Deletar comentário">
            <Trash size={20} />
          </button>
        </header>

        <p>Muito bom, parabéns!! 👏👏</p>
        <div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir
              <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}
