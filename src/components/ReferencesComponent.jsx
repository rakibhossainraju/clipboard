export const ReferencesComponent = () => {
  return (
    <>
      <section id="references">
        <h3 className="mt-16 text-center">Companies who trust us.</h3>
        <div className="mx-auto my-20 flex max-w-6xl items-center justify-between gap-16 px-10 max-sm:flex-col">
          {referencesImages.map((referencesImage) => (
            <img src={referencesImage} alt="" key={referencesImage} />
          ))}
        </div>
      </section>
      <section id="hero">
        <div className="section-container mb-5 px-10 pt-16 md:mb-20">
          <h3 className="text-3xl">Clipboard for iOS and MacOS</h3>
          <p className="text-grayishBLue mx-auto mb-10 max-w-3xl text-xl md:mb-14">
            Clipboard allows you to track and organize everything you copy.
            Instantly access you clipboard on all your devices.
          </p>

          {/*Button Container*/}
          <div className="button-container">
            <a
              href="#"
              className="rounded-full bg-strongCyan p-4 px-10 text-center text-white shadow-lg duration-200 hover:opacity-80 "
            >
              Download for ios
            </a>
            <a
              href="#"
              className="rounded-full bg-lightBlue p-4 px-10 text-center text-white shadow-lg duration-200 hover:opacity-80"
            >
              Download for mac
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
const referencesImages = [
  "/images/references/logo-google.png",
  "/images/references/logo-hp.png",
  "/images/references/logo-ibm.png",
  "/images/references/logo-microsoft.png",
  "/images/references/logo-vector-graphics.png",
];
