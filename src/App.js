import React, { useState, useEffect } from 'react';
import Users from './components/Users'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import style from './index.css'

const App = () => {

    const data =
        JSON.parse(localStorage.getItem('blah')) ||
        [
            { id: 1, name: 'TEST1', username: 'TESTONE' },
            { id: 2, name: 'TEST2', username: 'TESTTWO' }
        ]

    const initialEditFormState = {
        id: null,
        name: '',
        username: ''
    }

    const [users, setUsers] = useState(data)
    const [currentUser, setCurrentUser] = useState(initialEditFormState)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        localStorage.setItem('blah', JSON.stringify(users))
    }, [users])

    const userToEdit = (user) => {
        setEditing(true)
        setCurrentUser(
            { id: user.id, name: user.name, username: user.username }
        )
    }

    const addUser = (newUser) => {
        newUser.id = users.length + 1
        setUsers([...users, newUser])
    }

    const deleteUser = (id) => {
        setEditing(false)
        setUsers(users.filter(u => u.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map((user) => {
            return user.id === id ? updatedUser : user
        }))
    }

    return (
        <React.Fragment>
            <div id='container'>
                {editing ? (
                    <section id="top">
                        <p><b>Edit User</b></p>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </section>
                ) : (
                        <section id="top">
                            <p className='bigFont'><b>Add Users:</b></p>
                            <AddUserForm addUser={addUser} />
                        </section>
                    )}
                <section id="bottom">
                    <p className='bigFont'><b>Users:</b></p>
                    <Users
                        users={users}
                        deleteUser={deleteUser}
                        userToEdit={userToEdit}
                        editing={editing}
                    />
                </section>
            </div>
        </React.Fragment>
    )
}

export default App;
