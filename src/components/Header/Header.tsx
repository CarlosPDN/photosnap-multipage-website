import React from 'react';
import HeaderWrapper from './Header.styles';
import Button from '../Button/Button';
import Image from 'next/image';

export default function Header() {
    // ~~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <HeaderWrapper>
            <div className="left">
                <Image src="/TriangleIcon.svg" alt="triangle" width={17} height={17} />
                <label className="left__label">PHOTOSNAP</label>
            </div>
            <div className="center">
                <Button label="STORIES" type="button5" />
                <Button label="FEATURES" type="button5" />
                <Button label="PRICING" type="button5" />
            </div>
            <div className="right">
                <div className="right__button">
                    <Button label="GET AN INVITE" type="button1" />
                </div>
            </div>
        </HeaderWrapper>
    );
}
