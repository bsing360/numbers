import { Link } from "react-router-dom"
import type { NumberEntry } from "../types/NumberEntry"

interface Props { numberEntry: NumberEntry }

function NumberCard({ numberEntry }: Props) {
  return (
    <div className="number-box">
      <Link to={`/number/${numberEntry.number}`}>
        <div className="box-header">
          <div className="box-image">
            <img src={`${import.meta.env.BASE_URL}${numberEntry.image}`} alt={`Number ${numberEntry.number}`} />
          </div>
          <div className="box-number">{numberEntry.number}</div>
        </div>
        <div className="box-text" dangerouslySetInnerHTML={{ __html: numberEntry.htmlText }} />
      </Link>
    </div>
  )
}

export default NumberCard