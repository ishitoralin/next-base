import { useState } from 'react'
import Parent from './parent'
import ThemeContext from '@/context/theme-context'

export default function GrandParent() {
  const [color, setColor] = useState('green')
  return (
    <ThemeContext.provider value={(color,setColor)}>
      <h1>Grandparent</h1>
      <Parent />
    </ThemeContext.provider>
  )
}
