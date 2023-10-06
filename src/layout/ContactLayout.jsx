import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        adipisci cupiditate velit esse quae ut. Officiis, maxime mollitia. Id
        necessitatibus expedita deserunt inventore aspernatur voluptate commodi
        quod sint. Voluptas, nulla repellendus? Esse vero accusamus porro id
        neque, reiciendis commodi inventore ducimus maxime necessitatibus ab
        modi. Ipsam itaque eligendi reprehenderit aperiam?
      </p>

      <nav>
        <NavLink to={"faq"}>Faq</NavLink>
        <NavLink to={"form"}>Form</NavLink>
      </nav>

      <Outlet/>
    </div>
  );
}

export default ContactLayout;
