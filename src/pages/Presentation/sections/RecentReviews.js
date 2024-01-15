// RecentReviews.js
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, orderByKey, limitToLast, onValue,remove } from 'firebase/database';
import StarReviews from './StartsReview';
import { useFirebase } from '../components/FirebaseContex';
import Modal from 'react-modal';
import '../css/ReviewForm.css';
const RecentReviews = () => {
  const { auth } = useFirebase();
  const [reviews, setReviews] = useState([]);
  
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const openConfirmationModal = (reviewId) => {
    setReviewToDelete(reviewId);
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setReviewToDelete(null);
    setConfirmationModalOpen(false);
  };

  const handleDeleteReview = async () => {
    const database = getDatabase();
    await remove(ref(database, `reviews/${reviewToDelete}`));
    closeConfirmationModal();
  };
  
  useEffect(() => {
    const database = getDatabase();
    const reviewsRef = ref(database, 'reviews');

    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const reviewsData = snapshot.val();
      if (reviewsData) {
        const reviewsArray = Object.entries(reviewsData).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        // Mezclar las revisiones (Fisher-Yates shuffle)
        for (let i = reviewsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [reviewsArray[i], reviewsArray[j]] = [reviewsArray[j], reviewsArray[i]];
        }

        // Tomar las primeras 10 revisiones
        const selectedReviews = reviewsArray.slice(0, 9);

        setReviews(selectedReviews);
      } else {
        setReviews([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='recent-reviews-container'>
      {reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='review-date'>{review.date}</div>
          <p className='review-name'>{review.username}</p>
          <div className='review-avatar'>
            {review.userImgUrl && <img className='review-avatar' src={review.userImgUrl} alt='User' />}
          </div>
          <div className='review-stars'><StarReviews stars={review.stars} /></div>
          <div className='review-comment'>{review.comment}</div>
          {auth.currentUser && auth.currentUser.uid === review.userId && (
            <button className='reviewDelete' onClick={() => openConfirmationModal(review.id)}>
              <img src={require("../../../assets/trash.png")} alt="Delete" />
            </button>
          )}
        </div>
      ))}
      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={closeConfirmationModal}
        contentLabel="Eliminar revisión"
        className="confirmation-modal"
      >
        <p>¿Estás seguro de que quieres eliminar esta revisión?</p>
        <div className="modal-buttons">
          <button className='confirmDelete' onClick={handleDeleteReview}>Sí, eliminar</button>
          <button className='cancelDelete' onClick={closeConfirmationModal}>Cancelar</button>
        </div>
      </Modal>
    </div>
  );
};

export default RecentReviews;
