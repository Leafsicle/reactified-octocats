import React, { Component } from 'react';
import Octocat from './Octocat';

class Gallery extends Component {
    render() {
        return (
            <main>
                <Octocat number="1" git="https://github.com/cameronfoxly" avatar="" name="scubatocat" src="https://octodex.github.com/images/scubatocat.png" />
                <Octocat number="2" git="https://github.com/cameronfoxly" avatar="" name="tentocat" src="https://octodex.github.com/images/tentocats.jpg" />
                <Octocat number="3" git="https://github.com/heyhayhay" avatar="" name="Saint Nictocat" src="https://octodex.github.com/images/saint_nictocat.jpg" />
                <Octocat number="4" git="https://github.com/heyhayhay" avatar="" name="Dinotocat" src="https://octodex.github.com/images/dinotocat.png" />
                <Octocat number="5" git="https://github.com/tonyjaramillo" avatar="" name="Benjamin Bannekat" src="https://octodex.github.com/images/bannekat.png" />
                <Octocat number="6" git="https://github.com/tonyjaramillo" avatar="" name="Catstello" src="https://octodex.github.com/images/catstello.png" />
                <Octocat number="7" git="https://github.com/suziejurado" avatar="" name="Skatetocat" src="https://octodex.github.com/images/skatetocat.png" />
                <Octocat number="8" git="https://github.com/tonyjaramillo" avatar="" name="McEfeeline" src="https://octodex.github.com/images/mcefeeline.jpg" />
                <Octocat number="9" git="https://github.com/tonyjaramillo" avatar="" name="Gobble-o-tron" src="https://octodex.github.com/images/gobbleotron.gif" />
                <Octocat number="10" git="https://github.com/JohnCreek" avatar="" name="Luchadortocat" src="https://octodex.github.com/images/luchadortocat.png" />
                <Octocat number="11" git="https://github.com/tonyjaramillo" avatar="" name="Mummytocat" src="https://octodex.github.com/images/mummytocat.gif" />
                <Octocat number="12" git="https://github.com/jeejkang" avatar="" name="Daftpunktocat" src="https://octodex.github.com/images/daftpunktocat-thomas.gif" />
                <Octocat number="13" git="https://github.com/cameronmcefee" avatar="" name="Nemesis" src="https://octodex.github.com/images/herme-t-crabb.png" />
                <Octocat number="14" git="https://github.com/cameronmcefee" avatar="" name="Octocat De Los Muertos" src="https://octodex.github.com/images/octocat-de-los-muertos.jpg" />


                <article className="cat-element">
                    <div className="image-footer">
                        <p>the <a href="https://octodex.github.com/octocat-de-los-muertos">Octocat De Los Muertos </a>by <img
                            className="author-icon" src="https://avatars1.githubusercontent.com/u/72919?v=r" /></p>
                    </div>
                </article>
            </main>
        )
            ;
    }
}

export default Gallery;