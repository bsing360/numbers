import "../styles/header.css"

function Header() {
  return (
    <header className="header">
      <div></div>

      <div className="header-container">
        {/* Left image */}
        <div className="header-image-left">
          <img
            src={`${import.meta.env.BASE_URL}images/header-numbers.jpg`}
            alt="Numbers"
          />
        </div>

        {/* Center heading */}
        <div className="heading">Numbers in the Bible</div>

        {/* Right image */}
        <div className="header-image-right">
          <img
            src={`${import.meta.env.BASE_URL}images/header-bible.jpg`}
            alt="Bible"
          />
        </div>
      </div>

      <div></div>
    </header>
  )
}

export default Header