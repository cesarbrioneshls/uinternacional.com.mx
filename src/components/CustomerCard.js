import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold text-center">{customer.title}</p>
    <img
      class="rounded-full p-2 h-50 mx-auto"
      src={customer.customerImage}
      alt={customer.customerName}
    />
    <div className="flex items-center mt-8">
      <div>
        <p>{customer.customerName}</p>
        <p className=" text-center text-sm text-gray-600 mt-2">{customer.customerTitle}</p>
        <p className="mt-6">{customer.content}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
