import Spinner from './assets/spinner.gif';

const Spin = () => {
  return (
    <div className="w-100 mt-20">
      <img width={180} className="mg-auto" src={Spinner} alt="loading" />
    </div>
  );
};

export default Spin;
