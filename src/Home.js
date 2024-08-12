import Conf from "./Assets/door1.jpg"

export default function Home() {

    return(
        <div className="homePg">
            <div className="Nav">
            <div className="nav1 col-lg-12">
                <div className="navLogo">
                    <h3>HuzBar</h3>
                </div>
                <div className="features">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Destinations</a>
                </div>
                <div className="srch">
                    <section>
                        <i class="fa-regular fa-user"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </section>
                    <p className="book">Booking</p>
                </div>
            </div>
            <div className="nav2">
                <div className="nav2-location">
                    <div className="sect1">
                        <div className="lct">
                            <a href="">
                                <i class="fa-solid fa-location-dot"></i>
                            </a> 
                            <p>Bali</p> 
                        </div> 
                        <div>
                        <i class="fa-solid fa-calendar"></i>
                        <i class="fa-solid fa-house"></i>
                        </div>                
                    </div>
                    <div className="sect2">
                        <p>We are premier hotel booking <br />
                           service that caters to the discerning <br />
                           traveler in search of luxury and 
                           sophistication
                        </p>
                    </div>

                </div>
                <div className="nav2-feedback">
                    <p>Your Passport to <br /> Unforgettable Suites</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className="feedback2">
                        <p>Book your <br />
                            stay <br />
                             <span>
                                <i class="fa-solid fa-arrows-to-dot"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="nav2-conf">
                    <div className="one">
                        <div>
                            <i class="fa-solid fa-suitcase-rolling"></i>
                            <p>Booking <br />
                               is confirmed!
                            </p>
                        </div>
                        <div>
                            <p>*</p>
                        </div>
                        <div className="">
                            <img className="d1" src={Conf} alt="Room booked" />
                        </div>
                    </div>
                    <div className="two">
                        <div className="two1">
                            <p>Check In</p>
                            <p>12.08.2024</p>
                            <p>Check Out</p>
                            <p>15.08.2024</p>
                            <p>Guest</p>
                            <p>3 people</p>
                            <p>Add to Calendar </p>
                        </div>
                        <div className="two2">
                        <i class="fa-brands fa-apple"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-solid fa-calendar-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav3">
                <section className="nav3-left">
                    <p>* Book Perfect Stay <br />
                        For Your Vacation
                    </p>
                </section>
                <section className="nav3-right">

                </section>
            </div>
        </div>
        </div>
    )
}