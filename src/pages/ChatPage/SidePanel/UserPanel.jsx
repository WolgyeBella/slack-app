import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosChatboxes } from "react-icons/io";
import { useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
import app from "../../../firebase";
import { useRef } from "react";

const UserPanel = () => {
  const { currentUser } = useSelector((state) => state.user);
  const auth = getAuth(app);
  const ref = useRef(null);

  ref.current === null;
  // console.log(ref.current);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  const handleOpenImageRef = () => {
    ref.current.click();
  };

  return (
    <div>
      <h3 style={{ color: "white" }}>
        <IoIosChatboxes>{""}Chat App</IoIosChatboxes>
      </h3>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Image
          src={currentUser.photoURL}
          roundedCircle
          style={{ width: 30, height: 30, marginTop: 3 }}
        />

        <Dropdown>
          <Dropdown.Toggle
            style={{ backgroundColor: "transparent", border: 0 }}
          >
            {currentUser.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpenImageRef}>
              프로필 사진 변경
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <input
        type='file'
        ref={ref}
        style={{ display: "none" }}
        accept='image/jpeg, image/png'
      />
    </div>
  );
};

export default UserPanel;
