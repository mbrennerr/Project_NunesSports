export function Table () {
    const table = document.createElement('table')
    table.innerHTML = `
        <thead>
        <tr>
            <th>cod</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>product 1</td>
            <td>100</td>
            <td>description 1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>product 2</td>
            <td>200</td>
            <td>description 2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>product 3</td>
            <td>300</td>
            <td>description 3</td>
        </tr>
        </tbody>
    `
    return table

}
