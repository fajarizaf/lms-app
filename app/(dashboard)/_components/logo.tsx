import Image from "next/image"

export const Logo = () => {
    return ( 
        <Image 
        height={128}
        width={128}
        alt="logo svg"
        src = "/tutor-lms.webp"
        />
     );
}