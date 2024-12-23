import { About, Form, Header, Projects, Footer, Carousel } from "./Component";

function App() {
  return (
    <>
      <Header />
      <div className=" bg-gray-900 flex justify-center">
      <Carousel />
    </div>
      <h1 id="about" className="text-center text-4xl text-white bg-slate-900">
        About team
      </h1>
      <div className="flex w-full flex-wrap">
        <About
          img={"https://media.wired.com/photos/593261cab8eb31692072f129/master/w_1600,c_limit/85120553.jpg"}
          name={"ANIMAL"}
          details={"Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. "}
        />
        <About name={"Birds"} 
          img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pnF7etZJ935YUBk7J5UkpbJmniptYNjwxSen4-nPIARJLGnzF9qJj-kVbfYWi9rugx1XoLV-wtinLEMFRd2pjA"}
          details={"Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."}
        />
        <About name={"Insects"} 
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2evEJ7kqOFU_oqmCB6clDUGdEbEP8N2gV5MKgeD5VwNA2lYewxdM8IFmfCtDf8cCKDH9JUgV2vJcKzUZ8At_v3Q"}
          details={"Insects are hexapod invertebrates of the class Insecta. They are the largest group within the arthropod phylum. Insects have a chitinous exoskeleton, a three-part body, three pairs of jointed legs, compound eyes, and a pair of antennae"}
        />
      </div>
      
      <h1 id="projects" className=" bg-slate-900 text-4xl text-center text-white uppercase hover:underline">
        Our Projects
      </h1>
      <div className=" bg-slate-900 w-full p-3 flex items-center justify-evenly flex-wrap">
        <Projects
        img={"https://media.licdn.com/dms/image/D5612AQFJ-aNtL0ODJw/article-cover_image-shrink_600_2000/0/1679422597271?e=2147483647&v=beta&t=BQVHkjmUhUBaY-rvHIVrQ8AZqolbed4GKB_r4qCJwmE"}
          name={"Project XYZ"}
          details={
            "Seamless integration of new features like contact forms and live chat"
          }
        />
        <Projects
        img={"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces"}
          name={"Website Redesign for XYZ Corp"}
          details={
            "We worked on a complete redesign of XYZ Corp's website, enhancing the user experience, updating the UI/UX, and improving the site's responsiveness."
          }
        />
        <Projects
        img={"https://www.techmango.net/wp-content/uploads/2022/04/mobile-app-development.png"}
          name={"Mobile App Development for ABC Inc."}
          details={
            "We developed a cross-platform mobile application for ABC Inc., allowing them to reach a larger audience and improve user engagement with features such as real-time notifications and GPS tracking."
          }
        />
        <Projects
          img={"https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png"}
          name={"E-Commerce Platform for ShopEase"}
          details={
            "Designed and developed a fully functional e-commerce platform for ShopEase, featuring seamless product browsing, shopping cart integration, and secure checkout process."
          }
        />
        <Projects
          img={"https://www.scnsoft.com/crm/building-custom-crm.png"}
          name={"Custom CRM System for Business Solutions"}
          details={
            "Developed a custom CRM system to help Business Solutions track customer interactions, manage sales pipelines, and streamline customer support processes."
          }
        />
        <Projects
          name={"Social Media Campaign for Global Marketing"}
          img={"https://media.sproutsocial.com/uploads/2022/09/Global-social-media-marketing-Final.svg"}
          details={
            "We designed and implemented a social media marketing campaign for Global Marketing to increase brand awareness and engagement across various social platforms."
          }
        />
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
