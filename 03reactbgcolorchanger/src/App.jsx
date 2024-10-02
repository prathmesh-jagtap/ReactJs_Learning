import { useState } from 'react'
import './App.css'

const colors = [
  { name: 'Red', value: 'red' },
  { name: 'Green', value: 'green' },
  { name: 'Blue', value: 'blue' },
  { name: 'Grey', value: 'grey' },
  { name: 'Orange', value: 'orange' },
  { name: 'Purple', value: 'purple' },
  { name: 'Brown', value: 'brown' },
  { name: 'Black', value: 'black' },
  { name: 'Olive', value: 'olive' },
  { name: 'Cyan', value: 'cyan' },
]

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color.value} // here key prop to the button element to help React keep track of the elements key prop should be unique
              onClick={() => setColor(color.value)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: color.value }}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App