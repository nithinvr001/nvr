
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Stats() {
  const CardsData = [{
   CardHeading : 'Years of Experience' , Value: '1 year 5 months', Icon: <FaGithub/>
  }, {
      CardHeading: 'Projects', Value: '5', Icon: <FaLinkedin/>
    }, {
      CardHeading: 'Github stars', Value: '1530', Icon: <FaInstagram/>
    }, {
      CardHeading: 'Happy Clients', Value: '3', Icon: <FaXTwitter/>
   }];

  return (
    <section className="p-3 lg:p-6 text=white">
      <h2 className="text-3xl font-bold lg:py-[40px]">
        <span className="text-green-500">Sta</span>ts
      </h2>
      <div className=" mt-3 lg:mt-0 flex space-x-5 overflow-y-scroll no-scrollbar">
        {CardsData.map((cards) => (
          <div className="card bg-gray-900 w-96 shadow-sm">
            <div className="card-body">
              <span className="text-3xl mx-auto pb-4 text-green-500">{cards.Icon}</span>
              <h2 className="card-title text-xl mx-auto pb-4">{cards.CardHeading}</h2>
              <p className="mx-auto pb-4 text-2xl text-bold">{cards.Value}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
}
