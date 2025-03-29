import { notFound } from "next/navigation";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts = await fetch("https://.../posts").then((res) => res.json());

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

const Page = async ({ params }: Props) => {
    if (!params.slug) return notFound(); // Xử lý nếu slug không tồn tại

    return <div>Danh mục sản phẩm: {params.slug}</div>;
};

export default Page;
