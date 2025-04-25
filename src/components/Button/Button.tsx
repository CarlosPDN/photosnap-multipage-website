import React from 'react';
import { ButtonType, ButtonWrapper } from './Button.styles';
import Image from 'next/image';

type Props = { label: string; onClick?: () => void; type: ButtonType };

export default function Button({ label, type, onClick }: Props) {
    const Arrow = ({ type }: { type: Props['type'] }) => {
        switch (type) {
            case 'button2':
                return <Image height={12} width={42} alt="black arrow" src={'/blackArrow.svg'} />;
            case 'button4':
                return <Image height={12} width={42} alt="white arrow" src={'/whiteArrow.svg'} />;
        }

        return <div style={{ display: 'none' }} />;
    };

    return (
        <ButtonWrapper $type={type} onClick={onClick}>
            <button className="button">
                <label className="button__label">{label}</label>

                <Arrow type={type} />
            </button>
        </ButtonWrapper>
    );
}
