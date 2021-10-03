import "../CreateDog.css";
import "./DropZone.css";

import upload from "../../../img/dragdrop/upload3.png";
import uploadactive from "../../../img/dragdrop/upload4.png";

import { useDropzone } from "react-dropzone";

function DropZone({
  onDrop,
  accept,
  className,
  classNameImg,
  textdefault,
  textactive,
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div className={className} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
          <p>{textactive}</p>
          <div className={classNameImg}>
            <img src={uploadactive} />
          </div>
        </>
      ) : (
        <>
          <p>{textdefault}</p>
          <div className={classNameImg}>
            <img src={upload} />
          </div>
        </>
      )}
    </div>
  );
}

export default DropZone;
