class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.timestamp :trip_date
      t.string :home_state
      t.integer :trip_count
    end

    add_index :trips, :home_state
    add_index :trips, :trip_date
  end
end
