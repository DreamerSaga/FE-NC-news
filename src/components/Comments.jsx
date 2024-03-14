import React, { useState, useEffect } from 'react';
import { deleteComment, getComments } from '../utils/api';
import Vote from './Vote';
import PostComment from './PostComment';

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
        setIsError(null);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  const deleteHandler = (comment_id) => {
    setIsLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
        setIsDeleted(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsDeleted(false);
        }, 3000);
        setIsError(null);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <div className="loader"></div>
  ) : !comments.length ? (
    <p>No comments yet</p>
  ) : (
    <>
      <h2>Comments</h2>
      <ul className="comments">
        {comments.map((comment) => (
          <li className="comment" key={comment.comment_id}>
            <p>{comment.body}</p>
            <Vote id={comment.comment_id} type="star" votes={comment.votes} />
            <p>by {comment.author}</p>
            <p>posted {new Date(comment.created_at).toDateString()}</p>
            <button
              onClick={() => deleteHandler(comment.comment_id)}
              className="del-button"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      {isDeleted && (
        <div className="alert deleted">
          <span
            className="closebtn"
            onClick={() => {
              setIsError(null);
            }}
          >
            &times;
          </span>
          Comment successfully deleted.
        </div>
      )}
      <PostComment article_id={article_id} setComments={setComments} />
    </>
  );
}
