import React from 'react';
import './AboutUs.css';

const AboutUs = () =>{
	return(
		<div id='aboutus' className='AboutUs'>
			<div>
				<div className='text'>
					<h2>Про нас</h2>
					<h5>У нас немає конкурентів!</h5>
					<p>Ми перші в Україні, хто швидко і в режимі онлайн, 
						підготує для вас позовну заяву в суд для
						оскарження перевищення швидкості руху.
					</p>
				</div>
				<div className='img'>
					<img src={process.env.PUBLIC_URL + '/img/1.png'} alt="1"/>
				</div>
			</div>
			<p>
				<span>Ви зможете <b>абсолютно законно не платити штраф</b> і не допустити, щоб з вас здирали гроші. 
					Згадайте, скільки штрафів за перевищення швидкості ви вже заплатили. 
					А що, якщо ми запропонуємо вам більше не платити? Ми знаємо як правильно це зробити!
				</span>
				<span>Ціна на наші послуги символічна, бо ми прагнемо допомогти кожному водію, без фінансових втрат. 
					Більше того, <b>всього за 50 грн</b> ви отримуєте <b>готовий робочий інструмент</b> для збереження своїх коштів. 
					А вигравши, ви зекономите в рази більшу суму. Кожен розуміє, що це вигідно і правильно.
				</span>
				<span>Тепер ви можете скористатись нашими послугами. 
					Ми йдемо в ногу з часом, тому автоматизували всі процеси за допомогою IT технологій. 
					Швидко, легко і на законних підставах ви <b>уникнете штрафу!</b>
				</span>
			</p>	
		</div>
	)
}

export default AboutUs;