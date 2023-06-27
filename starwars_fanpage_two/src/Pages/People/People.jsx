import { useCallback, useEffect, useState } from "react";
import { PeopleInfo } from "../../Components/PeopleInfo/PeopleInfo";

import "./People.css"

export const People = () => {
    const [people, setPeople] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const getAllChar = async (URL) => {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            console.log("first data", data)
            console.log(data.results);
            setPeople(data.results)
            setPreviousPage(data.previous);
            setNextPage(data.next);
        } catch (error) {
            setErrorMessage(error.message);
            throw new Error(error);
        };
    };

    useEffect(() => {
        if (people.length > 0) return;
        getAllChar("https://swapi.dev/api/people");
    }, []);

    const handleNextPage = useCallback(() => {
        if (!nextPage) return
        getAllChar(nextPage);
    }, [nextPage]);

    const handlePreviousPage = useCallback(() => {
        if (previousPage !== null) {
            getAllChar(previousPage);
        };
    }, [previousPage]);

    return (
        <div>
            <h1 id="title">Star Wars Characters</h1>

            <hr />
            <br />

            {people.length > 0 ? (
                <>
                    <div className="characters">
                        {people.map((person) => (
                            <PeopleInfo key={person.name} person={person} />
                        ))}
                    </div>
                    <div className="two-buttons">
                        <button onClick={handlePreviousPage} disabled={!previousPage}>Previous</button>
                        <button onClick={handleNextPage} disabled={!nextPage}>Next</button>
                    </div>
                </>
            ) : (
                <div className="loading">
                    <h2>Loading characters...</h2>
                </div>
            )}
        </div>
    );
};