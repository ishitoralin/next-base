import { useState } from 'react'

function Menu() {
  const [Change, setChange] = useState('首頁')
  const mark = ['關於我們', '首頁', '產品']
  return (
    <>
      <ul>
        {mark.map((v, i) => {
          return (
            <li key={i}>
              <a
                href="#/"
                onClick={() => {
                  setChange(v)
                }}
                className={Change === v ? 'active' : ''}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
      <style>{`
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        ul li a {
          text-decoration: none;
          background-color: #000;
          color: #fff;
          padding: 10px 20px;
          font-weight: bold;
        }

        ul li a:hover {
          background-color: lightgreen;
          color: #fff;
        }

        .active {
          background-color: blue;
          color: #fff;
        }
      `}</style>
    </>
  )
}

export default Menu
