import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setMenuIsOpen}) => {

    const handleEdit = () => {
        setUpdateInfo(user);
        setMenuIsOpen(false)
    }

    return (
        <article className='card'>
            <h2 className='card__title'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='card__list'>
                <li className='card__item'><span className='card__span'>Email: </span> {user.email}</li>
                <li className='card__item'><span className='card__span'>Birthday: </span> <div className='card__gift'><i className='bx bx-gift'></i> {user.birthday}</div>  </li>
            </ul>
            <footer className='card__footer'>
                <button className='card__button' onClick={() => deleteUserById(user.id)}>
                    <i className='bx bx-trash'></i>
                </button>
                <button className='card__button' onClick={handleEdit}>
                    <i className='bx bx-edit'></i>
                    </button>
            </footer>
        </article>
    )
}

export default UserCard