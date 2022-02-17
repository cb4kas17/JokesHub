import React, { useState, useEffect } from 'react';
import NavBurger from './Layout/NavBurger';
import Button from './Layout/Button';
import Nav from './Layout/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Layout/Card';
import { faPaperPlane, faQuoteLeft, faQuoteRight, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './viewJoke.module.css';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function ViewJoke() {
    // let DUMMY = {
    //     id: 1,
    //     author: 'Chy',
    //     content: 'When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf... ',
    // };

    let COMMENTS = [
        {
            author: 'LANIE',
            comment: 'Thats goThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats gooThats goood',
        },
        { author: 'Bicoy', comment: 'Weird Joke' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
        { author: 'Wigi', comment: 'Dog shit' },
    ];

    const navigate = useNavigate();
    const [joke, setJoke] = useState([]);
    const { jokeID } = useParams();
    console.log(jokeID);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:4000/api/allJokes/${jokeID}`);
                const data = await response.data.joke;
                console.log(data);
                setJoke(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className={styles.container}>
            <Nav />
            <NavBurger type="jokes" />
            <div className={styles.content_container}>
                <Card>
                    <div className={styles.joke_content_container}>
                        <div className={styles.joke_author}>By: {joke.author}</div>
                        <div className={styles.joke_content}>
                            <FontAwesomeIcon icon={faQuoteLeft} size="sm" className={styles.quoteLeft} />
                            {joke.content} <FontAwesomeIcon icon={faQuoteRight} size="sm" className={styles.quoteRight} />
                        </div>
                    </div>
                </Card>
                <div className={styles.comment_input_container}>
                    <textarea type="text" className={styles.comment_input} placeholder="Enter comment" />
                    <Button className={styles.btn} onClick={() => {}}>
                        <FontAwesomeIcon icon={faPaperPlane} size="xl" className={styles.send} />
                    </Button>
                </div>
                <div className={styles.comment_section_container}>
                    <h1 className={styles.header}>
                        Comments <FontAwesomeIcon icon={faComment} size="sm" className={styles.commentIcon} />
                    </h1>
                    {COMMENTS.map((item, i) => (
                        <div className={styles.comment_container} key={i}>
                            <div className={styles.comment_author}>From: {item.author}</div>
                            <div className={styles.comment}>{item.comment}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewJoke;
