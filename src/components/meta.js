import React from "react"
import { Helmet } from "react-helmet"

export default class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            {/* <!-- Primary Meta Tags --> */}
            <title>Lauren's Art Portoflio</title>
            <meta name="title" content="Lauren's Art Portoflio"/>
            <meta name="description" content="Browse art ranging from paintings to 3D renderings of the Providence area. Lauren's Art is a portfolio full of all kinds of art."/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://chrscchrn.github.io/laurensArt/work/"/>
            <meta property="og:title" content="Lauren's Art Portoflio"/>
            <meta property="og:description" content="Browse art ranging from paintings to 3D renderings of the Providence area. Lauren's Art is a portfolio full of all kinds of art."/>
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://chrscchrn.github.io/laurensArt/work/"/>
            <meta property="twitter:title" content="Lauren's Art Portoflio"/>
            <meta property="twitter:description" content="Browse art ranging from paintings to 3D renderings of the Providence area. Lauren's Art is a portfolio full of all kinds of art."/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            <link rel="canonical" href="https://chrscchrn.github.io/laurensArt/work/" />

            <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        </Helmet>
      </div>
    )
  }
}