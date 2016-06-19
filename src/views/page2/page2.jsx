import React from 'react'
import ReactDOM from 'react-dom'

class Page2 extends React.Component {
  render() {
    return (
        <div>
          <div>
            <h1>Page2</h1>
          </div>
          <ul>
            <li><a href="http://localhost:3000/top/">Top</a></li>
            <li><a href="http://localhost:3000/page1/">Page1</a></li>
          </ul>
        </div>
    )
  }
}

ReactDOM.render(
    <Page2 />, document.getElementById('container')
);