import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "../../assets/css/input-tag.css";

interface Props {
  tags;
  setTags;
}

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function InputTag({ tags, setTags }: Props) {
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <ReactTags
      tags={tags}
      //   suggestions={suggestions}
      delimiters={delimiters}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      handleTagClick={handleTagClick}
      inputFieldPosition="bottom"
      autocomplete
      placeholder="Enter meta tags..."
    />
  );
}
