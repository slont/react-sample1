import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  render() {
    return (
        <h1>Header</h1>
    )
  }
}

ReactDOM.render(
  <Header />, document.getElementById('header')
);