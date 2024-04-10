import React, { useEffect, useState } from 'react'
import { Button, Form } from "react-bootstrap";
import useAuth from '../../providers/AuthProvider/useAuth';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import StarRating from '../StarRating';


function UserReview({bookId}) {
  const [reviews, setReviews] = useState([])
  const [updateReviews, setUpdateReviews] = useState(false)
  const [userReview, setUserReview] = useState({})
  const [showReview, setShowReview] = useState(true)
  const navigate = useNavigate()
  
 

  const { isAuthenticated, user } = useAuth();
  
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = 
        await axios.get(`http://localhost:3001/api/books/${bookId}/reviews`)

        setReviews(response.data)

        const userAlreadyReviewed = reviews.some((review) => review.user._id === user._id)
        setShowReview(!userAlreadyReviewed)
        
        
      } catch (error) {
        console.error('Error fetching reviews', error)
      }
    }
    if(bookId && reviews.length === 0){
      fetchReviews()
    }
  }, [bookId])
  const handleRating = (newRating) => { 
    setUserReview ({...userReview, stars: newRating})
  }
  
  const handleReviewText = ({ target: {value} }) => {
    setUserReview ({ ...userReview, text: value})
  }

  const handleBackBtn = () => {
    navigate('/communitypage')
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!userReview.text || !userReview.stars || !bookId) {
      toast.error("Overall Rating  and Review is required!",{
        hideProgressBar: true,
      })
      return 
    }
    
    if(userReview.text && userReview.stars && bookId) {
      try {
        await axios.post(
          `http://localhost:3001/api/books/${bookId}/reviews`,
          {
            bookId: bookId,
            text: userReview.text,
            stars: userReview.stars,
            userId: user._id,

          }
        )
        
        setUpdateReviews(prev => !prev)
        toast.success("Review submitted!", {
          hideProgressBar: true,
        })

        const response = await axios.get(`http://localhost:3001/api/books/${bookId}/reviews`);
        setReviews(response.data);

        console.log("Updated Review", userReview)
      } catch (error) {
        
      }
    }
    
  }
  console.log(reviews)
  


  return (
    <>
    <ToastContainer 
    position='top-right'
    autoClose={5000}
    style={{ 
      fontSize: '10px', 
      top: '10px',
      right: '10px',
      zIndex: 9999}} />

      <div className='book-review'>
        {/* { showReview ? null : ( */}
          <div>
            <h2>Add a Review</h2>
            <Form>
              <Form.Group>
                <Form.Label>Overall Rating</Form.Label>
                <div>
            <StarRating onRate={handleRating} />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Add a Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleReviewText}
                />
              </Form.Group>
              <Button type="submit" className='submitReview' onClick={handleSubmit}>Submit Review</Button>
              <Button  variant="warning" onClick={handleBackBtn}>Back</Button>
            </Form>
          </div>
        {/* )} */}
        
        {reviews.length ? (
  <div className='reviewList'>
    <h2>User Reviews: </h2>
    {reviews.map(({ _id, text, stars, user, createdAt }) => {
      return (
      <div className='review' key={_id}>
        <span>{user.userName} </span>
        <StarRating stars={stars} readOnly />
        <p>{text}</p>
        <p>Reviewed at: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
    )
})}
  </div>
 ) : null}
</div>
    </>
)        
}

      export default UserReview