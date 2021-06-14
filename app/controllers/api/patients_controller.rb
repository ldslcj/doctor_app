class Api::PatientsController < ApplicationController
   def index
    render json: Patient.all
   end

   def show
    @patient = Patient.find(params[:id])
    render json: @patient
   end
end
