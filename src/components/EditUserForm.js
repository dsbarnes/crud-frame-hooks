import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
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
            <table>
                <tr>
                    <td className='td-short'><b>NAME</b></td>
                    <td>
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
                    <td>
                        <input
                            type='text'
                            name='username'
                            value={user.username}
                            onChange={handleInput}
                        />
                    </td>
                </tr>
                <tr colSpan='2'>
                    <td colSpan='2' className='top-button-container no-border'>
                        <button className='btn-top-size'>Update User</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' className='top-button-container no-border'>
                        <button className='btn-top-size' onClick={() => props.setEditing(false)} >
                            Cancel
                        </button>
                    </td>
                </tr>
            </table>
        </form>
    )
}

export default EditUserForm
