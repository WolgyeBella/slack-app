import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosChatboxes } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { signOut, getAuth, updateProfile } from "firebase/auth";
import app, { db, storage } from "../../../firebase";
import { useRef } from "react";
import {
  uploadBytesResumable,
  getDownloadURL,
  ref as strRef,
} from "firebase/storage";
import { setPhotoUrl } from "../../../store/userSlice";
import { update, ref as dbRef } from "firebase/database";

const UserPanel = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const auth = getAuth(app);
  const inputOpenImageRef = useRef(null);

  inputOpenImageRef.current === null;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    const user = auth.currentUser;

    const metadata = {
      contentType: file.type,
    };

    const storageRef = strRef(storage, "user_image/" + user.uid);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;

          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          updateProfile(user, {
            photoURL: downloadURL,
          });
          // 리덕스 스토어 이미지 데이터 수정
          dispatch(setPhotoUrl(downloadURL));
          // 데이터베이스 유저 이미지 수정
          update(dbRef(db, `users/${user.uid}`), { image: downloadURL });
        });
      }
    );
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
        ref={inputOpenImageRef}
        style={{ display: "none" }}
        accept='image/jpeg, image/png'
        onChange={handleUploadImage}
      />
    </div>
  );
};

export default UserPanel;
