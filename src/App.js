import React, {Component} from 'react';
import Subject from './Subject';
import TOC from './TOC';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import Control from "./Control";

class App extends Component {
    max_id = 3;
    state = {
        mode: 'create',
        selected_content_id: 1,
        subject: {
            title: "WEB",
            sub: "world wide web!"
        },
        welcome: {
            title: "Welcome",
            desc: "Hello, React!!"
        },
        content: [
            {
                id: 1,
                title: "HTML",
                desc: "HTML is HyperText Markup Language."
            }, {
                id: 2,
                title: "CSS",
                desc: "CSS is for design."
            }, {
                id: 3,
                title: "JavaScript",
                desc: "JavaScript is for interactive."
            }
        ]
    }
    getReadContent() {
        let i = 0;
        while (i < this.state.content.length) {
            let data = this.state.content[i];
            if (data.id === this.state.selected_content_id) {
                return data;
            }
            i += 1;
        }
    }
    getContent() {
        const {content, mode, welcome} = this.state;
        let _title,
            _desc,
            _article,
            _content = null;
        
        if (mode === 'welcome') {
            _title = welcome.title;
            _desc = welcome.desc;
            _article = <ReadContent title={_title} sub={_desc}/>;
        } else if (mode === 'read') {
            _content=this.getReadContent();
            _article = <ReadContent title={_content.title} sub={_content.desc}/>;
        } else if (mode === 'create') {
            _article = <CreateContent
                onSubmit={function (_title, _desc) {
                this.max_id += 1;
                let new_content = content.concat({id: this.max_id, title: _title, desc: _desc});
                this.setState({content: new_content})
            }.bind(this)}/>;
        } else if (mode === 'update') {
            _content=this.getReadContent();
            _article = <UpdateContent
                data={_content}
                onSubmit={function (_title, _desc) {
                this.max_id += 1;
                let new_content = content.concat({id: this.max_id, title: _title, desc: _desc});
                this.setState({content: new_content})
            }.bind(this)}/>;
        }
        return _article;
    }
    render() {
        const {subject, content} = this.state;
        console.log(this.props.data);
        return (
            <div>
                <Subject
                    title={subject.title}
                    sub={subject.sub}
                    onChangePage
                    ={function () {
                    this.setState({mode: 'welcome'});
                }.bind(this)}/>
                <TOC
                    onChangePage
                    ={function (id) {
                    this.setState({mode: 'read', selected_content_id: Number(id)});
                }.bind(this)}
                    data={content}/>
                <Control
                    onChangeMode={function (mode) {
                    this.setState({mode});
                }.bind(this)}/> {this.getContent()}
            </div>
        );
    }
}

export default App;
