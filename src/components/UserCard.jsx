import "./UserCard.css";
import userImage from "./../assets/user-image.jpg";
import "bootstrap-icons/font/bootstrap-icons.min.css";


function UserCard({ user }) {
    return (
        <div className="usercard">
            <img className="usercard__image" src={ userImage } />
            <h1 className="usercard__name">{ user.name }</h1>
            <p className="usercard__profession">{ user.profession }</p>
            <p className="usercard__description">{ user.description }</p>
            <div className="usercard__technologies">
                { 
                    user.technologies.map( (item) => <p className="usercard__technologies__item" key={ crypto.randomUUID() }>{ item }</p>)
                }
            </div>
            <a className="usercard__action" href={ user.socials.github } target="_blank"><i className="usercard__action__icon bi bi-github"></i>View profile</a>
        </div>
    );
}

export default UserCard;