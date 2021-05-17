

const Header = ({ title }) => {
    return (
<header className="Header">
<p>{title}</p>
</header>
    )
}
Header.defaultProps = {
    title: "Hi my name is Mark and I'm a software engineer at Loblaws Corporation! I have two years software engineer experince  "
}
export default Header
