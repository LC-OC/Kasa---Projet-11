import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags-list listing">
      {tags.map((tag) => {
        return (
          <span className="badge" key={tag}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
