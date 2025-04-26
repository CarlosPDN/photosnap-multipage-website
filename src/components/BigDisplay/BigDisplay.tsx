import React from 'react';
import BigDisplayWrapper from './BigDisplay.styles';
import Button from '../Button/Button';

export default function BigDisplay() {
    // ~~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <BigDisplayWrapper>
            <div className="display-data">
                <div className="display-data__area">
                    <div>title</div>
                    <div>paragraph</div>
                    <div className="display-data__area__button">
                        <Button label="GET AN INVITE" type="button4" />
                    </div>
                </div>
            </div>
            <div className="display-image"></div>
        </BigDisplayWrapper>
    );
}
