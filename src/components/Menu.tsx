import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/home',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Historia',
    url: '/page/history',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Servicios',
    url: '/page/services',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Videos',
    url: '/page/videos',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Albergues',
    url: '/page/albergues',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Mapa',
    url: '/page/map',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Medidas Preventivas',
    url: '/page/medidas',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Miembros',
    url: '/page/members',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Acerca de...',
    url: '/page/aboutus',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Defensa Civil</IonListHeader>
          <IonNote>República Dominicana</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
