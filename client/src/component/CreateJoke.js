import React, { useState } from 'react';
import styles from './createJoke.module.css';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateJoke() {
    const navigate = useNavigate();

    const [joke, setJoke] = useState('');

    const onButtonClickHandler = (e) => {
        const jokeData = {
            content: joke,
        };

        try {
            const postJoke = async () => {
                try {
                    const response = await axios.post('http://localhost:4000/api/createJokes', jokeData);
                    if (response.data.success) {
                        console.log('posted');
                        navigate('/jokes');
                    }
                } catch (error) {}
            };
            postJoke();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />
            <div className={styles.content_container}>
                <h1 className={styles.header}>What is your joke?</h1>
                <textarea
                    type="text"
                    className={styles.joke_input}
                    placeholder="Enter your joke"
                    value={joke}
                    onChange={(e) => {
                        setJoke(e.target.value);
                    }}
                />
                <Button className={styles.btn} onClick={onButtonClickHandler}>
                    Share joke
                </Button>
            </div>
        </div>
    );
}

export default CreateJoke;
