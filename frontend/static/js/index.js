import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path:"/", view: Dashboard},
        { path:"/posts", view: Posts},
        { path:"/set", view: Settings},
        /* { path:"/posts", view: () => console.log("Post")},
        { path:"/set", view: () => console.log("settings")} */

    ];

    //Test routes
    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch: location.pathname === route.path
        };
    })

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    //Wrong link, nav to the "/" deafult route
    if(!match) {
        match = {
            route: routes[0],
            isMatch : true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

   
}
//History 
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    //No page refresh just click and go
    document.body.addEventListener("click", event => {
        if (event.target.matches("[data-link]")) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    })
    router();
})