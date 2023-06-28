import React from 'react'

export default function JsxTest() {

  // 並列的元素需要用<></>包覆
  const ele1 = (
    <>
      <div>JsxTest</div>
      <div>line2</div>
    </>
  )

  // 可用div包覆並列的元素，但仍建議使用<></>
  const ele2 = (
    <div>
      <div>JsTest</div>
      <div>line2</div>
    </div>
  )
  return <>{ele2}</>
}
