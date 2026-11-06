import "../styles/Header.css"

function Header({ theme, toggleTheme }) {
    
    return (
        <>
         {/* header section */}
      <header className='app-header'>
        <div className='logo'>
          <span className='logo-icon'>✔️</span>
          <h2>Task Maintainer</h2>
        </div>

        <button 
          className='theme-toggle'
          onClick={toggleTheme}
          aria-label='Toggle Theme'
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </header>
        </>
    )
     
   
}

export default Header;