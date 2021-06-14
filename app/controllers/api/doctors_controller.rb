class Api::DoctorsController < ApplicationController
    def index
        render json: Doctor.all
       end
    
       def show
        @doctor = Doctor.find(params[:id])
        render json: @doctor
       end
end
