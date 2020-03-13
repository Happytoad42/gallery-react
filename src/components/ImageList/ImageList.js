import React, { Component } from 'react'
import ImageItem from '../ImageItem'
import axios from 'axios'
import { connect } from 'react-redux'
import { TYPES } from '../../consts'

import './ImageList.css'

class ImageList extends Component {

    loadImages = () => {
        const { imagesLoaded, currentPage, loadingFinished } = this.props;
        axios.get(`https://picsum.photos/v2/list?page=${currentPage}`)
        .then(result => result.data.map( image => ({
            id: image.id,
            author: image.author,
            url: image.download_url
        })))
        .then(res => {
            imagesLoaded(res);
            loadingFinished();
        });
    }

    componentWillMount() {
        this.props.loadingStarted();
        this.loadImages()              
    }

    handleImageclick = (id) => {    
        const targetImage = this.props.images.find(image => image.id === id); 
        this.props.onImageClick(targetImage)
    }

    handleLoadMoreImages = () => {
        const { imagesLoaded, currentPage } = this.props;
        axios.get(`https://picsum.photos/v2/list?page=${currentPage}`)
            .then(result => result.data.map( image => ({
                id: image.id,
                author: image.author,
                url: image.download_url
            }))).then(res => {
                imagesLoaded(res);
            });
    }

    
    
    render() {        
        
        
        const { loading, images } = this.props;        
       
        if (loading) {
            return (
                <div className="image-list">
                    Images loading...
                </div>
            )
        } else {

            return (
                <div className="image-list">
                    <ul className="image-list__list">
                        {images.map(({ id, author, url }) => (
                            <li key={ id }>
                                <ImageItem onImageClick={this.handleImageclick} id={id} author={ author } url={ url }/>
                            </li>))
                        }
                    </ul>
                    <button onClick={() => this.handleLoadMoreImages()} className="image-list_load">Load more images</button>
                </div>
            )
        }        
        
    
    }
}

function mapStateToProps({images, currentPage, activeImage, loading}) {
    return {
        images,
        currentPage,
        activeImage,
        loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        imagesLoaded: payload => dispatch({
            type: TYPES.IMAGES_LOADED,
            payload
        }),
        onImageClick: payload => dispatch({
            type: TYPES.IMAGE_SELECTED,
            payload
        }),
        loadingStarted: () => dispatch({
            type: TYPES.LOADING_STARTED
        }),
        loadingFinished: () => dispatch({
            type: TYPES.LOADING_FINISHED
        }),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ImageList);

