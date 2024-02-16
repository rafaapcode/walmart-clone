import { ProductContent } from "@/typings/ProductTypings";

export default async function fetchProduct(url: string) {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL(`https://www.walmart.com${url}`);

    const body = {
        source: "universal_ecommerce",
        url: newUrl.toString(),
        geo_location: "Brazil",
        parse: true
    };

    const response = fetch('https://realtime.oxylabs.io/v1/queries', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }).then(res => res.json()).then((data) => {
        if (data.results.length === 0) return;
        const result: ProductContent = data.results[0];

        const product = result.content;

        return product;

    }).catch(err => console.log(err));
    return response;
};