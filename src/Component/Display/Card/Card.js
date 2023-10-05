import React, { useEffect ,useState} from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useDispatch , useSelector} from 'react-redux';
import { addtocart } from '../../Redux/CartSlice/CartSlice';
import { fetchDataRequest } from '../../Redux/ApidataSlice/ApidataSlice';


const Cards = () => {
  // const [data, setData] = useState([])
  // console.log(data)
  
  //   const apiData = async ()=>{
  //     try {
  //       const response = await axios.get("http://localhost:4006/")
  //       console.log(response.data)
  //       setData(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   useEffect(()=>{
  //     apiData()
  //   },[])
  
  const posts = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const senDatatoCart = (selectedItem)=>{
      dispatch(addtocart(selectedItem))
  }
 
  

  return (
    <div>
       <h1 className='home-page-header'>Buy Foods</h1>
      <div className='cards-list'>
       
        {
          posts.slice(0,9).map((element, id) => {
            return (
              <Card className='Card' key={element.id}>
                <NavLink to={`/cart/${element.id}`} >
                <Card.Img variant="top" src={element.imgdata} className='card_img' />
                </NavLink>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : ₹{element.price}
                   </Card.Text>
                   <div>
                    <p>Rating : {element.rating}</p>
                   </div>
                   <div className='addtocart_btn'>
                  <Button variant="primary"  onClick={()=>senDatatoCart(element)} >Add To Cart</Button>
                   </div>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards