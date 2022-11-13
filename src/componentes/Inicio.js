import Logout from "./Logout";

export default function Inicio() {
    return (
        <div className="container">
            <div className="text-center">
                <img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-jumbo-v2.jpg" className="img-thumbnail w-auto h-auto mt-4" alt="meme dog" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-4 mb-4 mb-0">
                <Logout />
            </div>
        </div>
    );
}
