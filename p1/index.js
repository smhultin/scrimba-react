// React is composable and declarative
// JSX = Java Script Xml

function MainContent () {
    return (
        <p>I'm learning React!</p>
    )
}

const navbar = (
  <nav>
    <h1>Sarah :)</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.getElementById("root")
)