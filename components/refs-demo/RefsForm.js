import { useRef } from 'react'

export default function RefsForm() {
  // `inputRef = { current: null }`
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current)
          console.log(inputRef.current.value)
        }}
      >
        獲得值(log)
      </button>
    </>
  )
}
