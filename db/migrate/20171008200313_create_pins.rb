class CreatePins < ActiveRecord::Migration[5.1]
  def change
    create_table :pins do |t|
      t.json 'payLoad'
      t.timestamps
    end
  end
end
