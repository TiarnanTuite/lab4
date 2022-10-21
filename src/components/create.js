import React from "react";

export class Create extends React.Component{

    //constructor 
    constructor(){
        //parent constructor
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookfrontPage = this.onChangeBookfrontPage.bind(this);

        //initialize 
        this.state ={
            title:'',
            author:'',
            frontPage:''
        }
    }

    //logging to console the text entered
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.frontPage}`);

        //reset back to blank
        this.setState({
            title:'',
            author:'',
            frontPage:''
        })
    }

    //method for title
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    //method for author
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    //method for cover page
    onChangeBookfrontPage(e){
        this.setState({
            frontPage:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Hello from Create Component!</h3>

                <form onSubmit={this.handleSubmit}>

                    {/* html for book title */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                     {/* html for book author */}
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                     {/* html for book front page */}
                    <div class Name="form-group">
                        <label>Add front page URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.frontPage}
                            onChange={this.onChangeBookfrontPage}
                        />
                    </div>

                    <input type="submit" value="Add Book"/>
                </form>

                
            </div>
        );
    }
}