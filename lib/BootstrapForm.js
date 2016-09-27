import React from 'react'


export default React.createClass({

  getInitialState: function() {
    return {id: ''}
  },

  handleChange: function(e) {
    this.setState({id: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var id = this.state.id.trim()
    if (!id) {
      return
    }
    this.props.onSubmit({id: id})
  },

  render: function() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>

        <input
          type="text"
          placeholder={this.props.isInfoHash ? 'torrent info hash' : 'btc address'}
          className="form-control input-lg"
          style={{maxWidth: '600px'}}
          value={this.state.id}
          onChange={this.handleChange}
          required
        />

        <br />

        <input type="submit" value="Go!" className="btn btn-primary btn-lg" style={{marginTop: '10px'}} />
      </form>
    )
  }
})