import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  render() {
    return (
        <div>
          <div>
            <h1>Header</h1>
          </div>
          <nav>
            <ul>
              <li><a href="/top">TOP</a></li>
              <li><a href="/page1">PAGE1</a></li>
              <li><a href="/page2">PAGE2</a></li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));