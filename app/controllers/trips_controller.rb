class TripsController < ApplicationController
  # GET /trips
  def index
    start_date = request.params["start_date"]
    end_date = request.params["end_date"]
    states = request.params["states"]
    query = Trip

    if states
      query = query.where(home_state: states.split(","))
    end
    if start_date and end_date
      query = query.where(trip_date: Date.parse(start_date)..Date.parse(end_date))
    elsif start_date
      query = query.where(trip_date: Date.parse(start_date)..)
    elsif end_date
      query = query.white(trip_date: ..Date.parse(end_date))
    end

    @trips = query.order(trip_date: :asc).all

    render json: @trips
  end
end
