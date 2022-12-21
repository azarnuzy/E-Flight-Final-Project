import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Missing = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-[60px] md:mt-20 text-center py-10">
        <article>
          <h1 className="text-xl font-bold">Oops!</h1>
          <p>Page Not Found</p>
          <div className="flexGrow text-primary underline">
            <Link to="/">Visit Our Homepage</Link>
          </div>
        </article>
      </section>
      <div className="w-full md:absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Missing;
