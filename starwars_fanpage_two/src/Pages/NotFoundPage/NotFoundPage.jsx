import DarthVaderImage from "./images/darth-vader.jpg"
import "./NotFoundPage.css"

export const NotFoundPage = () => {

    return (
        <div className="not-found-page">
            <div className="image-container">
                <img src={DarthVaderImage} alt="Darth Vader" className="vader-image" />
                <div className="message-overlay">
                    <p className="message">The Force is not with this page. It seems you have ventured into uncharted territory.</p>
                </div>
            </div>
            <h1 className="title">Page not found: 404</h1>
        </div>
    );
};