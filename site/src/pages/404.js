// Import react rendering modules.
import React from 'react'

/**
 * @name Profile
 * @memberof React.Component
 */

export default class FourOFour extends React.Component {

    /**
     * Render website view (FourOFour page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div className="FourOFour">
                <h1> 404 </h1>

                {/* Title/Content divider. */}
                <hr />

                {/* Content of profile page. */}
                <div className="content">

                    {/* Image. */}
                    <img src="https://hacking-with-ht.ml/kurasad/jonin_pixel_crying.gif" alt="" />

                    {/* Title. */}
                    <h3> 404 </h3>
                    <br />

                    {/* Page data. */}
                    <h5>
                        <p>
                            The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource.
                            Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.
                            A 404 status code does not indicate whether the resource is temporarily or permanently missing.
                        </p>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404" target="_blank" rel="noopener noreferrer">
                            &nbsp;- developer.mozilla.org
                        </a>
                    </h5>
                    <br />
                </div>
            </div>
        )
    }
}
