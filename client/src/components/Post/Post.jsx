import React, { useState } from "react";
import { Container, Button, Card, Figure, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Post.scss";
import { DeleteModal, LikeIcon, LikeIconFill, ReplyIcon, TrashIcon } from "../";
import { useProvideAuth } from "../../hooks/useAuth";
import api from "../../utils/api.utils.js";
import { timeSince } from "../../utils/timeSince";
import useToggle from "../../hooks/useToggle";

const Post = ({ post }) => {
    const { _id, author, text, comments, created, likes,  } = post;
  const [showDelete, toggleShowDelete] = useToggle();
  const [isDeleted, toggleIsDeleted] = useToggle();

  let navigate = useNavigate();
  const {
    state: { user },
  } = useProvideAuth();
  const [likedState, setLiked] = useState(likes.includes(user && user.uid));
  const [likesState, setLikes] = useState(likes.length);

  const handleToggleLike = async () => {
    try {
      if (!likedState) {
        setLiked(true);
        setLikes(likesState + 1);
        await api.post(`/posts/like/${_id}`);
      } else {
        setLiked(false);
        setLikes(likesState - 1);
        await api.post(`/posts/like/${_id}`);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleDeletePost = async () => {
    try {
      await api.delete(`/posts/${_id}`);
      toggleShowDelete();
      toggleIsDeleted();
    } catch (error) {
      toast.error(`An error occurred deleting post ${_id}.`);
      toggleShowDelete();
    }
  };
  const renderTooltip=(props)=>{
    console.log(likes)
  let namesToRender;
     if (likes.length === 0){
      namesToRender = "Nobody liked this stuff"

     }
     else if (likes.length < 5){
      namesToRender = likes.map((user) => user.username).join(",")
     }else{
      namesToRender = likes.filter((user,i)=>i < 3).map((user)=>user.username).join(",  ") + `and ${likes.length -3}others`
     }
      
   
    return ( 
    <Tooltip  id="likes-tooltip"{...props}>
      {namesToRender  }

      </Tooltip>
    )
  }

  if (isDeleted) return <></>;

  return (
    <>
      <ListGroup.Item className="text-danger rounded-edge" as={"div"}>
        <Card className="w-100 py-2 px-3 d-flex flex-row gap-3 align-items-start">
          <Link to={`/u/${user && author.username}`}>
            <Figure
              className="mr-4 bg-border-color rounded-circle ml-2 p-1"
              style={{
                height: "70px",
                minHeight: "70px",
                width: "70px",
                minWidth: "70px",
                marginTop: "0px",
              }}
            >
              <Figure.Image
                src={author.profile_image}
                className="avatar w-100 h-100 mr-4"
              />
            </Figure>
          </Link>
          <div className="w-100">
            <div className="d-flex align-items-center">
              <Link
                to={`/u/${author.username}`}
                className="text-muted mr-1 username"
              >
                { author.username}
              </Link>
              <pre className="m-0 text-muted">{" - "}</pre>
              <span className="text-muted">{timeSince(created)} ago</span>
            </div>
            <div className="mb-n1 mt-1 position-relative">
              <blockquote className="mb-1 mw-100">
                <div className="mw-100 overflow-hidden">{text}</div>
              </blockquote>
            </div>

            <div className="d-flex justify-content-end align-items-bottom">
              <div className="d-flex align-items-center">
                {user && user.username ===  author.username && (
                  <Container className="close">
                    <TrashIcon onClick={toggleShowDelete} />
                  </Container>
                )}
              </div>

              <div className="d-flex align-items-center mr-2">
                <Button
                  variant="link"
                  size="md"
                  onClick={() => navigate(`/p/${_id}`)}
                >
                  <ReplyIcon />
                </Button>
                <span>{comments.length > 0 ? comments.length : 0}</span>
              </div> 

              <OverlayTrigger
                placement ="top" 
                delay= {{show:200 , hide:500 }} 
                overlay={renderTooltip}>
              <div

                className={`d-flex align-items-center mr-3 ${likedState ? "is_Liked" : "" }`}
              >
                <Button variant="link" size="md" onClick={handleToggleLike}>
                  {likedState ? <LikeIconFill /> : <LikeIcon />}
                </Button>
                <span>{likesState}</span>
              </div>
              </OverlayTrigger>
            </div>
          </div>
        </Card>
      </ListGroup.Item>

      <DeleteModal
        show={showDelete}
        handleClose={toggleShowDelete}
        handleDelete={handleDeletePost}
      />
    </>
  );
};

export default Post;