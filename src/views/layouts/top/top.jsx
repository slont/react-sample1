import React from 'react'
import ReactDOM from 'react-dom'

class Top extends React.Component {
  render() {
    return (
        <div>
          <div>
            <h1>Top</h1>
          </div>
          <ul>
            <li><a href="page1">Page1</a></li>
            <li><a href="page2">Page2</a></li>
          </ul>
        </div>
    )
  }
}

ReactDOM.render(<Top />, document.getElementById('container'));