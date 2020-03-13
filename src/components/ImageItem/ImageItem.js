import React from 'react';

import './ImageItem.css'

export const ImageItem = ({author, id, url, onImageClick }) => {

    return (
        <div onClick={() => onImageClick(id)} className="image-item">
            <div className="image-item__image">
                <img src={url} alt={"Image by" + author} />
            </div>
            <div className="image-item__foot">
                <p>{'Image by ' + author}</p>
            </div>
        </div>
    )
}


export default ImageItem;
