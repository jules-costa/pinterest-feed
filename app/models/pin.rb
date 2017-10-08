class Pin < ApplicationRecord
  validates :payLoad, presence: true
end
