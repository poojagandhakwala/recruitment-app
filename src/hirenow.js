import './hire.modules.css'
import Ahmedabad from './images/ahd.png'
import Banglore from './images/bang.png'
import Chennai from './images/chen.png'
import Delhi from './images/ncr.png'
import Kolkata from './images/kolk.png'
import Mumbai from './images/mumbai.png'

function HireNowPage() {
  const categories=
  [
    {icon:"fa fa-code",category:"Web Developer"},
    {icon:"fa-brands fa-figma",category:"UI/UX Designer"}, 
    {icon:"fa-solid fa-file-invoice-dollar",category:"Accountant"},
    {icon:"fa fa-school",category:"School Teacher"},
    {icon:"fa-regular fa-lightbulb",category:"Engineer"},
    {icon:"fa-regular fa-hospital",category:"Nurse"},
  ]

  const location=
  [
    {img:Ahmedabad,name:"Ahmedabad"},
    {img:Banglore,name:"Banglore"}, 
    {img:Chennai,name:"Chennai"},
    {img:Delhi,name:"Delhi"},
    {img:Kolkata,name:"Kolkata"},
    {img:Mumbai,name:"Mumbai"},
  ]



  return (
    <div>
      <div className='container'>
        <form>
        <div className='search form-group row  justify-content-center my-5'>
          <input type="text" className="form-control search-input col-md-6"
          placeholder='Search by location or job role'/>
          <button className="search-icon btn btn-primary">
            <i className='fa fa-search'
            style={{color:'white'}}/>
          </button>
        </div>
        </form>
      </div>
      
      <div className='container '>
        <div className='row my-5 mx-5 justify-content-center'>
          <h3 className="text-center">By Location</h3>
          {location.map((item,index) =>
            <>
            <div className="col-md-4 px-5 py-2"
            data-aos="fade-zoom-in" data-aos-offset="100" 
            data-aos-easing="ease-in-sine" data-aos-duration="600"  
            >
              <div key={index} className="location card 
              ">
                <div className="arrow-icon">
                  <i className={`fa fa-arrow-right`}/>              
                </div>
                <div className="card-body text-align-center justify-content-center">
                  <div className="card-img">
                    <img src={item.img} alt="city-img"/>
                  </div>
                  <div className='card-title'>
                    <h5>{item.name}</h5>
                  </div>

                </div>
            </div>
            </div>
            </>
          )}
        </div>
      </div>

      <div className='container'>
        <div className='row my-5 mx-3 justify-content-center'
         data-aos="fade-zoom-in" data-aos-offset="200" 
         data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
          <h3 className="text-center mb-3">By Job Role</h3>
          {categories.map((item,index) =>
            <>
            <div className="col-md-4 py-2 px-5">
            <div key={index} className="categories card m-3 justify-content-center">
            <div className='card-body text-center justify-content-center'>            
              <i className={`icon ${item.icon}`}/>
              <div className='card-title'>
                <h5 className="category-name">{item.category}</h5>
              </div>
            </div>
          </div>
          </div>

            </>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default HireNowPage