import Link from "next/link";

function NewsPage() {
    return <>
    <h1>News Page</h1>
    <ul>
      <li><Link href="/news/first-item">This is the First item</Link></li>
      <li><Link href="/news/second-item">This is the Second item</Link></li>
    </ul>
    </>
     }
  
  export default NewsPage;