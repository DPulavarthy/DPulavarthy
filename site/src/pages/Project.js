// Import react rendering modules.
import React from 'react'

/**
 * @name Project
 * @memberof React.Component
 */

export default class Project extends React.Component {
    render(projectURL = id => `url(http://hacking-with-ht.ml/kurasad/projects/${id}.png`) {
        return (
            <div className="project">
                <h1> My Projects

                    {/* Project page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(`${window.location.origin}/project`)}>
                        <svg version="1.1" id="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                            <g><g><path d={global.Link.p1} /></g></g>
                            <g><g><path d={global.Link.p2} /></g></g>
                        </svg>
                    </div>
                </h1>

                {/* Title/Content divider. */}
                <hr />

                {/* Content of certifs page. */}
                <div className="content">

                    {/* Cell: Jonin. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`jonin`), backgroundPosition: `35%` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Built with:</div> Node.JS

                            {/* External link SVG. */}
                            <a href="https://jonin.gq" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>Jonin:</h3> A multi-purpose bot for a shrine maiden at Yae Village. </div>
                    </div>

                    {/* Cell: Rita. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`rosemary`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Coming soon</div>

                            {/* External link SVG. */}
                            <a href="https://github.com/DPulavarthy/rita" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>Rosemary:</h3> Your personal Discord assistant. </div>
                    </div>

                    {/* Cell: Zoom-Reminders. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`zoom`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Built with:</div> Node.JS

                            {/* External link SVG. */}
                            <a href="https://github.com/DPulavarthy/Zoom-Reminders" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>Zoom-Reminders:</h3> System notification for zoom links. </div>
                    </div>

                    {/* Cell: discordlist.gg. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`dlist`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Role:</div> Bot Dev

                            {/* External link SVG. */}
                            <a href="https://discordlist.gg" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>dlist.gg:</h3> Find the best Discord bots and servers to upgrade your Discord experience. </div>
                    </div>

                    {/* Cell: dmod.gg. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`dmod`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Role:</div> Bot Dev

                            {/* External link SVG. */}
                            <a href="https://dmod.gg" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>dmod.gg:</h3> Discord Moderation at your fingertips. </div>
                    </div>

                    {/* Cell: endecodify. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`en-de`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Built with:</div> Node.JS

                            {/* External link SVG. */}
                            <a href="https://www.npmjs.com/package/endecodify" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>endecodify:</h3> A very basic encoder & decoder for testing purposes. </div>
                    </div>

                    {/* Cell: jonin-services. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`jonin-services`), backgroundPosition: `40%` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Built with:</div> Node.JS

                            {/* External link SVG. */}
                            <a href="https://www.npmjs.com/package/jonin-services" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>jonin-services:</h3> A cluster of recoded modules for ease of access. </div>
                    </div>

                    {/* Cell: jonin-services. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: projectURL(`homebase`) }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> <div>Built with:</div> Electron

                            {/* External link SVG. */}
                            <a href="https://github.com/HomeBase-App" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> <h3>HomeBase:</h3> Organize beyond. </div>
                    </div>
                </div>
            </div>
        )
    }
}
