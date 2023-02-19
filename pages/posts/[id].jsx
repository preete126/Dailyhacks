import axios from "axios";

function View({posts}) {
    return (
        <>
            <ul className='tw-text-3xl font-bold '>
                {posts.title}
            </ul>
        </>
    );
}


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const api = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            const posts = res.data
            return posts
        } catch (error) {
            console.log(error);
        }
    }

    // Get the paths we want to pre-render based on posts
    const res = await api()
    const paths = res.map((post) => ({
        params: { id: String(post.id) },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    const api = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            const posts = res.data
            return posts
        } catch (error) {
            console.log(error);
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

export default View;