class Api::DoctorsController < ApplicationController
    before_action :set_doctor, only: [:show, :update, :destroy]
    def index
    render json: Doctor.all
    end

    def show
    @doctor = Doctor.find(params[:id])
    render json: @doctor
    end

    def create
    @doctor = Doctor.new(doctor_params)
    if(@doctor.save)
        render json: @doctor
    else
        render json: {errors: @doctor.errors}, status: :unprocessable_entity
    end 
    end

    def update
    if(@doctor.update(doctor_params))
        render json: @doctor
    else
        render json: {errors: @doctor.errors}, status: :unprocessable_entity
    end 
    end

    def destroy
    @doctor.destroy
    render json: @doctor
    end

    private

    def set_doctor
    @doctor = Doctor.find(params[:id])
    end 
            
    def doctor_params
    params.require(:doctor).permit(:id, :name, :practice, :rating)
    end

end
                                                                    