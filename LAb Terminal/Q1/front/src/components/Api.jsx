import React,{useState,useEffect} from 'react'
// import axios from 'axios';

export default function Api() {

        const [product,setProducts]  = useState([]);
        useEffect(
        () => {
            let data = fetch('https://dummyjson.com/posts')
            .then(res => res.json())            
            .then(console.log);
                setProducts(data);
            }

    ,[] );


  return (

    <>
        <h1 style={{textAlign:'center'}} >User Show</h1>
{
            console.log("DATA "+product)

}
        {

        product.length == 0 ? (
            <p>User Data</p>
            ):
            (
                <div className="my-10">
                        <>
                            <table className="table table-striped my-20">
                                <thead className='table-light'>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                
                                </tr>
                                </thead>
                                {product.map((prod) => {
                                    return (

                                        <tbody >
                                        <tr>
                                            <th>{prod.posts[0]}</th>
                                            <th>{prod.posts[0].title}</th>
                                            <th>

                                            </th>
                                        </tr>
                                        </tbody>
                                        )
                                    })}
                            </table>
                        </>    
                </div>
            )

        }
    </>
  )
}


