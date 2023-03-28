import { useState, useRef, useEffect, KeyboardEvent } from "react";
import Search from "@mui/icons-material/Search";
import Send from "@mui/icons-material/Send";
import FilterList from "@mui/icons-material/FilterList";
import MoreVert from "@mui/icons-material/MoreVert";
import Chat from "@mui/icons-material/Chat";
import DonutLarge from "@mui/icons-material/DonutLarge";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardVoice from "@mui/icons-material/KeyboardVoice";
import Attachment from "@mui/icons-material/Attachment";
import TagFaces from "@mui/icons-material/TagFaces";
import { Link } from "react-router-dom";
import MessageItem from "../../components/MessageItem";
import icon from "../../images/icon.png";
import "./index.css";
import { time, getCurrentTime } from "../../utils/date";

type Props = {
  msg: string;
  float: "left" | "right";
  time: string;
};
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const initialValue: Props[] = [
  {
    msg: text,
    float: "left",
    time: getCurrentTime(),
  },
  {
    msg: text,
    float: "right",
    time: getCurrentTime(),
  },
  {
    msg: text,
    float: "left",
    time: getCurrentTime(),
  },
];
const Home = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<Props[]>(initialValue);
  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  const [tap1, setTap1] = useState(false);
  const [tap2, setTap2] = useState(false);

  const onEnter = () => {
    const i: Props = {
      msg: input,
      float: "right",
      time: getCurrentTime(),
    };

    setInput("");
    setData((prev) => [...prev, i]);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.length > 0) {
      onEnter();
    }
  };
  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("DOMNodeInserted", (event) => {
        (event.currentTarget as HTMLInputElement).scroll({
          top: (event.currentTarget as HTMLInputElement).scrollHeight,
          behavior: "smooth",
        });
      });
    }
  }, []);

  const settingsMenu = (val: string) => {
    if (val === "left") setTap1(!tap1);
    if (val === "right") setTap2(!tap2);
  };

  return (
    <div className="main-body">
      <div className="chatlist">
        <div className={tap1 ? "settings tap" : "settings"}>
          <p>New group</p>
          <p>Archived</p>
          <p>Starred Messages</p>
          <p>Settings</p>
          <p>Log out</p>
        </div>
        <div className="chathead">
          <div className="dp">
            <Link className="image" to="/">
              <img src={icon} alt="icon" />
            </Link>
          </div>
          <div className="icons">
            <div className="icon">
              <DonutLarge />
            </div>
            <div className="icon">
              <Chat />
            </div>
            <div onClick={() => settingsMenu("left")} className="icon">
              <MoreVert />
            </div>
          </div>
        </div>
        <div className="chatsearch">
          <div className="searchbar">
            <div className="icon">
              <Search />
            </div>
            <input type="text" placeholder="Search or start new chat" />
          </div>
          <div className="icon">
            <FilterList />
          </div>
        </div>
        <div className="chats">
          {[...Array(12)].map((e, i) => (
            <div key={i} className="chatitem">
              <div className="dp">
                <img src={icon} alt="icon" />
              </div>
              <div className="details">
                <h4>John Doe</h4>
                <h5>Hi This is John</h5>
              </div>
              <div className="time">
                {time}
                <div className="icon">
                  <ExpandMore fontSize="large" />
                </div>
              </div>
            </div>
          ))}
          <div className="encryption">
            Your personal messages are&nbsp;<span> end-to-end encrypted.</span>
          </div>
        </div>
      </div>
      <div className="chatpage">
        <div className="topbar">
          <div className={tap2 ? "settings tap" : "settings"}>
            <p>New group</p>
            <p>Archived</p>
            <p>Starred Messages</p>
            <p>Settings</p>
            <p>Log out</p>
          </div>
          <div className="dp">
            <img src={icon} alt="icon" />
          </div>
          <div className="chatname">
            John Doe
            <span>online</span>
          </div>
          <div className="icon">
            <Search />
          </div>
          <div onClick={() => settingsMenu("right")} className="icon">
            <MoreVert />
          </div>
        </div>
        <div className="chatsection" ref={ref}>
          {data.map((item, index) => (
            <MessageItem key={index} item={item} />
          ))}
        </div>
        <div className="bottombar">
          <div className="icon">
            <TagFaces />
          </div>
          <div className="icon">
            <Attachment />
          </div>
          <div className="searchbar">
            <input
              type="text"
              autoFocus
              value={input}
              onKeyDown={onKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
          </div>
          {input.length > 0 ? (
            <div onClick={onEnter} className="icon">
              <Send />
            </div>
          ) : (
            <div className="icon">
              <KeyboardVoice />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
