import StickyHeadTable from "@/app/categories/datagrid";

function getCategoryData() {
  return fetch('http://localhost:3001/categories')
    .then(response => response.json())
    .then(data => data)
}

async function Categories() {
  const data = await getCategoryData();
  return (
    <div>
      <StickyHeadTable rows={data}/>
    </div>
  )
}

export default Categories;
