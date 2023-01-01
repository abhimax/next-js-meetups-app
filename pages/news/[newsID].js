import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
    return <h1>The Detail Page { router.query.newsID }</h1>
  }
  
  export default DetailPage;