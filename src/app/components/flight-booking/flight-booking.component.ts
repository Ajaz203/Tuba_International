currentBooking = {
  fromLocation: '',
  toLocation: '',
  departureDate: '',
  departureTime: '10:00',
  arrivalTime: '12:00',
  passengers: 1,
  baseFare: 4000,
  taxes: 1000,
  travel_insurance: false,
  airport_pickup: false,
  totalAmount: 5000,
  duration: '2h 00m'
};

// Update this whenever form values change
updateBookingSummary() {
  this.currentBooking = {
    ...this.currentBooking,
    fromLocation: this.flightForm.get('fromLocation').value,
    toLocation: this.flightForm.get('toLocation').value,
    departureDate: this.flightForm.get('departureDate').value,
    passengers: this.flightForm.get('passengers').value,
    travel_insurance: this.flightForm.get('travel_insurance').value,
    airport_pickup: this.flightForm.get('airport_pickup').value,
  };
} 