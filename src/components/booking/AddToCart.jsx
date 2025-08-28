import React, { useState } from 'react';
import BookNowModal from './BookNowModal';

const AddToCart = () => {
  const [mainTab, setMainTab] = useState('booking'); // booking or sale
  const [activeTab, setActiveTab] = useState('requests');

  // ----------------- Book Items Data -----------------
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "DJ Ray Vibes", vendor: "Jaydeep", price: 300, image: "/assets/DJProfile.png", inStock: true, type: 'detailed', totalPrice: 500 },
    { id: 2, title: "DJ Ray Vibes", vendor: "Jaydeep", price: 300, image: "/assets/DJProfile.png", inStock: true, type: 'simple' }
  ]);

  const [acceptedItems, setAcceptedItems] = useState([
    { id: 3, title: "DJ Ray Vibes", vendor: "Jaydeep", price: 300, image: "/assets/DJProfile.png", inStock: true },
    { id: 4, title: "DJ Ray Vibes", vendor: "Jaydeep", price: 300, image: "/assets/DJProfile.png", inStock: true }
  ]);

  // ----------------- Sale Items Data -----------------
  const [saleItems, setSaleItems] = useState([
  { id: 'sale1', title: 'Meat', vendor: 'Butcher Shop', price: 1200, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', quantity: 1 },
  { id: 'sale2', title: 'Chairs', vendor: 'Furniture Co', price: 800, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80', quantity: 2 }
  ]);

  const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const tabs = [
    { id: 'requests', label: 'Request Add To Cart' },
    { id: 'accepted', label: 'Accepted' }
  ];

  // Calculate totals dynamically for book items
  const currentItems = activeTab === 'requests' ? cartItems : acceptedItems;
  const subtotal = currentItems.reduce((sum, item) => sum + item.price, 0);
  const securityFee = activeTab === 'accepted' ? 25 : 0;
  const kilometerFee = activeTab === 'accepted' ? 5 : 0;
  const serviceCharges = Math.round(subtotal * 0.1);
  const total = subtotal + securityFee + kilometerFee + serviceCharges;

  // Totals for sale items
  const saleSubtotal = saleItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const saleSecurityFee = saleItems.length > 0 ? 25 : 0;
  const saleKilometerFee = saleItems.length > 0 ? 5 : 0;
  const saleServiceCharges = Math.round(saleSubtotal * 0.1);
  const saleTotal = saleSubtotal + saleSecurityFee + saleKilometerFee + saleServiceCharges;

  // ------------------ Handlers -------------------
  const removeFromCart = (itemId) => {
    if (mainTab === 'book') {
      if (activeTab === 'requests') {
        setCartItems(cartItems.filter(item => item.id !== itemId));
      } else {
        setAcceptedItems(acceptedItems.filter(item => item.id !== itemId));
      }
    } else {
      setSaleItems(saleItems.filter(item => item.id !== itemId));
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setIsBookNowModalOpen(true);
  };

  const handleSaveEdit = ({ dates, startTime, endTime }) => {
    setCartItems(prev => prev.map(ci =>
      ci.id === editItem.id ? { ...ci, dates, startTime, endTime, edited: true } : ci
    ));
    setIsBookNowModalOpen(false);
    setEditItem(null);
  };

  // ------------------ Render Functions -------------------
  const renderCartItem = (item) => (
    <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <div className="text-sm text-gray-500">{item.vendor}</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-gray-900">${item.price}</span>
        {activeTab === 'requests' && item.type === 'simple' && !item.edited && (
          <button onClick={() => handleEditClick(item)} className="px-4 py-2 border btn-primary-mobile rounded-lg text-sm font-medium hover:bg-pink-50">Edit</button>
        )}
        <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
          ✕
        </button>
      </div>
    </div>
  );

  const renderSaleItem = (item) => (
    <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <div className="text-sm text-gray-500">{item.vendor}</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-gray-900">${item.price * item.quantity}</span>
        <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
          ✕
        </button>
      </div>
    </div>
  );

  // ------------------ Main Render -------------------
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">Manage your event bookings and sale items</p>
      </div>

           {/* Main Tabs: Booking Items / Sale Items */}
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-5xl mx-auto space-x-2 bg-white rounded-xl p-1 shadow-lg">
          <button
            className={`w-1/2 px-10 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
              mainTab === 'booking' 
                ? 'btn-primary-mobile text-white shadow-lg' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setMainTab('booking')}
          >
            Booking Items
          </button>
          <button
            className={`w-1/2 px-10 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
              mainTab === 'sale' 
                ? 'btn-primary-mobile text-white shadow-lg' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setMainTab('sale')}
          >
            Sale Items
          </button>
        </div>
      </div>
      {/* Book Items UI */}
      {mainTab === 'booking' && (
        <>
          {/* Inner Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-xl p-1 shadow-lg inline-flex">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? 'btn-primary-mobile text-white shadow-lg' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items + Summary */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="col-span-2">
              {currentItems.length > 0 ? currentItems.map(renderCartItem) : <p className="text-center text-gray-500">No items</p>}
            </div>
            {currentItems.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
                  {activeTab === 'accepted' && (
                    <>
                      <div className="flex justify-between"><span>Security Fee</span><span>${securityFee}</span></div>
                      <div className="flex justify-between"><span>Kilometer Fee</span><span>${kilometerFee}</span></div>
                    </>
                  )}
                  <div className="flex justify-between"><span>Service Charges</span><span>${serviceCharges}</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold"><span>Total</span><span>${total}</span></div>
                </div>
                <button className="w-full mt-4 py-3 btn-primary-mobile text-white rounded-2xl font-medium hover:shadow-lg">
                  {activeTab === 'accepted' ? 'Process to Checkout' : 'Send Booking Request'}
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Sale Items UI */}
      {mainTab === 'sale' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="col-span-2">
            {saleItems.length > 0 ? saleItems.map(renderSaleItem) : <p className="text-center text-gray-500">No sale items</p>}
          </div>
          {saleItems.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>${saleSubtotal}</span></div>
                <div className="flex justify-between"><span>Security Fee</span><span>${saleSecurityFee}</span></div>
                <div className="flex justify-between"><span>Kilometer Fee</span><span>${saleKilometerFee}</span></div>
                <div className="flex justify-between"><span>Service Charges</span><span>${saleServiceCharges}</span></div>
                <div className="border-t pt-2 flex justify-between font-bold"><span>Total</span><span>${saleTotal}</span></div>
              </div>
              <button className="w-full mt-4 py-3 btn-primary-mobile text-white rounded-2xl font-medium hover:shadow-lg">
                Pay Now
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      <BookNowModal
        isOpen={isBookNowModalOpen}
        onClose={() => { setIsBookNowModalOpen(false); setEditItem(null); }}
        onSuccess={() => setIsBookNowModalOpen(false)}
        selectedDates={[]}
        editMode={!!editItem}
        item={editItem}
        onSaveEdit={handleSaveEdit}
      />
    </div>
  );
};

export default AddToCart;
