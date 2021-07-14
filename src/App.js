import React from "react";

import Footer from "./components/Footer";
import FormSection from './components/FormSection';
import PostsSection from './components/PostsSection';
import Navbar from "./components/Navbar";

const INITIAL_STATE = {
  posts: [
    {
      title: "post one",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
      id: 1
    },
    {
      title: "post two",
      description: `Eveniet quae eos, accusamus quibusdam praesentium et.`,
      id: 2
    }
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  addPost = (postData) => {
      const posts = [ ...this.state.posts, postData ];

      this.setState({ posts })
  }

  deletePost = (clickedId) => {
    const posts = this.state.posts.filter((post) => {
        return post.id !== clickedId
    });

    this.setState({ posts })
  }

  render() {
    return (
      <div className="App">
        <Navbar numberOfPosts={this.state.posts.length} />
        <FormSection addPost={this.addPost} />
        <PostsSection deletePost={this.deletePost} posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
