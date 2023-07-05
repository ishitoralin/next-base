import { useState } from 'react'

export default function FormValidate() {
  // 初始值會是物件，物件的屬性名稱即各欄位的name屬性值
  // 初始值通常不是 `{}` 或是 null，也一定要寫
  const [member, setMember] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  // 所有欄位共用的onChange事件處理函式
  const handleFieldChange = (e) => {
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 計算得來的物件屬性名稱
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newMember = { ...member, [e.target.name]: e.target.value }
    // 設定回狀態
    setMember(newMember)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
      <h1>表單輸入與驗証</h1>
      <form>
        <div>
          <label>
            姓名:
            <input
              type="text"
              name="fullname"
              value={member.fullname}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            電子郵件:
            <input
              type="text"
              name="email"
              value={member.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            密碼:
            <input
              type="password"
              name="password"
              value={member.password}
              onChange={handleFieldChange}
            />
          </label>
          <button type="button">呈現密碼</button>
        </div>
        <div>
          <label>
            確認密碼:
            <input
              type="password"
              name="password2"
              value={member.password2}
              onChange={handleFieldChange}
            />
            <button type="button">呈現密碼</button>
          </label>
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
      </form>
    </>
  )
}
