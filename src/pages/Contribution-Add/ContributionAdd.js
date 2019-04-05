import React from 'react';
import { MDBContainer, MDBRow, MDBCol,  MDBBtn, MDBInput } from 'mdbreact';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarked , faSignature, faLanguage, faTasks} from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone'
import FileBase64 from 'react-file-base64';
import classNames from 'classnames'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
	geocodeByAddress,
	getLatLng,
  } from 'react-places-autocomplete';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Input from "../../components/Form/Input/Input"
import './ContributionAdd.css';
import {connect} from "react-redux"
import {addContribution} from "../../store/actions/category"

// import FieldSetTow from './fieldsets/FieldSetTwo'
class ContributionAdd extends React.Component {
	state = {
		address:"",
		formActivePanel1: 3,
		formActivePanel1Changed: false,
		progress: 10,
		imageUrl:[],
		name:"",
		language:"",
		bestTime:"",
		discription:"",
		youtubeLink:"",
		latLng:null,
		title:"",
		category:"",
		files: [],
		file:""
	};
	 // Callback~
	 getFiles(files){
    this.setState({ files: files })
  }
	handleChange = address => {
		this.setState({ address });

	};

	handleSelect = address => {
		this.setState({
			address
		})
		geocodeByAddress(address)
		  .then(results => getLatLng(results[0]))
			.then(latLng =>
				{
					console.log('Success', latLng)
					this.setState({
						latLng
					})
				} )
		  .catch(error => console.error('Error', error));
	};
  	onDrop = (acceptedFiles, rejectedFiles) => {
    	const files = acceptedFiles;
			this.setState(prevState =>{
				return {
					imageUrl:prevState.imageUrl.concat(files)
				}

    	files.forEach(file => {
				// console.log(file)
					})
				console.log(this.state)
			// const myFileItemReader = new FileReader()
			// myFileItemReader.addEventListener('load', ()=>{
			// 	this.setState(prevState =>{
			// 		return {
			// 			imageUrl:prevState.imageUrl.concat(myFileItemReader.result)
			// 		}
			// 	})
			// }, false)
			// myFileItemReader.readAsDataURL(file)
    });
  }
	swapFormActive = (a) => (param) => (e) => {
		this.setState({
			['formActivePanel' + a]: param,
			['formActivePanel' + a + 'Changed']: true
		});
	};

	handleNextPrevClick = (a) => (param) => (e) => {
		this.setState({
			['formActivePanel' + a]: param,
			['formActivePanel' + a + 'Changed']: true,
			progress: 10 + 20 * (param - 1)
		});

		console.log(param);
	};

	handleSubmission = () => {
		const {address, latLng, file, name, imageUrl, title, language, bestTime, discription, youtubeLink, category} = this.state
		// const contributionState = {
		// 	address,
		// 	latLng,
		// 	name,
		// 	language,
		// 	bestTime,
		// 	discription,
		// 	youtubeLink,
		// 	category,
		// 	imageUrl,
		// 	title,
		// 	feturedPhoto:this.state.files[0].base64 ? this.state.files[0].base64 : ""
		// }
		let contributionData = new FormData();
		for (const file of imageUrl) {
			contributionData.append('imageUrl', file)
		}
  	contributionData.append('feturedPhoto', file)
		contributionData.append('address', address)
		contributionData.append('name', name)
		contributionData.append('title', title)
		contributionData.append('language', language)
		contributionData.append('bestTime', bestTime)
		contributionData.append('discription', discription)
		contributionData.append('youtubeLink', youtubeLink)
		contributionData.append('category', category)
		contributionData.append('lat', latLng.lat)
		contributionData.append('lng', latLng.lng)

		console.log(contributionData)
		this.props.addContribution(contributionData, this.props.history)
		console.log(contributionData)
	};

