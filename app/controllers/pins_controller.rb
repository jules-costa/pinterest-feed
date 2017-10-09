class PinsController < ApplicationController
  def index
    # debugger
    if params["num"]
      @pins = Pin.all.sample(params["num"].to_i)
    else
      @pins = Pin.all
    end
  end
end
