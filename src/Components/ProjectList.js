import React, { Component } from 'react';
import Project from './Project';
// import { connect } from 'react-redux'
import { PostContext } from '../Context/postProvider';

function errData(err) {
  alert(err);
}
class ProjectList extends Component {
  state = {
    projects: []
  };

  render() {
    return (
      <div className="project-list section">
        <PostContext.Consumer>
          {projects =>
            projects.map(element => (
              <Project project={element} key={element.id} />
            ))
          }
        </PostContext.Consumer>
      </div>
    );
  }
}
// const mapStateToProps = store => {
//   return {
//     projects: store.project.projects
//   }
// }
// export default connect(mapStateToProps)(ProjectList)

export default ProjectList;
