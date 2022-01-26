import React, { useState } from 'react';



const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const usersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(usersSecret)

export const Exomple1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    users.push('Sveta ' + new Date().getTime())

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </>

}