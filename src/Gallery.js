import React, { Component } from 'react';
import Octocat from './Octocat';
class Gallery extends Component {
    render() {
        const octoData = [
            {
                number: "1", git: "https://github.com/cameronfoxly", avatar: "https://avatars3.githubusercontent.com/u/19292210?s=400&v=4", name: "scubatocat", src: "https://octodex.github.com/images/scubatocat.png"
            }, {
                number: "2", git: "https://github.com/cameronfoxly", avatar: "https://avatars3.githubusercontent.com/u/19292210?s:400&v:4", name: "tentocat", src: "https://octodex.github.com/images/tentocats.jpg"
            }, {
                number: "3", git: "https://github.com/heyhayhay", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "Saint Nictocat", src: "https://octodex.github.com/images/saint_nictocat.jpg"
            }, {
                number: "4", git: "https://github.com/heyhayhay", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "Dinotocat", src: "https://octodex.github.com/images/dinotocat.png"
            }, {
                number: "5", git: "https://github.com/tonyjaramillo", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "Benjamin Bannekat", src: "https://octodex.github.com/images/bannekat.png"
            }, {
                number: "6", git: "https://github.com/tonyjaramillo", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "Catstello", src: "https://octodex.github.com/images/catstello.png"
            }, {
                number: "7", git: "https://github.com/suziejurado", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "Skatetocat", src: "https://octodex.github.com/images/skatetocat.png"
            }, {
                number: "8", git: "https://github.com/tonyjaramillo", avatar: "https://avatars0.githubusercontent.com/u/20049049?s:400&v:4", name: "McEfeeline", src: "https://octodex.github.com/images/mcefeeline.jpg"
            }, {
                number: "9", git: "https://github.com/tonyjaramillo", avatar: "https://avatars1.githubusercontent.com/u/2053865?s:400&v:4", name: "Gobble-o-tron", src: "https://octodex.github.com/images/gobbleotron.gif"
            }, {
                number: "10", git: "https://github.com/JohnCreek", avatar: "https://avatars2.githubusercontent.com/u/1300064?s:400&v:4", name: "Luchadortocat", src: "https://octodex.github.com/images/luchadortocat.png"
            }, {
                number: "11", git: "https://github.com/tonyjaramillo", avatar: "https://avatars2.githubusercontent.com/u/1300064?s:400&v:4", name: "Mummytocat", src: "https://octodex.github.com/images/mummytocat.gif"
            }, {
                number: "12", git: "https://github.com/jeejkang", avatar: "https://avatars1.githubusercontent.com/u/2053865?s:400&v:4", name: "Daftpunktocat", src: "https://octodex.github.com/images/daftpunktocat-thomas.gif"
            }, {
                number: "13", git: "https://github.com/cameronmcefee", avatar: "https://avatars1.githubusercontent.com/u/2053865?s:400&v:4", name: "Nemesis", src: "https://octodex.github.com/images/herme-t-crabb.png"
            }, {
                number: "14", git: "https://github.com/cameronmcefee", avatar: "https://avatars2.githubusercontent.com/u/1300064?s:400&v:4", name: "Octocat De Los Muertos", src: "https://octodex.github.com/images/octocat-de-los-muertos.jpg"
            },
        ]
        const catStats = octoData.map((cat) =>
            <Octocat number={cat.number} name={cat.name} git={cat.git} avatar={cat.avatar} src={cat.src} />
        )
        return (
            <main>
                {catStats}
            </main >
        )
    }
}

export default Gallery;