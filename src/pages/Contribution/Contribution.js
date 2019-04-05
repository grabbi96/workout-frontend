import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {deleteContribution} from "../../store/actions/category"
import {connect} from "react-redux"
// import imageSrc from '../../assets/images/sajek.jpg'
import './Contribution.css'
import Axios from "axios"
class Contributions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props.cate)
    }
    deleteContribution(e, id){
      e.preventDefault()

      this.props.deleteContribution(id)
    }
    render() {
        let allItems;
        if(this.props.cate.contributions){
            allItems = this.props.cate.contributions.map(item => {
                console.log(item)
                return (
                    <MDBCol className="mb-4" md="3" sm="6" xs="6" key={item.contribution_id}>
                            <div className="contribution-item-area">
                                <div className="contribution-item grey lighten-2 rounded z-depth-1">
                                    <div className="contribution-item-thumb">
                                        <img src={"http://localhost:8000/"+item.feturedPhoto} alt="user"/>
                                    </div>
                                    <div className="contribution-item-content">
                                        <ul className="contribution-item-info">
                                            <li>name: <span className="red-text">{item.name}</span></li>
                                            <li>title: <span className="red-text">{item.title}</span></li>
                                            <li>category: <span className="red-text">{item.category}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contribution-item-overlay">
                                    <ul className="contribution-item-options">
                                        <li>
                                            <NavLink to={"contribution/view/"+ item._id} ><FontAwesomeIcon icon={faEye} /> View</NavLink>
                                        </li>
                                        <li>
                                            <a href="/"><FontAwesomeIcon icon={faEdit} /> Edit</a>
                                        </li>
                                        <li>
                                            <a href="/" onClick={(e) => this.deleteContribution(e, item._id)}><FontAwesomeIcon icon={faTrash} /> Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBCol>
                )
            })
        }
        return (
            <main className="contributions section-padding">
                <MDBContainer>
                    <h5 className="contributions-title">
                        Contributions
                    </h5>
                    <MDBRow>
                        <MDBCol md="3" sm="6" xs="6" className="mb-4">
                            <div className="contribution-add-item grey lighten-2 rounded z-depth-1">
                                <NavLink to="/contribution/add" className="red rounded">
                                    <FontAwesomeIcon className="white-text" icon={faPlus} />
                                </NavLink>
                            </div>
                        </MDBCol>
                        {allItems}
                    </MDBRow>
                </MDBContainer>
            </main>
        );
    }
}
const mapPropsToState = state =>{
	return {
		cate:state.cate
	}
}
export default connect(mapPropsToState, {deleteContribution})(Contributions);
