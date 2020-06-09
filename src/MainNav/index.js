import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../App/routes';

class MainNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            routes: routes
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    {
                        this.state.routes.map((route)=>{
                            return(
                                <li key={route.name}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}
export default MainNav;