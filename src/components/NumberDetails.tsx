import { useParams, Link } from "react-router-dom"
import numbers from "../data/numbers"
import "../styles/numberDetails.css";

function NumberDetails() {
  const { numberId } = useParams<{ numberId: string }>()
  const number = numbers.find((n) => n.number.toString() === numberId)

  if (!number) return <div>Number not found</div>

  return (
    <div className="number-details">
      <Link to="/">← Back to grid</Link>
      <h1>{number.number}</h1>
      <img src={number.image} alt={`Number ${number.number}`} />
      <div dangerouslySetInnerHTML={{ __html: number.htmlText }} />
    </div>
  )
}

export default NumberDetails