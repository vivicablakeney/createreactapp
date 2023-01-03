import { Component } from "react";
import React from "react";
import '../Styles.css/NavbarStyles.css';

class Navbar extends Component {
state = { navOpen: false };

render() {
return (
<nav>
<div className='logo'> <i className="fas fa-paw"></i> CINCO pups </div>
<ul id="navbar" className={this.state.navOpen ? "active" : ""}>
<li>
<a className="active" href="/">Home</a>
</li>
<li>
<a href="/services">Services</a>
</li>
<li>
<a href="/plans">Plans</a>
</li>
<li>
<a href="/shop">Shop</a>
</li>
<li>
<a href="/contact">Contact</a>
</li>
</ul>
</nav>
);
}
}

export default Navbar;
