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

    render() {
        return (

            // Render this HTML data to 'over' div under nav, it has been given absolute values to make sure it works properly.

            <div id="over">
                <h1 onClick={_ => this.HideAndView()}>❮</h1>
                <br />
                <br />
                <br />
                <br />
                {/* Profile tab. (profile) */}
                <div
                    id="over-profile"
                    onClick={_ => this.HideAndView('profile')}
                    onMouseEnter={_ => this.reHoverify('over-profile')}
                    onMouseLeave={_ => this.deHoverify('over-profile')}
                > Profile </div>

                {/* About Me tab. (aboutme) */}
                <div
                    id="over-aboutme"
                    onClick={_ => this.HideAndView('aboutme')}
                    onMouseEnter={_ => this.reHoverify('over-aboutme')}
                    onMouseLeave={_ => this.deHoverify('over-aboutme')}
                > About Me </div>

                {/* Certifications tab. (certifs) */}
                <div
                    id="over-certifs"
                    onClick={_ => this.HideAndView('certifs')}
                    onMouseEnter={_ => this.reHoverify('over-certifs')}
                    onMouseLeave={_ => this.deHoverify('over-certifs')}
                > Certifications </div>

                {/* My Projects tab. (project) */}
                <div
                    id="over-project"
                    onClick={_ => this.HideAndView('project')}
                    onMouseEnter={_ => this.reHoverify('over-project')}
                    onMouseLeave={_ => this.deHoverify('over-project')}
                > My Projects </div>

                {/* My Anime tab. (myanime) */}
                <div
                    id="over-myanime"
                    onClick={_ => this.HideAndView('myanime')}
                    onMouseEnter={_ => this.reHoverify('over-myanime')}
                    onMouseLeave={_ => this.deHoverify('over-myanime')}
                > My Anime List </div>

                {/* Credits tab. (credits) */}
                <div
                    id="over-credits"
                    onClick={_ => this.HideAndView('credits')}
                    onMouseEnter={_ => this.reHoverify('over-credits')}
                    onMouseLeave={_ => this.deHoverify('over-credits')}
                > Credits </div>
                
                <h3> Which page would you like to visit? </h3>
                <hr />
                <h5>Made By: Kurasad#2521</h5>
                <br />
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
     * Hide popup nav and direct to selected tab (if 'Go back' was selected do not change tabs).
     * 
     * @name HideAndView
     * @param {String} [id] An element's ID of which to direct to.
     * @return {Null}.
     */

    HideAndView(id) {
        let elem = document.getElementById(`over`)
        elem.style.opacity = `0`
        elem.style.zIndex = `-1`
        document.body.style.overflowX = `hidden`
        document.body.style.overflowY = `auto`
        if (id) View(id)
    }
}

// Render the 'Data' class where index 0 of the class element 'over' exists on the webpage.
let Nav = _ => ReactDOM.render(<Data />, document.getElementsByClassName('over')[0])

// Export only the 'Nav' function (All other data has to be locally called).
export default Nav
