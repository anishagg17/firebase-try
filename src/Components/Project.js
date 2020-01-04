import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../FireStore/fbConfig';
import { UserContext } from '../Context/userProvider';
class Project extends Component {
  Delete = async id => {
    await firestore.doc(`projects/${id}`).delete();
    this.forceUpdate();
  };
  render() {
    const { project } = this.props;
    return (
      <UserContext.Consumer>
        {user => (
          <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>Posted By {project.author}</p>
              <p className="grey-text">
                Date {new Date(project.date).toString()}
              </p>
              <Link to={`/project/${project.id}`}>read more</Link>
              {user && user.email === project.email && (
                <button onClick={() => this.Delete(project.id)}>Delete</button>
              )}
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default Project;
