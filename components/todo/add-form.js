import { useState } from 'react'

export default function AddForm({ handleAdd = () => {} }) {
  // 文字輸入框用狀態
  const [inputText, setInputText] = useState('')
  // 修正中文輸入法用(組字用Enter鍵時要排除掉)
  const [isCompositing, setIsCompositing] = useState(false)

  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => {
        setInputText(e.target.value)
      }}
      // 中文輸入法組字時，打開信號狀態
      onCompositionEnd={() => setIsCompositing(false)}
      onCompositionStart={() => setIsCompositing(true)}
      onKeyDown={(e) => {
        // 按下Enter鍵， 中文輸入法組字時排除Enter鍵，排除沒任何輸入情況
        if (e.key === 'Enter' && !isCompositing && e.target.value) {
          // 加入到todos列表用的狀態中
          // 傳一個props為handleAdd函式，讓setTodos(add(todos, inputText))轉變為handleAdd(inputText)
          handleAdd(inputText)

          // 清空文字輸入框
          setInputText('')
        }
      }}
    />
  )
}
