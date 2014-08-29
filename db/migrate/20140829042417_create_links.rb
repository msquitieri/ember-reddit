class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :link
      t.integer :votes

      t.timestamps
    end
  end
end
