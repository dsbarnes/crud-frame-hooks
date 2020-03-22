import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect( () => {
       setUser(props.currentUser)
    }, [props])

    const handleInput = (e) => {
        const { name, value } = e.target

        console.log({ name, value })
        setUser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input
                type='text'
                name='name'
                value={user.name}
                onChange={handleInput}
            />

            <label>Username</label>
            <input
                type='text'
                name='username'
                value={user.username}
                onChange={handleInput}
            />

            <button>Update User</button>
            <button onClick={() => props.setEditing(false)} >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm
