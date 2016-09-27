import React from 'react'
import Web2Web from 'web2web-lib'


export default React.createClass({

  componentDidMount: function() {
    var web2web = new Web2Web()
    web2web.bootstrap(this.props.params.id)
  },

  render: function() {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
        {/*<p>{this.props.params.id}</p>*/}
        <p>This may take a minute or two.</p>
        <h1><i className="fa fa-cog fa-spin"></i></h1>
      </div>
    )
  }
})
