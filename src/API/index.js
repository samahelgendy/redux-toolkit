export const showMessage = (id) =>{
    return fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: id,
              quantity: 1,
            }
          ]
        })
      })
      .then(res => res.json())
}