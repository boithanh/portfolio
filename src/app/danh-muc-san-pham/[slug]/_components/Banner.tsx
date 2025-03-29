import Image from 'next/image'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className=' bg-red-500 relative w-1/2 h-96'>
            {/* <img src="/doremon.webp" alt="" /> */}
            {/* Có thể dùng thể dùng width heigh để set cứng hoặc dùng thuộc tính fill của nextJs */}
            <Image src="/doremon.webp" alt="doremon" fill></Image>
        </div>
    )
}

export default Banner