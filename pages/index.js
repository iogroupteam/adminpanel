import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Home from '../components/home/index';
const index = () => {
  return (
    <section>
      <div>
        <Header />
        <div className="w-full pl-12">
          <div className="grid grid-cols-12">
            <div>
              <SideBar />
            </div>
            <div className="col-span-11 ">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
