import axios from "axios";
import styles from '@/styles/Home.module.css'
import Link from "next/link";

function Example({posts}) {

    return (
        <ul>
        {posts.map((post,index) => (
          <li key={post.id}>
              <div  className="p-4 fw-bold">{post.title}</div>
              <Link href={`/posts/${String(post.id)}`}>
                    <button className={styles.post}>post {index + 1}</button>
              </Link>
            </li>
        ))}
      </ul>
    );





    

}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
  const api = async()=>{
    try {
        const res = await axios.get("https://fakestoreapi.com/products")
        const posts = res.data
        return posts
    } catch (error) {
        console.log("error de");
    }
  }

  const posts = await api()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }

}


export default Example;