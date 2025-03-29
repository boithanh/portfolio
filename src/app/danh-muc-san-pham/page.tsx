import React from 'react'
import { PageProps } from '../../../.next/types/app/page';

export async function generateStaticParams() {
    const posts = await fetch("https://.../posts").then((res) => res.json());

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    console.log(slug);
    return <div>Danh mục sản phẩm: {slug}</div>;
};

export default Page