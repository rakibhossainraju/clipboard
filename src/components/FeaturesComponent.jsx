export const FeaturesComponent = () => {
  return (
    <>
      <section id="feature">
        <div className="section-container px-10 py-6 md:py-16">
          <div className="flex-center gap-10 max-md:flex-col">
            {/*Image*/}
            <div className="md:w-1/2">
              <img src="/images/image-computer.png" alt="computer" />
            </div>

            {/*Items Container*/}
            <div className="flex flex-col gap-12 text-xl md:pl-16 md:text-left">
              {featureContents.map(({ name, description }) => (
                <div key={name}>
                  <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                    {name}
                  </h5>
                  <p className="mx-auto max-w-md text-grayishBlue">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="access">
        <div className="section-container my-10 px-5 md:my-24">
          <h3>Access Clipboard Anywhere</h3>
          <p className="mx-auto mb-14 max-w-3xl text-center text-xl leading-9 text-grayishBlue">
            Whether {"you're"} on the go, or at your computer, you can access
            all your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="/images/image-devices.png"
            alt="device"
            className="mx-auto"
          />
        </div>
      </section>
      <section id="supercharge">
        <div className="section-container my-20 px-5">
          <h3>Supercharge your workflow</h3>
          <p className="mx-auto mb-10 max-w-3xl text-center text-xl leading-9 text-grayishBlue">
            Whether {"you're"} on the go, or at your computer, you can access
            all your Clipboard snippets in a few simple clicks.
          </p>
          {/*Items Container*/}
          <div className="flex-center justify-between gap-12 max-md:flex-col">
            <div className="flex flex-col items-center gap-5">
              <img src="/images/icon-blacklist.svg" alt="" />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Create Blacklist
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web-address,
                application and more
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img src="/images/icon-preview.svg" alt="" />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Sneak Preview
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web-address,
                application and more
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img src="/images/icon-text.svg" alt="" />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Plain Text Snippets
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web-address,
                application and more
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const featureContents = [
  {
    name: "Quick Search",
    description:
      "Easily search your snippets by content, category, web-address,application and more.",
  },
  {
    name: "iCloud Sync",
    description: "Instantly saves and sync snippets across all you devices.",
  },
  {
    name: "Completely History",
    description:
      "Retrieve any snippets from the first moment you started using the app",
  },
];
