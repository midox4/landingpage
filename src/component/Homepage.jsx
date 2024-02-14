
// const Homepage = () => {
//   return (
//     <div className="w-full h-60 flex md:flex-row flex-col-reverse justify-center">
//         <div className="w-full md:w-1/2 flex justify-center items-center bg-red-500">
//          <p className="text-2xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex libero illo nam quod similique a ea reprehenderit saepe, exercitationem odit.</p>
//         </div>
//          <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-600">
//              <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" className="h-60"></img>
//           </div>
//           </div>
//      )
// }

// export default Homepage

const Homepage = () => {
    return (
      <div className="w-full h-60 flex md:flex-row flex-col-reverse justify-center">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-red-500">
          <p className="text-2xl font-bold text-center md:w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex libero illo nam quod similique a ea reprehenderit saepe, exercitationem odit.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-600">
          <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" className="h-60" alt="placeholder"></img>
        </div>
      </div>
    );
  }
  
  export default Homepage;
  
  