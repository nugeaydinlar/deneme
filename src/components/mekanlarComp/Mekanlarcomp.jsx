import React from 'react'
import './mekanlarComp.css';

function Mekanlarcomp() {
  return (
    <div className="mekanlarComp">
         <div>
         <div class="banner d-flex align-items-center">
                <div class="banner-left">
                    <label class="switch d-flex">
                        <input id="toggle-theme" type="checkbox"></input>
                      
                    </label>
                    <h1 className='mekanlar__title'>Atlas'la Görünürlüğünüzü Arttırın</h1>
                    <div class="inner-desc">
                        <p className="mekanlarContent">Yeni müşterilere ulaşabilmek ister misiniz? Sadece kendi şehrinizdekiler değil, artık diğer şehirlerdeki yüzlerce kullanıcı da mekanınızdan haberdar olabilecek.<br></br><br></br>
                        Atlas sayesinde hayalinizdeki tasarımlara sahip olabilir, işletmenize uygun araçlarımız ile ihtiyaçlarınızı karşılayabilirsiniz.<br></br><br></br> Nasıl mı? Duyuru panosu, QR menü sistemi, Etkinlik takvimi gibi
                        eklentiler ile kendi sitenizi oluşturun. Bu sayede işletmenizi dijital platforma kolayca taşıyın!
                        </p>
                         <div className="mekanlarBtn">
                         <button type="submit" class="bn632-hover bn24">Katıl </button>
                         </div>
                        
                    </div>
               
              
                </div>
                <div class="banner-right d-flex">
                    <div class="family">
                        <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" class="img-fluid"></img>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" class="img-fluid"></img>
                        <div class="banner-right-inner">
                            <h2>Isparta</h2>
                            <span>Kafeler </span>
                   
                        </div>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" class="img-fluid"></img>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" class="img-fluid"></img>
                    </div>
                    <div class="sale">
                        <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" class="img-fluid"></img>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" class="img-fluid"></img>
                        <div class="banner-right-inner">
                            <h2 className='mekanlarSliderTitle'>Isparta</h2>
                            <span>Restoranlar</span>
                    
                        </div>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" class="img-fluid"></img>
                        <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" class="img-fluid"></img>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Mekanlarcomp