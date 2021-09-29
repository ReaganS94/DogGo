import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./DogBooleans.css";

function DogBooleans({ dog }) {
  return (
    <>
      <div className="boolean-container">
        <div className="booleans">
          <div className="boolean-answer">
            <p className="p1">kidfriendly</p>
            <div>
              {dog.kidFriendly === true ? (
                <div>
                  {" "}
                  <AiOutlineCheckCircle className="boolean-icon-yes" />
                </div>
              ) : (
                <div>
                  <AiOutlineCloseCircle className="boolean-icon-no" />
                </div>
              )}
            </div>
          </div>
          <div className="boolean-answer">
            <p className="p1">catfriendly</p>
            {dog.catFriendly === true ? (
              <div>
                {" "}
                <AiOutlineCheckCircle className="boolean-icon-yes" />
              </div>
            ) : (
              <div>
                <AiOutlineCloseCircle className="boolean-icon-no" />
              </div>
            )}
          </div>
          <div className="boolean-answer">
            <p className="p1">allergies</p>
            {dog.allergies === true ? (
              <div>
                {" "}
                <AiOutlineCheckCircle className="boolean-icon-yes" />
              </div>
            ) : (
              <div>
                <AiOutlineCloseCircle className="boolean-icon-no" />
              </div>
            )}
          </div>
          <div className="boolean-answer">
            <p className="p1">castrated</p>
            <div>
              {dog.castrated === true ? (
                <div>
                  {" "}
                  <AiOutlineCheckCircle className="boolean-icon-yes" />
                </div>
              ) : (
                <div>
                  <AiOutlineCloseCircle className="boolean-icon-no" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogBooleans;
