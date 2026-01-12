import { Link, Outlet } from "react-router";

function PageChrome() {
    return <div>
        <h1>React Demos Page</h1>
        <nav>
            <Link to='/fakeBlog'>Fake Blog</Link>
            <Link to='/complexThing'>Complex Thing</Link>
        </nav>

        <Link to='..'>Back</Link>

        <Outlet />
    </div>
}

export default PageChrome;