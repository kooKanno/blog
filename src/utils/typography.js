import Typography from "typography"
import Wordpress2016 from "typography-theme-github"
import { cornflowerblue } from "color-name"

// funston.overrideThemeStyles = ({ rhythm }, options) => ({
//   'h2,h3': {
//     marginBottom: rhythm(1/2),
//     marginTop: rhythm(2),
//   }

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
