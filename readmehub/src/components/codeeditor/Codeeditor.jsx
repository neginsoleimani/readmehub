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
                  <p>
                    To create a heading, add one to six{" "}
                    <code className="code__small">#</code> symbols before your
                    heading text. The number of{" "}
                    <code className="code__small">#</code> you use will
                    determine the size of the heading.
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
                  <p>
                    You can indicate emphasis with bold, italic, strikethrough,
                    subscript, or superscript text in comment fields and .md
                    files.
                  </p>

                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Style</th>
                        <th scope="col">Syntax</th>
                        <th scope="col">Example</th>
                        <th scope="col">Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Style">Bold</td>
                        <td data-label="Syntax"><code className="code__small">** **</code> or <code className="code__small">__ __</code></td>
                        <td data-label="Example"><code className="code__small">**This is bold text**</code></td>
                        <td data-label="Output"><b style={{fontSize:"0.8rem"}}>This is bold text</b></td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                        Italic
                        </td>
                        <td data-label="Syntax"><code className="code__small">* *</code> or <code className="code__small">_ _</code></td>
                        <td data-label="Example"><code className="code__small">*This text is italicized*</code></td>
                        <td data-label="Output"><i style={{fontSize:"0.8rem"}}>This text is italicized</i></td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                        Strikethrough
                        </td>
                        <td data-label="Syntax"><code className="code__small">~~ ~~</code></td>
                        <td data-label="Example"><code className="code__small">~~This was mistaken text~~</code></td>
                        <td data-label="Output"><s  style={{fontSize:"0.8rem"}}>This was mistaken text</s></td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                        Bold and nested italic
                        </td>
                        <td data-label="Syntax"><code className="code__small">** **</code> and <code className="code__small">_ _</code></td>
                        <td data-label="Example"><code className="code__small">**This text is _extremely_ important**</code></td>
                        <td data-label="Output"><b  style={{fontSize:"0.8rem"}}>This text is <i  style={{fontSize:"0.8rem"}}>extremely</i> important</b></td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                        All bold and italic
                        </td>
                        <td data-label="Syntax"><code className="code__small">*** ***</code></td>
                        <td data-label="Example"><code className="code__small">***All this text is important***</code></td>
                        <td data-label="Output"><b  style={{fontSize:"0.8rem"}}><i  style={{fontSize:"0.8rem"}}>All this text is important</i></b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="codeeditor__container">
        <MDEditor value={value} onChange={setValue} style={{ zIndex: "1" }} />
      </div>
    </>
  );
}
