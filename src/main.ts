import './style/style.css'
import {Table} from "./components/Table.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Produtos</h2>
    ${Table().outerHTML}
  </div>
`
