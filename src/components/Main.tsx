import { useState } from "react"
import numbers from "../data/numbers"
import NumberCard from "./NumberCard"
import "../styles/numbers.css"

function Main() {
  const [search, setSearch] = useState("")

  const filteredNumbers = numbers.filter((n) =>
    n.number.toString().includes(search) ||
    n.htmlText.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        placeholder="Search numbers ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <main className="main">
        {filteredNumbers.map((number) => (
          <NumberCard
            key={number.number}
            numberEntry={number}
          />
        ))}
      </main>
    </>
  )
}

export default Main