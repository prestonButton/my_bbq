
import Link from 'next/link';
import React from 'react';

interface CheckboxProps {
  label: string;
}

interface RadioButtonProps {
  label: string;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer flex items-left">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <span className="label-text text-white self-left">{label}</span>
      </label>
    </div>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, name }) => {
  return (
    <div className="form-control">
      <label className="custom-checkbox flex items-left cursor-pointer mx-3 my-2">
        <input type="radio" className="hidden" name={name} />
        <span className="checkmark"></span>
        <span className="label-text text-white">{label}</span>
      </label>
    </div>
  );
};

const Order = () => {
  return (
    <div className='h-full bg-black flex flex-col'>
      <div className='flex items-left justify-left'>
        <div>
          <h1>Order Here</h1>
          <div>
            <h2>Main Dish</h2>
            <RadioButton label='Beef Burger' name="mainDish" />         
            <RadioButton label="Veggie Burger" name="mainDish" />
            <RadioButton label='Turkey Burger' name="mainDish" />         
          </div>
          <div>
            <h2>Customize</h2>
            <Checkbox label='Cheese' />
            <Checkbox label='Bacon' />
            <Checkbox label='Tomato' />
            <Checkbox label='Lettuce' />
            <Checkbox label='Onion' />
            <Checkbox label='Mushrooms' />
            <Checkbox label='Pickles' />
          </div>
          <div>
            <h2>Sauces</h2>
            <Checkbox label='Ketchup' />
            <Checkbox label='BBQ' />
            <Checkbox label='Mayonaise' />
            <Checkbox label='Relish' />
            <Checkbox label='Mustard' />
            <Checkbox label='Honey Mustard' />
          </div>
          <div>
            <h2>Main Dish</h2>
            <RadioButton label='Coleslaw' name="side" />         
            <RadioButton label="Fries" name="side" />
            <RadioButton label="No Side" name="side" />
          </div>
        </div>
      </div>
      <Link 
        href='/'
        className='border border-2-white bg-slate-100 rounded-full text-black px-4 py-2 my-8 w-36'
      >
        Order Now →
      </Link>
    </div>
  );
};

export default Order;

