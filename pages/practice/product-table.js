// 導入時就自動轉為JS資料格式
import data from '@/data/product/products'

export default function ProductTable() {
  return (
    <>
      <style jsx>{`
        table {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid #ddd;
          padding: 8px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }

        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04aa6d;
          color: white;
        }
      `}</style>
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.serial_number}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

// {
//   "id": 1,
//   "serial_number": "DR0453-005",
//   "name": "Nike Air Max Pulse",
//   "slug": "nike-air-max-pulse",
//   "images": "",
//   "price": 4900,
//   "description": "Air Max Pulse 向倫敦樂壇汲取靈感，為經典 Air Max 系列注入真性情的非主流氣息。 以布質包覆的中底搭配真空密封裝飾，造型新穎簡約；象徵倫敦樂壇的色彩，更添前衛感。 重點式 Air 緩震系統改版自出奇柔軟的 Air Max 270，以更出色的彈力推進你超越極限。",
//   "category_id": 1,
//   "colors": "black,white",
//   "tags": "men,women,new"
// }
