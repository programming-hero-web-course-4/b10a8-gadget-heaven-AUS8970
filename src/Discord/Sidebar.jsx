// const categories = [
//   "All Products",
//   "Laptops",
//   "Phones",
//   "Accessories",
//   "Smart Watches",
//   "MacBooks",
//   "iPhones",
// ];

// const Sidebar = ({ onSelect }) => {
//   function handleSelect(category) {
//     if (category === "All Products") onselect("all");
//     onSelect(category.toLowerCase());
//   }

//   return (
//     <div className="w-1/5">
//       <ul className="space-y-2 p-4 bg-gray-200 rounded-3xl">
//         {categories.map((category, i) => (
//           <li
//             key={i}
//             className="btn rounded-full block w-full mx-auto"
//             onClick={() => handleSelect(category)}
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;