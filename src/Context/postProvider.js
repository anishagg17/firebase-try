import React, { Component, createContext } from 'react';
import { firestore } from '../FireStore/fbConfig';

export const PostContext = createContext();

class PostProvider extends Component {
  state = {
    projects: []
  };
  unsubscribeFromFireStore = null;
  componentDidMount = async () => {
    await firestore.collection('projects').onSnapshot(snap => {
      let projects = [];
      snap.docs.forEach(d => projects.push({ id: d.id, ...d.data() }));
      this.setState({ projects });
    });
  };
  componentWillUnmount() {
    if (this.unsubscribeFromFireStore) this.unsubscribeFromFireStore();
  }
  render() {
    const { children } = this.props;
    const { projects } = this.state;

    return (
      <PostContext.Provider value={projects}>{children}</PostContext.Provider>
    );
  }
}
export default PostProvider;
