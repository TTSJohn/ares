import React, {Component} from 'react';
import '../css/blog.css';
import Post from './post';
import myFirebase from '../utility/MyFirebase';

const GENERIC_POST_TITLE = "New Post Title", GENERIC_POST_BODY = "New Post Body";

class Blog extends Component {
  constructor() {
    super();
     this.state = {
      posts: []
    }
    this.firebaseDBRef = myFirebase.getFirebaseRef();
    this.firebaseDBRef.once('value').then((snapshot) => {
      console.log(snapshot.val());
    });    
  }

  componentDidMount() {
    const postsRef = myFirebase.getFirebaseRef();
    postsRef.on('value', (snapshot) => {
      let posts = snapshot.val();
      let newState = [];
      for (let key in posts) {
        newState.push({
          id: key,
          title: posts[key].title,
          body: posts[key].body
        });
      }
      this.setState({
        posts: newState
      });
    });
  }

  addPost(posts) {
   console.log(posts);
    if(posts){
      for(let key in posts){
        this.state.posts.push(
          {
            id: key,
            title: posts[key].title,
            body: posts[key].body
          }
        );
      }
    } else {
     let pushRef = this.firebaseDBRef.push();
      pushRef.set({
        title: GENERIC_POST_TITLE,
        body: GENERIC_POST_BODY
      });
      this.state.posts.push(
        {
          id: pushRef.key,
          title: GENERIC_POST_TITLE,
          body: GENERIC_POST_BODY
        }
      );
    }
    this.setState(
      {
        posts: this.state.posts
      }
    );
  }


    deletePost(id){
    let newPostArr = this.state.posts;
    newPostArr.map((post, index) => {
      if (id === post.id) {
        newPostArr.splice(index,1);
        this.firebaseDBRef.child(id).remove();
      }
    });
    this.setState(
      {
        posts: newPostArr
      }
    );
  }

  render() {
    return (
      <div>
        <div className="div-blog">
          <div className="row">
            {
              this.state.posts.map(post => {
                return <Post key={post.id} id={post.id} title={post.title} body={post.body} firebaseDBRef={this.firebaseDBRef} deleteHandler={this.deletePost.bind(this)} />

              })
            }

          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addPost.bind(this, null)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Blog;