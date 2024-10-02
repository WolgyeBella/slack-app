import { useSelector } from "react-redux";
import { Col, Row, InputGroup, Image, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const MessageHeader = () => {
  const { currentChatRoom } = useSelector((state) => state.chatRoom);
  return (
    <div
      style={{
        width: "100%",
        border: "0.2rem solid #ececec",
        borderRadius: "4px",
        height: "190px",
        marginBottom: "1rem",
      }}
    >
      <Row>
        <Col></Col>
        <Col>
          <InputGroup>
            <InputGroup.Text>
              <AiOutlineSearch />
            </InputGroup.Text>
            <FormControl onChange placeholder='Search Messages'></FormControl>
          </InputGroup>
        </Col>
      </Row>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Image
          roundedCircle
          // src={currentChatRoom?.createBy.image}
          style={{ width: 30, height: 30, marginRight: 7 }}
        />{" "}
        {/* <p>{currentChatRoom?.createBy.name}</p> */}
      </div>
    </div>
  );
};

export default MessageHeader;
