class Trip < ApplicationRecord
  validates :trip_date, :home_state, :trip_count, presence: true
end
