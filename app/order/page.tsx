'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

// Define the prop types
interface CheckboxProps {
  label: string;
  onChange: () => void;
}

interface RadioButtonProps {
  label: string;
  name: string;
  onChange: () => void;
}

interface OrderState {
  name: string;
  beef_burger: boolean;
  turkey_burger: boolean;
  veggie_burger: boolean;
  bacon: boolean;
  cheese: boolean;
  lettuce: boolean;
  tomato: boolean;
  onions: boolean;
  mushrooms: boolean;
  pickles: boolean;
  coleslaw: boolean;
  no_side: boolean;
  fries: boolean;
  ketchup: boolean;
  bbq: boolean;
  mayo: boolean;
  mustard: boolean;
  honey_mustard: boolean;
  relish: boolean;
}

// Checkbox and RadioButton components
const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  return (
      <div className="form-control">
        <label className="label cursor-pointer flex items-left">
          <input type="checkbox" className="checkbox checkbox-sm" onChange={onChange} />
          <span className="label-text text-white self-left">{label}</span>
        </label>
      </div>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, onChange }) => {
  return (
      <div className="form-control">
        <label className="custom-checkbox flex items-left cursor-pointer mx-3 my-2">
          <input type="radio" className="hidden" name={name} onChange={onChange} />
          <span className="checkmark"></span>
          <span className="label-text text-white">{label}</span>
        </label>
      </div>
  );
};

// Order component
const Order = () => {
  // State variable
  const [order, setOrder] = useState<OrderState>({
    name: '',
    beef_burger: false,
    turkey_burger: false,
    veggie_burger: false,
    bacon: false,
    cheese: false,
    lettuce: false,
    tomato: false,
    onions: false,
    mushrooms: false,
    pickles: false,
    coleslaw: false,
    no_side: false,
    fries: false,
    ketchup: false,
    bbq: false,
    mayo: false,
    mustard: false,
    honey_mustard: false,
    relish: false,
  });

  // // Function to handle checkbox change
  // const handleCheckboxChange = (property: keyof OrderState) => {
  //   setOrder((prevOrder) => ({
  //     ...prevOrder,
  //     [property]: !prevOrder[property],
  //   }));
  // };

  // Function to handle checkbox change and print it to the console
  const handleCheckboxChange = (property: keyof OrderState) => {
    setOrder((prevOrder) => {
      const newOrder = {
        ...prevOrder,
        [property]: !prevOrder[property],
      };
      console.log('Order state:', newOrder); // Log the updated order state
      return newOrder;
    });
  };

  // Function to handle radio button change
  // const handleRadioButtonChange = (label: string, category: keyof OrderState) => {
  //   setOrder((prevOrder) => ({
  //     ...prevOrder,
  //     [category]: label,
  //   }));
  // };

  const handleRadioButtonChange = (label: string, category: keyof OrderState) => {
    setOrder((prevOrder) => {
      const newOrder: OrderState = {
        ...prevOrder,
        [category]: !prevOrder[category],
      };

      // Set all other radio buttons in the same group to false
      switch (category) {
        case 'beef_burger':
          newOrder.veggie_burger = false;
          newOrder.turkey_burger = false;
          break;
        case 'veggie_burger':
          newOrder.beef_burger = false;
          newOrder.turkey_burger = false;
          break;
        case 'turkey_burger':
          newOrder.beef_burger = false;
          newOrder.veggie_burger = false;
          break;
        case 'coleslaw':
          newOrder.fries = false;
          newOrder.no_side = false;
          break;
        case 'fries':
          newOrder.coleslaw = false;
          newOrder.no_side = false;
          break;
        case 'no_side':
          newOrder.coleslaw = false;
          newOrder.fries = false;
          break;
        default:
          break;
      }

      console.log('Order state:', newOrder); // Log the updated order state
      return newOrder;
    });
  };


  // Function to handle order submission
  const handleOrderSubmit = async () => {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      console.log('Order submitted successfully');
    } else {
      console.error(error);
      console.error('Failed to submit order');
    }
  };

  return (
      <div className="h-full bg-black flex flex-col">
        <div className="flex items-left justify-left mx-24 my-10">
          <div>
            <h1>Order Here</h1>
            <div>
              <h2>Main Dish</h2>
              <RadioButton label="Beef Burger" name="mainDish" onChange={() => handleRadioButtonChange('Beef Burger', 'beef_burger')} />
              <RadioButton label="Veggie Burger" name="mainDish" onChange={() => handleRadioButtonChange('Veggie Burger', 'veggie_burger')} />
              <RadioButton label="Turkey Burger" name="mainDish" onChange={() => handleRadioButtonChange('Turkey Burger', 'turkey_burger')} />
            </div>
            <div>
              <h2>Customize</h2>
              <Checkbox label="Cheese" onChange={() => handleCheckboxChange('cheese')} />
              <Checkbox label="Bacon" onChange={() => handleCheckboxChange('bacon')} />
              <Checkbox label="Tomato" onChange={() => handleCheckboxChange('tomato')} />
              <Checkbox label="Lettuce" onChange={() => handleCheckboxChange('lettuce')} />
              <Checkbox label="Onions" onChange={() => handleCheckboxChange('onions')} />
              <Checkbox label="Mushrooms" onChange={() => handleCheckboxChange('mushrooms')} />
              <Checkbox label="Pickles" onChange={() => handleCheckboxChange('pickles')} />
            </div>
            <div>
              <h2>Sauces</h2>
              <Checkbox label="Ketchup" onChange={() => handleCheckboxChange('ketchup')} />
              <Checkbox label="BBQ" onChange={() => handleCheckboxChange('bbq')} />
              <Checkbox label="Mayonaise" onChange={() => handleCheckboxChange('mayo')} />
              <Checkbox label="Relish" onChange={() => handleCheckboxChange('relish')} />
              <Checkbox label="Mustard" onChange={() => handleCheckboxChange('mustard')} />
              <Checkbox label="Honey Mustard" onChange={() => handleCheckboxChange('honey_mustard')} />
            </div>
            <div>
              <h2>Sides</h2>
              <RadioButton label="Coleslaw" name="side" onChange={() => handleRadioButtonChange('Coleslaw', 'coleslaw')} />
              <RadioButton label="Fries" name="side" onChange={() => handleRadioButtonChange('Fries', 'fries')} />
              <RadioButton label="No Side" name="side" onChange={() => handleRadioButtonChange('No Side', 'no_side')} />
            </div>
          </div>
        </div>
        <button onClick={handleOrderSubmit} className='border border-2-white bg-slate-100 rounded-full text-black px-4 py-2 my-8 w-36'>
          Order Now →
        </button>
      </div>
  );
};

export default Order;