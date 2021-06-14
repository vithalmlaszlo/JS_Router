import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml () {


        
        const posts= await fetch("/posts").then(res => res.json())

        console.log(posts);
        return `
            <h1>Posts</h1>
           <p> ${posts.map(post => `#${post.id}, Tartalom: ${post.content}`)}</p>
        `;
    }
}