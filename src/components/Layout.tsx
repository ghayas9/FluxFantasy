// // import React, { ReactNode, useState } from "react";
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import Footer from "./Footer";
// // import { GiHamburgerMenu } from "react-icons/gi";

// // interface Props {
// //   children?: ReactNode;
// //   onclick?: () => void;
// // }

// // const Layout: React.FC<Props> = ({ children }) => {
// //   const [show, setshow] = useState(false);
// //   return (
// //     <div className="w-full flex px-20" style={{ backgroundImage: `url('/images/bg-home.jpg')` }}>
// //       <title>Flux Fantasy</title>

// //       <div className="hidden sm:block bg-black">
// //         <Sidebar notificationLength={1}  />
// //       </div>
 
// //       {show &&
// //       <div className="">
// //       <Sidebar notificationLength={0} onClick={() => setshow(!show)} />
// //       </div>
// //       }
// //       <div  className="w-full ">
// //         <Header onClick={() => setshow(!show)}/>
// //         <div>{children}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;



// import React, { ReactNode, useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Footer from "./Footer";
// import { GiHamburgerMenu } from "react-icons/gi";

// interface Props {
//   children?: ReactNode;
//   onclick?: () => void;
// }

// const Layout: React.FC<Props> = ({ children }) => {
//   const [show, setshow] = useState(false);
//   return (
//     <div className="w-full flex sm:px-20">
//       <title>Flux Fantasy</title>

//       <div className="hidden sm:block bg-black">
//         <Sidebar notificationLength={1}  />
//       </div>
 
//       {show &&
//       <div className="">
//       <Sidebar notificationLength={0} onClick={() => setshow(!show)} />
//       </div>
//       }
//       <div  className="w-full">
//         <Header onClick={() => setshow(!show)}/>
//         <div>{children}</div>
//       </div>

//       <style jsx>{`
//         @media (min-width: 720px) {
//           .w-full {
//             background-image: url('/images/bg-home.jpg');
//             background-size: cover;
//             background-repeat: no-repeat;
//             background-position: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Layout;


import React, { ReactNode, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  children?: ReactNode;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    // Set the background image on the body
    document.body.style.backgroundImage = "url('/images/bg-home.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    // Clean up the background image when the component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return (
    <div className="w-full flex sm:px-20">
      <title>Flux Fantasy</title>

      <div className="hidden sm:block bg-black">
        <Sidebar notificationLength={1} />
      </div>

      {show && (
        <div className="">
          <Sidebar notificationLength={0} onClick={() => setshow(!show)} />
        </div>
      )}
      <div className="w-full">
        <Header onClick={() => setshow(!show)} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;


