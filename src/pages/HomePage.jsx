import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/MainPage.module.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TitleText from "../ui/layout/titleText/TitleText";

const HomePage = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('http://142.93.231.35:8000/main', {
            headers: {
                'accept': 'application/json',
                'X-CSRFToken': 'zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX'
            }
        })
        .then(response => {
            setArticles(response.data.articles_data);
            console.log(response.data.articles_data);
            setQuizzes(response.data.quizzes_data);
            console.log(response.data.quizzes_data)
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
        });
    }, []);


      const artClick = (id) => {
        navigate(`/artdetal/${id}`);
      };

    const quizClick = () => {
        navigate("/quiz-start");
    };
    const randomColor = () => {
        let hash = "#";
        for (let i = 0; i < 3; i++) {
            let randomNum = Math.random() * 10;
            const round = Math.round(randomNum);
            hash = hash + round;
        }
        return hash;
    };

    const renderArticleCards = () => {
        return articles.map((article, index) => (
            <div key={index}>
                <button
                    onClick={() => artClick(article.id)}
                    className={styles.card}
                    style={{ background: randomColor() }}
                >
                    <div>
                        <p className={styles.name}>{article.title}</p>
                        <p className={styles.category}>{`#${article.category_name}`}</p>
                    </div>
                    <img className={styles.image} src={article.image} alt="" />
                </button>
            </div>
        ));
    };

    const renderQuizCards = () => {
        return quizzes.map((quiz, index) => (
            <div key={index}>
                <button
                    onClick={quizClick}
                    className={styles.card}
                    style={{ background: randomColor() }}
                >
                    <img className={styles.quizesImage} src={quiz.image} alt="" />
                    <div>
                        <p className={styles.titleCategory}>{quiz.category_name}</p>
                        <p className={styles.numberOfQuestions}>{`${quiz.quantity} вопросов`}</p>
                    </div>
                </button>
            </div>
        ));
    };

    return (
        <div className={styles.container}>
            <TitleText />
            <div>
                <Link to={"/art"}>Статьи</Link>
                 <div className={styles.cards}>
                    {renderArticleCards()}
                </div>
            </div>
            <div>
                <Link to={"/quizes"}>Квизы</Link>
                <div className={styles.cards}>
                    {renderQuizCards()}
                </div>
            </div>
        </div>
    )
}

export default HomePage;
