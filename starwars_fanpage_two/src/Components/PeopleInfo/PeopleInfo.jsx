import "./PeopleInfo.css"
import { useNavigate } from "react-router";

export const PeopleInfo = (props) => {
    const { person } = props;

    const navigate = useNavigate();

    return (
        <div className="people-info">
            <h2>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Gender: {person.gender}</p>
            <p>Birth year: {person.birth_year}</p>
            
            <button onClick={() => navigate("/people/" + person.name)}>View more</button>

            <hr />
        </div>
    );
};