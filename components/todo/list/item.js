// 導入CSS module樣式
import styles from '../todo.module.css'

export default function Item({
  id = 0,
  completed = false,
  text = '',
  handleRemove = () => {},
  handleToggleCompleted = () => {},
}) {
  return (
    <>
      {/* 在li上切換樣式 */}
      <li className={`${completed ? styles.completed : styles.active}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleToggleCompleted(id)
          }}
        />
        {text}
        <button
          onClick={() => {
            handleRemove(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}
