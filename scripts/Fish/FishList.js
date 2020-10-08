//import { Fish } from "./Fish.js"
//this page renders fish objects as html

import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"



export const fishList = () => {
const contentElement = document.querySelector(".mainContainer")

const fishes = useFish()

let fishHTMLRepresentations = ""
for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
}


contentElement.innerHTML += `
<section class="fishList">
<h3>Fish List<h3>
<div class="fishContainer">
${fishHTMLRepresentations}
</div>
</section>
`
}

