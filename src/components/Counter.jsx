const counters = [
  ["ti-check-box", "100", "Projects Completed", "+"],
  ["ti-face-smile", "50", "Happy Clients", "+"],
  ["ti-time", "5", "Years Of Experience", "+"],
  ["ti-desktop", "2", "Million Lines of Code Written", "+"],
];



function Counter() {
  return (
    <section className="counter_wrap bg_gray">
      <div className="container">
        <div className="row">
          {counters.map(([icon, count, label, suffix], idx) => (
            <div className="col-lg-3 col-md-3 col-6" key={label}>
              <div className="box_counter counter_dark text-center animation" data-animation="fadeInUp" data-animation-delay={`0.0${idx + 2}s`}>
                <i className={icon} />
                <h3 className="counter_text"><span className="counter">{count}</span>{suffix}</h3>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
