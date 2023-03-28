import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "./codeeditor.css";

export default function Codeeditor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <>
      <div className="doc__info">
        <div className="row">
          <div className="col">
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck1" />
                <label className="tab-label" for="chck1">
                  Headings
                </label>
                <div className="tab-content">
                  <p>
                    To create a heading, add one to six
                    <code className="code__small">#</code> symbols before your
                    heading text. The number of
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

              <div className="tab">
                <input type="checkbox" id="chck2" />
                <label className="tab-label" for="chck2">
                  Styling text
                </label>
                <div className="tab-content">
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
                        <td data-label="Syntax">
                          <code className="code__small">** **</code> or{" "}
                          <code className="code__small">__ __</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            **This is bold text**
                          </code>
                        </td>
                        <td data-label="Output">
                          <b style={{ fontSize: "0.8rem" }}>
                            This is bold text
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          Italic
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">* *</code> or{" "}
                          <code className="code__small">_ _</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            *This text is italicized*
                          </code>
                        </td>
                        <td data-label="Output">
                          <i style={{ fontSize: "0.8rem" }}>
                            This text is italicized
                          </i>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          Strikethrough
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">~~ ~~</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            ~~This was mistaken text~~
                          </code>
                        </td>
                        <td data-label="Output">
                          <s style={{ fontSize: "0.8rem" }}>
                            This was mistaken text
                          </s>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          Bold and nested italic
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">** **</code> and{" "}
                          <code className="code__small">_ _</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            **This text is _extremely_ important**
                          </code>
                        </td>
                        <td data-label="Output">
                          <b style={{ fontSize: "0.8rem" }}>
                            This text is{" "}
                            <i style={{ fontSize: "0.8rem" }}>extremely</i>{" "}
                            important
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          All bold and italic
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">*** ***</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            ***All this text is important***
                          </code>
                        </td>
                        <td data-label="Output">
                          <b style={{ fontSize: "0.8rem" }}>
                            <i style={{ fontSize: "0.8rem" }}>
                              All this text is important
                            </i>
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          Subscript
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">{"<sub> </sub>"}</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            {"<sub>This is a subscript text</sub>"}
                          </code>
                        </td>
                        <td data-label="Output">
                          <sub style={{ fontSize: "0.7rem" }}>
                            This is a subscript text
                          </sub>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Style">
                          Superscript
                        </td>
                        <td data-label="Syntax">
                          <code className="code__small">{"<sup> </sup>"}</code>
                        </td>
                        <td data-label="Example">
                          <code className="code__small">
                            {"<sup>This is a superscript text</sup>"}
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck3" />
                <label className="tab-label" for="chck3">
                  Quoting text
                </label>
                <div className="tab-content">
                  <p>
                    You can quote text with a{" "}
                    <code className="code__small">{">"}</code>.
                  </p>
                  <div className="code">
                    <code>
                      <span>Text that is not a quote</span>
                      <span style={{ color: "var(--text-color)" }}>
                        {"> Text that is a quote"}
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck4" />
                <label className="tab-label" for="chck4">
                  Quoting code
                </label>
                <div className="tab-content">
                  <p>
                    You can call out code or a command within a sentence with
                    single backticks. The text within the backticks will not be
                    formatted.
                  </p>
                  <div className="code">
                    <code>
                      <span>Some basic Git commands are:</span>
                      <span>```</span>
                      <span>git status</span>
                      <span>git add</span>
                      <span>git commit</span>
                      <span>```</span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck5" />
                <label className="tab-label" for="chck5">
                  Supported color models
                </label>
                <div className="tab-content">
                  <p>
                    In issues, pull requests, and discussions, you can call out
                    colors within a sentence by using backticks. A supported
                    color model within backticks will display a visualization of
                    the color.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        The background color should be `#ffffff` for light mode
                        and `#0d1117` for dark mode.
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck6" />
                <label className="tab-label" for="chck6">
                  Links
                </label>
                <div className="tab-content">
                  <p>
                    You can create an inline link by wrapping link text in
                    brackets <code className="code__small">{"[ ]"}</code> , and
                    then wrapping the URL in parentheses{" "}
                    <code className="code__small">{"( )"}</code>.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        This site was built using [GitHub
                        Pages](https://pages.github.com/).
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck7" />
                <label className="tab-label" for="chck7">
                  Section links
                </label>
                <div className="tab-content">
                  <p>
                    You can link directly to a section in a rendered file by
                    hovering over the section heading to expose the link.
                  </p>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck8" />
                <label className="tab-label" for="chck8">
                  Relative links
                </label>
                <div className="tab-content">
                  <p>
                    You can define relative links and image paths in your
                    rendered files to help readers navigate to other files in
                    your repository.
                    <br />
                    <br />A relative link is a link that is relative to the
                    current file. For example, if you have a README file in root
                    of your repository, and you have another file in
                    docs/CONTRIBUTING.md, the relative link to CONTRIBUTING.md
                    in your README might look like this:
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        [Contribution guidelines for this
                        project](docs/CONTRIBUTING.md)
                      </span>
                    </code>
                  </div>
                  <p>
                    <br />
                    GitHub will automatically transform your relative link or
                    image path based on whatever branch you're currently on, so
                    that the link or path always works. The path of the link
                    will be relative to the current file. Links starting with{" "}
                    <code className="code__small">/</code> will be relative to
                    the repository root. You can use all relative link operands,
                    such as <code className="code__small">./</code> and{" "}
                    <code className="code__small">../</code>.
                  </p>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck9" />
                <label className="tab-label" for="chck9">
                  Images
                </label>
                <div className="tab-content">
                  <p>
                    You can display an image by adding{" "}
                    <code className="code__small">!</code> and wrapping the alt
                    text in <code className="code__small">[ ]</code>. Then wrap
                    the link for the image in parentheses{" "}
                    <code className="code__small">( )</code> .
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        ![This is an
                        image](https://myoctocat.com/assets/images/base-octocat.svg)
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck10" />
                <label className="tab-label" for="chck10">
                  Lists
                </label>
                <div className="tab-content">
                  <p>
                    You can make an unordered list by preceding one or more
                    lines of text with <code className="code__small">-</code>,{" "}
                    <code className="code__small">*</code>or
                    <code className="code__small">+</code>.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        - George Washington<br></br>* John Adams<br></br>+
                        Thomas Jefferson
                      </span>
                    </code>
                  </div>
                  <p>To order your list, precede each line with a number.</p>
                  <div className="code">
                    <code>
                      <span>
                        1. James Madison<br></br> 2. James Monroe<br></br> 3.
                        John Quincy Adams
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck11" />
                <label className="tab-label" for="chck11">
                  Nested Lists
                </label>
                <div className="tab-content">
                  <p>
                    You can create a nested list by indenting one or more list
                    items below another item. Type space characters in front of
                    your nested list item until the list marker character{" "}
                    <code className="code__small">-</code>or{" "}
                    <code className="code__small">*</code> lies directly below
                    the first character of the text in the item above it.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        1. First list item<br></br>- First nested list item
                        <br></br>- Second nested list item
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck12" />
                <label className="tab-label" for="chck12">
                  Task lists
                </label>
                <div className="tab-content">
                  <p>
                    To create a task list, preface list items with a hyphen and
                    space followed by <code className="code__small">[ ]</code>
                    .To mark a task as complete, use{" "}
                    <code className="code__small">[x]</code>.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        - [x] Convert text into issues #739 <br></br>- [ ] Keep
                        issue state and checkboxes in sync #740
                      </span>
                    </code>
                  </div>
                  <p>
                    If a task list item description begins with a parenthesis,
                    you'll need to escape it with{" "}
                    <code className="code__small">\</code>:
                  </p>
                  <div className="code">
                    <code>
                      <span>- [ ] \(Optional) Open a followup issue</span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck13" />
                <label className="tab-label" for="chck13">
                  Using Emoji
                </label>
                <div className="tab-content">
                  <p>
                    You can add emoji to your writing by typing{" "}
                    <code className="code__small">:EMOJICODE:</code>, a colon
                    followed by the name of the emoji.
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        :+1: This PR looks great - it's ready to merge! :+1:
                        <br></br>
                        👍 This PR looks great - it's ready to merge! 👍
                      </span>
                    </code>
                  </div>
                  <p>
                    For a full list of available emoji and codes, see{" "}
                    <a href="https://github.com/ikatyang/emoji-cheat-sheet">
                      Here
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck14" />
                <label className="tab-label" for="chck14">
                  Paragraphs
                </label>
                <div className="tab-content">
                  <p>
                    You can create a new paragraph by leaving a blank line
                    between lines of text.
                  </p>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck15" />
                <label className="tab-label" for="chck15">
                  Footnotes
                </label>
                <div className="tab-content">
                  <p>
                    You can add footnotes to your content by using this bracket
                    syntax:
                  </p>
                  <div className="code">
                    <code>
                      <span>
                        Here is a simple footnote[^1].<br></br>A footnote can
                        also have multiple lines[^2].<br></br>
                        [^1]: My reference.<br></br>
                        [^2]: To add line breaks within a footnote, prefix new
                        lines with 2 spaces. This is a second line.
                      </span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck16" />
                <label className="tab-label" for="chck16">
                  Hiding content
                </label>
                <div className="tab-content">
                  <p>
                    You can tell GitHub to hide content from the rendered
                    Markdown by placing the content in an HTML comment.
                  </p>
                  <div className="code">
                    <code>
                      <span>help</span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck17" />
                <label className="tab-label" for="chck17">
                Ignoring Markdown formatting
                </label>
                <div className="tab-content">
                  <p>
                    You can tell GitHub to ignore (or escape) Markdown
                    formatting by using{" "}
                    <code className="code__small">\</code>before
                    the Markdown character.
                  </p>
                  <div className="code">
                    <code>
                      <span>Let's rename \*our-new-project\* to \*our-old-project\*.</span>
                    </code>
                  </div>
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
