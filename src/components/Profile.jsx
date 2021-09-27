import React, { useState } from "react";

const Profile = () => {
    const [data, setData] = useState({});
    const [IsActive, setIsActive] = useState(false);
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
        setUsername( e.target.value );
    };

    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);

        if (profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
            setIsActive(true);
        }
    };
    
    return (
        <div>
            <div className="card p-2 mt-4" style={{ width: "40rem" }}>
                <input className="form-control mb-2" type="text" value={username} onChange={onChangeHandler} placeholder="Enter the GitHub userName you want to search"/>
                <button className="btn btn-primary" type="submit" onClick={submitHandler}> Buscar </button>
            </div>

            {IsActive ?
                <div className="card mt-4" style={{ width: "40rem" }}>
                    <div className="card-body">
                        <h5 className="card-title text-center"> { data.login }   </h5>
                        <p className="card-title text-center"> Repositories </p>
                        <div className="card">
                        {repositories.map(repo => (
                            <ul className="list-group list-group-flush">
                                <a className="list-group-item" href={repo.html_url}>{repo.name}</a>
                            </ul>
                        ))}
                        </div>
                    </div>
                </div>
            :
            <p></p>
            }
        </div>
    );
}

export default Profile;