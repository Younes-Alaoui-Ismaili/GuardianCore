import React, { useState } from 'react';
import { Plane, Hotel, Car, Calendar, Users, Search, Menu, X, ArrowRight, Globe, Bell, User } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('return');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Plane className="h-8 w-8 text-[#0770e3]" />
                <span className="ml-2 text-xl font-bold text-[#0770e3]">FlightWise</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                <NavLink active={activeTab === 'flights'} onClick={() => setActiveTab('flights')}>
                  <Plane className="h-5 w-5" />
                  Flights
                </NavLink>
                <NavLink active={activeTab === 'hotels'} onClick={() => setActiveTab('hotels')}>
                  <Hotel className="h-5 w-5" />
                  Hotels
                </NavLink>
                <NavLink active={activeTab === 'cars'} onClick={() => setActiveTab('cars')}>
                  <Car className="h-5 w-5" />
                  Car Rental
                </NavLink>
              </nav>
            </div>

            {/* Desktop Right Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Globe className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink active={activeTab === 'flights'} onClick={() => { setActiveTab('flights'); setIsMenuOpen(false); }}>
              <Plane className="h-5 w-5" />
              Flights
            </MobileNavLink>
            <MobileNavLink active={activeTab === 'hotels'} onClick={() => { setActiveTab('hotels'); setIsMenuOpen(false); }}>
              <Hotel className="h-5 w-5" />
              Hotels
            </MobileNavLink>
            <MobileNavLink active={activeTab === 'cars'} onClick={() => { setActiveTab('cars'); setIsMenuOpen(false); }}>
              <Car className="h-5 w-5" />
              Car Rental
            </MobileNavLink>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0770e3] to-[#00a698] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Search flights with FlightWise</h1>
          <p className="text-lg opacity-90">Compare and book flights with hundreds of airlines</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Trip Type Selector */}
          <div className="flex space-x-4 mb-6">
            <TripTypeButton
              active={tripType === 'return'}
              onClick={() => setTripType('return')}
            >
              Round Trip
            </TripTypeButton>
            <TripTypeButton
              active={tripType === 'oneway'}
              onClick={() => setTripType('oneway')}
            >
              One Way
            </TripTypeButton>
            <TripTypeButton
              active={tripType === 'multi'}
              onClick={() => setTripType('multi')}
            >
              Multi-City
            </TripTypeButton>
          </div>

          {/* Search Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">From</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0770e3] focus:border-[#0770e3]"
                    placeholder="Country, city or airport"
                  />
                  <Plane className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">To</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0770e3] focus:border-[#0770e3]"
                    placeholder="Country, city or airport"
                  />
                  <ArrowRight className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Depart - Return</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0770e3] focus:border-[#0770e3]"
                    placeholder="Select dates"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Cabin Class & Travelers</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0770e3] focus:border-[#0770e3]"
                    placeholder="1 adult, Economy"
                  />
                  <Users className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Search Options */}
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-[#0770e3] focus:ring-[#0770e3]" />
                <span className="text-sm text-gray-700">Direct flights only</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-[#0770e3] focus:ring-[#0770e3]" />
                <span className="text-sm text-gray-700">Add nearby airports</span>
              </label>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#0770e3] text-white font-medium rounded-lg hover:bg-[#0761c7] focus:outline-none focus:ring-2 focus:ring-[#0770e3] focus:ring-offset-2 transition-colors"
            >
              <Search className="inline-block h-5 w-5 mr-2" />
              Search flights
            </button>
          </form>
        </div>

        {/* Popular Destinations */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                city: 'Paris',
                country: 'France',
                price: 'from $499',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
              },
              {
                city: 'Tokyo',
                country: 'Japan',
                price: 'from $899',
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80'
              },
              {
                city: 'New York',
                country: 'USA',
                price: 'from $299',
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80'
              }
            ].map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{destination.city}</h3>
                      <p className="text-sm mb-1">{destination.country}</p>
                      <p className="text-sm font-semibold text-white/90">{destination.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Navigation Components
function NavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'text-[#0770e3] bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
}

function MobileNavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'text-[#0770e3] bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
}

function TripTypeButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-[#0770e3] text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}

export default App;