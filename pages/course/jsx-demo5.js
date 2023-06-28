export default function JsxDemo4() {
  // 投影片 2.jsx 第16-17頁
  const count = 0
  let isLoggedIn = false
  return (
    <>
      <h1>JSX中使用條件渲染</h1>
      <h2>內聯if表達式 inline if(if expression)</h2>
      {/* 會出現0，因為前面是用falsy判斷，0是會呈現的數字 */}
      {count && <p>訊息是 {count}</p>}
      {/* 下面幾種是比較好的寫法，前面判斷式要一定最後運算出布林值 */}
      {count !== 0 && <p>訊息是 {count}</p>}
      {!!count && <p>訊息是 {count}</p>}
      {Boolean(count) && <p>訊息是 {count}</p>}
      <h2>三元運算子(if...else簡寫)</h2>
      {isLoggedIn ? (
        <button onClick={() => {}}>登出</button>
      ) : (
        <button onClick={() => {
            return isLoggedIn
        }}>登入</button>
      )}
    </>
  )
}
