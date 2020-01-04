import React, { Component } from 'react';
import { firestore } from '../FireStore/fbConfig';

class Summary extends Component {
  state = {
    content: '',
    title: '',
    read: 0
  };
  componentDidMount = async () => {
    const ref = await firestore.doc(`projects/${this.props.match.params.id}`);
    await ref.onSnapshot(snap => {
      this.setState(snap.data());
      // ref.update({ read: snap.data().read + 1 });
    });
  };
  render() {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project {this.state.title}</span>
            <span className="card-content">{this.state.content}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
