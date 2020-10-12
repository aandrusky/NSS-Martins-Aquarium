
export const Location = (locationObj) => {
    return `
        <section class="locationList">
            <div class="harvestItems">
                <p>${locationObj.location}</p>
                <p>${locationObj.coordinates}</p>
                <img src="${locationObj.image}" alt=""></img>
            </div>
        </section> 
        `
}