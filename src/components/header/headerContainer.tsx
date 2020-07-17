import React from 'react'
import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer'

interface IProps {
    logout: any
}  

class HeaderConatiner extends React.Component<IProps>{
    render() {
        return(
            <div>
                <Header logout={this.props.logout}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return{

    }
}
export default connect(mapStateToProps, {logout}) (HeaderConatiner);