import {
  About,
  Form,
  Header,
  Projects,
  Footer,
  Carousel,
  Plans,
} from "./Component";

function App() {
  return (
    <>
      <Header />
      <div className=" bg-gray-900 flex justify-center">
        <Carousel />
      </div>

      <h1
        id="projects"
        className=" bg-slate-900 text-4xl text-center text-white  "
      >
        Our <span className="text-cyan-500">Services</span>
      </h1>
      <div className=" bg-slate-900 w-full p-3 flex items-center justify-evenly flex-wrap">
        <Projects
          img={
            "https://i.pinimg.com/1200x/96/4b/bd/964bbd9aaa6f4b1104ac9951a2a3795f.jpg"
          }
          name={"Weight Lifting"}
        />
        <Projects
          img={
            "https://i.pinimg.com/1200x/f0/64/4e/f0644e4ba5234d4454707c1841f13020.jpg"
          }
          name={"Running"}
        />
        <Projects
          img={
            "https://i.pinimg.com/1200x/04/0a/9f/040a9ff96a0c6490c19cd0753a7a4ea4.jpg"
          }
          name={"Strength Training"}
        />
        <Projects
          img={
            "https://i.pinimg.com/1200x/ca/cc/05/cacc0534ae93a76083bd46a127f1e30c.jpg"
          }
          name={"Posing"}
        />
        <Projects
          img={
            "https://i.pinimg.com/1200x/ee/1f/54/ee1f54976bcc568d0390abe2207fb14d.jpg"
          }
          name={"Fat Loss"}
        />
        <Projects
          name={"Arm Training"}
          img={
            "https://i.pinimg.com/1200x/bf/32/04/bf3204d0d2c272209baa2ef1b919c4f2.jpg  "
          }
        />
      </div>
      <h1
        id="plans"
        className="bg-slate-900 text-white text-4xl text-center p-4"
      >
        Our <span className="text-cyan-500">Plans</span>
      </h1>
      <div className="bg-slate-900 text-white flex flex-wrap justify-center p-5">
        <Plans name="1-Month" plan=" ₹3000" details="Basic" />
        <Plans name="6-Month" plan="₹12000" details="Pro" />
        <Plans name="12-Month" plan="₹20000" details="Premium" />
      </div>

      <h1 id="about" className="text-center text-4xl text-white bg-slate-900">
        Pro <span className="text-cyan-500">Member</span>
      </h1>
      <div className="flex w-full flex-wrap">
        <About
          img={
            "https://i.pinimg.com/1200x/00/2a/4a/002a4a88abdff2a6e95fc43956981c3d.jpg"
          }
          name={"J.Cutler"}
        />
        <About
          name={"Ronnie Coleman"}
          img={
            "https://i.pinimg.com/1200x/b8/a9/80/b8a9808c66499ce0b7e54590a6826c98.jpg"
          }
        />
        <About
          name={"Arnold Schwarzenegger"}
          img={
            "https://i.pinimg.com/1200x/d2/f2/13/d2f213052067becaab0e0bff7ffb093e.jpg"
          }
        />
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
