import { Fragment } from 'react'

export default function JsxDemo() {
  // 投影片 2.jsx 第8-9頁
  return (
    <>
      <h1>JSX中的值與表達式</h1>
      <h2>Number</h2>
      {123 - 99}
      {NaN}
      <h2>String</h2>
      {'abc  '}
      {`total=${100 - 5}`}
      <h2>Boolean</h2>
      {/* 不呈現 */}
      {true}
      {false}
      <h2>null</h2>
      {/* 不呈現 */}
      {null}
      <h2>undefined</h2>
      {/* 不呈現 */}
      {undefined}
      <h2>Array</h2>
      {/* 類似array.join("") */}
      {[1, 2, 3, 4]}
      {['a', 'b', 'c']}
      <h2>Object</h2>
      {/* 物件不能直接渲染，會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Functoin</h2>
      {/* 不呈現 */}
      {() => {}}
    </>
  )
}
