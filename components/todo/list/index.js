import Item from './item'

export default function List({ todos = [], ...otherProps }) {
  return (
    <ul>
      {todos.map((v) => {
        //先解構出裡面的屬性
        const { id, text, completed } = v

        // key值為必要，寫在map裡最近的return項目中
        return (
          <Item
            // 一個個分別傳入屬性，為了方便在子元件解構(編輯器提示)
            // 與子女元件最佳化重新渲染也有關
            key={id}
            id={id}
            text={text}
            completed={completed}
            {...otherProps}
          />
        )
      })}
    </ul>
  )
}
