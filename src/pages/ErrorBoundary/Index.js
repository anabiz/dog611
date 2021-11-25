import "./index.css";
import React from 'react';
import { Link } from "react-router-dom";


class CustomErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError:null
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error,errorInfo){
        // this.state.hasError  = true;
        console.log(error);
        console.log(errorInfo);
        return error;
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                 <h1 className="text">Something Went Wrong! "🦘"</h1>
                 <Link to='/'>
                    <button>Go Back</button>
                 </Link>
                </div>
            )
        }else{
            return this.props.children;
        }
    }

}
  


export default CustomErrorBoundary;