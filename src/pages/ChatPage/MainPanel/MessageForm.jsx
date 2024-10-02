import { useState } from "react";

const MessageForm = () => {
  const [content, setContent] = useState("");
  const [loading] = useState(false);

  return (
    <div>
      <form action=''>
        <textarea
          style={{
            width: "100%",
            height: 90,
            border: "0.2rem solid rgb(234, 236, 236)",
            borderRadius: 4,
          }}
          name=''
          id=''
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <button
              type='submit'
              style={{ width: "100%", fontSize: 20, fontWeight: "bold" }}
              className='message-form-button'
              disabled={loading ? true : false}
            >
              보내기
            </button>
          </div>
          <div style={{ flexGrow: 1 }}>
            <button
              type='submit'
              style={{ width: "100%", fontSize: 20, fontWeight: "bold" }}
              disabled={loading ? true : false}
              className='message-form-button'
            >
              이미지
            </button>
          </div>
        </div>
      </form>

      <input
        type='file'
        accept='image/jpeg, image/png'
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MessageForm;
