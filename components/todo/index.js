import { useState } from 'react'
import AddForm from './add-form'
import List from './list'

// 範例
const sample = [
  { id: 1, text: '學react', completed: false },
  { id: 2, text: '買牛奶', completed: false },
]

export default function TodoIndex() {
  // state: 物件陣列,每個成員 ex. {id:number, text:string, completed:boolean}
  const [todos, setTodos] = useState(sample)

  // type = '所有' | '進行中' | '已完成'
  const [todoFilter, setTodoFilter] = useState('所有')
  // 所有的選項
  const filterOptions = ['所有', '進行中', '已完成']

  // pure function (單純處理狀態改變)
  const add = (todos, text) => {
    // 用遞增id
    const ids = todos.map((v) => v.id)

    // 狀態 todos沒資料時定義為1
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1

    const newTodo = {
      id: newId,
      text: text,
      completed: false,
    }

    return [newTodo, ...todos]
  }

  // pure function (單純處理狀態改變) 如果有比對到v.id是id，就作切換布林值的動作
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  // pure function(單純處理狀態改變) 如果有比對到v.id是id，就作移除
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  // pure function(單純處理狀態改變) 因類型過濾
  const filterByType = (todos, type) => {
    // 以completed屬性來過濾要呈現的項目
    if (type === '進行中') return todos.filter((v) => !v.completed)
    if (type === '已完成') return todos.filter((v) => v.completed)

    //預設
    return todos
  }

  // 專門設計組合後給AddForm元件用的
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }

  // 專門設計組合後給Item元件用的
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  // 專門設計組合後給Item元件用的
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <List
        // 傳入要呈現時，改用過濾的todos，原本的todos要保持住，才能回復全部和切換不同情況
        todos={filterByType(todos, todoFilter)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
      <hr />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i} //靜態資料用索引當key是可以
            onClick={() => {
              setTodoFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}
