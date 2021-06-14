import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    async getHtml () {
        return `
            <h1>Welcome Back DOM</h1>
            <p>Egyszer már voltunk itt és most megint visszajöttünk
                Ahogy telt mútl az idő mi csak mentük és mentünk, és soha többe nem láttaqk minket. Ez van
            </p>
            <p>
                <a href="/posts" data-link> View recent Post</a>
            </p>

        `;
    }
}