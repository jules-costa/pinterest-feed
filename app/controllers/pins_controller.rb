class PinsController < ApplicationController
  def index
      @pins = Pin.all
  end

  def more
    # debugger
    @pins = Pin.all.sample(15)
    render :index
  end
end
