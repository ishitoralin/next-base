import { Fragment } from 'react'
// @ 相當於專案根目錄
// 導入後會轉為styles物件值
import styles from '@/styles/jsx-demo2.module.css'

export default function JsxDemo2() {
  // 投影片 2.jsx 第12頁
  return (
    <>
      <h1 className="title">JSX中的值與表達式</h1>
      {/* 使用style要小心，必需為物件值，盡可能不要使用它或轉為css(css module)再導入 */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="/next.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* 使用樣式時要用物件的屬性來套用 */}
          <h5 className={`card-title ${styles.test}`}>Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}
