import  Axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from '../../src/component/Item'
import { Loader } from 'semantic-ui-react'


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState({});
  const [isLoding, setIsLoading] = useState(true); //로딩상태값

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;


  function getData() {
    Axios.get(API_URL).then(res => {
      setItem(res.data);
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if(id && id >0){
      getData();
    }
  }, [id]);



  return (
    <>
      {isLoding ? (
        <div style={{ padding: "300px 0" }}>
          <Loader active inline='centered'>
            Loding
          </Loader>
      </div>
      ) : (
        <Item item={item}/>
      )}
    </>
  )
  
  
  
}

export default Post