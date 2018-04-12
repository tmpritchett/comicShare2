class CreateComics < ActiveRecord::Migration[5.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :description
      t.string :photo_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
