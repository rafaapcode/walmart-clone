type ProductPageProps = {
    searchParams: {
        url: string
    }
};

export default async function ProductPage({ searchParams: { url } }: ProductPageProps) {
    const product = await fetchProduct(url);

    return <div>
        ProductPage
    </div>
};