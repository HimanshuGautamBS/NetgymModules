import React from "react";
import Toggle from "./Toggle";
import RequestTime from "../RequestTime";
import TimeInp from "./TimeInp";

const BookList = (props) => {
  return props.bookDetails.map((val, idx) => {
    let name = `hour-${idx}`,
      author = `author-${idx}`;

    return (
      <div key={val.index}>
        <RequestTime />
        <label>Start time</label>
        <div className="col">
          <TimeInp />
          {/*<button>up</button>
          <input
            type="text"
            className="form-control required"
            placeholder="6"
            name="hour"
            data-id={idx}
            id={name}
          />
          <button>Down</button>*/}
        </div>
        <div className="col">
          <TimeInp />
          {/*<input
            type="text"
            className="form-control required"
            placeholder="0"
            name="author"
            id={author}
            data-id={idx}
          />*/}
        </div>
        <div className="col">
          <Toggle />
        </div>
        <label>End time</label>
        <div className="col">
          <TimeInp />
        </div>
        <div className="col">
          <TimeInp />
        </div>
        <div className="col">
          <Toggle />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;
