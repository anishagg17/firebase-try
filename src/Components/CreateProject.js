import React, { Component } from 'react';
// import { createProject } from '../Actions/ProjectActons';
import { firestore } from '../FireStore/fbConfig';
import { UserContext } from '../Context/userProvider';
// import { connect } from 'react-redux';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    read: 0,
    author: null
  };

  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handelSubmit = async (e, user) => {
    e.preventDefault();
    // console.log(user);
    const post = {
      ...this.state,
      ...user,
      author: user.name,
      date: Date.now()
    };
    await firestore.collection('projects').add(post);
    this.setState({
      title: '',
      content: ''
    });
    this.props.history.push('/');
    // this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <UserContext.Consumer>
          {user => (
            <form className="white" onSubmit={e => this.handelSubmit(e, user)}>
              <h5 className="grey-text text-darken-3">Create Project</h5>
              <div className="inpt-field">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handelChange}
                  id="title"
                />
              </div>
              <div className="inpt-field">
                <label htmlFor="content">content</label>
                <textarea
                  className="materialize-textarea"
                  onChange={e => this.handelChange(e)}
                  id="content"
                  value={this.state.content}
                />
              </div>
              <button className="btn pink lighten-1 section">Submit</button>
            </form>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createProject: project => dispatch(createProject(project))
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateProject);
export default CreateProject;
