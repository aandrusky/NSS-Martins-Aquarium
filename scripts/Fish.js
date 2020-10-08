//this page and function builds a single fish object

export const Fish = (fishObj) => {
    return`
    
    <section class="fish">
                    <h2 class="fish__name">${fishObj.name}</h2>
                    <img class="fish__image" src="${fishObj.image}"
                        alt="">
                    <h3 class="factHeading">Length:</h3>
                    <div class="fish__length">
                        <ul>
                            <li>${fishObj.length}</li>
                        </ul>
                    </div>
                    <h3 class="factHeading">Location:</h3>
                    <div class="fish__location">
                        <ul>
                            <li>${fishObj.location}</li>
                        </ul>
                    </div>
                    <h3 class="factHeading">Diet:</h3>
                    <div class="fish__diet">
                        <ul>
                            <li>${fishObj.food}</li>
                        </ul>
                    </div>
                    
                </section>
    `
}