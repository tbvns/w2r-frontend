import "./navBar.css"
import {useNavigate} from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="navBar">
            <div className="navBar-tabs navBar">
                <h1 className="title">Where2Read.at</h1>
                {
                    ["Home", "Library", "Browse", "Update", "Advanced search", "More"].map((tab, index) => (
                        <button key={index}
                            onClick={() => navigate(tab.toLowerCase())}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>
            <input type="text" placeholder="Search for a work" />
        </div>
    )
}