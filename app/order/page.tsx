
import React from 'react';

interface CheckboxProps {
  label: string;
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

const Order = () => {
  return (
    <div className='flex items-left justify-left'>
      <div>
        <h1>Order Here</h1>
        <div>
          <h2>Main Dish</h2>
          <Checkbox label='Beef Burger' />         
          <Checkbox label="Veggie Burger" />
          <Checkbox label='Turkey Burger' />         
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
          <h2>Sides</h2>
          <Checkbox label='Ketchup' />
          <Checkbox label='BBQ' />
          <Checkbox label='Mayonaise' />
          <Checkbox label='Relish' />
          <Checkbox label='Mustard' />
          <Checkbox label='Honey Mustard' />
        </div>
      </div>
    </div>
  );
};

export default Order;

