// import Link from "next/link"
// function Product({productId=100}){
//     return(
//         <>
//          <h1><Link href='/product/1'><a>Product 1</a></Link></h1>
//          <h1><Link href='product/2'><a>Product 2</a></Link></h1>
//          <h1><Link href='/product/3' replace><a>Product 3</a></Link></h1>
//         <h1><Link href={`/product/${productId}`}><a>Product {productId}</a></Link></h1>
//         </>
//     )
// }
// export default Product
import Link from "next/link";

function Productlist({products}){
    return(
        <>
        <h2>List of Products</h2>
        {products.map(product=>{
            return(
                <div key={product.id}>
                    <Link href={`product/${product.id}` } passHref>
                    <h2>{product.id} {product.title}  {product.price}</h2>
                    </Link>
                    <hr/>
                </div>
            )
        })}
        </>
    )
}
export default Productlist;

export async function getStaticProps(){
    const response=await fetch('http://localhost:4000/products');
const data=await response.json();
return{
    props:{
        products:data,
    },
    revalidate:60,
}
}

