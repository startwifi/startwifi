class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.references :owner
      t.boolean :active, default: true
      t.string :name

      t.timestamps
    end
  end
end
