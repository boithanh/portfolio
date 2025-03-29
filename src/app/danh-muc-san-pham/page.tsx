import React from 'react'

interface Props {
    params: { slug: string };
}

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    return <div>Danh mục sản phẩm: {slug}</div>;

};

export default Page