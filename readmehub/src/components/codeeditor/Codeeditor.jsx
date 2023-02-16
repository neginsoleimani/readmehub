import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "./codeeditor.css";

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
                  To create a heading, add one to six # symbols before your
                  heading text. The number of # you use will determine the size
                  of the heading.
                  <div className="code">
                    <code>
                      # The largest heading
                      <br />
                      ## The second largest heading <br />
                      ###### The smallest heading
                      <br />
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
                  You can indicate emphasis with bold, italic, strikethrough,
                  subscript, or superscript text in comment fields and .md
                  files.
                  <table>
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
                  </table>
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck3" />
                <label class="tab-label" for="chck3">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>{" "}
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>{" "}
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>{" "}
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>{" "}
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
                </div>
              </div>{" "}
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  Item 2
                </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  in!
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
