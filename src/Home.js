import Conf from "./Assets/door1.jpg"

export default function Home() {

    return(
        <div className="homePg">
            <div className="Nav">
            <div className="nav1 col-lg-12">
                <div className="navLogo">
                    <h1>HuzBar</h1>
                </div>
                <div className="features">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Destinations</a>
                </div>
                <div className="srch">
                    <section>
                        <a href=""><i class="fa-regular fa-user"></i></a>
                        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                    </section>
                    <a href="" className="book ft"><p >Booking</p></a>
                </div>
            </div>
            <div className="nav2">
                <div className="nav2-location">
                    <div className="sect1">
                        <div className="lct">
                            <a href="">
                                <i class="fa-solid fa-location-dot"></i>
                                <p className="ft sm">Bali</p>
                            </a>  
                        </div>
                        <div>
                            <a href=""><i class="fa-solid fa-calendar"></i></a>
                            <a href=""><i class="fa-solid fa-house"></i></a>
                        </div>                
                    </div>
                    <div className="sect2">
                        <p className="cl">We are premier hotel booking <br />
                           service that caters to the discerning <br />
                           traveler in search of luxury and 
                           sophistication
                        </p>
                    </div>

                </div>
                <div className="nav2-feedback">
                    <p className="cl">Your Passport to <br /> <span className="bold">Unforgettable</span> Suites <br /> & Hotel</p>
                    <div className="feedback2">
                        <a href="">
                            <p>Book your <br />
                                stay <br />
                                <span>
                                    <i class="fa-solid fa-arrows-to-dot"></i>
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="nav2-conf">
                    <div className="one">
                        <div>
                            <i class="fa-solid fa-suitcase-rolling"></i>
                            <p className="ft">Booking <br />
                               is confirmed!
                            </p>
                        </div>
                        <div>
                            <p className="ft lg">*</p>
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
                        <a href=""><i class="fa-brands fa-apple"></i></a>
                        <a href=""><i class="fa-brands fa-google"></i></a>
                        <a href=""><i class="fa-solid fa-calendar-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav3">
                <section className="nav3-left">
                    <p className="cl">* Book Perfect Stay <br />
                        For Your Vacation
                    </p>
                </section>
                <section className="nav3-right">
                    <div className="right1">
                        <img className="d2" src={Conf} alt="" />
                        <section>
                            <i>Your stay:</i>
                            <i>Bali</i>
                            <i>Directions: </i>
                            <i>Ubuntu strt</i>
                        </section>
                    </div>
                    <div className="right2">
                        <a className="pay" href="">
                            <i class="fa-brands fa-apple"></i>
                             Pay
                        </a>
                        <p>Apple Pay</p>
                        <a className="cfm" href="">Confirmed</a>
                    </div>
                    <div className="right3">
                        <a className="details" href="">Booking details</a>
                        <a className="info" href="">Edit information</a>
                    </div>
                </section>
            </div>
        </div>
        </div>
    )
}