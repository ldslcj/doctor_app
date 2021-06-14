class Api::AppointmentsController < ApplicationController
       def index
        render json: Appointment.all_formated
       end
    
       def show
        @appointment = Appointment.find(params[:id])
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
        @appointment = Appointment.find(params[:id])
        if(@appointment.update(appointment_params))
            render json: @appointment
        else
            render json: {errors: @appointment.errors}, status: :unprocessable_entity
        end 
       end

       private 
       
       def appointment_params
         params.require(:appointment).permit(:doctor_id, :patient_id, :date)
       end

end
