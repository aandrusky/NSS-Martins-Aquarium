

import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tips.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tips")
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }

    contentElement.innerHTML += `
    <section class = ".fishListTips">
    ${tipHTMLRepresentations}
    </section>
    `
}