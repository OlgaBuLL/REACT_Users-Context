import Footer from "../Footer/Footer";
import "./style.sass";

export default function About() {
  return (
    <div className="about">
      <h2 className="about__title">About the project</h2>
      <ul className="about__info">
        <li>
          Ability to <span>add</span> and <span>delete</span> new user
        </li>
        <li>
          The users's data is stored in <span>LocalStorage</span> , so the info
          won't disappear after reloading the page
        </li>
        <li>
          Sorting the table data according to the column title:{" "}
          <span>"Name"</span>, <span>"Age"</span>, <span>"Subscription"</span>,{" "}
          <span>"Employment"</span>
        </li>
        <li>
          If there is no data left in the table, the corresponding inscription{" "}
          <span>"Table is empty"</span> will be displayed on the screen
        </li>
        <li>
          Ability to toggle the app's appearance from <span>"Dark mode"</span>{" "}
          to <span>"Light mode"</span>{" "}
        </li>
        <li>Routing</li>
      </ul>

      <Footer />
    </div>
  );
}
