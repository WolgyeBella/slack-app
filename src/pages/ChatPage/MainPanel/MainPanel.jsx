import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";

const MainPanel = () => {
  return (
    <div style={{ padding: "2rem 2rem 0 2rem" }}>
      <MessageHeader></MessageHeader>
      <div
        style={{
          width: "100%",
          height: 450,
          border: "0.2rem solid #ececec",
          padding: "1rem",
          borderRadius: "4px",
          overflowY: "auto",
        }}
      ></div>
      <MessageForm></MessageForm>
    </div>
  );
};

export default MainPanel;
