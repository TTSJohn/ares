import React, {Component} from 'react';
import '../css/post.css';

class Post extends Component{
	constructor(){
		super();
	}	

componentWillMount() {
	this.state = {
		title: this.props.title,
		body: this.props.body,
		editMode: false
	}
}

	render(){
		return(
			<div>
			
			</div>
			)
	}
}

export default Post;