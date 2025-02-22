import React, {Component} from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.password.value);
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><input type="text" name="password" placeholder="password"/></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;