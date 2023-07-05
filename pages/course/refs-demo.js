import React from 'react'
import IdForm from '@/components/refs-demo/IdForm'
import RefsForm from '@/components/refs-demo/RefsForm'

export default function Refs() {
  return (
    <>
      <h1>Refs demo</h1>
      <IdForm></IdForm>
      <IdForm></IdForm>
      <hr />
      <RefsForm></RefsForm>
      <RefsForm></RefsForm>
    </>
  )
}
