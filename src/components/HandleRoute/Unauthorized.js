import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <Navbar />
      <section className="md:mt-24 text-center py-10">
        <h1 className="text-xl font-bold">Unauthorized</h1>
        <br />
        <p>You do not have access to the requested page.</p>
        <div className="">
          <button className="text-primary underline" onClick={goBack}>
            Go Back
          </button>
        </div>
      </section>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Unauthorized;
