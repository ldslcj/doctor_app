class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  def self.all_formated
      return self.all.map do |appt|
         {
          id: appt.id, 
          doctor_name: appt.doctor.name,
          practice: appt.doctor.practice,
          patient_name: appt.patient.name,
          doctor_id: appt.doctor.id,
          patient_id: appt.patient.id,
          date: appt.date.strftime("%a %m-%d-%Y %T")
         }
      end
  end
end
