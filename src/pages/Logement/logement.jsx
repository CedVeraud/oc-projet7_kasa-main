import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import Loader from '../../components/loader/loader'
import Carousel from '../../components/carousel/carousel'
import Infos from '../../components/infos/infos'
import Host from '../../components/host/host'
import Rating from '../../components/rating/rating'
import Collapse from '../../components/collapse/collapse'
import Error from '../Error/404'

import Styles from './logement.module.scss'

function Logement() {
  //// FIND DATA ////
  const dataLogements = Hooks()
  const { logementId } = useParams()
  const currentLogement = dataLogements.find((data) => data.id === logementId)

  // LOADING
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timeout);
  }, []);

  // ERROR CHECK
  const checkURL = currentLogement?.id
  if (checkURL != logementId) {
    return <Error />
  }

  return (
    <main className={Styles.logement}>
      {isLoading ? (
        <Loader />
      ) : (

        <>
          <Carousel pictures={currentLogement?.pictures} />
          <section className={Styles.logement_infos}>
            <Infos
              title={currentLogement?.title}
              location={currentLogement?.location}
              tag={currentLogement?.tags}
            />

            <div className={Styles.hostRating_container}>
              <Rating rating={currentLogement?.rating} />
              <Host
                name={currentLogement?.host.name.split(' ')}
                picture={currentLogement?.host.picture}
              />
            </div>
          </section>

          <section className={Styles.collapse}>
            <Collapse title='Description' content={currentLogement?.description} />
            <Collapse
              title='Équipements'
              content={
                <ul>
                  {currentLogement?.equipments.map((equipment) => (
                    <li key={equipment} className={Styles.collapse_list}>
                      {equipment}
                    </li>
                  ))}
                </ul>
              } />
          </section>
        </>
      )}
    </main>
  )
}

export default Logement