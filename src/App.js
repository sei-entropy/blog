import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render() {
    const post = {
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Something about something...",
      comments: [
        "First",
        "You suck! Get a real job!",
        "Have a nice day! :)",
        "Testing"
      ],
    };

    return <div>
      <Post title={post.title}
                  author={post.author}
                  body={post.body}
                  comments={post.comments} />;

      <Post title={"Hello"} author={"Usman"} body={"Test"} comments={[]} />
    </div>
  }
}