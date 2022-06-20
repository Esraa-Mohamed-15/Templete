import React , {Component} from 'react';
import './header.css';
class Header extends Component{
    render(){
        return(
            <div>
               <div className= "header-content">
                  
                   <form className="form">
                       <h6> Create An Account</h6>
                       <input type="text" placeholder="Full Name"/>
                       <input type="text" placeholder="User Name"/>
                       <input type="text" placeholder="Email"/>
                       <input type="text" placeholder="Password"/>
                       <button className="opacity-havor">Try it for Free</button>
                   </form>
                   <div className="header-info">
                       <h1 className="head">Better Marketing Results <br/>
                       With Clean Design</h1>
                       <p>
                           We have been working so hard to create the new version of our courses.
                           it comes with a lot of features.<br/>Check it out!
                       </p>
                       <button className="opacity-havor">see our price</button>
                    
                   </div>
               </div>
            </div>
        )
    }
}
export default Header;