import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import './codeeditor.css'


export default function Codeeditor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container  codeeditor__container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
