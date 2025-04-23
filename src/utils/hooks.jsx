import { useState, useEffect } from 'react';

export function Hooks() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('/src/utils/data/logements.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log('Erreur : ', err))
  }
  useEffect(() => {
    getData()
  }, [])

  return data
}