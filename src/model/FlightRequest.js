class FlightRequest{
    
      static flight  = {
        adults: 1,
        cabin: "Economy",
        children: 0,
        infants: 0,
      }

      static multiCity = {
          destinations: [],
          adults: 1,
          cabin: "Economy",
          children: 0,
          infants: 0,
          with_non_stops: false,
          with_markup: false
      }


      static bookFlight = {
        passengers: [],
        contact_first_name: null,
        contact_last_name: null,
        contact_email: null,
        contact_phone: null
    }
 

}

export default FlightRequest