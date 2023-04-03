import React, { useState } from 'react';

export default function TaskInput(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <button
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
