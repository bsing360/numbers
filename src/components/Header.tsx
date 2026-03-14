import "../styles/header.css"

function Header() {
  return (
    <header className="header">
      <div></div>

      <div className="header-container">
        <div className="header-image-left">
          <img src="/images/header-numbers.jpg" />
        </div>

        <div className="heading">Numbers in the Bible</div>

        <div className="header-image-right">
          <img src="/images/header-bible.jpg" />
        </div>
      </div>

      <div></div>
    </header>
  )
}

export default Header;
