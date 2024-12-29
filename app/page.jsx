import React from "react";

import Feed from "../components/feed"

const Home = () => {
    return(
        <div>
        <section className="section middleSection">

       <h1>Discover and share <span className="orange_gradient text-center">AI Powered Prompts</span></h1>

<p>Promtopia is an open-source Prompts ai tools for modent word.</p>
        </section>

        <Feed />
</div>
    )
}

export default Home;