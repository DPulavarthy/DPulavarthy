// Import react rendering modules.
import React from 'react'

/**
 * @name Credits
 * @memberof React.Component
 */

export default class Credits extends React.Component {
    render() {
        return (
            <div className="credits">
                <h1> Credits

                    {/* Profile page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(`${window.location.origin}/credits`)}>
                        <svg version="1.1" id="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                            <g><g><path d={global.Link.p1} /></g></g>
                            <g><g><path d={global.Link.p2} /></g></g>
                        </svg>
                    </div>
                </h1>

                {/* Title/Content divider. */}
                <hr />

                {/* Content of profile page. */}
                <div className="content">

                    {/* Data section. */}
                    <div id="data">

                        {/* Menu/Nav load time. */}
                        ❯ Navigation took <div>{((global.Load.menu - global.Load.init) / 10000).toFixed(2).toLocaleString()}ms</div> to load to site.
                        <br />

                        {/* Viewbox load time. */}
                        ❯ Viewbox took <div>{((global.Load.view - global.Load.init) / 10000).toFixed(2).toLocaleString()}ms</div> to load to site.
                        <br />

                        {/* API request load time. */}
                        ❯ Data request took <div>{((global.Load.data - global.Load.init) / 10000).toFixed(2).toLocaleString()}ms</div> to load to site.
                        <br />

                        {/* React and SCSS. */}
                        ❯ This site was build using the following:&nbsp;
                        <img src="https://hacking-with-ht.ml/kurasad/icons/react.png" alt="" width="20px" title="react" draggable="false" /> React
                        +&nbsp;
                        <img src="https://hacking-with-ht.ml/kurasad/icons/scss.png" alt="" width="20px" title="scss" draggable="false" /> SCSS
                        <br />

                        {/* Author. */}
                        ❯ Author: Dhanush Pulavarthy
                        <br />
                        <br />

                        {/* Extra links. */}
                        ❯ Extra Page / External Links:
                        <br />

                        {/* 404 Page. */}
                        &emsp;❯ 404 page: <a href={`${window.location.origin}/404`} target="_blank" rel="noopener noreferrer">{window.location.origin}/404
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Code sharing terms. */}
                        &emsp;❯ Code terms: <a href={`${window.location.origin}/terms`} target="_blank" rel="noopener noreferrer">{window.location.origin}/terms
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Invite to partner server. */}
                        &emsp;❯ Partner server: <a href={`${window.location.origin}/hv`} target="_blank" rel="noopener noreferrer">{window.location.origin}/hv
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Invite to support server. */}
                        &emsp;❯ Support: <a href={`${window.location.origin}/support`} target="_blank" rel="noopener noreferrer">{window.location.origin}/support
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Comission terms. */}
                        &emsp;❯ Comissions: <a href="https://jonin.gq/bot" target="_blank" rel="noopener noreferrer">https://jonin.gq/bot
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Donation URL. */}
                        &emsp;❯ Donate: <a href="https://www.patreon.com/jonin" target="_blank" rel="noopener noreferrer">https://www.patreon.com/jonin
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                        <br />

                        {/* Social URL. */}
                        &emsp;❯ Social: <a href="https://twitter.com/iKurasad" target="_blank" rel="noopener noreferrer">https://twitter.com/iKurasad
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                <g>
                                    <path d={global.External.p1} />
                                    <path d={global.External.p2} />
                                </g>
                            </svg>
                        </a>
                    </div>

                    {/* Image section. */}
                    <div id="image">
                        <img src="https://hacking-with-ht.ml/jonin.png" alt="" width="50%" />
                    </div>
                </div>
            </div>
        )
    }
}
