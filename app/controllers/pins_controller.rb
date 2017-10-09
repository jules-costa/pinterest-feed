class PinsController < ApplicationController
  def index
    if params["num"]
      @pins = Pin.all.sample(params["num"].to_i)
    else
      @pins = Pin.all
    end
  end
end
