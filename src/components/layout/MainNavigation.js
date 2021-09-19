import { Link, link } from 'react-router-dom';
import classes from '../layout/MainNavigation.module.css';


function MainNavigation(){
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>AllMeetUp</Link>
          </li>
          <li>
            <Link to='/new-meetup'>NewMeetUp</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default MainNavigation