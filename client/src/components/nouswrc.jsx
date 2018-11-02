
/*
nouswrc view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the nouswrc view has a status bar located at the very-top across the full width of the view
nouswrc view has an Image located at the very-top right of the view. this is a placeholder and should be updated with higher resolution Image
nouswrc view has Label located at the very-top center of the view, text needs identified
nouswrc view has Label located at the top center of the view, text needs identified
nouswrc view has Label located at the top left of the view, text needs identified
nouswrc view has Label located at the top center of the view, text needs identified
nouswrc view has Label located at the top left of the view, text needs identified
the nouswrc view has a Input Box located at the top across the full width of the view, correct text needs defined
nouswrc view has Label located at the mid-top left of the view, text needs identified
the nouswrc view has a Input Box located at the mid-top across the full width of the view, correct text needs defined
nouswrc view has Label located at the mid-top left of the view, text needs identified
the nouswrc view has a Input Box located at the mid-top in the center of the view, correct text needs defined
nouswrc view has Label located at the mid-top left of the view, text needs identified
nouswrc view has Label located at the main area left of the view, text needs identified
nouswrc view has Label located at the mid-bottom in the center of the view, text needs identified
nouswrc view has an Image located at the mid-bottom center of the view. this is a placeholder and should be updated with higher resolution Image
nouswrc view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
nouswrc view has an Image located at the bottom center of the view. this is a placeholder and should be updated with higher resolution Image
the nouswrc view has a arrow icon located at the mid-top right of the view which on click will trigger the arrow() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import {  }  from '../actions/nouswrcActions.js'; 

        
        
       
        class nouswrcView extends React.Component {

            state = {
                
                pick‘leam_> : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-light-green-block"> 81 </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> 58 </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> 145 </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block-small"> avevnge vow 5m mm </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> paints </p>
			</Col>

			<Col md={12}>
				<p className="label-black-white"> pick team </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> transfers </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for follow button-block-light-sky-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-light-sky-blue" 
                        onClick={() => this.follow()}>follow</Button> 

			</Col>

			<Col md={12}>
				<p className="label-light-green-block-small"> fantasy premier league show [1’ </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for [—55] button-dark-turquoise-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-dark-turquoise-block" 
                        onClick={() => this.[—55]()}>[—55]</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for i®inl.€ button-block-block-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-block-small" 
                        onClick={() => this.i®inl.€()}>i®inl.€</Button> 

			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(nouswrcView);
    
        