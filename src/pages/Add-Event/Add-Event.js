import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignature,
	faFile,
	faMapMarkedAlt,
	faCalendar,
	faMoneyBillWaveAlt,
	faUser,
	faLanguage,
	faClock,
	faTasks
} from '@fortawesome/free-solid-svg-icons';
import './Add-Event.css';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import Input from '../../components/Form/Input/Input';
import FileBase64 from 'react-file-base64';
import {connect} from "react-redux"

import {addEvent} from "../../store/actions/eventAction"
// font awesome
class AddEvent extends Component {
	state = {
		formActivePanel1: 5,
		formActivePanel1Changed: false,
		progress: 10,
		imageUrl: [],
		files: [],
		title: '',
		tripStartDate: '',
		tripStartEnd: '',
		registrationDeadline: '',
		cancellationDeadline: '',
		totalCost: '',
		totalSeat: '',
		description: '',
		location:"",
		accommodations: [""],
		foods:[""],
		transportations:[""]
	};
	// Callback~
	getFiles(files) {
		this.setState({ files: files });
	}
	onDrop = (acceptedFiles, rejectedFiles) => {
		const files = acceptedFiles;
		this.setState((prevState, props) => {
		  return {
		    imageUrl:prevState.imageUrl.concat(files)
		  };
		})
		console.log(this.state.imageUrl)
		// files.forEach((file) => {
		// 	const myFileItemReader = new FileReader();
		// 	myFileItemReader.addEventListener(
		// 		'load',
		// 		() => {
		// 			this.setState((prevState) => {
		// 				return {
		// 					imageUrl: prevState.imageUrl.concat(myFileItemReader.result)
		// 				};
		// 			});
		// 		},
		// 		false
		// 	);
		// 	myFileItemReader.readAsDataURL(file);
		// });
	};
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

	};
	onChangeFile = (e)  => {
        this.setState({file:e.target.files[0]});
				console.log(this.state)
    }
	handleSubmission = () => {
		let {title, location, tripStartDate, tripStartEnd, registrationDeadline, cancellationDeadline, totalCost, totalSeat, description, accommodations, foods, transportations, imageUrl} = this.state
		// let data = {
		// 	title,
		// 	location,
		// 	tripStartDate,
		// 	registrationDeadline,
		// 	cancellationDeadline,
		// 	totalCost,
		// 	totalSeat,
		// 	description,
		// 	accommodations,
		// 	foods,
		// 	transportations,
		// 	imageUrl,
		// 	feturedPhoto:this.state.files[0].base64
		// }


		let eventFormData = new FormData()


		eventFormData.append("feturedPhoto", this.state.file)
		eventFormData.append("title", title)
		eventFormData.append("location", location)
		eventFormData.append("tripStartDate", tripStartDate)
		eventFormData.append("tripStartEnd", tripStartEnd)
		eventFormData.append("registrationDeadline", registrationDeadline)
		eventFormData.append("cancellationDeadline", cancellationDeadline)
		eventFormData.append("totalCost", totalCost)
		eventFormData.append("totalSeat", totalSeat)
		eventFormData.append("description", description)
		this.state.imageUrl.map(item => {
			eventFormData.append("imageUrl", item)
		})
		console.log(this.state)
		// this.state.transportations.map(item => {
		// 	console.log(item)
		//
		// })
		eventFormData.append("transportations", JSON.stringify(transportations))
		eventFormData.append("foods", JSON.stringify(foods))
		eventFormData.append("accommodations", JSON.stringify(accommodations))

		this.props.addEvent(eventFormData, this.props.history)
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
	removeImage = (i) => {
		let newImageUrl = [ ...this.state.imageUrl ];
		newImageUrl.splice(i, 1);
		this.setState({
			imageUrl: newImageUrl
		});
	};
	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	changeHandlerAccom = (event, hooo) => {
		let accommodations = [ ...this.state.accommodations ];
		let name = event.target.name;
		let accItem = { ...accommodations[hooo] };
		accItem[name] = event.target.value;
		accommodations[hooo] = accItem;
		this.setState({ accommodations });
	};
	changeHandlerFood = (event, i) => {
		let foods = [ ...this.state.foods ];
		let name = event.target.name;
		let foodItem = { ...foods[i] };
		foodItem[name] = event.target.value;
		foods[i] = foodItem;
		this.setState({ foods });
	}
	changeHandlerTran = (event, i) => {
		let transportations = [ ...this.state.transportations ];
		let name = event.target.name;
		let tranItem = { ...transportations[i] };
		tranItem[name] = event.target.value;
		transportations[i] = tranItem;
		this.setState({ transportations });
	}
	selectHandlerAccom = (event, i) => {
		let accommodations = [ ...this.state.accommodations ];
		console.log(event.target.name, event.target.value)
		let name = event.target.name;
		let accItem = { ...accommodations[i] };
		accItem[name] = event.target.value;
		accommodations[i] = accItem;
		this.setState({ accommodations });
	}
	selectHandlerFood = (event, i) =>{
		let foods = [ ...this.state.foods ];
		let name = event.target.name;
		let foodItem = { ...foods[i] };
		foodItem[name] = event.target.value;
		foods[i] = foodItem;
		this.setState({ foods });
	}
	selectHandler = (event) => {
		this.setState({
			category: event.target.value
		});
	};
	addClick = (itemtype) =>{
		if(itemtype === "accommodations"){
			this.setState(prevState => ({ accommodations: [...prevState.accommodations, '']}))
		}
		if(itemtype === "foods"){
			this.setState(prevState => ({ foods: [...prevState.foods, '']}))
		}
		if(itemtype === "transportations"){
			this.setState(prevState => ({ transportations: [...prevState.transportations, '']}))
		}

	}
	removeSection = (itemName, i) => {
		if(itemName === "accommodation"){
			let accommodations = [ ...this.state.accommodations ];
			accommodations.splice(i, 1)
			this.setState({ accommodations });
		}
		if(itemName === "food"){
			let foods = [ ...this.state.foods ];
			foods.splice(i, 1)
			this.setState({ foods });
		}
		if(itemName === "transportation"){
			let transportations = [ ...this.state.transportations ];
			transportations.splice(i, 1)
			this.setState({ transportations });
		}
	}
	render() {
		let images = null;
		if (this.state.imageUrl) {
			images = this.state.imageUrl.map((img, i) => {
				return (
					<div className="drop-image" key={i}>
						<img src={img} alt="asd" />
						<a
							href="/"
							onClick={(e) => {
								e.preventDefault();
								this.removeImage(i);
							}}
						>
							<i className="far fa-times-circle" />
						</a>
					</div>
				);
			});
		}

		let accommodationsForm = this.state.accommodations.map((item, i) => {

			return (
				<div key={i}>
				<div className="header d-flex justify-content-between">
				<h4>Accommodations {i + 1}</h4>
				{i === 0 ? null : <MDBBtn size="sm" color="danger" onClick={() => this.removeSection("accommodation", i)}>remove</MDBBtn>}

				</div>

					<Input
						name="name"
						type="text"
						icon={faSignature}
						ipl={true}
						label="Name"
						placeholder="name"
						onChange={(e) => this.changeHandlerAccom(e, i)}
						value={this.state.accommodations[i].name}
					/>
					<div className="form-group icon-parent">
						<label htmlFor="title">Category</label>
						<select
							name="category"
							className="browser-default form-control custom-select"
							value={this.state.accommodations[i].category}
							onSelect={(e) => this.selectHandlerAccom(e, i)}
							onChange={(e) => this.selectHandlerAccom(e, i)}
						>
							<option>Choose your option</option>
							<option value="Hotel">Hotel</option>
							<option value="Resort">Resort</option>
						</select>
						<FontAwesomeIcon icon={faTasks} className="icon-children" />
					</div>

					<div className="form-group icon-parent">
						<label htmlFor="title">Star</label>
						<select
							name="star"
							className="browser-default form-control custom-select"
							value={this.state.accommodations[i].star}
							onSelect={(e) => this.selectHandlerAccom(e, i)}
							onChange={(e) => this.selectHandlerAccom(e, i)}
						>
							<option>Star</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="Unknown">Unknown</option>
						</select>
						<FontAwesomeIcon icon={faTasks} className="icon-children" />
					</div>

					<Input
						name="remarks"
						type="text"
						icon={faSignature}
						ipl={true}
						label="Remarks"
						placeholder="Remarks"
						onChange={(e) => this.changeHandlerAccom(e, i)}
						value={this.state.accommodations[i].remarks}
					/>
				</div>
			);
		});
		let foods = this.state.foods.map((item, i)=> {
			return (
				<div key={i}>
						<div className="header d-flex justify-content-between">
						<h4>Foods {i + 1}</h4>
						{i === 0 ? null : <MDBBtn size="sm" color="danger" onClick={() => this.removeSection("food", i)}>remove</MDBBtn>}
					</div>

						<div className="form-group icon-parent">
							<label htmlFor="title">Day</label>
							<select
								name="day"
								className="browser-default form-control custom-select"
								onSelect={(e) => this.selectHandlerFood(e, i)}
								onChange={(e) => this.selectHandlerFood(e, i)}
								value={this.state.foods[i].day}
							>
								<option>Day</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
							<FontAwesomeIcon icon={faTasks} className="icon-children" />
						</div>
						<div className="form-group icon-parent">
							<label htmlFor="title">Type</label>
							<select
								name="type"
								className="browser-default form-control custom-select"
								onSelect={(e) => this.selectHandlerFood(e, i)}
								onChange={(e) => this.selectHandlerFood(e, i)}
								value={this.state.foods[i].type}
							>
								<option>Type</option>
								<option value="Snacks">Snacks</option>
								<option value="Breakfast">Breakfast</option>
								<option value="Lunch">Lunch</option>
								<option value="Dinner">Dinner</option>
							</select>
							<FontAwesomeIcon icon={faTasks} className="icon-children" />
						</div>
						<Input
							name="time"
							type="time"
							icon={faSignature}
							ipl={true}
							label="Time"
							placeholder="Time"
							onChange={(e) => this.changeHandlerFood(e, i)}
							value={this.state.foods[i].time}
						/>
						<Input
							name="remarks"
							type="text"
							icon={faSignature}
							ipl={true}
							label="Remarks"
							placeholder="Remarks"
							onChange={(e) => this.changeHandlerFood(e, i)}
							value={this.state.foods[i].remarks}
						/>
				</div>
			)
		})

		let transportations = this.state.transportations.map((item, i) => {
			return (
				<div key={i}>
						<div className="header d-flex justify-content-between">
						<h4>Transportations {i + 1}</h4>
						{i === 0 ? null : <MDBBtn size="sm" color="danger" onClick={() => this.removeSection("transportation", i)}>remove</MDBBtn>}
					</div>
						<Input
							name="from"
							type="text"
							icon={faSignature}
							ipl={true}
							label="From (Place)"
							placeholder="From (Place)"
							onChange={(e) => this.changeHandlerTran(e, i)}
							value={this.state.transportations[i].from}
						/>
						<Input
							name="to"
							type="text"
							icon={faSignature}
							ipl={true}
							label="To (Place)"
							placeholder="To (Place)"
							onChange={(e) => this.changeHandlerTran(e, i)}
							value={this.state.transportations[i].to}
						/>
						<Input
							name="time"
							type="time"
							icon={faSignature}
							ipl={true}
							label="Time"
							placeholder="Time"
							onChange={(e) => this.changeHandlerTran(e, i)}
							value={this.state.transportations[i].time}
						/>
						<Input
							name="remarks"
							type="text"
							icon={faSignature}
							ipl={true}
							label="Remarks"
							placeholder="Remarks"
							onChange={(e) => this.changeHandlerTran(e, i)}
							value={this.state.transportations[i].remarks}
						/>
				</div>
			)
		})
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
										<i className="fas fa-info-circle" />
									</div>
									<p>General Info</p>
								</div>
								<div className={this.formWizardClass(2)}>
									<div className="wizard-icon">
										<i className="fas fa-home" />
									</div>
									<p>Accommodations</p>
								</div>
								<div className={this.formWizardClass(3)}>
									<div className="wizard-icon">
										<i className="fa fa-upload" aria-hidden="true" />
									</div>
									<p>Image Upload</p>
								</div>
								<div className={this.formWizardClass(4)}>
									<div className="wizard-icon">
										<i className="fas fa-utensils" />
									</div>
									<p>Food Plan</p>
								</div>
								<div className={this.formWizardClass(5)}>
									<div className="wizard-icon">
										<i className="fas fa-shuttle-van" />
									</div>
									<p>Transportation</p>
								</div>
							</div>
							{this.state.formActivePanel1 === 1 && (
								<MDBCol className="event-add-fieldset">
									<Input
										name="title"
										type="text"
										icon={faSignature}
										ipl={true}
										label="Title"
										placeholder="Title"
										onChange={this.changeHandler}
										value={this.state.title}
									/>

									<MDBRow>
										<MDBCol md="6">
											<div className="form-group icon-parent">
												<input type="file" name="myImage" onChange= {this.onChangeFile} multiple />

												<FontAwesomeIcon icon={faClock} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="6">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Location</label>
												<input
													type="text"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faMapMarkedAlt} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="tripStartDate"
												type="date"
												icon={faCalendar}
												ipl={true}
												label="Trip Start Date"
												onChange={this.changeHandler}
												value={this.state.tripStartDate}
											/>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="tripStartEnd"
												type="date"
												icon={faCalendar}
												ipl={true}
												label="Trip End Date"
												onChange={this.changeHandler}
												value={this.state.tripStartEnd}
											/>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="registrationDeadline"
												type="date"
												icon={faCalendar}
												ipl={true}
												label="Registration Deadline"
												onChange={this.changeHandler}
												value={this.state.registrationDeadline}
											/>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="cancellationDeadline"
												type="date"
												icon={faCalendar}
												ipl={true}
												label="Cancellation Deadline"
												onChange={this.changeHandler}
												value={this.state.cancellationDeadline}
											/>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="totalCost"
												type="text"
												icon={faMoneyBillWaveAlt}
												ipl={true}
												label="Total Cost"
												onChange={this.changeHandler}
												value={this.state.totalCost}
											/>
										</MDBCol>
										<MDBCol md="4">
											<Input
												name="totalSeat"
												type="text"
												icon={faMoneyBillWaveAlt}
												ipl={true}
												label="Total Seat"
												onChange={this.changeHandler}
												value={this.state.totalSeat}
											/>
										</MDBCol>
									</MDBRow>
									<div className="form-group  icon-parent">
										<label htmlFor="title">description</label>
										<textarea
											type="number"
											onChange={this.changeHandler}
											className="form-control"
											placeholder="description"
											name="description"
											value={this.state.description}>{this.state.description}</textarea>
									</div>
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
								<MDBCol className="event-add-fieldset">
								{accommodationsForm}
									<div className="more-btn-area">
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={() => this.addClick("accommodations")}
									>Add more</MDBBtn>
									</div>



									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(1)}
									>
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
								<MDBCol className="event-add-fieldset">
									<div className="drop-area">
										<p>
											Upload multiple files with the file dialog or by dragging and dropping
											images onto the dashed region
										</p>

										<Dropzone onDrop={this.onDrop} accept="image/*">
											{({ getRootProps, getInputProps, isDragActive }) => {
												return (
													<div
														{...getRootProps()}
														className={classNames('dropzone', {
															'dropzone--isActive': isDragActive
														})}
													>
														<label className="btn custom-btn" htmlFor="dropImage">
															Select some files
														</label>
														<input {...getInputProps()} name="dropImage" />
														{isDragActive ? <p>Drop files here...</p> : ''}
													</div>
												);
											}}
										</Dropzone>

										<div className="images-area">{images}</div>
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
								<MDBCol className="event-add-fieldset">
								{foods}
								<div className="more-btn-area">
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={() => this.addClick("foods")}
									>Add more</MDBBtn>
									</div>
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(3)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(5)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 5 && (
								<MDBCol className="event-add-fieldset">
									{transportations}
									<div className="more-btn-area">
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={() => this.addClick("transportations")}
									>Add more</MDBBtn>
									</div>
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

export default connect(null, {addEvent})(AddEvent);
