import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import noimage from './no-image.svg';

interface Props {
    id: number;
    alt: string;
}

export default function AddonImage({ alt, id }: Props) {
    const [errored, setErrored] = useState(false);

    const onErrorHandler = () => {
        setErrored(true);
    };

    const src = errored ? noimage : `images/products/${id}.png`;

    return (
        <Image src={src} alt={alt} onError={onErrorHandler} width={150} fluid thumbnail />
    )
}