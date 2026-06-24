const config = {
    baseUrl: 'http://localhost:8080',
    productImageBaseUrl: 'https://amzn-s3-generalbucket.s3.us-east-2.amazonaws.com/SaharaProductItem/',
    productImageFallback: './images/products/no-image.jpg'
}

function getProductImageUrl(imageUrl)
{
    if(!imageUrl) return config.productImageFallback;

    let fileName = imageUrl.trim().split("/").pop();

    if(!fileName.includes(".")) {
        fileName += ".jpg";
    }

    return `${config.productImageBaseUrl}${fileName}`;
}
