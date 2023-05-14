import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ setValue = {} }) {
  const onFileHandler = (e) => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("multiple", true);
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async (e) => {
      let arr = [];
      let fileList = e.target.files;

      await Object.values(fileList)?.map((file) => {
        arr.push(file);
        setValue((prev) => {
          return { ...prev, ["file"]: [...arr] };
        });
      });
    });
  };

  const onEditorHandler = (e) => {
    setValue((prev) => ({
      ...prev,
      ["content"]: e,
    }));
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          //[{ 'font': [] }],
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
          ["clean"],
        ],
        handlers: {
          image: onFileHandler,
        },
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={onEditorHandler}
      />
    </div>
  );
}

export default Editor;
