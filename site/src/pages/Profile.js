// Import react rendering modules.
import React from 'react'

/**
 * @name Profile
 * @memberof React.Component
 */

export default class Profile extends React.Component {

    /**
     * Render website view (View/Profile page).
     * 
     * @name render
     * @param {Function} [flags] A custom parameter function to return user Discord badges.
     * @return HTML code with API data and functionality.
     */

    render(flags = badges => badges.map(flag => flag.replace(/_/g, ` `).split(` `).map(arg => `${arg.slice(0, 1)}${arg.slice(1).toLowerCase()}`).join(` `)).join(`, `)) {
        return (
            <div className="profile">
                <h1> My Profile

                    {/* Profile page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(window.location.origin)}>
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

                    {/* Profile overview section. */}
                    <div id="icon">

                        {/* Profile picture. */}
                        <img id="pfp" draggable="false" alt="" title={global.StatusFormat()} style={{ border: `15px solid` + global.Data?.presence?.hex }} src={global.Data?.avatar} />

                        {/* Table of information. */}
                        <div id="info">
                            <h3 id="title"> My Information </h3>
                            <h5 id="name"> Name </h5>
                            <h5 id="user">{global.Data?.tag?.substring(0, global.Data?.tag?.indexOf(`#`))}<p id="descriminator">{global.Data?.tag?.substring(global.Data?.tag?.indexOf(`#`))}</p></h5>
                            <h5 id="status"> Status </h5>
                            <h5 id="current">{global.Data?.presence?.status === `offline` ? `Currently offline.` : `Currently ${global.Data?.presence?.status}.`}</h5>
                            <h5 id="custom"> Message </h5>
                            <h5 id="message">{global.Data?.activities?.find(a => a.name === `custom status`)?.data ?? `Nothing for now.`}</h5>
                            <h5 id="badge"> Badges </h5>
                            <h5 id="flags">{flags(global.Data?.badges)}</h5>
                        </div>

                        {/* Extra image. */}
                        <div id="profile"></div>
                    </div>

                    {/* Who am I section. */}
                    <div id="myinfo">
                        <h3> Who am I? </h3>
                        <div className="body">
                            I am a 17 year old High School senior who loves to watch anime.
                            I am the creator of Jonin and I am currently a Discord Bot Developer.
                            I have been coding since forever and I love to do it.
                        </div>
                    </div>

                    {/* My experience section. */}
                    <div id="exp">
                        <h3> My Experience </h3>

                        {/* Content. */}
                        <div className="body">
                            I am experienced in a few langauges, but I mostly learn something new when I am feeling like I want to try something I have not done before.
                            Currently I am a M.E.R.N. dev but that is just one accomplishment of many that I wish to achieve.
                        </div>

                        {/* Table. */}
                        <div className="table">

                            {/* MongoDB. */}
                            <div id="mongo" title="MongoDB Database"> MongoDB </div>
                            <div><div className="progress"><div className="seven"></div></div></div>

                            {/* Express. */}
                            <div id="express" title="Express JavaScript"> Express </div>
                            <div><div className="progress"><div className="eight"></div></div></div>

                            {/* React. */}
                            <div id="react" title="React JavaScript"> React </div>
                            <div><div className="progress"><div className="five"></div></div></div>

                            {/* Node.JS. */}
                            <div id="node" title="Node.JS JavaScript"> Node.JS </div>
                            <div><div className="progress"><div className="nine"></div></div></div>

                            {/* SCSS. */}
                            <div id="scss" title="Syntactically Awesome Style Sheets"> SCSS </div>
                            <div><div className="progress"><div className="seven"></div></div></div>

                            {/* CSS. */}
                            <div id="css" title="Cascading Style Sheets"> CSS </div>
                            <div><div className="progress"><div className="nine"></div></div></div>

                            {/* C#. */}
                            <div id="cs" title="C#"> C# </div>
                            <div><div className="progress"><div className="eight"></div></div></div>

                            {/* HTML. */}
                            <div id="html" title="HyperText Markup Language"> HTML </div>
                            <div><div className="progress"><div className="nine"></div></div></div>

                            {/* FirebaseDB. */}
                            <div id="firebase" title="FirebaseDB Database"> FirebaseDB </div>
                            <div><div className="progress"><div className="five"></div></div></div>

                            {/* Java. */}
                            <div id="java" title="Java"> Java </div>
                            <div><div className="progress"><div className="eight"></div></div></div>

                            {/* Web-JS. */}
                            <div id="js" title="Web-JavaScript"> JavaScript </div>
                            <div><div className="progress"><div className="nine"></div></div></div>

                            {/* GIT. */}
                            <div id="git" title="GIT"> GIT </div>
                            <div><div className="progress"><div className="six"></div></div></div>

                            {/* APIs. */}
                            <div id="api" title="Application Programming Interface"> APIs </div>
                            <div><div className="progress"><div className="nine"></div></div></div>

                            {/* SQL. */}
                            <div id="sql" title="Structured Query Language"> SQL </div>
                            <div><div className="progress"><div className="seven"></div></div></div>

                            {/* jQuery. */}
                            <div id="jquery" title="jQuery"> jQuery </div>
                            <div><div className="progress"><div className="five"></div></div></div>

                            {/* Python. */}
                            <div id="py" title="Python"> Python </div>
                            <div><div className="progress"><div className="five"></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
