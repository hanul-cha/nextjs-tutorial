
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getDate() {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data)
        setList(res.data)
      });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
      <Head>
          <title>HOME | 한울</title>
      </Head>
      <p>
        예시 태그입니다
      </p>
    </div>
  );
}
