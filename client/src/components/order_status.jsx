
/*
order status view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the order status view has a status bar located at the very-top across the full width of the view
order status view has Label located at the very-top center of the view, text needs identified
order status view has Label located at the top center of the view, text needs identified
order status view has Label located at the top center of the view, text needs identified
order status view has Label located at the mid-top left of the view, text needs identified
order status view has an Image located at the mid-top center of the view. this is a placeholder and should be updated with higher resolution Image
order status view has Label located at the mid-top right of the view, text needs identified
order status view has Label located at the mid-top left of the view, text needs identified
order status view has Label located at the mid-top center of the view, text needs identified
order status view has Label located at the mid-top left of the view, text needs identified
order status view has Label located at the main area left of the view, text needs identified
order status view has Label located at the main area center of the view, text needs identified
order status view has Label located at the main area right of the view, text needs identified
order status view has an Image located at the main area center of the view. this is a placeholder and should be updated with higher resolution Image
order status view has Label located at the main area right of the view, text needs identified
order status view has Label located at the main area center of the view, text needs identified
order status view has Label located at the mid-bottom left of the view, text needs identified
order status view has Label located at the mid-bottom left of the view, text needs identified
order status view has Label located at the bottom left of the view, text needs identified
order status view has an Image located at the bottom center of the view. this is a placeholder and should be updated with higher resolution Image
order status view has Table Row located at the mid-bottom across the full width
the order status view has a custom icon located at the mid-top center of the view
the order status view has a custom icon located at the  center of the view

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import {  }  from '../actions/order_statusActions.js'; 

        
        
       
        class orderstatusView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12}>
				<p className="label-block-block-paragraph"> 5w new 1100 l 9) wat ne </p>
			</Col>

			<Col md={12}>
				<p className="label-light-pink-block"> wat </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-paragraph"> é fixtures > </p>
			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-lavender-block"> sat nov 3 2018 </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender"> ll:00 </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-paragraph"> é results > </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block-paragraph"> sat oct 27 2018 sou % 0-0 @ new </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> sou </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> new </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> 3 pts </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> newcastle united </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> tickets </p>
			</Col>

			<Col md={12}>
				<p className="label-black-white-small"> broadcast schedules > </p>
			</Col>

			<Col md={12}>
				<p className="label-black-white-small"> match highlights > </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for :‘aesq; button-block-light-pink-paragraph action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-light-pink-paragraph" 
                        onClick={() => this.:‘aesq;()}>:‘aesq;</Button> 

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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(orderstatusView);
    
        