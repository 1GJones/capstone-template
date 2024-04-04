import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import useAuth from '../providers/AuthProvider/useAuth'



function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [updatingUser, setUpdatingUser] = useState(false)


  const toCommunityPage = () => {
    navigate('/communitypage')
  }

  const handleUserUpdate = () => {
    setUpdatingUser(true);

  }

  const handleNonUpdate = () => {
    setUpdatingUser(false)
  }

  const handleUpdate = () => {
    e.preventDefault()
   
      setUpdatingUser(false) 


  }

  return (
    <>
      <div className='userInfo'>
        <p>{user.userName}'s Profile Page</p>
        <p> {user.email}</p>
        <p>{user.favGenres}</p>
      </div>
      <div className='updateProfileBtns'>
        <Button onClick={handleUserUpdate}>Update Profile</Button>
        <Button onClick={toCommunityPage}>Public Bookshelf</Button>
        <Button>Upload A Book</Button>
      </div>
      {updatingUser && (
        <Form>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              name='address'
              autoComplete='off'
              placeholder='Update your address' />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              name='city'
              autoComplete='off'
              placeholder='Update your city' />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              type='text'
              name='state'
              autoComplete='off'
              placeholder='Update your state' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type='text'
              name='zipCode'
              autoComplete='off'
              placeholder='Update your zip' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Favorite Genre</Form.Label>
            <Form.Control
              type='text'
              name='favGenres'
              autoComplete='off'
              placeholder='Update your Favorite Genre' />
          </Form.Group>
          <Button type='submit' onClick={handleUpdate}>Update</Button>
          <Button variant='info' onClick={handleNonUpdate}>Go Back</Button>
        </Form>
      )}
    </>
  )
}

export default ProfilePage