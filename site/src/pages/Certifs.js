// Import react rendering modules.
import React from 'react'

/**
 * @name Certifs
 * @memberof React.Component
 */

export default class Certifs extends React.Component {

    /**
     * Render website view (View/Certifs page).
     * 
     * @name render
     * @param {Function} [badgeURL] A custom parameter function to return host URL.
     * @return HTML code with API data and functionality.
     */

    render(badgeURL = id => `https://hacking-with-ht.ml/kurasad/badges/${id}.png`) {
        return (
            <div className="certifs">
                <h1> Certifications

                    {/* Certifs page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(`${window.location.origin}/certifs`)}>
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

                    {/* Cell: Early Verified Discord Bot Developer. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`vbd`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> May 4, 2020

                            {/* External link SVG. */}
                            <a href="https://discord.com/users/476812566530883604" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Early Verified Discord Bot Developer </div>
                    </div>


                    {/* Cell: Oracle Autonomous Database Cloud 2019 Certified Specialist. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`ocs`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> July 8, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/5c6e091f-3751-4d62-bb26-c8898de08d8e" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Autonomous Database Cloud 2019 Certified Specialist </div>
                    </div>
                    
                    {/* Cell: Oracle Cloud Infrastructure Foundations 2020 Certified Associate. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`fca`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> July 15, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/7557280c-b03c-400c-bf1f-d6f1d2bef213" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Cloud Infrastructure Foundations 2020 Certified Associate </div>
                    </div>

                    {/* Cell: Oracle Cloud Infrastructure 2019 Cloud Operations Certified Associate. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`coca`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> July 22, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/78d756e7-49da-4375-b948-25fbbe94abae" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Cloud Infrastructure 2019 Cloud Operations Certified Associate </div>
                    </div>
                    
                    {/* Cell: Oracle Cloud Infrastructure Developer 2020 Certified Associate. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`dca`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> July 29, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/4a7d4adc-6a07-4c12-924e-11d3a236ee8d" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Cloud Infrastructure Developer 2020 Certified Associate </div>
                    </div>
                    
                    {/* Cell: Oracle Cloud Infrastructure 2019 Certified Architect Associate. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`caa`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> August 12, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/0038d38a-a16d-4be1-ac78-5ea4da221625" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Cloud Infrastructure 2019 Certified Architect Associate </div>
                    </div>
                    
                    {/* Cell: Oracle Cloud Infrastructure 2019 Certified Architect Professional. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`cap`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> August 12, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/af60a079-a56e-4103-bf14-7bc3216b8d4e" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Oracle Cloud Infrastructure 2019 Certified Architect Professional </div>
                    </div>
                    
                    {/* Cell: Introduction to Cybersecurity. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`itc`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> October 13, 2020

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/d6b0c8c2-6680-494a-aaaa-033bbf93a602" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> Introduction to Cybersecurity </div>
                    </div>
                    
                    {/* Cell: MTA: Database Fundamentals - Certified 2021. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`mdf`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> March 10, 2021

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/219cb9f9-97e0-4b8e-b7a7-ca57ad78c924" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> MTA: Database Fundamentals - Certified 2021 </div>
                    </div>
                    
                    {/* Cell: MTA: Software Development Fundamentals - Certified 2021. */}
                    <div className="cell">

                        {/* Cell image. */}
                        <div id="img"><div style={{ backgroundImage: `url(${badgeURL(`sdf`)})` }}></div></div>

                        {/* Cell tip. */}
                        <div id="tip"> April 1, 2021

                            {/* External link SVG. */}
                            <a href="https://www.credly.com/badges/af8737ef-47fb-4e25-9977-e14f33c7dc22" target="_blank" rel="noopener noreferrer">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.178 283.178" width="15px">
                                    <g>
                                        <path d={global.External.p1} />
                                        <path d={global.External.p2} />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* Cell text. */}
                        <div id="txt"> MTA: Software Development Fundamentals - Certified 2021 </div>
                    </div>
                </div>
            </div >
        )
    }
}
