import classes from './NavItems.module.css'
import NavItem from './NavItem'

const navItems = (props) => {
    const toolbarArray =[
        {route: "/", name: "Home"},
        {route: "/limited", name: "Limited Edition"},
        {route: "/products", name: "Sale"}
    ];
    const links = toolbarArray.map((navElement, index) => 
        <NavItem key={navElement.name} link = {navElement.route}>{navElement.name}</NavItem>
    );
    return(
        <ul className={classes.NavItems}>
            {links}
        </ul>
    )
}
export default navItems;