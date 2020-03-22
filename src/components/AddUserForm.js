import React, { useState } from 'react'

const AddUserForm = (props) => {

    const formData = { id: null, name: '', username: '' }
    const [user, setUserForm] = useState(formData)

    const handleInput = e => {
        const { name, value } = e.target
        setUserForm({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!user.name || !user.username)
                    return
                props.addUser(user)
                setUserForm(formData)
            }}
        >
            <div className='inputField'>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={handleInput}
                />
            </div>

            <div className='inputField'>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleInput}
                />
            </div>
            <button id='addEditButton'>Add User</button>

        </form>
    )
}

export default AddUserForm
