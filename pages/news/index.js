import Link from "next/link";

function Newsarticles({articles}){
    return(
        <>
        <h2>List of Products</h2>
        {articles.map(product=>{
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
export default Newsarticles;

export async function getServerSideProps(){
    const response=await fetch('http://localhost:4000/news');
const data=await response.json();
return{
    props:{
        articles:data,
    },
    revalidate:60,
}
}