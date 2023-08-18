"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

type PokemonImageProps = {
    image: string | StaticImport;
    width: number;
    height: number;
    name: string;
}
export default function PokemonImage({ image, width, height, name }: PokemonImageProps) {
    

    return (
        <>
            <Image 
                src={image} 
                width={width} 
                height={height} 
                alt={`Picture of ${name}`} 
                priority 
                style={{'objectFit': 'contain'}}
                className="transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                />
        </>
    )
}
