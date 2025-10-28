import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white shadow rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-medium text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;