// ReviewForm.js
import React, { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Asegúrate de tener la ruta correcta
import '../css/ReviewForm.css';
import { onAuthStateChanged } from 'firebase/auth';
import { useFirebase } from '../components/FirebaseContex';
import { getDatabase, ref, push, set } from 'firebase/database';

const ReviewForm = () => {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (value) => {
    setStars(value);
  };

  const { auth } = useFirebase();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const openReviewsPopup = () => {
    window.open(
      'https://search.google.com/local/reviews?placeid=ChIJNTxFdaAt9I4RTKq8RPEwwY8&q=Tecnialarmas+Ltda.&hl=es&gl=419',
      '_blank'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (stars > 0 && comment.trim() !== '') {
      try {
        const database = getDatabase();
        const reviewsRef = ref(database, 'reviews'); // Cambia 'reviews' por la estructura que desees en tu base de datos
        const date = new Date().toISOString().split('T')[0];
        // Crea un nuevo nodo con la reseña
        const newReviewRef = push(reviewsRef);

        // Guarda la información de la reseña en el nodo
        await set(newReviewRef, {
          stars,
          comment,
          date,
          username: user ? user.displayName : null,
          userId: user ? user.uid : null,
          userImgUrl: user ? user.photoURL : null,
        });

        console.log('Reseña enviada con éxito.');

        setComment('');

      } catch (error) {
        console.error('Error al enviar la reseña:', error.message);
      }
    } else {
      console.error('Por favor, selecciona estrellas y escribe un comentario.');
    }
  };

  return (
    <form className='formulariore' onSubmit={handleSubmit}>
      <div className='formlabel'>
        <label >Calificación:</label>
        <StarRating onStarClick={handleStarClick} />
      </div>
      <div className='formlabel' style={{width:"100%"}}>
        <label>Comentario:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <div className='form-buttons'>
        <button className='send-review' style={{margin:5}} type='submit'>Enviar reseña</button>
        <button className='send-review' type='button' onClick={openReviewsPopup}>
          Ver más reseñas
        </button>
      </div>

    </form>
  );
};

export default ReviewForm;
