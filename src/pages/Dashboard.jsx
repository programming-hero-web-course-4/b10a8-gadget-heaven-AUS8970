import {Helmet} from "react-helmet-async";
import Haeding from "../components/Haeding";
import {NavLink} from "react-router-dom";

const Dashboard = () => {

  const list = {
    name: 'Cart',
    name: 'Wishlist'
  }

  return (
    <div>
      <Helmet>
        <title> Gadget Heaven | Dashboard </title>
      </Helmet>
      <div className="bg-[#9538E2] text-white py-7">
        <Haeding
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className="">
          {list.map(li => (
            <NavLink to={`${li.name}`} className={({ isActive }) => `btn rounded-full ${isActive ? 'bg-[#9538E2] text-white': 'border-2 border-white bg-white text-black'}`}>
            <button className=""> {li.name} </button>
          </NavLink>
          ))}
          
          {/* <NavLink to='/wishlist' className={({ isActive }) => `btn rounded-full ${isActive ? 'bg-[#9538E2] text-white': 'border-2 border-white bg-white text-black'}`}>
            <button className=""> Wishlist </button>
          </NavLink> */}
        </div>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            {/* <h2 className="text-2xl">Books I read: {readList.length}</h2> */}
            {/* {readList.map((book) => (
              // <Book key={book.bookId} book={book}></Book>
            ))} */}
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl">My wish list</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
    // <NavLink
    //   key={category.category}
    //   to={`/category/${category.category}`}
    //   role="tab"
    //   className={({ isActive }) =>
    //     `tab px-7 h-14 text-xl font-semibold rounded-full ${
    //   isActive || (category.category === "All Product" && location.pathname === "/")
    //   ? 'bg-[#9538E2] text-white'
    //   : 'bg-[#09080F0D] text-gray-500'
    //   }`
    // }
    // >
    //   {category.category}
    // </NavLink>
  );
};

export default Dashboard;
