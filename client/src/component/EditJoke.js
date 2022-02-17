import React, { useState } from 'react';
import styles from './editJoke.module.css';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
function EditJoke() {
    const [joke, setJoke] = useState('');
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />
            <div className={styles.content_container}>
                <h1 className={styles.header}>Edit your joke</h1>
                <textarea
                    type="text"
                    className={styles.joke_input}
                    placeholder="Enter your joke"
                    value={joke}
                    onChange={(e) => {
                        setJoke(e.target.value);
                    }}
                />
                <div className={styles.button_container}>
                    <Button className={styles.btn}>Update</Button>
                    <Button className={styles.btn}>Delete</Button>
                </div>
            </div>
        </div>
    );
}

export default EditJoke;
