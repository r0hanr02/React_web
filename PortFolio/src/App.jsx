import { About,  Form, Header, Projects,Footer } from "./Component";

function App() {
  return (
    <>
      <Header />
      <About />
      {/* <Contact /> */}
      <h1 className=" bg-slate-900 text-4xl text-center text-white uppercase hover:underline">
        Our Projects
      </h1>
      <div className=" bg-slate-900 w-full p-3 flex items-center justify-evenly flex-wrap">
        <Projects name={"Project XYZ"} details={"Seamless integration of new features like contact forms and live chat"} />
        <Projects name={"Website Redesign for XYZ Corp"} details={"We worked on a complete redesign of XYZ Corp's website, enhancing the user experience, updating the UI/UX, and improving the site's responsiveness."}/>
        <Projects name={"Mobile App Development for ABC Inc."} details={"We developed a cross-platform mobile application for ABC Inc., allowing them to reach a larger audience and improve user engagement with features such as real-time notifications and GPS tracking."}/>
        <Projects name={"E-Commerce Platform for ShopEase"} details={"Designed and developed a fully functional e-commerce platform for ShopEase, featuring seamless product browsing, shopping cart integration, and secure checkout process."}/>
        <Projects name={"Custom CRM System for Business Solutions"} details={"Developed a custom CRM system to help Business Solutions track customer interactions, manage sales pipelines, and streamline customer support processes."} />
        <Projects name={"Social Media Campaign for Global Marketing"} details={"We designed and implemented a social media marketing campaign for Global Marketing to increase brand awareness and engagement across various social platforms."}/>
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
