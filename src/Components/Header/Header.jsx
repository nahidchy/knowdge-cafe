import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-7xl mx-auto p-4 border-gray-700 border-opacity-40 border-b-2 mb-5">
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;