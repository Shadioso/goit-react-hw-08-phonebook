import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Discuss
      visible={true}
      height="400"
      width="250"
      ariaLabel="comment-loading"
      wrapperStyle={{
        position: `absolute`,
        top: `10%`,
        left: `40%`,
        display: `block`,
      }}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
};
