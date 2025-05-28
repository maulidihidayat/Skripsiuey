import Image from 'next/image';

interface userImageProps {
    src : string;
    alt :string;
}

export default function userImage ({src, alt} : userImageProps) {
    return (
        <div className='relative  flex justify-center items-center'>
            <Image
                src={src}
                alt={alt}
                draggable={false}
                width={60}
                height={60}
            />
        </div>
    )
}