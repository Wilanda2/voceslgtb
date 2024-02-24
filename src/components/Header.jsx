import { Route, Routes } from "react-router-dom"

function Header() {


  return (
    <header className="header">
        <img src="public/Logo_Voces.png" alt="Logo de Voces LGTB de Madrid"/>
        <h1>Voces LGTB de Madrid</h1>
        <nav className="menu">
            <ul className="menu__ul">
              <Routes>
                <>
                  <Route path= "/quienes-somos" element= {
                    <li className="menu__ul--li red">Quiénes somos</li>
                  } />
                  <Route path= "/galeria" element= {
                    <li className="menu__ul--li orange">Galería</li>
                  } />
                  <Route path= "/donde-estamos" element= {
                    <li className="menu__ul--li yellow">Dónde estamos</li>
                  } />
                  <Route path= "/canta-con-nosotres" element= {
                    <li className="menu__ul--li green">Canta con nosotres</li>
                  } />
                  <Route path= "/contacto" element= {
                    <li className="menu__ul--li blue">Contacto</li>
                  } />
                  <Route path= "/donaciones" element= {
                    <li className="menu__ul--li purple">Donaciones</li>
                  } />
                </>
              </Routes>
            </ul>
        </nav>
    </header>

  )
}

export default Header