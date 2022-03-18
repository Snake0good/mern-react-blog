import './header.css'

export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitlesSm'>Peace, Love, Joy, and Crabwomyn's</span>
            <span className='headerTitlesLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="flowers"></img>
    </div>
  )
}
