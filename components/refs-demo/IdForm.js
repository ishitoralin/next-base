import React from 'react'

export default function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').blur()
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          console.log(document.querySelector('#my-input').value)
        }}
      >
        get value
      </button>
    </>
  )
}
