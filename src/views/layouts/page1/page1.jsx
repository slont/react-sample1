import React from 'react'
import ReactDOM from 'react-dom'

class Page1 extends React.Component {
  render() {
    return (
        <div>
          <div>
            <h1>Page1</h1>
          </div>
          <ul>
            <li><a href="/top/">Top</a></li>
            <li><a href="/page2/">Page2</a></li>
          </ul>
        </div>
    )
  }
}

ReactDOM.render(<Page1 />, document.getElementById('container'));