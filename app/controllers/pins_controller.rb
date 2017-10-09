class PinsController < ApplicationController
  def index
    if params["num"]
      @pins = Pin.all.sample(params["num"])
    else
      @pins = Pin.all
    end
  end

  # def more
  #   @pins = Pin.all.sample(3)
  #   render :index
  # end
end
