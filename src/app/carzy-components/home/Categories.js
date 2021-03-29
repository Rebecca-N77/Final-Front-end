import React, { useEffect, useState } from 'react';
import Classes from './home.module.css';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const respond = await fetch('http://localhost:8000/api/categories');
    const result = await respond.json();
    setCategories(result.data);
    console.log(result);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={Classes.center}>
      {categories.map((cat, cKey) => (
        <div key={cKey} className={Classes.container}>
          <Link
            to={{
              pathname: `/carzy-shop/${cat.id}`,
            }}
          >
            <img
              src={`http://localhost:8000/storage/images/${cat.image}`}
              //{cat.image}
              alt='Avatar'
              className={Classes.image}
              style={{ width: '100%', height: '90%' }}
            />
          </Link>
          <div className={Classes.middle}>
            <div className={Classes.text}>{cat.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// export class Categories extends Component {
//   state = {

//   }
//   render() {
//     return (
//       <div>
//         <div className={Classes.container}>
//           <img
//             src='https://images.unsplash.com/photo-1616686693609-d8aa8e29b6bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//             alt='Avatar'
//             className={Classes.image}
//             style={{ width: '100%' }}
//           />
//           <div className={Classes.middle}>
//             <div className='text'>XXXX</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Categories;
