// 導入時就自動轉為JS資料格式
import data from '@/pages/course/products.json'

export default function ProductTable() {
  //要的是products
  console.log(data.products)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Picture</th>
            <th>Stock</th>
            <th>Name</th>
            <th>Price</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.stock}</td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>{v.tags}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
