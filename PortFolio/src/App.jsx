import { About, Contact, Form, Header, Projects,Footer } from "./Component";

function App() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <h1 className="text-5xl text-center text-cyan-600 uppercase hover:underline">
        Projects
      </h1>
      <div className="w-full p-3 flex items-center justify-evenly flex-wrap">
        <Projects name={"PortFolio"} />
        <Projects name={"Spotify"} />
        <Projects name={"CSS"} />
      </div>
      <Form />

      <Footer />
    </>
  );
}

export default App;
