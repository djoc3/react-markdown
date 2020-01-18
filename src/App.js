import React, { Component } from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Markdown />
        </div>
      </div>
    );
  }
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
2. Use just 1s if you want! 
3. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class Markdown extends Component {
  constructor(props) {
    super(props);
    this.updatePreview = this.updatePreview.bind(this);
    this.state = {
      data: '',
    }
  };
  updatePreview() {
    this.setState({data: event.target.value});
  }
  render() {
    return (
      <div id="markdown">
        <textarea 
          id="editor" 
          onChange={this.updatePreview.bind(this)} 
          defaultValue={placeholder} >
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.data, {breaks: true})}}></div>
      </div>
    );
  }
}
export default App;

