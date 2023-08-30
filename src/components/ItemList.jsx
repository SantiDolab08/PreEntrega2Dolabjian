import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom"

const ItemList = ({ items }) => {
  return (
    <div>
      <h1>anda</h1>
    
      <ul>
        {items.map((item) =>(
            <li key={item.id}>
                <div className="card text-center mb-3" >
                    <Link  to={`/item/${item.id}`}>
                        <img src={item.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p className="card-text">{item.price}</p>
                            <p className="card-text"> {item.category} </p>
                        </div>
                    </Link>
                </div>
            </li>

        ))}
      </ul>
    </div>
  )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ItemList
