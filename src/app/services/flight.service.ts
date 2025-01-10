getFlightBookings() {
  return this.http.get<any[]>('your-api-endpoint').pipe(
    tap(response => console.log('Service Response:', response))
  );
} 