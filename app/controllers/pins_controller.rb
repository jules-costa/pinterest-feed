class PinsController < ApplicationController
  def index
    @pins = Pin.all
  end

  def more
    @pins = Pin.all.sample(3)
    render :index
  end
end
