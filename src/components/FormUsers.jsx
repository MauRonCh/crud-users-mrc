import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({ createNewuser, updateInfo, updateUserById, setUpdateInfo, setMenuIsOpen}) => {

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo);
        }
    }, [updateInfo]);


    const submit = (data) => {
    if (updateInfo) {
        updateUserById(updateInfo.id, data);
        setUpdateInfo();
    }   else {
            createNewuser(data);
        }
        reset(defaultValues);
        setMenuIsOpen(true)
    }

    const handleMenuClose = () => {
        setMenuIsOpen(true)
        setUpdateInfo();
        reset(defaultValues);
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i className='form-x bx bxs-x-circle' onClick={handleMenuClose}></i>
            <h2 className='form__title'>{(updateInfo) ? "Edit user" : "Create a new user" }</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email">Email</label>
                <input placeholder='Email' maxLength='40' className='form__input' type="text" id="email" {...register('email')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password</label>
                <input placeholder='Password' className='form__input' type="password" id="password" {...register('password')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="firstName">First Name</label>
                <input placeholder='First name' maxLength='15' className='form__input' type="text" id="firstName" {...register('first_name')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="lastName">Last Name</label>
                <input placeholder='Last name' maxLength='25' className='form__input' type="text" id="lastName" {...register('last_name')} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id="birthday" {...register('birthday')} />
            </div>
            <button className='form__btn'>{(updateInfo) ? 'Update user' : 'Add new user'}</button>
        </form>
    )
}

export default FormUsers