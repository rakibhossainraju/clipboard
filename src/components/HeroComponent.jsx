export const HeroComponent = () => {
  return (
    <section id="hero">
      <div className="section-container mb-5 px-10 pt-16 md:mb-20">
        <img src="/images/logo.svg" alt="logo" className="mx-auto my-16" />
        <h3>A history of everything you copy</h3>
        <p className="text-grayishBLue mx-auto mb-10 max-w-3xl text-2xl md:mb-14">
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
  );
};
