import Counter from '@/components/counter/counter'
import { useState } from 'react'

export default function CounterTest() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>Total:{total}</h1>
      <Counter value={3} setTotal={setTotal} total={total}></Counter>
      <Counter value={5} setTotal={setTotal} total={total}></Counter>
    </>
  )
}
