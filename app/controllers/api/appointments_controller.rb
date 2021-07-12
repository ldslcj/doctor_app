class Api::AppointmentsController < ApplicationController
    before_action :set_appointment, only: [:show, :update, :destroy]
    def index
    render json: Appointment.all_formated
    end

    def show
    render json: @appointment
    end

    def create
    @appointment = Appointment.new(appointment_params)
    if( @appointment.save)
        render json: @appointment
    else
        render json: {errors: @appointment.errors}, status: :unprocessable_entity
    end 
    end

    def update
    if(@appointment.update(appointment_params))
        render json: @appointment
    else
        render json: {errors: @appointment.errors}, status: :unprocessable_entity
    end 
    end

    def destroy
    @appointment.destroy
    render json: @appointment
    end
    

    private 

    def set_appointment
    @appointment = Appointment.find(params[:id])
    end 

    
    def appointment_params
        params.require(:appointment).permit(:doctor_id, :patient_id, :date)
    end

end
