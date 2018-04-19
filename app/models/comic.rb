class Comic < ApplicationRecord
  belongs_to :user
end
has_attached_file :image

