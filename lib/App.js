import React from 'react'


export default React.createClass({
  render() {
    return (
      <div className="text-center">
        {this.props.children}
      </div>
    )
  }
})
