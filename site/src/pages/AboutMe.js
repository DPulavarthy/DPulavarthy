// Import react rendering modules.
import React from 'react'

/**
 * @name AboutMe
 * @memberof React.Component
 */

export default class AboutMe extends React.Component {

    /**
     * Render website view (View/AboutMe page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div className="aboutme">
                <h1> About Me

                    {/* AboutMe page link svg with functionality. */}
                    <div id="svg" onClick={_ => global.Notif(`${window.location.origin}/aboutme`)}>
                        <svg version="1.1" id="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                            <g><g><path d={global.Link.p1} /></g></g>
                            <g><g><path d={global.Link.p2} /></g></g>
                        </svg>
                    </div>
                </h1>

                {/* Title/Content divider. */}
                <hr />

                {/* Content of aboutme page. */}
                <div className="content">

                    {/* Profile image div. */}
                    <div id="image"></div>

                    {/* My quote div. */}
                    <div id="quote"><p>I basically don't know what I'm doing but I got this far so I guess that's an accomplishment.</p></div>

                    {/* Likes and dislikes div title. */}
                    <div id="likesti"><h3>Likes / Dislikes</h3></div>

                    {/* Likes and dislikes div. */}
                    <div id="likes">
                        <h5>There are many things that I like, I have listed some of the things I like best.</h5>
                        <p>Anime</p>
                        <p> Programming</p>
                        <p>Sleeping</p>
                        <p>Being annoying</p>

                        <hr />

                        <h5>There is only a few things in life worth disliking, but those things need to stay away from me.</h5>
                        <p>Annoying people</p>
                        <p>Procrastination</p>
                        <p>Coffee</p>

                    </div>

                    {/* Overview div title. */}
                    <div id="oviewti"><h3>Overview</h3></div>

                    {/* Overview div. */}
                    <div id="overview">
                        <p>
                            I am 17 years old, I do not know what taxes are and the only reason I graduated High School is cause of a global pandemic.
                            Here you can find a few things that I like and dislike, why? In-case someone wants to get me a present :)
                        </p>
                    </div>

                    {/* Good at div title. */}
                    <div id="vgoodti"><h3>What I am good at</h3></div>

                    {/* Good at div. */}
                    <div id="good">
                        I am good with logical thinking, and very bad at planning that skill.
                        Whenever I come across a problem in programming, either logical or error related, I can easily find my way through the issue.
                        But I really do suck at preventing those issues from happening.
                        I love to draw and make art to use as symbols for my programs.
                        I am also a fast learner, a few examples is enough for me to mostly understand a concept.
                        I usually try to learn by visual interactions.
                    </div>
                </div>
            </div>
        )
    }
}
