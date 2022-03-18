import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className="postImg" src="https://images.unsplash.com/photo-1438109382753-8368e7e1e7cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="gardening"></img>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Gardening</span>
                <span className="postCat">Peace & Joy</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor, sit amet
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus quam minima sequi reiciendis eveniet nulla eum, pariatur eius neque! Officiis nemo corrupti laudantium aperiam illum qui consectetur? Neque, obcaecati.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor laudantium ipsam est incidunt officia obcaecati totam voluptates sapiente pariatur. Ducimus suscipit, quibusdam totam possimus reiciendis velit dolore, omnis veritatis cupiditate nemo ab quis quasi veniam quos vel voluptatem architecto repellat nulla iste necessitatibus ad beatae assumenda nam? Harum nostrum esse mollitia provident fugit voluptates!</p>
    </div>
  )
}
