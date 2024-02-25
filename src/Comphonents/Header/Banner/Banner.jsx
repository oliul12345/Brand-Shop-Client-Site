const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?w=740&t=st=1697636280~exp=1697636880~hmac=d9888cdfff5321a4f3292e49ae9a8c88d60211be08ff17e1ecbf96b92b8eabd5)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello You</h1>
            <p className="mb-5">
              Welcome  Our Website. Now you are in the new World. Our Products is qualified for use.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
