import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import {Link} from 'react-router-dom'
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody} from 'mdbreact'
import "./ContributionView.css"
import viewSmallIamge from '../../assets/images/bg4.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCoffee} from '@fortawesome/free-solid-svg-icons'
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe} from 'react-photoswipe';
import Axios from "axios"
class ContributionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            conDetailsData:{},
            isLoading: false,

         }
    }
    handleClose = () => {
        this.setState({
            isOpen:false
        })
      };
      openGallery = event =>{
          event.preventDefault()
          this.setState({
              isOpen:true
          })
      }
    //   static getDerivedStateFromProps(nextProps, prevState) {
    //     if(JSON.stringify(nextProps.conDetailsData) !== JSON.stringify(prevState.conDetailsData)){
    //         return{
    //             conDetailsData:nextProps.conDetailsData
    //         }
    //     }
    //     return null
    //   }

      componentDidMount(){
        this.setState({ isLoading: true });
        Axios.get("/api/members/contributions/"+ this.props.match.params.con_id)
        .then(result => {
            this.setState({
                conDetailsData:result.data,
                isLoading:false
            })
        })
          console.log()
      }
      componentWillMount(){
          // console.log(this.state.conDetailsData)
      }
    render() {
        let {conDetailsData, isLoading} = this.state
        let items;
           let galleryImages;
           let lat, lon;
           if(conDetailsData.imageUrl){
            items = conDetailsData.imageUrl.map((imgItem, i) => {
                return {
                    src: `http://localhost:8000/${imgItem}`,
                    w: 1200,
                    h: 900,
                    title: 'Image 1'
                }
           })
           galleryImages = conDetailsData.imageUrl.map((imgItem, i) => {
               return (
                <a href="/" onClick={this.openGallery} key={i}>
                <img src={`http://localhost:8000/${imgItem}`} className="img-fluid z-depth-5" alt="dsfasd"/>
            </a>
               )
           })
           lat = conDetailsData.latLng.lat
           lon = conDetailsData.latLng.lng
           }
          let options = {

          };
           if(isLoading){
                return <p>Loading ...</p>
           }
           // console.log(conDetailsData)
           let backImage = `http://localhost:8000/${conDetailsData.feturedPhoto}`
           // console.log(backImage)
           var sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: "url(" + { backImage } + ")"
          };

        return (
            <main className="contribution-view-main">
                <section className="contribution-view-banner" style={ sectionStyle }>
                    <MDBContainer>
                        <div className="crbt-view-banner-content">
                            <h1>{conDetailsData.name}</h1>
                            <h2>{conDetailsData.title}</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam minus, minima ratione assumenda odit similique, illo vero voluptatibus labore pariatur sequi inventore hic. Est reprehenderit porro quos dolorem ipsa pariatur!</p>
                        </div>
                    </MDBContainer>

                </section>
                <PhotoSwipe isOpen={this.state.isOpen} items={items} options={options} onClose={this.handleClose}/>
                <section className="crbt-view-details section-padding">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="7">
                             <MDBTable>
                                <MDBTableBody>
                                    <tr>
                                        <td><h6>Category</h6></td>
                                        <td>{conDetailsData.title}</td>
                                    </tr>
                                    <tr>
                                        <td><h6>Local Languages</h6></td>
                                        <td>{conDetailsData.language}</td>
                                    </tr>
                                    <tr>
                                        <td><h6>Best time spending suggestion</h6></td>
                                        <td>{conDetailsData.bestTime}</td>
                                    </tr>
                                    <tr>
                                        <td><h6>Rating</h6></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><h6>Visited</h6></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><h6># of Open Event</h6></td>
                                        <td>0</td>
                                    </tr>
                                </MDBTableBody>
                                </MDBTable>
                            </MDBCol>
                            <MDBCol md="5">
                                <div style={{height:"300px"}}>
                                    <GoogleMap lat={lat} lng={lon}></GoogleMap>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <section className="crbt-image-gallery section-padding">
                    <MDBContainer>
                        <h2>Photo Gallery:</h2>
                        <div className="crbt-images-area">
                          {galleryImages}

                        </div>
                    </MDBContainer>
                </section>
                <section className="crbt-description section-padding">
                    <MDBContainer>
                        <h2>description</h2>
                        <div className="crbt-description-content">
                            {conDetailsData.discription}
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada augue augue, in euismod lacus posuere ut. Fusce vel ultrices sem, et pharetra orci. In hac habitasse platea dictumst. Vivamus ornare tellus vel lorem tincidunt placerat. Suspendisse sodales rutrum bibendum. Duis iaculis pharetra odio, eget iaculis elit dignissim non. Suspendisse ipsum felis, aliquet sed sollicitudin quis, tempor vel purus. Nam aliquam iaculis malesuada. Curabitur ultrices placerat elit. Aliquam vitae neque finibus, facilisis risus eu, porta ligula. Mauris eget enim vitae magna lobortis molestie.</p>
                            <p>Morbi blandit sapien ac justo pellentesque, eu tincidunt arcu blandit. Fusce et porttitor arcu. Mauris eget aliquam sem. Aliquam ultricies fringilla molestie. Sed et egestas sem. Suspendisse tincidunt eros sollicitudin arcu volutpat, a pulvinar mauris fringilla. Nullam quam velit, scelerisque eget mi a, pharetra gravida nisl. Aliquam condimentum ligula felis, eget faucibus magna pellentesque venenatis. Sed eget urna placerat, pulvinar nunc quis, ultrices turpis. Sed mi sapien, finibus a ultrices sed, vulputate vel nibh. Donec eleifend tempor nunc ut egestas. Aenean fringilla, neque vitae ullamcorper aliquam, elit ante efficitur nibh, quis mattis mi tellus eget orci.</p>
                            <p>Integer imperdiet ipsum sed lacus finibus volutpat. Etiam vitae porta urna, et vestibulum metus. Ut eleifend mauris ac ultrices finibus. Quisque quis massa faucibus, iaculis dui vel, ornare lectus. Vestibulum posuere scelerisque sodales. Nam interdum nisi vitae felis aliquet iaculis. Nunc porttitor aliquet iaculis. In non sem sit amet tellus imperdiet tincidunt sit amet vitae quam. Etiam ac placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lacinia efficitur massa sit amet luctus. Donec egestas rhoncus feugiat.</p>
                            <p>Maecenas tempor nisi est, nec efficitur nunc sagittis non. Nulla eu eleifend turpis, eu volutpat turpis. Nulla efficitur non urna non interdum. Etiam suscipit justo commodo luctus blandit. Nulla varius egestas lorem. Aenean in diam eget velit finibus tempus sed at neque. Mauris vulputate finibus iaculis. Praesent consectetur quam vitae enim congue, eu rhoncus sapien auctor. Phasellus nunc velit, congue quis finibus sit amet, semper et velit. Morbi molestie posuere lectus id convallis. Quisque ut dignissim augue. Nam sit amet nisi feugiat, gravida odio in, dapibus dui. Aliquam fringilla eros blandit, malesuada tellus condimentum, imperdiet tellus. In posuere turpis eget nisi rutrum gravida. Morbi placerat quis elit eget varius. Etiam fermentum ac ligula sed imperdiet.</p>
                            <p>Nunc sed ex sodales, hendrerit libero in, convallis magna. Vivamus vitae lacinia mauris. Suspendisse pellentesque porta augue, vel pulvinar ante aliquet id. Cras vestibulum, nulla non fermentum elementum, odio justo accumsan nisl, quis feugiat enim mauris vitae lorem. Sed a leo enim. Ut ultrices placerat congue. Aliquam rutrum vel ex id dignissim. Donec quis risus eu ipsum tristique scelerisque. Nulla commodo posuere auctor. Aliquam pellentesque, metus venenatis venenatis porttitor, tortor ex condimentum nibh, a tempor lacus nisi ac odio. Aliquam varius luctus ante, quis pharetra justo bibendum vel. Suspendisse porttitor vulputate purus. Ut eu eros facilisis, lacinia sapien sed, dapibus orci. Morbi ac sapien viverra, pellentesque felis id, iaculis nisl. Quisque pharetra est non nisl tristique tincidunt. Integer id eros nec odio aliquam euismod.</p> */}
                        </div>
                    </MDBContainer>
                </section>

                <section className="crbt-youtube-area section-padding">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                            <iframe width="100%" height="315" title="video"
                                src="https://www.youtube.com/embed/dkpS0_hr4XE">
                            </iframe>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBRow>
                                    <MDBCol md="6" sm="6">
                                        <Link to="accommodation">
                                            <div className="page-link-item grey lighten-3">
                                                <FontAwesomeIcon icon={faBed} />
                                                <span>Accommodation</span>
                                            </div>
                                        </Link>
                                    </MDBCol>
                                    <MDBCol md="6" sm="6">
                                        <Link to="food">
                                            <div className="page-link-item grey lighten-3">
                                                <FontAwesomeIcon icon={faCoffee} />
                                                <span>Food &amp; Restaurants</span>
                                            </div>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </main>

         );
    }
}

export default ContributionView;
