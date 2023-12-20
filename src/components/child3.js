import { useContext } from 'react'
import { Context } from '../App'
function Child3() {
    var res = useContext(Context)
    console.log(res)
    return (
        <div>
            <table className="table table-bordered table-dark w-auto">
                <thead>
                    <tr>
                        <th scope="col">S.NO.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        res.map((item) => {
                            return(
                            <tr key={item.id} >
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Child3;