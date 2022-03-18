import './sidebar.css';



export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={require("../../images/bethKopicki.png")} alt="mom"></img>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, animi quasi minus enim possimus quae recusandae. Facere, dicta deserunt ut quis asperiores mollitia blanditiis delectus pariatur error? Voluptates, pariatur assumenda.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Lifestyle</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Activism</li>
                <li className="sidebarListItem">Peace & Joy</li>
                <li className="sidebarListItem">Gardening</li>
                <li className="sidebarListItem">Family</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
