import React from 'react'

const Users = (props) => (

    <React.Fragment>
        <table>
            <thead>
                <tr>
                    <td><b>NAME</b></td>
                    <td><b>USERNAME</b></td>
                    <td><b>ACTIONS</b></td>
                </tr>
            </thead>

            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button
                                    className='tableButton'
                                    disabled={props.editing}
                                    onClick={() => {
                                        return props.deleteUser(user.id)
                                    }}>
                                    DEL
                    </button>
                                <button
                                    className='tableButton'
                                    onClick={() => {
                                        props.userToEdit(user)
                                    }}>
                                    EDT
                    </button>
                            </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td>NO USERS</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </React.Fragment>
)

export default Users
