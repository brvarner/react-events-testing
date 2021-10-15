import React, { useState, useEffect } from "react";

const App = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [users, setUsers] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setUsers(users))
    }

    useEffect(() => {
        if (searchTerm.length === 0) return;
        setTimeout(() => {console.log(searchTerm)}, 300)
    }, [searchTerm])

    return(
        <div>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <button onClick={getData}>Click me to see some users from JSON Placeholder!</button>
            <div>
                {users.map(user => 
                    <p key={user.id}>{user.name}</p>
                )}
            </div>
        </div>
    )
}

export default App;
