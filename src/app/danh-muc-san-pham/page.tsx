import React from "react";

type Props = {
    params: Promise<{ slug: string }>;
};

const Page = async ({ params }: Props) => {
    const resolvedParams = await params; // Giải quyết Promise
    return <div>Danh mục sản phẩm: {resolvedParams.slug}</div>;
};


export default Page;
