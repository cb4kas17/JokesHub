import React, { useState } from 'react';
import styles from './editProfile.module.css';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
function EditProfile() {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredOldPW, setEnteredOldPW] = useState('');
    const [enteredNewPW, setEnteredNewPW] = useState('');

    const userChangeHandler = (e) => {
        setEnteredUser(e.target.value);
    };
    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const oldPWChangeHandler = (e) => {
        setEnteredOldPW(e.target.value);
    };
    const newPWChangeHandler = (e) => {
        setEnteredNewPW(e.target.value);
    };
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />

            <div className={styles.content_container}>
                <h1 className={styles.header}>Edit Profile</h1>
                <div className={styles.first_content}>
                    <div className={styles.input_fields}>
                        <input type="text" id="username" placeholder="Username" value={enteredUser} onChange={userChangeHandler} />
                        <input type="text" id="name" placeholder="Full Name" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div>
                        <Button>Update</Button>
                    </div>
                </div>
                <div className={styles.second_content}>
                    <div className={styles.input_fields}>
                        <input type="password" id="old-password" placeholder="Old Password" value={enteredOldPW} onChange={oldPWChangeHandler} />
                        <input type="password" id="new-password" placeholder="New Password" value={enteredNewPW} onChange={newPWChangeHandler} />
                    </div>
                    <div>
                        <Button>Change Password</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
