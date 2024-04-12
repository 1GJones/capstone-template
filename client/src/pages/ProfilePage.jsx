import React from 'react'
import { Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useAuth from '../providers/AuthProvider/useAuth'
import BookUpload from '../components/Book-Upload'



function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  


  const toCommunityPage = () => {
    navigate('/communitypage')
  }

  return (
    <>
    <div id='profilePage' >
      <div className='updateProfileBtns'>
        <BookUpload/>
      </div>
    </div>
    </>
  )
}

export default ProfilePage