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
            <table>
                <tr>
                    <td className='td-short'><b>NAME</b></td>
                    <td className='td-long top-input'>
                        <input
                            type='text'
                            name='name'
                            value={user.name}
                            onChange={handleInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='td-short'><b>USERNAME</b></td>
                    <td className='td-long top-input'>
                        <input
                            type='text'
                            name='username'
                            value={user.username}
                            onChange={handleInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className='top-button-container no-border'>
                        <button>Add User</button>
                    </td>
                </tr>
            </table>
        </form >
    )
}

export default AddUserForm
