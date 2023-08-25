import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <main>
            <h2 className="text-title">سلام به اسنپ فود خوش آمدید</h2>
            <Link to="/restaurants">لیست رستوران ها</Link>
        </main>
    )
}

export default HomePage