	calculateAutofocus = (a) => {
		if (this.state['formActivePanel' + a + 'Changed']) {
			return true;
		}
	};
	formWizardClass = (value) => {
		if (value === this.state.formActivePanel1) {
			return [ 'form-wizard', 'active' ].join(' ');
		}
		if (value < this.state.formActivePanel1) {
			return [ 'form-wizard', 'activated' ].join(' ');
		}
		return 'form-wizard';
  };
  removeImage = i =>{
    let newImageUrl = [...this.state.imageUrl]
    newImageUrl.splice(i, 1)
    this.setState({
      imageUrl:newImageUrl
    })
	}
	componentWillMount(){
		console.log(this.props.cate)
	}
	changeHandler = event =>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	selectHandler = event => {
		this.setState({
			category:event.target.value
		})
	}
	onChangeFile = (e)  => {
        this.setState({file:e.target.files[0]});
				console.log(this.state)
    }
		tttt = e => {
			// this.setState({imageUrl:e.target.files});
			let images = Array.from(Object.keys(e.target.files), k=>e.target.files[k]);
			console.dir(images[0])
			this.setState({imageUrl:e.target.files});
		}
	render() {
    let images = null
        // if(this.state.imageUrl){
        //     images = this.state.imageUrl.map((img, i) => {
        //         return (
        //           <div className="drop-image" key={i}>
        //             <img src={img}  alt="asd"/>
        //             <a href="/" onClick={(e)=> {e.preventDefault(); this.removeImage(i)}}><i className="far fa-times-circle"></i></a>
        //           </div>
        //         )
        //     })
				// }

				let categories = this.props.cate.contributionReducer.data
				let optionItems;
				if(categories){
					optionItems = categories.map(data => {

						return <option key={data.category_id} value={data.category_id}>{data.name}</option>
					})
				}

		return (
			<section className="section-padding">
				<MDBContainer>
					<h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
						<strong>Registration form</strong>
					</h2>
					<form action="" method="post">
						<MDBRow>
							<div className="wizards">
								<div className="progressbar">
									<div className="progress-line" style={{ width: this.state.progress + '%' }} />
								</div>
								<div className={this.formWizardClass(1)}>
									<div className="wizard-icon">
										<i className="fa fa-address-card" aria-hidden="true" />
									</div>
									<p>Address</p>
								</div>
								<div className={this.formWizardClass(2)}>
									<div className="wizard-icon">
										<i className="fa fa-info-circle" aria-hidden="true" />
									</div>
									<p>Information</p>
								</div>
								<div className={this.formWizardClass(3)}>
									<div className="wizard-icon">
										<i className="fa fa-upload" aria-hidden="true" />
									</div>
									<p>Image Upload</p>
								</div>
								<div className={this.formWizardClass(4)}>
									<div className="wizard-icon">
										<i className="fas fa-book-open" aria-hidden="true" />
									</div>
									<p>Description</p>
								</div>
								<div className={this.formWizardClass(5)}>
									<div className="wizard-icon">
										<i className="fa fa-check-circle" />
									</div>
									<p>Video &amp; Finish</p>
								</div>
							</div>

							{this.state.formActivePanel1 === 1 && (
								<MDBCol md="12" className="contribution-add-location">
									<PlacesAutocomplete
										value={this.state.address}
										onChange={this.handleChange}
										onSelect={this.handleSelect}
									>
										{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
											<div>
												<div className="form-group icon-parent">
													<input
														{...getInputProps({
															placeholder: 'Search Places ...',
															className: 'location-search-input form-control round',
														})}
														required
													/>
													<FontAwesomeIcon icon={faMapMarked} className="icon-children" />
												</div>


												<div className="autocomplete-dropdown-container">
													{loading && <div>Loading...</div>}
													{suggestions.map(suggestion => {
														const className = suggestion.active
															? 'suggestion-item--active'
															: 'suggestion-item';
														// inline style for demonstration purpose
														const style = suggestion.active
															? { backgroundColor: '#fafafa', cursor: 'pointer' }
															: { backgroundColor: '#ffffff', cursor: 'pointer' };
														return (
															<div
																{...getSuggestionItemProps(suggestion, {
																	className,
																	style,
																})}
															>
																<span>{suggestion.description}</span>
															</div>
														);
													})}
												</div>
											</div>
										)}
									</PlacesAutocomplete>

									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(2)}
									>
										next
									</MDBBtn>
								</MDBCol>

							)}

							{this.state.formActivePanel1 === 2 && (
								<MDBCol md="12" className="contribution-add-location">
									<Input
										name="name"
										type="text"
										round={true}
										icon={faSignature}
										ipl={true}
										placeholder="Name"
										onChange={this.changeHandler}
										value={this.state.name}
									/>
									<Input
										name="title"
										type="text"
										round={true}
										icon={faSignature}
										ipl={true}
										placeholder="title"
										onChange={this.changeHandler}
										value={this.state.title}
									/>
									<Input
										name="language"
										type="text"
										round={true}
										icon={faLanguage}
										ipl={true}
										value={this.state.language}
										onChange={this.changeHandler}
										placeholder="Language"
									/>
									<div className="form-group icon-parent">
										<select name="category" className="browser-default form-control custom-select round" onSelect={this.selectHandler} onChange={this.selectHandler}>
											<option>Choose your option</option>
											{optionItems && optionItems}
										</select>
										<FontAwesomeIcon icon={faTasks} className="icon-children" />
									</div>
									<Input
										name="bestTime"
										type="text"
										round={true}
										icon={faClock}
										ipl={true}
										onChange={this.changeHandler}
										value={this.state.bestTime}
										placeholder="Best Time Limit"
									/>

									<MDBBtn rounded className="float-left grey lighten-2" onClick={this.handleNextPrevClick(1)(1)}>
										previous
									</MDBBtn>
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(3)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 3 && (
								<MDBCol md="12" className="contribution-add-location">
									<div className="form-group icon-parent">
										<input type="file" name="myImage" onChange= {this.onChangeFile} multiple />

										<FontAwesomeIcon icon={faClock} className="icon-children" />
									</div>
									<div className="drop-area">
										<p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>

										<Dropzone onDrop={this.onDrop} accept="image/*">
											{({ getRootProps, getInputProps, isDragActive }) => {
												return (
													<div
														{...getRootProps()}
														className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
													>
														<label className="btn custom-btn" htmlFor="dropImage">Select some files</label>
														<input {...getInputProps()} name="dropImage" onChange={this.tttt} />
														{
															isDragActive ?
																<p>Drop files here...</p> : ""

														}
													</div>
												)
											}}
										</Dropzone>
										<div className="images-area">
											{images}
										</div>
									</div>

									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(2)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(4)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 4 && (
								<MDBCol md="12" className="contribution-add-location">
									<MDBInput type="textarea" label="Discription..." rows="3" onChange={this.changeHandler} name="discription" />
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(3)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(5)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 5 && (
								<MDBCol md="12" className="contribution-add-location">
									<Input
										name="youtubeLink"
										type="text"
										icon={faYoutube}
										placeholder="Youtube Link"
										round
										onChange={this.changeHandler}
										value={this.state.youtubeLink}
										ipl
									/>
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(4)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										color="success"
										rounded
										className="float-right"
										onClick={this.handleSubmission}
									>
										submit
									</MDBBtn>
								</MDBCol>
							)}
						</MDBRow>
					</form>
				</MDBContainer>
			</section>
		);
	}
}
const mapPropsToState = state =>{
	return {
		cate:state.cate
	}
}
export default connect(mapPropsToState, {addContribution})(ContributionAdd);
