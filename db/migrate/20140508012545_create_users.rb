class CreateUsers < ActiveRecord::Migration
  def change
      create_table :users do |t|
      t.text :username
      t.text :password_hash
      t.timestamps
    end
  end
end
