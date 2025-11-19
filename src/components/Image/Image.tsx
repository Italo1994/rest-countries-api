import Image, { StaticImageData } from 'next/image';
import {} from 'react';

interface ImageProps {
    source?: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    resizeMode?: string;
    className?: string;
    filler?: boolean;
}

export function CustomImage({source, width, height, alt, className, filler}: ImageProps) {
    const fallback = "/assets/banner_halloween3.png"
    return (
        
        <>
            {filler ? (
                <Image className={className} src={source || fallback} height={height} alt={alt} fill />
            ): (
                <Image className={className} src={source || fallback} width={width} height={height} alt={alt} />
            )}
            
        </>             
    )
}