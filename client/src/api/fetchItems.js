
export const getAllProducts = () => {
    let data = null;
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>{
        data = res;
        console.log("res 1", data)        
    })
    .catch(()=>{

    });
    console.log("res", data)
    return data;
};