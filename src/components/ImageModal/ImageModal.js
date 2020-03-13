import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TYPES } from '../../consts';

import './ImageModal.css';

const ImageModal = ({ activeImage, modalClosed }) => {

    useEffect(() => {
        if (activeImage) {
            document.body.style.overflow = 'hidden';

        }

        document.body.style.overflow = 'auto';
    });


	if (activeImage) {
		return (
			<div className="image-modal image-modal--active">
				<div className="image-modal__container">
					<div className="image-modal__image-container">
                        <img src={activeImage.url} alt={'Image by ' + activeImage.author} />
						<p className="image-modal__placeholder">Image loading...</p>
                    </div>
					
					<span onClick={() => modalClosed()} className="image-modal__close" />
				</div>
				
			</div>
		)
	} return null
};

function mapStateToProps({ activeImage }) {
	return {
		activeImage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		modalClosed: () => dispatch({
            type: TYPES.MODAL_CLOSED
        }),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
