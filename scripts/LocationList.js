

import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const locationList = () => {
    const contentElement = document.querySelector(".fishContainer")

    const locationItems = useLocation()

    let locationHTMLRepresentations = ""
        for (const location of locationItems) {
            locationHTMLRepresentations += Location(location)
        }


     // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="locationList">
        ${locationHTMLRepresentations}
        </section>
    `
}