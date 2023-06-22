import React, { useState } from 'react';
import Accordion from './Accordian';
import gun_icon from '../images/gub.svg'
import tank_icon from '../images/tank.svg'
import armour_icon from '../images/armour.svg'

const Weapons = ({ weapon_view }) => {

  const [accordionState, setAccordionState] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false
  });

  const toggleAccordion = (accordionKey) => {
    setAccordionState((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key, value]) => [key, key === accordionKey ? !value : false])
      )
    }));
  };
  
    return(
      <div className={`${!weapon_view && "hidden"} w-full sm:flex flex-col sm:gap-3 px-4 sm:mb-0 mb-2`}>
        <p className=' font-Orbitron mx-auto text-xl'>Weapons</p>
        <Accordion title="Gun" content="      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error enim sunt sed tempore necessitatibus voluptates qui vel atque in." toggleAccordion={() => toggleAccordion('accordion1')} icon={gun_icon} price={10000} isOpen={accordionState.accordion1} />
        <Accordion title="Tank" content="      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error enim sunt sed tempore necessitatibus voluptates qui vel atque in." toggleAccordion={() => toggleAccordion('accordion2')} icon={tank_icon} price={10000} isOpen={accordionState.accordion2} />
        <Accordion title="Armour" content="      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error enim sunt sed tempore necessitatibus voluptates qui vel atque in." toggleAccordion={() => toggleAccordion('accordion3')} icon={armour_icon} price={10000} isOpen={accordionState.accordion3} />
      </div>
    );
};

export default Weapons;