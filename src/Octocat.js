import React, { Component } from 'react';

class Octocat extends Component {
    render() {
        return (
            <article className="cat-element">
                <div>
                    <img className="main-image" src={this.props.src} />
                </div>
                <div className="image-footer">
                    <p className="number">#{this.props.number}
                    </p>
                    <p>the
                        <a href={this.props.git}>{this.props.name} </a>
                        by <img className="author-icon"
                            src="https://avatars1.githubusercontent.com/u/4226949?v=r" />
                        <img className="author-icon" src={this.props.author}" />
                    </p>
                </div>
            </article>

        )
    }
}

export default Octocat;