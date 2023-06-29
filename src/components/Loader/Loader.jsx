import { Comment } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Comment
      visible={true}
      height="500"
      width="300"
      ariaLabel="comment-loading"
      wrapperStyle={{
        position: `absolute`,
        top: `10%`,
        left: `40%`,
        // marginLeft: `auto`,
        // marginRight: `auto`,
        display: `block`,
      }}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
};
