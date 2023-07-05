import { useState, Fragment } from 'react'

export default function Html5Form() {
  const [inputText, setInputText] = useState('')
  const [Textarea, setTextarea] = useState('')
  const [food, setFood] = useState('')
  const foodOptions = ['漢堡', '薯條', '可樂']
  const [city, setCity] = useState('')
  const cityOptions = ['TPE', 'CTS', 'HKD']
  const [fortress, setFortress] = useState('')
  const fortressOptions = ['food', 'lesson', 'equipment', 'products']
  const [agree, setAgree] = useState(false)
  const fruitOptions = ['咖波', '奶泡貓', '阿虎', '阿貓']
  const [likeList1, setlikeList1] = useState(['咖波'])
  const [likeList2, setLikeList2] = useState(
    fruitOptions.map((v, i) => {
      return { id: i, value: v, checked: false }
    })
  )
  return (
    <>
      <section id="input-text">
        <h2>input block</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>input block</h2>
        <textarea
          value={Textarea}
          onChange={(e) => {
            setTextarea(e.target.value)
          }}
        />
      </section>
      <section id="radio">
        <h2>radio</h2>
        {foodOptions.map((v, i) => {
          return (
            <Fragment key={i}>
              <input
                type="radio"
                value={v}
                checked={food === v}
                onChange={(e) => {
                  setFood(e.target.value)
                }}
              />
              <label>{v}</label>
            </Fragment>
          )
        })}
      </section>
      <section id="select">
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          <option value="">choose your city</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
      <div id="select">
        <select
          value={fortress}
          onChange={(e) => {
            setFortress(e.target.value)
          }}
        >
          {fortressOptions.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            )
          })}
        </select>
      </div>
      <section id="checkBoxSingle">
        <label>
          <h2>同意嗎(checkBoxSingle)</h2>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked)
            }}
          />
          同意嗎
        </label>
      </section>
      <section id="checkbox-group-1">
        <h2>核取方塊群組-1(checkbox-group-1)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList1.includes(v)}
                onChange={(e) => {
                  const targetValue = e.target.value

                  // 先判斷是否有在state陣列(likeList1)中
                  if (likeList1.includes(targetValue)) {
                    // 如果 有 在state陣列中 -> 從state陣列移除
                    // 從陣列刪除這值 = 回傳一個新陣列，裡面不包含這值
                    const newlikeList1 = likeList1.filter(
                      (v2) => v2 !== targetValue
                    )

                    setlikeList1(newlikeList1)
                  } else {
                    // 如果 沒有 在state陣列中 -> 加入到state陣列
                    setlikeList1([...likeList1, targetValue])
                  }
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="checkbox-group-2">
        <h2>核取方塊群組-2(checkbox-group-2)</h2>
        {likeList2.map((v) => {
          const { id, value, checked } = v

          return (
            <label key={id}>
              <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={() => {
                  const newLikeList2 = likeList2.map((v2) => {
                    if (v2.id === id) return { ...v2, checked: !v2.checked }
                    else return { ...v2 }
                  })

                  setLikeList2(newLikeList2)
                }}
              />
              {value}
            </label>
          )
        })}
      </section>
    </>
  )
}
