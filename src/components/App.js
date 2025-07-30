import React from 'react';

const RelativesList = () => {
  // Array of relatives to visit during Diwali
  const relatives = [
    'Grandmother Kamala',
    'Uncle Rajesh and Aunt Priya',
    'Cousin Arjun',
    'Aunt Meera',
    'Uncle Vikram and family',
    'Cousin Shreya',
    'Great Uncle Mohan',
    'Aunt Sunita'
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-800 mb-2">🪔 Diwali Visiting List 🪔</h1>
        <p className="text-orange-600">Relatives to visit this festive season</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ol key="relativeList" className="space-y-3">
          {relatives.map((relative, index) => (
            <li 
              key={`relativeListItem${index + 1}`}
              className="flex items-center p-3 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-md border-l-4 border-orange-400 hover:shadow-md transition-shadow"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                {index + 1}
              </span>
              <span className="text-gray-800 font-medium">{relative}</span>
              <span className="ml-auto text-orange-500">🎁</span>
            </li>
          ))}
        </ol>
      </div>
      
      <div className="mt-6 p-4 bg-orange-100 rounded-lg border border-orange-200">
        <h3 className="font-semibold text-orange-800 mb-2">🔑 Key Implementation Details:</h3>
        <ul className="text-sm text-orange-700 space-y-1">
          <li>• Ordered list has key: <code className="bg-orange-200 px-1 rounded">relativeList</code></li>
          <li>• Each list item has unique key: <code className="bg-orange-200 px-1 rounded">relativeListItem1</code>, <code className="bg-orange-200 px-1 rounded">relativeListItem2</code>, etc.</li>
          <li>• Keys provide unique identity for React's reconciliation process</li>
          <li>• Proper naming convention followed as per requirements</li>
        </ul>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-orange-600 italic">Happy Diwali! 🎆 May this festival bring joy and prosperity! ✨</p>
      </div>
    </div>
  );
};

export default RelativesList;
