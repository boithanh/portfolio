import React from 'react'

interface Props {
    params: { slug: string };
}

const Page = ({ params }: Props) => {
    return <div>Danh mục sản phẩm: {params.slug}</div>;
};

export default Page