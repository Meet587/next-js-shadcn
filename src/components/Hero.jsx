import bannerImge from "@/assets/banner-image-1-1.png"
import Image from "next/image"

const Hero = () => {
    return (
        <div class="flex flex-col md:flex-row items-center">
            {/* <Left side: Text  */}
            <div class="md:w-1/2">
                <h1 class="text-4xl font-bold mb-4">Main Heading Text</h1>
                <p class="text-lg">Sub Heading Text</p>
            </div>

            {/* Right side: Image (visible above 768px) */}
            <div class="md:w-1/2 md:ml-auto hidden md:block">
                <Image src={bannerImge} alt="banner" class="object-contain" fill />
            </div>
        </div>
    )
}

export default Hero