import "./firsthomework.css"
export default function Firsthomework(){
    return(

        <div>
            <Myheader />
            <Mybody />
        </div>
    );
}

function Myheader(){
    return(
        <div className="myHeader">
            <h1 style={{"color": "white"}}> First Challenge in React - أول تحدِِ </h1>
        </div>
    );
}

function Mybody(){
    return(
        <div className="myBody">
            
            <div className="mybuttons">
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
            </div>

            <div className="posts">
             <Post />   
             <Post />   
             <Post />   
             <Post />   
             <Post />   
             <Post />   
             <Post />   
            </div>
            
            
        </div>
    );
}

function Post(){
    return (
        <div className="post">
            <h3> This is the post Title</h3>
            <hr></hr>
            <p>This is the post body </p>
        </div>
    );
}
function Buttons(){
    return(
      <button className="mybutton" onClick={M_alert} >Tag button</button>
    );
}

function M_alert() {
    return(
        alert("Yes, You did it !")
    );
}
