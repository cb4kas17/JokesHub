import React, { useState } from 'react';
import styles from './myJokes.module.css';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Layout/Card';
import { faEye, faQuoteLeft, faQuoteRight, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
let DUMMY = [
    {
        id: 1,
        content: 'When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf... ',
    },
    {
        id: 2,
        content: 'One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this... ',
    },
    { id: 3, content: 'During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got...' },
];

function MyJokes(props) {
    const navigate = useNavigate();
    const onViewHandler = (id) => {
        navigate(`/jokes/${id}`);
    };
    const onEditHandler = (id) => {
        navigate(`/editJoke/${id}`);
    };
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />
            <h1 className={styles.header}>Your Jokes</h1>
            <ul className={styles.all_jokes_container}>
                {DUMMY.map((item, i) => (
                    <Card className={styles.single_joke_container} key={i}>
                        <div className={styles.joke_content_container}>
                            <div className={styles.joke_content}>
                                <FontAwesomeIcon icon={faQuoteLeft} size="sm" className={styles.quoteLeft} />
                                {item.content} <FontAwesomeIcon icon={faQuoteRight} size="sm" className={styles.quoteRight} />
                            </div>
                        </div>
                        <div className={styles.joke_button}>
                            <Button
                                className={styles.btn}
                                onClick={() => {
                                    onViewHandler(item.id);
                                }}
                            >
                                <FontAwesomeIcon icon={faEye} size="lg" />
                            </Button>
                            <Button
                                className={styles.btn}
                                onClick={() => {
                                    onEditHandler(item.id);
                                }}
                            >
                                <FontAwesomeIcon icon={faUserEdit} size="lg" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </ul>
        </div>
    );
}

export default MyJokes;
