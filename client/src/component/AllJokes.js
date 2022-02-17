import React, { useState, useEffect } from 'react';
import styles from './allJokes.module.css';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Layout/Card';
import { faEye, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// let DUMMY = [
//     {
//         id: 1,
//         author: 'Chy',
//         content: 'When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf... ',
//     },
//     {
//         id: 2,
//         author: 'Jas',
//         content: 'One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this... ',
//     },
//     { id: 3, author: 'Cris', content: 'During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got...' },
// ];
function AllJokes() {
    const navigate = useNavigate();
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/api/allJokes');
                const data = await response.data.jokes;
                console.log(data);
                setJokes(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const onViewHandler = (id) => {
        navigate(`/jokes/${id}`);
    };
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />

            <ul className={styles.all_jokes_container}>
                {jokes.map((item, i) => (
                    <Card className={styles.single_joke_container} key={i}>
                        <div className={styles.joke_content_container}>
                            <div className={styles.date}>{item.createdAt.toLocaleString().slice(0, 10)}</div>
                            <div className={styles.joke_author}>By: {item.author}</div>
                            <div className={styles.joke_content}>
                                <FontAwesomeIcon icon={faQuoteLeft} size="sm" className={styles.quoteLeft} />
                                {item.content} <FontAwesomeIcon icon={faQuoteRight} size="sm" className={styles.quoteRight} />
                            </div>
                        </div>

                        <div className={styles.joke_button}>
                            <Button
                                onClick={() => {
                                    onViewHandler(item._id);
                                }}
                            >
                                <FontAwesomeIcon icon={faEye} size="lg" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </ul>
        </div>
    );
}

export default AllJokes;
