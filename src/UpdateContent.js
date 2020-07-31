import React, {Component} from 'react';

class UpdateContent extends Component {
    render() {
        return (
            <article>
                <h2>Update</h2>
                <form
                    action="/Update_process"
                    method="post"
                    onSubmit={function (e) {
                    e.preventDefault();
                    this
                        .props
                        .onSubmit(e.target.title.value, e.target.password.value);
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title"/></p>
                    <p><input type="text" name="password" placeholder="password"/></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;