// Import react rendering modules.
import React from 'react'
import ReactDOM from 'react-dom'

// Import 'View' for tab functionality.
import View from './View'

/**
 * @name Data
 * @memberof React.Component
 */

class Data extends React.Component {

    /**
     * Render website view.
     * 
     * @name render
     * @param {Function} [link] A custom parameter function to return user Discord link.
     * @return HTML code with API data and functionality.
     */

    render(link = id => `https://discord.com/users/${id}`) {

        // Record load time.
        global.Load.menu = new Date().getTime()

        return (
            <div id="menu">

                {/* Nav overlay from file './Nav.js', used in the case there is no space to show both nav and information. */}
                <div className="over"></div>

                {/* Source nav. */}
                <div id="nav">

                    {/* My Image section to show image and Discord tag. */}
                    <div id="myimage">

                        {/* Image with API given URL. */}
                        <img
                            id="pfp"
                            alt=""
                            title={global.StatusFormat()}
                            style={{ border: `5px solid` + global.Data?.presence?.hex }}
                            src={global.Data?.avatar}
                            onClick={_ => this.rotate()}
                            draggable="false"
                        />

                        {/* Discord tag from API data. */}
                        <a target="_blank" rel="noopener noreferrer" href={link(global.Data?.id)}>{global.Data?.tag?.substring(0, global.Data?.tag?.indexOf(`#`))}<p id="descriminator">{global.Data?.tag?.substring(global.Data?.tag?.indexOf(`#`))}</p></a>
                    </div>

                    {/* Profile tab. (profile) */}
                    <div
                        id="profile"
                        onClick={_ => View('profile')}
                        onMouseEnter={_ => this.reHoverify('profile')}
                        onMouseLeave={_ => this.deHoverify('profile')}
                    > Profile

                        {/* For future reference. Add this svg to add a new icon to the tab. */}

                        {/* <svg class="new" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35px">
                                <g>
                                    <path style={{ fill: `#C0C0C0` }} d={global.New.p1} />
                                    <path style={{ fill: `#C0C0C0` }} d={global.New.p2} />
                                    <path style={{ fill: `#C0C0C0` }} d={global.New.p3} />
                                    <path style={{ fill: `#C0C0C0` }} d={global.New.p4} />
                                </g>
                            </svg> */}

                    </div>

                    {/* About Me tab. (aboutme) */}
                    <div
                        id="aboutme"
                        onClick={_ => View('aboutme')}
                        onMouseEnter={_ => this.reHoverify('aboutme')}
                        onMouseLeave={_ => this.deHoverify('aboutme')}
                    > About Me </div>

                    {/* Certifications tab. (certifs) */}
                    <div
                        id="certifs"
                        onClick={_ => View('certifs')}
                        onMouseEnter={_ => this.reHoverify('certifs')}
                        onMouseLeave={_ => this.deHoverify('certifs')}
                    > Certifications </div>

                    {/* My Projects tab. (project) */}
                    <div
                        id="project"
                        onClick={_ => View('project')}
                        onMouseEnter={_ => this.reHoverify('project')}
                        onMouseLeave={_ => this.deHoverify('project')}
                    > My Projects </div>

                    {/* My Anime tab. (myanime) */}
                    <div
                        id="myanime"
                        onClick={_ => View('myanime')}
                        onMouseEnter={_ => this.reHoverify('myanime')}
                        onMouseLeave={_ => this.deHoverify('myanime')}
                    > My Anime List </div>

                    {/* Credits tab. (credits) */}
                    <div
                        id="credits"
                        onClick={_ => View('credits')}
                        onMouseEnter={_ => this.reHoverify('credits')}
                        onMouseLeave={_ => this.deHoverify('credits')}
                    > Credits </div>

                    {/* A fun little GIF. */}
                    <div id="gif"><img onClick={_ => this.GIF()} id="jonin" src="https://hacking-with-ht.ml/kurasad/jonin_pixel_eating.gif" alt="" title="Don't click" /></div>
                </div>
            </div>
        )
    }

    /**
     * Enable hover SCSS for element when the 'onMouseEnter' event is triggerd.
     * 
     * @name reHoverify
     * @param {String} [id] An element's ID of which to modify.
     * @return {Null}.
     */

    reHoverify(id) { Object.mergify(document.getElementById(id).style, { background: `#E18499`, color: `#111111`, fontWeight: `bold`, textShadow: `none` }) }

    /**
     * Disable hover SCSS for element when the 'onMouseLeave' event is triggerd.
     * 
     * @name deHoverify
     * @param {String} [id] An element's ID of which to modify.
     * @return {Null}.
     */

    deHoverify(id) {

        // If the element is the currently viewing tab, do not de-hover it.
        if (id === global.Selected) return
        Object.mergify(document.getElementById(id).style, { background: `#222222`, color: `#C0C0C0`, fontWeight: `normal`, textShadow: `1px 1px #000000` })
    }

    /**
     * Modify the gif for 3 seconds when the user clicks on it + menu nav for mobile.
     * 
     * @name GIF
     * @return {Null}.
     */

    GIF() {

        // If the GIF is clicked when the screen width is smaller than 1000px, run this code (This is because the gif becomes the nav menu buttom when there is no space).
        if (window.innerWidth < 1000) {
            let elem = document.getElementById(`over`)
            elem.style.opacity = `1`
            elem.style.zIndex = 2
            document.body.style.overflow = `hidden`
            return
        }
        if (document.getElementById('jonin').src === "https://hacking-with-ht.ml/kurasad/jonin_pixel_crying.gif") return
        document.getElementById('jonin').src = "https://hacking-with-ht.ml/kurasad/jonin_pixel_crying.gif"
        setTimeout(_ => document.getElementById('jonin').src = "https://hacking-with-ht.ml/kurasad/jonin_pixel_eating.gif", 3 * 1000)
    }

    /**
     * Rotate the PFP when user clicks on it (Stop rotating when user clicks again).
     * 
     * @name rotate
     * @return {Null}.
     */

    rotate() {
        let element = document.getElementById(`pfp`)
        element.classList.contains(`rotate`) ? element.classList.remove(`rotate`) : element.classList.add(`rotate`)
    }
}

// Render the 'Data' class where index 0 of the class element 'menu' exists on the webpage.
let Menu = _ => ReactDOM.render(<Data />, document.getElementsByClassName('menu')[0])

// Export only the 'Menu' function (All other data has to be locally called).
export default Menu
