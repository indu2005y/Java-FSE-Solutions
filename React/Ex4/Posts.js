import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {
        this.setState({
            posts: [
                {
                    id: 1,
                    title: "React Introduction",
                    body: "React is used to build user interfaces."
                },
                {
                    id: 2,
                    title: "Component Lifecycle",
                    body: "componentDidMount() runs after the component is rendered."
                },
                {
                    id: 3,
                    title: "Fetch API",
                    body: "Fetch API is used to get data from a server."
                },
                {
                    id: 4,
                    title: "React State",
                    body: "State stores data inside a component."
                },
                {
                    id: 5,
                    title: "Error Handling",
                    body: "componentDidCatch() handles component errors."
                }
            ]
        });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error Occurred");

        console.log(error);
        console.log(info);
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Posts List</h1>

                {this.state.posts.map(post => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px"
                        }}
                    >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;