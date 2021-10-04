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
  });

  return (
    <>
      <div className="addgallerytext">
        <p className="p1">add some photos for your dog's gallery here</p>
      </div>
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
    </>
  );
}

export default DropZone;
