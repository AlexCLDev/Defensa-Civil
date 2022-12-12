import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Route, useParams } from 'react-router';
import { Albergues } from '../components/Albergues';
import ExploreContainer from '../components/ExploreContainer';
import { History } from '../components/History';
import { Home } from '../components/Home';
import { Miembros } from '../components/Miembros';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null)

  // const getUser = ()=>{
  //   Axios({
  //     method:"GET",
  //     withCredentials: true,
  //     url:"http://localhost:5000/users",
  //   }).then((res)=>setUser(res.data))
  // }

  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          {/* {show ? (
        <div className="menusesion">
          {user ? (
            <nav>

              <a
                href="http://localhost:5000/users/logout"
                exact="true"
                activeclassname="active"
              >
                {user.name}
              </a>

              <NavLink exact="true" activeclassname="active" to="/account" className="account">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
              </NavLink>


              <a
                href="http://localhost:5000/users/logout"
                exact="true"
                activeclassname="active"
                className="logout"
              >
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
              </a>
            </nav>
          ) : (
            <nav>
              <NavLink
                exact="true"
                activeclassname="active"
                className="login"
                to="/login"
              >
                <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
              </NavLink>
            </nav>
          )}
        </div>
      ) : (
        <div className="opacity"></div>
      )} */}
        </IonToolbar>
      </IonHeader>

      <IonRouterOutlet className='rutas overflow-auto '>
            <Route path="/page/home" exact={true}>
              <Home/> 
            </Route>
            <Route path='/page/history' exact={true}>
              <History/>
            </Route>
            <Route path='/page/members' exact={true}>
              <Miembros/>
            </Route>
            <Route path='/page/albergues' exact={true}>
              <Albergues/>
            </Route>

            
          </IonRouterOutlet>
    </IonPage>
  );
};

export default Page;
