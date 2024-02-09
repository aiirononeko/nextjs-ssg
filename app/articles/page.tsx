import { microCmsClient } from "../libs/microcms";

async function getData() {
  const data = await microCmsClient.get({ endpoint: "blogs" })
  return data.contents 
}

export default async function Page() {
  const articles = await getData()
  console.log(articles)
  
  return (
    <div>
      <h1>Articles</h1>
    </div>
  );
}
