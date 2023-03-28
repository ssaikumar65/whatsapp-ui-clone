import "./index.css";
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

type MessageProps = {
  time: string;
  float: "left" | "right";
  msg?: string;
};
const MessageItem = ({ item }: { item: MessageProps }) => {
  return (
    <div className={`message-item ${item.float}`}>
      <div className="message">
        <span>{item.msg !== undefined ? item.msg : text}</span>
        <h6>{item.time}</h6>
      </div>
    </div>
  );
};

export default MessageItem;
