import { TextMsgBox, TextMsg } from './Comments.styled';

const Message = () => {
  return (
    <>
      <TextMsgBox
        top={`22%`}
        left={`57%`}
        height={`auto`}
        backColor={`rgba(125, 99, 83, 1)`}
        borderRadius={`22px 22px 0px 22px`}
      >
        <TextMsg>
          Hi Karen, I’m wandering is it possible to order your product, let's
          exchange contacts!
        </TextMsg>
      </TextMsgBox>
      <TextMsgBox
        top={`58%`}
        left={`66%`}
        backColor={`rgba(114, 105, 133, 1)`}
        borderRadius={`30px 30px 30px 30px`}
        width={`auto`}
        height={`50px`}
      >
        <TextMsg>Hi Samantha</TextMsg>
      </TextMsgBox>
      <TextMsgBox
        top={`65%`}
        left={`66%`}
        backColor={`rgba(114, 105, 133, 1)`}
        borderRadius={`30px 30px 30px 0px`}
        width={`auto`}
        height={`50px`}
      >
        <TextMsg>Yes, here is our phone number #----#</TextMsg>
      </TextMsgBox>
    </>
  );
};
export default Message;
