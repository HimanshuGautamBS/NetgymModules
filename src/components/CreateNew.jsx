import React from "react";
const BookList = (props) => {
  return props.bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      author = `author-${idx}`,
      dateOfPublish = `dateOfPublish-${idx}`,
      type = `type-${idx}`,
      price = `price-${idx}`;
    return (
      <div key={val.index}>
        <label>Start time</label>
        <div className="col">
          <button>up</button>
          <input
            type="text"
            className="form-control required"
            placeholder="6"
            name="name"
            data-id={idx}
            id={name}
          />
          <button>Down</button>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control required"
            placeholder="0"
            name="author"
            id={author}
            data-id={idx}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="0"
            name="price"
            id={price}
            data-id={idx}
          />
        </div>
        <label>End time</label>
        <div className="col">
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={name}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control required"
            placeholder="Author"
            name="author"
            id={author}
            data-id={idx}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            id={price}
            data-id={idx}
          />
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
