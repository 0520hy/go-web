import React from "react";
import Comment from "./comment";

const comments = [
    {
        name: "민지",
        comment: "2004.05.07",
        imgUrl: "https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fcdd163b6-fabd-4f95-9775-cc2f80d362ac.jpg",
    },
    {
        name: "하니",
        comment: "2004.10.06",
        imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fbd7fff23-8e54-4f0a-86e5-a1140dd8a98a.jpg"
    },
    {
        name: "다니엘",
        comment: "2005.04.11",
        imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fa0f317ad-e2e4-43dd-a7e2-a9d93a5c2099.jpg"
    },
    {
      name: "해린",
      comment: "2006.05.15",
      imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fa7af039a-27e3-4bb5-9f29-efd35b052948.jpg"
  },
  {
      name: "혜인",
      comment: "2008.04.21",
      imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2F74fe64c2-999f-42f4-be5d-2f938330e661.jpg"
  },
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} imgUrl={comment.imgUrl} />
                );
            })}
        </div>
    );
}

export default CommentList;