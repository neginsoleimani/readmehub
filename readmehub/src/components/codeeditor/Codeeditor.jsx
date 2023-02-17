import React from "react";
import MDEditor from "@uiw/react-md-editor";
import './codeeditor.css'

export default function Codeeditor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <>
      <div className="doc__info">
        <div class="row">
          <div class="col">
            <div class="tabs">
              <div class="tab">
                <input type="checkbox" id="chck1" />
                <label class="tab-label" for="chck1">
                  Headings
                </label>
                <div class="tab-content">
                  <p>
                  To create a heading, add one to six <code className="code__small">#</code> symbols before your
                  heading text. The number of <code className="code__small">#</code> you use will determine the size
                  of the heading.
                  </p>
                  <div className="code">
                    <code>
                      <span># The largest heading</span>
                      <span>## The second largest heading </span>
                      <span>###### The smallest heading</span>
                    </code>
                  </div>
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Styling text
                </label>
                <div class="tab-content">
                  <>
                  You can indicate emphasis with bold, italic, strikethrough,
                  subscript, or superscript text in comment fields and .md
                  files.
                  </>
                  {/* <table>
                    <tr>
                      <th>Style</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Bold</th>
                      <th>** ** or __ __</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Italic</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Strikethrough</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Bold and nested italic</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>All bold and italic</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Subscript</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                    <tr>
                      <th>Superscript</th>
                      <th>Syntax</th>
                      <th>Keyboard shortcut</th>
                      <th>Example</th>
                      <th>Output</th>
                    </tr>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="codeeditor__container">
        <MDEditor value={value} onChange={setValue} style={{ zIndex: "0" }} />
      </div>
    </>
  );
}
