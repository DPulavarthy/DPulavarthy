// Import react rendering modules.
import React from 'react'
import ReactDOM from 'react-dom'

// Import data pages.
import Profile from './pages/Profile'
import AboutMe from './pages/AboutMe'
import Certifs from './pages/Certifs'
import Project from './pages/Project'
import MyAnime from './pages/MyAnime'
import Credits from './pages/Credits'
import FourOFour from './pages/404'

// Possible pages.
let ids = {
    profile: `Profile`,
    aboutme: `About Me`,
    certifs: `Certifications`,
    project: `My Projects`,
    myanime: `My Anime List`,
    credits: `Credits`
}

/**
 * @name Data
 * @memberof React.Component
 */

class Data extends React.Component {

    /**
     * Reder website view.
     * 
     * @name render
     * @param {String} [data] Props variable for which page was requested.
     * @return HTML code with API data and functionality.
     */

    render() {
        // Remove formatting for all menu elements.
        for (const id of Object.keys(ids)) Object.mergify(document.getElementById(id).style, { background: `#222222`, color: `#C0C0C0`, fontWeight: `normal`, textShadow: `1px 1px #000000` })

        // If requested page does not exist redirect to 404.
        if (!ids[this.props.data]) {
            // Set the title of the site.
            document.title = `Kurasad | 404`

            // Return the 404 page data.
            return <div id="view">{this.fetch(`404`)}</div>
        }

        // Else globally set the selected value for easy access and integrations.
        else global.Selected = this.props.data

        // Set the hash to requested page when page changes.
        window.location.hash = this.props.data

        // Set the title of the site.
        document.title = `Kurasad | ${ids[this.props.data]}`

        // Set hover event formatting for selected menu element.
        Object.mergify(document.getElementById(this.props.data).style, { background: `#E18499`, color: `#111111`, fontWeight: `bold`, textShadow: `none` })

        // Record load time.
        global.Load.view = new Date().getTime()

        // Return the requested page data.
        return <div id="view">{this.fetch(this.props.data)}</div>
    }

    /**
     * Fetch the proper data for the requested tab.
     * 
     * @name fetch
     * @param {String} [key] File ID to fetch.
     * @return {Object} Return react HTML data for requested tab, fallback to 404 page.
     */

    fetch(key) {

        // Empty var to fill.
        let data

        // Switch possible cases.
        switch (key) {

            // Profile page (profile) request.
            case `profile`: {
                data = <Profile />
                break
            }

            // About Me page (aboutme) request.
            case `aboutme`: {
                data = <AboutMe />
                break
            }

            // Certifications page (certifs) request.
            case `certifs`: {
                data = <Certifs />
                break
            }

            // Project page (project) request.
            case `project`: {
                data = <Project />
                break
            }

            // My Anime List page (myanime) request.
            case `myanime`: {
                data = <MyAnime />
                break
            }

            // Credits page (credits) request.
            case `credits`: {
                data = <Credits />
                break
            }

            // Default fallback to 404 page.
            default: {
                data = <FourOFour />
                break
            }
        }

        // Return page data.
        return data
    }
}

// Render the 'Data' class where index 0 of the class element 'view' exists on the webpage.
let View = view => ReactDOM.render(<Data data={view} />, document.getElementsByClassName('view')[0])

// Export only the 'View' function (All other data has to be locally called).
export default View
