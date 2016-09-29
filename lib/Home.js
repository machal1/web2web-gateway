import React from 'react'
import { Link } from 'react-router'
import BootstrapForm from './BootstrapForm'


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleBootstrapFormSubmit: function(formValues) {
    this.context.router.push('/' + formValues.id)
  },

  render: function() {
    return (
      <div>

        <h1>Create your own distributed webpage!</h1>
        <p>
          First-timer? Take a look at the original <a href="https://elendirx.github.io/web2web/">web2web</a> concept.
        </p>

        <h3>1. Create your webpage</h3>
        <p>Your webpage should be represented by one single html file.</p>

        <h3>2. Seed a torrent of your webpage</h3>
        <p>Download <a href="https://webtorrent.io/desktop/">Webtorrent</a>. Create a torrent of the html file and start seeding it.</p>

        <h3>3. Magic!</h3>
        <p>
          Copy the torrent info hash and paste it here.
          <br />
          Or just try the sample info hash <Link to="/acaa4ece96da0e31f2bd7f1e4d82f4e1317e2af7">acaa4ece96da0e31f2bd7f1e4d82f4e1317e2af7</Link>.
        </p>

        <BootstrapForm onSubmit={this.handleBootstrapFormSubmit} isInfoHash={true} />


        <h1>Update it!</h1>
        <p>
          Ok, so you created your distributed webpage. Good job!
          <br />
          Now imagine you want to make changes to it. You'd repeat steps 1-3 and get the new url.
          <br />
          But what if you wanted the url to stay the same even if the webpage gets updated?
        </p>

        <h3>4. Link the webpage to a bitcoin address</h3>
        <p>
          Get your bitcoin address ready.
          <br />
          Create outgoing transaction that contains your webpage torrent info hash in the <a href="https://en.bitcoin.it/wiki/OP_RETURN">OP_RETURN</a> script.
          <br />
          This is the hard part. You'll have to do it manually (there's a <a href="http://www.alexleishman.com/posts/op-return-transactions">ruby script</a> to give you the idea).
        </p>

        <h3>5. Blockchain magic!</h3>
        <p>
          Your webpage will be loaded from the latest bitcoin transaction. Paste your bitcoin address below.
          <br />
          Or just try the sample btc address <Link to="/1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4">1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4</Link>.
        </p>

        <BootstrapForm onSubmit={this.handleBootstrapFormSubmit} />


        <hr />

        <h2>Mirrors</h2>
        <p>
          <a href="https://elendirx.github.io/web2web-gateway">elendirx.github.io/web2web-gateway</a>
          <br />
          <a href="https://elendir.gitlab.io/w2w">elendir.gitlab.io/w2w</a>
          <br />
          <a href="https://w2w.me">w2w.me</a>


          <br />
          <br />
          It's super-easy to run your own mirror. Grab the <a href="https://github.com/elendirx/web2web-gateway">source code (github)</a>.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
})
