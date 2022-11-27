import React from 'react'
import './partner.css';
function Partner() {
  return (
    <div className="partner__container">
        <div className="partner__titleContainer">
         <div className="partner__mainTitle">
            <h3>İş ortağımız olun</h3>
          </div>
        </div>
  
        <div className="partner__image">

        </div>
        <div className="partner__textBox">
            <div className="textBox__title">
                <p className='textBox__mainTitle'>Hemen katılın, Atlas ile görünürlüğünüzü arttırmaya başlayın</p>
            </div>
            <div className='partner__content'>
                <p className='content__text'>
                    Yeni müşterilere ulaşabilmek ister misiniz? Sadece kendi şehrinizdekiler değil, artık diğer şehirlerdeki yüzlerce kullanıcı da mekanınızdan haberdar olabilecek.<br></br> <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quo sapiente voluptatibus officia, 
                    obcaecati placeat minima pariatur tenetur culpa repellendus?
                </p>

            </div>
            <div className="textBox__btnContainer">
                <a className="custom-btn btn-16">Başlayalım</a>
            </div>

        </div>

    </div>
  )
}

export default Partner