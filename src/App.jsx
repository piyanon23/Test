import "./App.css";
import PhotoImg from "./assets/photo1-2x.png";
import PhotoImg2 from "./assets/photo2.png";

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        {/* title1 */}
        <div className="relative">
        <div className={ImageTwClass.BgImage1Line1} />
         {/* plus icon */}
         <div className="absolute  xl:left-[-100rem] md:left-[4rem] md:top-[17rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#f9ceff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke=" #5E3DB3"
              className="absolute w-6 h-6 left-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <img src={PhotoImg} className={ImageTwClass.Image_1} />

          {/* title1 section1 */}
          <div className={ContainerTwClass.Section1}>
            <div className="ml-5" />
            <div className="">
              <p className={FontTwClass.HeadTitle}>ATHLETS</p>
              <div className="flex space-x-3">
                <span className={FontTwClass.fontIdSection}>
                  01
                  <div className={FontTwClass.borderLineBottom} />
                </span>

                <span className={FontTwClass.fontNameSection}>CONNECTION</span>
              </div>

              <p className={FontTwClass.fontDescriptionSection}>
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </div>
          </div>

          {/* title1 section2 */}
          <div className={ContainerTwClass.Section2}>
            <div className="mr-5" />
            <div className="">
              <div className="flex space-x-3">
                <span className={FontTwClass.fontIdSection}>
                  02
                  <div className={FontTwClass.borderLineBottom} />
                </span>

                <span className={FontTwClass.fontNameSection}>
                  COLLABORATION
                </span>
              </div>
              <p className={FontTwClass.fontDescriptionSection}>
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </div>
          </div>

          {/* title1 section3 */}
          <div className={ContainerTwClass.Section3}>
            <div className="ml-5" />
            <div className="">
              <div className="flex space-x-3">
                <span className="text-black text-[18px] mt-2">
                  03
                  <div className={FontTwClass.borderLineBottomWhite} />
                </span>
                <span className="text-[#C2C2C2] text-[36px] ">GROWTH</span>
              </div>
              <p className={FontTwClass.fontDescriptionSectionWhite}>
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </div>
          </div>
        </div>

        {/* title2 */}
        <div className="relative">

          {/* plus icon */}
          <div className="absolute xl:left-[65rem] xl:top-[9rem] md:left-[35rem] md:top-[10rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#5E3DB3"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#f9ceff"
              className="absolute w-6 h-6 left-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute xl:left-[96rem] xl:top-[25rem] md:left-[100rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#5E3DB3"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
         
          </div>

          <div className={ImageTwClass.BgImage2Line1} />
          <div className={ImageTwClass.BgImage2Line2} />
          <img src={PhotoImg2} className={ImageTwClass.Image_2} />

          {/* title2 section1 */}
          <div className={ContainerTwClass.Section4}>
            <div className="mt-24  xl:ml-[20rem] md:ml-10">
              <p className={FontTwClass.HeadTitle}>PLAYERS</p>
              <div className="flex space-x-3 ">
                <span className={FontTwClass.fontIdSection}>
                  01
                  <div className={FontTwClass.borderLineBottom} />
                </span>

                <span className={FontTwClass.fontNameSection}>CONNECTION</span>
              </div>
              <p className={FontTwClass.fontDescriptionSection}>
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </div>

            <div className="" />
          </div>

          {/* title2 section2 */}
          <div className={ContainerTwClass.Section2}>
            <div className="mt-5 xl:ml-[20rem] md:ml-10">
              <div className="flex space-x-3">
                <span className={FontTwClass.fontIdSection}>
                  02
                  <div className={FontTwClass.borderLineBottom} />
                </span>

                <span className={FontTwClass.fontNameSection}>
                  COLLABORATION
                </span>
              </div>
              <p className={FontTwClass.fontDescriptionSection}>
                Work with recruiter to increase your chances of finding talented
                athlete.
              </p>
            </div>

            <div className="" />
          </div>

          {/* title2 section3 */}
          <div className={ContainerTwClass.Section6}>
            <div className="mt-5 xl:ml-[20rem] md:ml-10">
              <div className="flex space-x-3">
                <span className={FontTwClass.fontIdSection}>
                  03
                  <div className={FontTwClass.borderLineBottomWhite} />
                </span>

                <span className={FontTwClass.fontNameSection}>GROWTH</span>
              </div>
              <p className={FontTwClass.fontDescriptionSectionWhite}>
                Save your time, recruit proper athlets for your team.
              </p>
            </div>

            <div className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const ImageTwClass = {
  Image_1:
    "absolute xl:w-[678px] xl:h-[950px] md:w-[498px] md:h-[699px] sm:w-[200px] sm:h-[281px] xl:left-[12rem] md:left-[-9rem] xl:mt-[-5rem] md:mt-40 sm:left-[8rem] top-[10rem]",
  Image_2:
    "absolute xl:w-[991px] xl:h-[815px] md:w-[991px] md:h-[568px] xl:left-[40%] md:left-[40%] xl:mt-5 md:mt-[6rem]",
    BgImage1Line1:
    "absolute  bg-[#5E3DB3] xl:left-[-100rem] md:w-[5px] md:h-[300px] md:left-[20%] md:top-[18rem]  rotate-45",
    BgImage2Line1:
    "absolute  bg-[#5E3DB3] xl:w-[5px] xl:h-[500px] md:w-[5px] md:h-[300px] xl:left-[60%] md:left-[75%] xl:top-[20rem] md:top-[20rem]  rotate-45",
  BgImage2Line2:
    "absolute  bg-[#5E3DB3] xl:w-[5px] xl:h-[300px] left-[82%]  top-[6rem]  rotate-45",
};
const FontTwClass = {
  HeadTitle:
    "text-[#E7E7E7] text-[90px] xl:text-[90px] md:text-[90px] sm:text-[50px]",
  fontIdSection: "text-[#C2C2C2] text-[18px] mt-2",
  borderLineBottom: "bg-[#603EBE] w-[22px] h-[5px] rounded-xl",
  borderLineBottomWhite: "bg-white w-[22px] h-[5px] rounded-xl",
  fontNameSection: "text-[#C2C2C2] text-[36px]",
  fontDescriptionSection: "text-[#000] text-[20px] xl:w-[80%] mr-10",
  fontDescriptionSectionWhite: "text-white text-[20px] xl:w-[80%] mt-5 mr-10",
};

const ContainerTwClass = {
  Section1: "grid grid-cols-2 h-[400px]",
  Section2: "grid grid-cols-2 h-[300px] bg-[#F5F4F9] content-center",
  Section3: "grid grid-cols-2 h-[250px] bg-[#5E3DB3] content-center",
  Section4: "grid grid-cols-2 h-[450px] content-center",
  Section5: "grid grid-cols-2 h-[300px] bg-[#F5F4F9] content-center",
  Section6: "grid grid-cols-2 h-[250px] bg-[#090C35] content-center",
};


